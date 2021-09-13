import React from "react";
import "./title.css";
import Canada from "./images/canada.jpg";
import Media from "react-media";

function Title({ sorting, toggle }) {
  return (
    <>
      <div className="title__div">
        <div className="main__sort">
          <a href="#">
            <p
              onClick={() => {
                sorting();
              }}
            >
              Sort alphabetically
            </p>
          </a>
        </div>
        <div className="main__title">
          <img src={Canada} className="canada__img" />
          <h1>BEST SPORTS BETTING SITES</h1>
          <p className="red__line"></p>
        </div>
        <div className="main__toggleview">
          <a href="#">
            <p>Change View</p>
          </a>
          <label className="switch">
            <input
              type="checkbox"
              onChange={(event) => {
                toggle(event);
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="conditionalSorter">
        <Media
          query="(max-width: 480px)"
          render={() => (
            // <div className="main__sort">
            <a href="#">
              <p
                className="sorter"
                onClick={() => {
                  sorting();
                }}
              >
                Sort alphabetically
              </p>
            </a>
            // </div>
          )}
        />
      </div>
    </>
  );
}

export default Title;
