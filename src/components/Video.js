import "./Video.css";

function Video({ title, channel = "Bill Dost", views, time, verified }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://picsum.photos/160/90" alt="John Chui Mhui" />
        </div>
        <div className="title">{title}</div>
        {/* <div className="channel">
          {channel} {verified ? "✔️" : null}
        </div> */}
        <div className="channel">
          {channel} {verified && "✔️"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
