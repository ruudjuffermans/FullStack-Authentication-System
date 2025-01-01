import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, size = "inherit", color = "inherit", style = {} }) => {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, color, ...style }}
    >
      {name}
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired, 
  size: PropTypes.string,            
  color: PropTypes.string,           
  style: PropTypes.object            
};

export default Icon;