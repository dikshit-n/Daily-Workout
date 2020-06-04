import React, { useEffect, useState } from "react";

import classes from './animationDelay.css'
import Auxillary from '../Auxillary/Auxillary'

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
      <div
        // style={{ animation: `${show ? "fadeIn" : "fadeOut"} 1s` }}
        className = {show ? classes.FadeIn : classes.FadeOut}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;