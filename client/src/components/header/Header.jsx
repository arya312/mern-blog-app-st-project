import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Software Testing Project</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images4.alphacoders.com/125/1254590.jpg"
        alt=""
      />
    </div>
  );
}
