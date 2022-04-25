import React from 'react';
import './ProfileCard.css';
import assets from './../assets';
import Divider from './Divider';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src={assets.bgPatternCard}
        className="profile-bg"
        alt="profile card background"
      />
      <div className="personal-details">
        <img src={assets.victor} className="profile-pic" alt="victor" />
        <h1 className="pd-name">
          Victor Crest&nbsp;<span className="pd-age">26</span>
        </h1>
        <p className="pd-city">London</p>
        <Divider />
        <div className="pd-stats">
          <div className="stat-col">
            <p className="stat">80k</p>
            <p className="stat-desc">followers</p>
          </div>
          <div className="stat-col">
            <p className="stat">803k</p>
            <p className="stat-desc">likes</p>
          </div>
          <div className="stat-col">
            <p className="stat">1.4k</p>
            <p className="stat-desc">photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
