var searchIndex = {};
searchIndex["twitch_client"] = {"doc":"Overview","items":[[3,"TwitchClient","twitch_client","Readonly client for the [Twitch REST API].",null,null],[0,"model","","Twitch return types.",null,null],[0,"image","twitch_client::model","Twitch images.",null,null],[3,"ImageLinks","twitch_client::model::image","Twitch (preview) image links.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"imagelinks"}}],[11,"template","","Example value: \"http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg\"",0,{"inputs":[{"name":"self"}],"output":{"name":"urlstring"}}],[11,"small","","Example value: \"http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-80x45.jpg\"",0,{"inputs":[{"name":"self"}],"output":{"name":"urlstring"}}],[11,"medium","","Example value: \"http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-320x180.jpg\"",0,{"inputs":[{"name":"self"}],"output":{"name":"urlstring"}}],[11,"large","","Example value: \"http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-640x360.jpg\"",0,{"inputs":[{"name":"self"}],"output":{"name":"urlstring"}}],[0,"game","twitch_client::model","Twitch games.",null,null],[3,"TopGames","twitch_client::model::game","Games sorted by number of current viewers on Twitch, most popular first.",null,null],[3,"GameInfo","","Current twitch stats about the game.",null,null],[3,"Game","","Information about the game itself.",null,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"topgames"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"gameinfo"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"game"}}],[11,"total","","Example value: 322",1,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"top","","Example value: See `GameInfo` type.",1,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"viewers","","Example value: 23873",2,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"channels","","Example value: 305",2,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"game","","Example value: See `Game` type.",2,{"inputs":[{"name":"self"}],"output":{"name":"game"}}],[11,"id","","Example value: 32399",3,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"giantbomb_id","","Example value: 36113",3,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"name","","Example value: \"Counter-Strike: Global Offensive\"",3,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"box_image_links","","Example value: See `ImageLinks` type.",3,{"inputs":[{"name":"self"}],"output":{"name":"imagelinks"}}],[11,"logo_image_links","","Example value: See `ImageLinks` type.",3,{"inputs":[{"name":"self"}],"output":{"name":"imagelinks"}}],[0,"ingest","twitch_client::model","Twitch ingests.",null,null],[3,"Ingests","twitch_client::model::ingest","List of ingests.",null,null],[3,"Ingest","","Ingest point.",null,null],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"ingests"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"ingest"}}],[11,"ingests","","Example value: See `Ingest` type.",4,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"name","","Example value: \"EU: Amsterdam, NL\"",5,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"availability","","Example value: 1.0",5,{"inputs":[{"name":"self"}],"output":{"name":"f64"}}],[11,"id","","Example value: 24",5,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"default","","Example value: false",5,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"url_template","","Example value: \"rtmp://live-ams.twitch.tv/app/{stream_key}\"",5,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[0,"root","twitch_client::model","Top level Twitch models and authorization status.",null,null],[3,"BasicInfo","twitch_client::model::root","Basic information about the API and authentication status.",null,null],[3,"Token","","Authentication token.",null,null],[3,"Authorization","","Authorization information.",null,null],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"basicinfo"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"token"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"authorization"}}],[11,"token","","Example value: See `Token` type.",6,{"inputs":[{"name":"self"}],"output":{"name":"token"}}],[11,"valid","","Example value: true",7,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"user_name","","Example value: \"test_user1\"",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"authorization","","Example value: See `Authorization` type.",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"scopes","","Example values: [\"user_read\", \"channel_read\", \"channel_commercial\", \"user_read\"]",8,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"created_at","","Example value: \"2012-05-08T21:55:12Z\"",8,{"inputs":[{"name":"self"}],"output":{"name":"datestring"}}],[11,"updated_at","","Example value: \"2012-05-17T21:32:13Z\"",8,{"inputs":[{"name":"self"}],"output":{"name":"datestring"}}],[0,"stream","twitch_client::model","Twitch streams.",null,null],[3,"Streams","twitch_client::model::stream","Streams that are queried by a number of parameters sorted by number of viewers descending.",null,null],[3,"FeaturedStreams","","Featured (promoted) streams.",null,null],[3,"ChannelStream","","Twitch stream information of a specific channel.",null,null],[3,"StreamsSummary","","Summary of current streams.",null,null],[3,"FeaturedStream","","Featured (promoted) stream.",null,null],[3,"Stream","","Basic Stream type.",null,null],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"streams"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"featuredstreams"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"channelstream"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"self"}],"output":{"name":"streamssummary"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"featuredstream"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"stream"}}],[11,"total","","Example value: 12345",9,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"streams","","Example value: See `Stream` type.",9,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"featured","","Example value: See `FeaturedStream` type.",10,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"stream","","Example value: See `Stream` type.",11,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"viewers","","Example value: 194774",12,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"channels","","Example value: 4144",12,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"text","","Example value: \"<p>some html to describe this featured stream</p>\"",13,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"image","","Example value: \"http://s.jtvnw.net/jtv_user_pictures/hosted_images/TwitchPartnerSpotlight.png\"",13,{"inputs":[{"name":"self"}],"output":{"name":"urlstring"}}],[11,"title","","Example value: \"Twitch Partner Spotlight\"",13,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"sponsored","","Example value: false",13,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"priority","","Example value: 3",13,{"inputs":[{"name":"self"}],"output":{"name":"u8"}}],[11,"scheduled","","Example value: true",13,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"stream","","Example value: See `Stream` type.",13,{"inputs":[{"name":"self"}],"output":{"name":"stream"}}],[11,"id","","Example value: 4989654544",14,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"game","","Example value: \"StarCraft II: Heart of the Swarm\"",14,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"viewers","","Example value: 2123",14,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"average_fps","","Example value: 29.9880749574",14,{"inputs":[{"name":"self"}],"output":{"name":"f64"}}],[11,"delay","","Example value: 0",14,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"video_height","","Example value: 720",14,{"inputs":[{"name":"self"}],"output":{"name":"u16"}}],[11,"is_playlist","","Example value: false",14,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"created_at","","Example value: \"2015-02-12T04:42:31Z\"",14,{"inputs":[{"name":"self"}],"output":{"name":"datestring"}}],[11,"channel","","Example value: See `Channel` type.",14,{"inputs":[{"name":"self"}],"output":{"name":"channel"}}],[11,"preview","","Example value: See `ImageLinks` type.",14,{"inputs":[{"name":"self"}],"output":{"name":"imagelinks"}}],[0,"channel","twitch_client::model","Twitch channels.",null,null],[3,"Channel","twitch_client::model::channel","Channel information.",null,null],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",15,{"inputs":[{"name":"self"}],"output":{"name":"channel"}}],[11,"id","","Example value: 12345",15,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"name","","Example value: \"test_channel\"",15,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"display_name","","Example value: \"test_channel\"",15,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"game","","Example value: \"Gaming Talk Shows\"",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"status","","Example value: \"test status\"",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"mature","","Example value: false",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"delay","","Example value: 0",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"language","","Example value: \"en\"",15,{"inputs":[{"name":"self"}],"output":{"name":"localestring"}}],[11,"broadcaster_language","","Example value: \"en\"",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"created_at","","Example value: \"2007-05-22T10:39:54Z\"",15,{"inputs":[{"name":"self"}],"output":{"name":"datestring"}}],[11,"updated_at","","Example value: \"2015-02-12T04:15:49Z\"",15,{"inputs":[{"name":"self"}],"output":{"name":"datestring"}}],[11,"logo","","Example value: \"http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg\"",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"banner","","Example value: \"http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_header_image-08dd874c17f39837-640x125.png\"",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"video_banner","","Example value: \"http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_offline_image-b314c834d210dc1a-640x360.png\"",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"background","","Example value: `None`",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"profile_banner","","Example value: \"http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_banner-6936c61353e4aeed-480.png\"",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"profile_banner_background_color","","Example value: \"null\"",15,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"partner","","Example value: true",15,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"url","","Example value: \"http://www.twitch.tv/test_channel\"",15,{"inputs":[{"name":"self"}],"output":{"name":"urlstring"}}],[11,"views","","Example value: 49144894",15,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"followers","","Example value: 215780",15,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[6,"UrlString","twitch_client::model","Strings that contain a hyperlink (e.g.: \"http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg\").",null,null],[6,"DateString","","Strings that contain a date in ISO 8601 format (e.g.: \"2015-02-12T04:42:31Z\").",null,null],[6,"LocaleString","","Strings that contain a locale in ISO 639-1 codes format (2 letter locales e.g.: \"en\").",null,null],[0,"error","twitch_client","Error and Result module.",null,null],[4,"Error","twitch_client::error","Twitch Client error.",null,null],[13,"Http","","An http error while communicating with the twitch server",16,null],[13,"Io","","An `io::Error` that occurred while trying to read or write to a network stream.",16,null],[13,"Hyper","","An `hyper::error::Error` that occurred while trying to use the hyper library.",16,null],[13,"Tls","","An `hyper::error::Error` that occurred while trying to use the hyper library.",16,null],[13,"Deserialization","","An `serde_json::error::Error` that occurred while trying to deserialize a json response string.",16,null],[6,"Result","","Result type from methods that can have Twitch Client Errors.",null,null],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",16,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",16,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"from","","",16,{"inputs":[{"name":"ioerror"}],"output":{"name":"error"}}],[11,"from","","",16,{"inputs":[{"name":"hypererror"}],"output":{"name":"error"}}],[11,"from","","",16,{"inputs":[{"name":"hypernativetlsservererror"}],"output":{"name":"error"}}],[11,"from","","",16,{"inputs":[{"name":"nativetlserror"}],"output":{"name":"error"}}],[11,"from","","",16,{"inputs":[{"name":"jsonerror"}],"output":{"name":"error"}}],[0,"param","twitch_client","Parameters for `TwitchClient` methods.",null,null],[3,"TopGamesParams","twitch_client::param","Parameters for the top games.",null,null],[3,"StreamsParams","","Parameters for the streams.",null,null],[3,"FeaturedStreamsParams","","Parameters for the featured streams.",null,null],[3,"StreamsSummaryParams","","Parameters for the streams summary.",null,null],[4,"StreamType","","`StreamType` for `StreamsParams` to only show streams from a certain type.",null,null],[13,"All","","Show all streams.",17,null],[13,"Playlist","","Show only playlists.",17,null],[13,"Live","","Show only live streams.",17,null],[11,"default","","",18,{"inputs":[],"output":{"name":"topgamesparams"}}],[11,"fmt","","",18,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",18,{"inputs":[{"name":"self"}],"output":{"name":"topgamesparams"}}],[11,"hash","","",18,null],[11,"eq","","",18,{"inputs":[{"name":"self"},{"name":"topgamesparams"}],"output":{"name":"bool"}}],[11,"ne","","",18,{"inputs":[{"name":"self"},{"name":"topgamesparams"}],"output":{"name":"bool"}}],[11,"new","","Constructs a new instance.",18,{"inputs":[],"output":{"name":"topgamesparams"}}],[11,"with_offset","","Offset for pagination.",18,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"topgamesparams"}}],[11,"with_limit","","Maximum number of objects in array.",18,{"inputs":[{"name":"self"},{"name":"u8"}],"output":{"name":"topgamesparams"}}],[11,"fmt","","",17,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",17,{"inputs":[{"name":"self"}],"output":{"name":"streamtype"}}],[11,"hash","","",17,null],[11,"eq","","",17,{"inputs":[{"name":"self"},{"name":"streamtype"}],"output":{"name":"bool"}}],[11,"default","","",19,{"inputs":[],"output":{"name":"streamsparams"}}],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",19,{"inputs":[{"name":"self"}],"output":{"name":"streamsparams"}}],[11,"hash","","",19,null],[11,"eq","","",19,{"inputs":[{"name":"self"},{"name":"streamsparams"}],"output":{"name":"bool"}}],[11,"ne","","",19,{"inputs":[{"name":"self"},{"name":"streamsparams"}],"output":{"name":"bool"}}],[11,"new","","Constructs a new instance.",19,{"inputs":[],"output":{"name":"streamsparams"}}],[11,"with_game","","Streams categorized under game.",19,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"streamsparams"}}],[11,"with_channel","","Streams from a channel. Can be called multiple times to specify a list of channels.",19,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"streamsparams"}}],[11,"with_channels","","Streams from a list of channels. Can be called with an empty Vec to clear the list and use the default again.",19,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"streamsparams"}}],[11,"with_offset","","Offset for pagination.",19,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"streamsparams"}}],[11,"with_limit","","Maximum number of objects in array.",19,{"inputs":[{"name":"self"},{"name":"u8"}],"output":{"name":"streamsparams"}}],[11,"with_client_id","","Only shows streams from applications of `client_id`.",19,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"streamsparams"}}],[11,"with_stream_type","","Only shows streams from a certain type.",19,{"inputs":[{"name":"self"},{"name":"streamtype"}],"output":{"name":"streamsparams"}}],[11,"default","","",20,{"inputs":[],"output":{"name":"featuredstreamsparams"}}],[11,"fmt","","",20,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",20,{"inputs":[{"name":"self"}],"output":{"name":"featuredstreamsparams"}}],[11,"hash","","",20,null],[11,"eq","","",20,{"inputs":[{"name":"self"},{"name":"featuredstreamsparams"}],"output":{"name":"bool"}}],[11,"ne","","",20,{"inputs":[{"name":"self"},{"name":"featuredstreamsparams"}],"output":{"name":"bool"}}],[11,"new","","Constructs a new instance.",20,{"inputs":[],"output":{"name":"featuredstreamsparams"}}],[11,"with_offset","","Offset for pagination.",20,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"featuredstreamsparams"}}],[11,"with_limit","","Maximum number of objects in array.",20,{"inputs":[{"name":"self"},{"name":"u8"}],"output":{"name":"featuredstreamsparams"}}],[11,"default","","",21,{"inputs":[],"output":{"name":"streamssummaryparams"}}],[11,"fmt","","",21,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",21,{"inputs":[{"name":"self"}],"output":{"name":"streamssummaryparams"}}],[11,"hash","","",21,null],[11,"eq","","",21,{"inputs":[{"name":"self"},{"name":"streamssummaryparams"}],"output":{"name":"bool"}}],[11,"ne","","",21,{"inputs":[{"name":"self"},{"name":"streamssummaryparams"}],"output":{"name":"bool"}}],[11,"new","","Constructs a new instance.",21,{"inputs":[],"output":{"name":"streamssummaryparams"}}],[11,"with_game","","Streams categorized under game.",21,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"streamssummaryparams"}}],[11,"new","twitch_client","Constructs a new client instance with a new hyper https client using native tls.",22,{"inputs":[{"name":"s"}],"output":{"name":"result"}}],[11,"with_hyper_client","","Constructs a new client instance using the provided hyper client.",22,{"inputs":[{"name":"s"},{"name":"client"}],"output":{"name":"twitchclient"}}],[11,"top_games","","Get games by number of viewers.",22,{"inputs":[{"name":"self"},{"name":"topgamesparams"}],"output":{"name":"result"}}],[11,"ingests","","Get list of ingests.",22,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"basic_info","","Get top level links object and authorization status.",22,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"stream","","Get stream object.",22,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}],[11,"streams","","Get stream object.",22,{"inputs":[{"name":"self"},{"name":"streamsparams"}],"output":{"name":"result"}}],[11,"featured_streams","","Get a list of featured streams.",22,{"inputs":[{"name":"self"},{"name":"featuredstreamsparams"}],"output":{"name":"result"}}],[11,"streams_summary","","Get a summary of streams.",22,{"inputs":[{"name":"self"},{"name":"streamssummaryparams"}],"output":{"name":"result"}}],[11,"channel","","Get channel object.",22,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}]],"paths":[[3,"ImageLinks"],[3,"TopGames"],[3,"GameInfo"],[3,"Game"],[3,"Ingests"],[3,"Ingest"],[3,"BasicInfo"],[3,"Token"],[3,"Authorization"],[3,"Streams"],[3,"FeaturedStreams"],[3,"ChannelStream"],[3,"StreamsSummary"],[3,"FeaturedStream"],[3,"Stream"],[3,"Channel"],[4,"Error"],[4,"StreamType"],[3,"TopGamesParams"],[3,"StreamsParams"],[3,"FeaturedStreamsParams"],[3,"StreamsSummaryParams"],[3,"TwitchClient"]]};
initSearch(searchIndex);