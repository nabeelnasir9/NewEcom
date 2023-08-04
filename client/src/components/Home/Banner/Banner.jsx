import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="HeroBanner">
      <div className="content">
        <div className="text_content">
          <h1>SALES</h1>
          <p>
            Remember to adjust the duration and timing function of the
            transition in the CSS code to achieve the desired effect.
          </p>
          <div className="ctas">
          <div className="Banner_ctas">READ MORE</div>
          <div className="Banner_ctas_1">Shop Now</div>
          </div>
        </div>
        <img className="bannerImg" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
