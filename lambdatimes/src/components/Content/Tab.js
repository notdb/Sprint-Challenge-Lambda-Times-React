import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let tab = props.tab;
  let testName = "";
  if (props.tab == props.selectedTab) {
    testName = "tab active-tab";
  } else {
    testName = "tab";
  }

  return (
    <div
      className={testName}
      onClick={tab => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
           you'll need to pass the `tab` in as an argument to this handler. */
        props.selectTabHandler(tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.function
};

export default Tab;
