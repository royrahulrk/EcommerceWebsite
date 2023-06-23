import React, { useState } from "react";
import "./MyImage.css"


const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
  <>
      <div className="grid grid-four-column-1">
        {imgs.map((curElm, index) => {
          return (
            <div className="fig-img" key={index}>
              <img
                className="img-sing"
                src={curElm.url}
                alt={curElm.filename}
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </div>
          );
        })}
      </div>

      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </>
  )
};


export default MyImage