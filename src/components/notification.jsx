import React from "react";
import PropTypes from "prop-types";

const Notification = ({
  icon,
  message,
  backgroundColor = "#51C96D",
  textColor = "#ffffff"
}) => {
  return (
    <div
      className={`flex  gap-2.5 rounded py-[18px] px-4 text-white`}
      style={{ backgroundColor, color: textColor }}
    >
      <span className="relative top-0.5">{icon}</span>
      <span className="flex-1">{message}</span>
    </div>
  );
};

Notification.propTypes = {
  icon: PropTypes.any.isRequired,
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Notification;
