import { useLayoutEffect, useState } from "react";

 function useWindowsPosition(id) {
  const [animation, setAnimation] = useState(false);

  const updatePosition = () => {
        const offsetHeight = window.document.getElementById(id).offsetHeight;
    
        if (window.pageYOffset > offsetHeight * 0.7) {
          setAnimation(true);
        }
      };

  useLayoutEffect(() => {
    
    window.addEventListener("scroll", updatePosition);
  updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [id, updatePosition]);

  return animation;
}
export default useWindowsPosition
