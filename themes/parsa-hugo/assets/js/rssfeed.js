const currentChannelId = 'UCkgY5iy0Y4SqQustDKlee7g';
const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';
    const Videos = [];
    const SearchError="";
   const ChannelName ="";
const Search = () => {
    
    return (
        <div>
            <div className="search">
                <input type="text" onChange={event => setChannelId(event.target.value)} placeholder="Enter your favourite channel ID" />
                <button disabled={!channelId.length} onClick={() => props.setCurrentChannelId(channelId)}>Get videos</button>
            </div>
        </div>
    );
}
const Video = () => (
    <div className="videos__item">
        <div className="video__image">
            <a target="_blank" href={props.video.link}>
                <img src={`https://i4.ytimg.com/vi/${props.video.guid.split(':')[2]}/mqdefault.jpg`} />
            </a>
        </div>
        <div className="video__footer">
            <p>{props.video.title}</p>
        </div>
    </div>
);





 function App() {
   
    

    

    () => {
        (async () => {
            if (currentChannelId) {
                try {
                    const data = await fetch(`${baseUrl}${currentChannelId}`).then(response => response.json());
                    if (!data.items) {
                        throw new Error();
                    }

                    Videos = data.items;
                    ChannelName=data.items[0].author;
                    SearchError=''; // Reset the error if a successful request is received

                } catch (error) {
                    console.log(error);
                    SearchError=`Couldn't retrieve videos, check your channel ID.`; // Set the error state if an error occurrs
                }
            }
        })();
    }, [currentChannelId]);

    return (
        <div className="app-container">
            <h1>Latest YouTube Videos</h1>
            <Search CurrentChannelId={(id) =>  CurrentChannelId(id)}/>
            <div className="search__errors">
                {searchError} 
            </div>
            {channelName && <h2>Videos from {channelName}</h2>}
            <div className="videos">
                {videos.map(video => <Video key={video.guid} video={video} />)}
            </div>
        </div>
    );
};