import "./index.css";

import MainInfo from "./MainInfo";

export default function AllBlock() {
  return (
    <div>
      <div className="AllBlock">
        <MainInfo city="" />
      </div>
      <div className="sing">
        <a
          href="https://github.com/anna-podobrii/weather-react.git"
          className="open-code"
        >
          Open-source code{` `}
        </a>
        by Hanna Podobrii
      </div>
    </div>
  );
}
