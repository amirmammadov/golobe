import "../../sass/shared/_hero.scss";
import "../../sass/pages/_flights.scss";

import Travel from "../../shared/Travel/Travel";
import ImgSlider from "../../shared/ImgSlider/ImgSlider";

import SearchBox from "../../shared/SearchBox/SearchBox";

import { useTranslation } from "react-i18next";

const Flights = () => {
  const t = useTranslation("global")[0];

  return (
    <main className="flights">
      <div className="hero">
        <div className="hero__content">
          <div className="hero__content__info">
            <div className="hero__content__info__title">
              {t("flights.hero.title")}
            </div>
            <div className="hero__content__info__desc">
              {t("flights.hero.desc")}
            </div>
          </div>
        </div>
        <SearchBox />
      </div>
      <Travel />
      <ImgSlider />
    </main>
  );
};

export default Flights;
