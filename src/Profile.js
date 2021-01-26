import React from "react";
import "./Profile.css";
import RecentItems from "./RecentItems";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/c829484a-c662-40de-a243-00ec253cabbb-profile_image-300x300.png"
          alt=""
        />
        <div className="profile__topLeftDetails">
          <h1>Clix</h1>
          <h3>820K followers</h3>
        </div>
      </div>

      <div className="profile__topRight">
        <i className="fas fa-heart graybg"></i>
        <i className="fas fa-bell graybg"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>

      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="Profile__recent">
        <h2>Recent broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItems
            url={"https://www.youtube.com/embed/tCAt8eEKPDc"}
            title={"Talk Tough 😤 | Clix"}
          />
          <RecentItems
            url={"https://www.youtube.com/embed/tCAt8eEKPDc"}
            title={"Talk Tough 😤 | Clix"}
          />
          <RecentItems
            url={"https://www.youtube.com/embed/tCAt8eEKPDc"}
            title={"Talk Tough 😤 | Clix"}
          />
        </div>
        <div className="profile__recentItemsCategories">
          <h2>CleverProgrammer's recently stramed Categories</h2>
          <img
            src="http://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg"
            alt=""
          />
          <h3>Science & Technology</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
