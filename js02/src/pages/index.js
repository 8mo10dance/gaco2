import React from "react";
import "./styles.scss";

const IndexPage = () => {
  return (
    <div>
      <input id="acd-check1" className="acd-check" type="checkbox" />
      <label className="acd-label" htmlFor="acd-check1">
        クリックで開く1
      </label>
      <div className="acd-content">
        <p>hello.world!</p>
      </div>
    </div>
  );
};

export default IndexPage;
