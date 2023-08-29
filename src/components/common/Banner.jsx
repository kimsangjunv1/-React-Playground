import React from "react";
import BannerLogo from "./../../assets/img/main_banner_img.svg";

import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const scroll_progress = () => {
      console.log("나옴");
      window.onscroll = function () {
        createPrograssBar();
      };

      function createPrograssBar() {
        let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        let height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector(".banner_container img").style.transform =
          "translate(0," + scrolled * 10 + "%)";
        // document.getElementsByClassName
      }
    };
    scroll_progress();
  }, []);
  return (
    <div className="banner_container">
      <img src={BannerLogo} alt="#" />
    </div>
  );
};

export default Banner;
