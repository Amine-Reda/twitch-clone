import React from "react";
import "./Sidebar.css";
import Channel from "./Channel";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLWED CHANNELS</h5>
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/c829484a-c662-40de-a243-00ec253cabbb-profile_image-300x300.png"
          name="Clix"
          followers="800k"
        />
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/c829484a-c662-40de-a243-00ec253cabbb-profile_image-300x300.png"
          name="Clix"
          followers="800k"
        />
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/c829484a-c662-40de-a243-00ec253cabbb-profile_image-300x300.png"
          name="Clix"
          followers="800k"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/c829484a-c662-40de-a243-00ec253cabbb-profile_image-300x300.png"
          name="Clix"
          followers="800k"
        />
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/c829484a-c662-40de-a243-00ec253cabbb-profile_image-300x300.png"
          name="Clix"
          followers="800k"
        />{" "}
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/c829484a-c662-40de-a243-00ec253cabbb-profile_image-300x300.png"
          name="Clix"
          followers="800k"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
