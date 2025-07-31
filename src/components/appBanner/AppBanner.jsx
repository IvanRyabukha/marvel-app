import "./appBanner.scss";
import avangers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

const AppBanner = () => {
  return (
    <div className="app__banner">
      <img src={avangers} alt="Avangers" />
      <div className="app__banner-text">
        New comics every week!<br/>
        Stay tuned!
      </div>
      <img src={avengersLogo} alt="Avengers logo" />
    </div>
  );
};

export default AppBanner;
