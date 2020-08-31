import React from "react";
import { MDBRow } from "mdbreact";
import ContentSingle from "./ContentSingle";
import galaxy from "../../assets/galaxy.jpg";
import code from "../../assets/code.jpg";
import python from "../../assets/python.jpg";
const ContentList = () => {
  return (
    <div className="text-center my-5">
      <MDBRow className="d-flex justify-content-center">
        <ContentSingle
          image={galaxy}
          title="Photo by Jeremy Thomas on Unsplash"
          link="https://unsplash.com/photos/4dpAqfTbvKA"
        />
        <ContentSingle
          title="Photo by David Clode on Unsplash"
          link="https://unsplash.com/photos/cxMJYcuCLEA"
          image={python}
        />
        <ContentSingle
          title="Photo by Luca Bravo on Unsplash"
          link="https://unsplash.com/photos/XJXWbfSo2f0"
          image={code}
        />
      </MDBRow>
    </div>
  );
};

export default ContentList;
