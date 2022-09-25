import "./index.css";

import MainInfo from "./MainInfo";

export default function AllBlock() {
  return (
    <div>
      <div className="AllBlock">
        <MainInfo city="" />
      </div>
      <div className="sing">
        This project was coded by Hanna Podobrii and is
        <a
          href="https://github.com/anna-podobrii/weather-react.git"
          className="open-code"
        >
          {` `}open-source code on GitHub{` `}
        </a>
        and hosted
        <a
          href="https://charming-taiyaki-26b8b7.netlify.app"
          className="open-code"
        >
          {` `}on Netlify{` `}
        </a>
      </div>
    </div>
  );
}
