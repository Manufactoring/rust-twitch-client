use std::collections::BTreeMap;

pub mod image;
pub mod game;
pub mod ingest;
pub mod root;
pub mod stream;
pub mod channel;


/// Strings that contain a hyperlink (e.g.: "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg")
/// Is subject to be changed to a real hyperlink type in the future
pub type UrlString = String;

/// Strings that contain a date in ISO 8601 UTC format (e.g.: "2015-02-12T04:42:31Z")
/// Is subject to be changed to a real datetime type in the future
pub type DateString = String;

/// Strings that contain a locale in ISO 639-1 codes format (2 letter locales e.g.: "en")
/// Is subject to be changed to a real locale type in the future
pub type LocaleString = String;


pub trait TwitchLinks {
    fn links(&self) -> &BTreeMap<String, String>;

    fn get_expected_link(&self, link_key: &str) -> &String {
        match self.links().get(link_key) {
            Some(link) => link,
            None => {
                panic!("Expected links to contain {} but got: {:?}", link_key, self.links());
            }
        }
    }
}
