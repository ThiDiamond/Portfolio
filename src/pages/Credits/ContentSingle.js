import React from "react";
import { MDBView, MDBCol, MDBMask, MDBCardBody, MDBIcon } from "mdbreact";

const ContentSingle = ({ image, link, title }) => {
  return (
    <MDBCol md="6" xl="5" className="mb-4">
      <MDBView className="overlay rounded z-depth-2" waves>
        <img src={image} alt="" className="img-fluid" />
        <a href={link}>
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>
      <MDBCardBody className="pb-0">
        <a href={link} className="slate-gray-text">
          <h5 className="font-weight-bold mt-2 mb-3 slate-gray-text">
            <MDBIcon far icon="image" className="pr-2" />
            {title}
          </h5>
        </a>
      </MDBCardBody>
    </MDBCol>
  );
};

export default ContentSingle;
