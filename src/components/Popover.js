import React, { useState } from "react";
import classNames from "classnames";
import "./Popover.css";

const Popover = ({ children, popoverContent }) => {
  const [isOpen, setOpen] = useState(false);

  const onKeyPress = (e) => {
    if (e.keyCode === 0) {
      setOpen(!isOpen);
    }
  };

  return (
    <>
      <span
        className={classNames("popover", { active: isOpen })}
        role="button"
        tabIndex="0"
        onClick={() => setOpen(!isOpen)}
        onKeyPress={onKeyPress}
      >
        {children}
      </span>
      {isOpen && <div className="popover-container">{popoverContent}</div>}
    </>
  );
};

export default Popover;
