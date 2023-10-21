import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function FullPageCarousel(props) {
  return (
    <ReactFullpage
      // licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      anchors={["home-page", "about-page", "work-page", "contact-page"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" datatype="home-page">
              {props.home}
              {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button> */}
            </div>
            <div className="section" datatype="about-page">
              <p>Section 2</p>
            </div>
            <div className="section" datatype="work-page">
              <p>Section 3</p>
            </div>
            <div className="section" datatype="contact-page">
              <p>Section 4</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
