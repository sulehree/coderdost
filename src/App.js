import "./App.css";
import Video from "./components/Video";

function App() {
  let obj = {
    title: "React JS tutorial",
    views: "999K",
    time: "1 year ago",
    channel: "Bill Dost",
    verified: true,
  };
  return (
    <div className="App">
      <div>
        <h1 className="title">Videos</h1>
      </div>
      <Video {...obj}></Video>
      <Video
        title="Node JS tutorial"
        views="100K"
        time="1 month ago"
        verified={false}
      ></Video>
      <Video
        verified={true}
        title="Mongo DB tutorial"
        views="1M"
        time="1 month ago"
        channel="Bill Dost"
      ></Video>
    </div>
  );
}

export default App;
