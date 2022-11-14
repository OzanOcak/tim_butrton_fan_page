import "./intro.css";
import Me from "../../img/me.png";
const Intro = () => {
  return (
    <div className="info">
      <div className="info-left">
        <div className="info-left-wrapper">
          <h2 className="info-intro">Hello, this is a page of</h2>
          <h1 className="info-name">Tim Burton</h1>
          <div className="info-title">
            <div className="info-title-wrapper">
              <div className="info-title-item">film director</div>
              <div className="info-title-item">artist</div>
              <div className="info-title-item">producer</div>
              <div className="info-title-item">animator</div>
              <div className="info-title-item">puppeteer</div>
              <div className="info-title-item">actor</div>
            </div>
          </div>
          <p className="info-desc">
            Director, producer and screenwriter Tim Burton is known for such
            films as 'Beetlejuice' and 'Edward Scissorhands,' which blend themes
            of fantasy and horror.
          </p>
        </div>
      </div>
      <div className="info-right">
        <div className="info-bg"></div>
        <img src={Me} width={150} className="info-img" alt="" />
      </div>
    </div>
  );
};
export default Intro;
