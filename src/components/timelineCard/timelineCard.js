import React from "react";
import "./timelineCard.css";

import PropTypes from "prop-types";

export function TimelineCard({ title, image, description }) {
  return (
    <div className="timeCard">
      <div className="timeContent">
        <div className="experienceHead">
          <div className="experienceTitle">{title}</div>
          <img className="experienceImage" src={image} />
        </div>
        <div className="xpContentContainer">
          <div className="descriptionHeader">Description:</div>
          <div className="experienceContent">{description}</div>
        </div>
      </div>
    </div>
  );
}

TimelineCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};
