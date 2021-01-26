import React from "react";
import "./RecentItem.css";

const RecentItems = ({ url, title }) => {
  return (
    <div className="item">
      <iframe
        width="1280"
        height="720"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="item__details">
        <img src="http://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg"></img>
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>CleverProgrammer</p>
          <p>Science & Technology</p>
        </div>
      </div>
    </div>
  );
};

export default RecentItems;
