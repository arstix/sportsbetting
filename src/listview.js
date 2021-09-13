import React, { useState, useEffect } from "react";
import "./listview.css";
import StarIcon from "@material-ui/icons/Star";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Listview({ data, displayMode }) {
  const [dataToDisplay, setDataToDisplay] = useState(data);

  useEffect(() => {
    setDataToDisplay(data); //cakked everytime data is changed.
    console.log(displayMode);
  }, [data, displayMode]);

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;
  return (
    <div className="listview__maindiv">
      <ConditionalWrapper
        condition={displayMode}
        wrapper={(children) => <div className="carousel_view">{children}</div>}
      >
        {dataToDisplay.map((obj) => (
          <div
            className={displayMode ? "carousel_listview" : "div__listview"}
            key={obj.index}
          >
            <div className="listview__index">
              <h2>{obj.index}</h2>
            </div>
            <div
              className="listview__image"
              style={{ "justify-content": displayMode ? "center" : "none" }}
            >
              <img className="imageSpecs" src={obj.logo} />
            </div>
            <div
              className="listview__starratings"
              style={{
                "flex-direction": displayMode ? "column" : "row",
                "margin-top": displayMode ? "14px" : "0",
              }}
            >
              <div className="stars">
                <a href="#">
                  <StarIcon style={{ color: "#FFDF00" }} />
                </a>
                <a href="#">
                  <StarIcon style={{ color: "#FFDF00" }} />
                </a>
                <a href="#">
                  <StarIcon style={{ color: "#FFDF00" }} />
                </a>
                <a href="#">
                  <StarIcon style={{ color: "#FFDF00" }} />
                </a>
                <a href="#">
                  <StarIcon style={{ color: "#FFDF00" }} />
                </a>
              </div>
              <ConditionalWrapper
                condition={displayMode}
                wrapper={(children) => (
                  <div className="review_tag">{children}</div>
                )}
              >
                <a
                  href="#"
                  className="readReview"
                  style={{
                    color: "#535353",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="review"
                    style={{
                      color: "#535353",
                    }}
                  >
                    Read Review
                  </p>
                </a>
              </ConditionalWrapper>
            </div>
            <div className="listview__description">
              <p
                className="description"
                style={{ color: "blue", "font-weight": "bold" }}
              >
                -{obj.description}
              </p>
            </div>
            <div
              className="listview__button"
              style={{ "justify-content": displayMode ? "center" : "flex-end" }}
            >
              <button>
                <p className="buttonText"> Play Now</p>
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        ))}
      </ConditionalWrapper>
    </div>
  );
}

export default Listview;
