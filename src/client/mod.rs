use hyper;
use serde_json;

pub use self::param::*;
use self::http::TwitchHttpClient;
use error::Result;
use model;

mod param;
mod http;


pub struct TwitchClient {
    http_client: TwitchHttpClient,
}

impl TwitchClient {
    pub fn new() -> TwitchClient {
        TwitchClientBuilder::new().build()
    }
}

pub struct TwitchClientBuilder {
    client_id: Option<String>,
    hyper_client: Option<hyper::Client>,
}

impl TwitchClientBuilder {
    pub fn new() -> TwitchClientBuilder {
        TwitchClientBuilder {
            client_id: None,
            hyper_client: None,
        }
    }

    pub fn client_id(mut self, client_id: String) -> TwitchClientBuilder {
        self.client_id = Some(client_id);
        self
    }

    pub fn hyper_client(mut self, hyper_client: hyper::Client) -> TwitchClientBuilder {
        self.hyper_client = Some(hyper_client);
        self
    }

    pub fn build(self) -> TwitchClient {
        let client = match self.hyper_client {
            Some(client) => client,
            None => hyper::Client::new(),
        };

        TwitchClient {
            http_client: TwitchHttpClient::new(self.client_id, client),
        }
    }
}




impl TwitchClient {
    pub fn top_games(&self, params: &TopGamesParams) -> Result<model::game::TopGamesResponse> {
        let response = try!(self.http_client.get_content_with_params("/games/top", params));
        let top_games_res: model::game::TopGamesResponse = try!(serde_json::from_str(&response));
        Ok(top_games_res)
    }

    pub fn ingests(&self) -> Result<model::ingest::IngestsResponse> {
        let response = try!(self.http_client.get_content("/ingests"));
        let ingests_res: model::ingest::IngestsResponse = try!(serde_json::from_str(&response));
        Ok(ingests_res)
    }

    pub fn basic_info(&self) -> Result<model::root::BasicInfoResponse> {
        let response = try!(self.http_client.get_content("/"));
        let basic_info_res: model::root::BasicInfoResponse = try!(serde_json::from_str(&response));
        Ok(basic_info_res)
    }

    pub fn stream(&self, channel: &str) -> Result<model::stream::StreamResponse> {
        let url = format!("/streams/{}/", channel);
        let response = try!(self.http_client.get_content(&url));
        let stream_res: model::stream::StreamResponse = try!(serde_json::from_str(&response));
        Ok(stream_res)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs::File;
    use std::io::Read;
    use serde_json;

    #[test]
    fn test_top_games_with_default_params() {
        let client = create_test_twitch_client();
        let top_games_res = client.top_games(&TopGamesParams::default()).unwrap();
        assert_eq!(top_games_res.link_self(), "https://api.twitch.tv/kraken/games/top?limit=10&offset=0");
        assert_eq!(top_games_res.link_next(), "https://api.twitch.tv/kraken/games/top?limit=10&offset=10");
        assert!(top_games_res.total() > 0, "top_games_res.total() = {} > 0", top_games_res.total());
        assert_eq!(top_games_res.top().len(), 10);
    }

    #[test]
    fn test_top_games_with_custom_params() {
        let client = create_test_twitch_client();
        let params = TopGamesParamsBuilder::default()
                .offset(0)
                .limit(2)
                .build();
        let top_games_res = client.top_games(&params).unwrap();
        assert_eq!(top_games_res.link_self(), "https://api.twitch.tv/kraken/games/top?limit=2&offset=0");
        assert_eq!(top_games_res.link_next(), "https://api.twitch.tv/kraken/games/top?limit=2&offset=2");
        assert!(top_games_res.total() > 0, "top_games_res.total() = {} > 0", top_games_res.total());
        assert_eq!(top_games_res.top().len(), 2);
    }

    #[test]
    fn test_ingests() {
        let client = create_test_twitch_client();
        let ingests_res = client.ingests().unwrap();
        assert_eq!(ingests_res.link_self(), "https://api.twitch.tv/kraken/ingests");
        assert!(ingests_res.ingests().len() > 0, "ingests_res.ingests().len() = {} > 0", ingests_res.ingests().len());
    }

    #[test]
    fn test_basic_info() {
        let client = create_test_twitch_client();
        let basic_info_res = client.basic_info().unwrap();
        assert_eq!(basic_info_res.link_user(), "https://api.twitch.tv/kraken/user");
        assert_eq!(basic_info_res.link_channel(), "https://api.twitch.tv/kraken/channel");
        assert_eq!(basic_info_res.link_search(), "https://api.twitch.tv/kraken/search");
        assert_eq!(basic_info_res.link_streams(), "https://api.twitch.tv/kraken/streams");
        assert_eq!(basic_info_res.link_ingests(), "https://api.twitch.tv/kraken/ingests");
        assert_eq!(basic_info_res.link_teams(), "https://api.twitch.tv/kraken/teams");
        assert!(basic_info_res.link_users().is_none(), "expecting no link for unauthenticated access");
        assert!(basic_info_res.link_channels().is_none(), "expecting no link for unauthenticated access");
        assert!(basic_info_res.link_chat().is_none(), "expecting no link for unauthenticated access");
        let token = basic_info_res.token();
        assert!(!token.valid(), "expecting invalid token for unauthenticated access");
        assert!(token.user_name().is_none(), "expecting no user name for unauthenticated access");
        assert!(token.authorization().is_none(), "expecting no auth info for unauthenticated access");
    }

    #[test]
    fn test_stream() {
        let client = create_test_twitch_client();
        let stream_res = client.stream("test_channel").unwrap();
        assert_eq!(stream_res.link_self(), "https://api.twitch.tv/kraken/streams/test_channel");
        assert_eq!(stream_res.link_channel(), "https://api.twitch.tv/kraken/channels/test_channel");
        assert!(stream_res.stream().is_none(), "expecting test channel stream to be offline");
    }


    fn create_test_twitch_client() -> TwitchClient {
        let auth = read_auth();
        let twitch_client = TwitchClientBuilder::new()
            .client_id(auth.client_id)
            .build();
        twitch_client
    }

    fn read_auth() -> Auth {
        let mut auth_file = match File::open("twitch_auth.json") {
            Ok(file) => file,
            Err(err) => panic!("
            Tests create a new TwitchClient with info specified in 'twitch_auth.json'.
            As this info should be kept private it is not committed to the vcs.
            You need to create the file in order to run these tests.
            An template named 'twitch_auth_template.json' is provided at the project root.
            Original error: {}
            ", err),
        };
        let mut auth_string = String::new();
        auth_file.read_to_string(&mut auth_string).unwrap();
        let auth: Auth = serde_json::from_str(&auth_string).unwrap();
        auth
    }

    #[derive(Deserialize, Debug)]
    struct Auth {
        name: String,
        client_id: String,
        redirect_uri: Option<String>,
        client_secret: Option<String>,
    }
}
