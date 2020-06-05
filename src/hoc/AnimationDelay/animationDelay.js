import React, { useEffect, useState } from "react";

import classes from './animationDelay.css'

const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div className={classes.center}
        style={{ animation: `${show ? classes.fadeIn : classes.fadeOut} ${show ? '2.5s' : '0.25s' }` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;