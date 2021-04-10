import React, { useState, useEffect, createContext } from "react";

export const DimensionsContext = createContext();

const GlobalDimensions = (props) => {
  /*
The read-only Window property innerWidth returns the interior width of the window in pixels. 
This includes the width of the vertical scroll bar, if one is present.

More precisely, innerWidth returns the width of the window's visual viewport. 
The interior height of the window—the height of the layout 
viewport—can be obtained from the innerHeight property.

*/

  const [viewport, setViewport] = useState(window.innerWidth);

  const useWindowSize = () => {
    useEffect(() => {
      const updateSize = () => {
        setViewport(window.innerWidth);
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return viewport;
  };

  useWindowSize();

  return (
    <DimensionsContext.Provider value={{ viewport }}>
      {props.children}
    </DimensionsContext.Provider>
  );
};

export default GlobalDimensions;
