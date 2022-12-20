import React from "react";

const NavigationButton = (props) => {
  const isMobile = window.innerWidth;

    return (
      <>
        <div className="inside-btn" onClick={props.onClick}>            
            {isMobile < 768 ? (
              <a href="/"> </a>
            ) : (
              <a>
                <img src={props.icon} /> {props.title}
              </a>
            )}
        </div>
      </>
      

    );
};

export default NavigationButton