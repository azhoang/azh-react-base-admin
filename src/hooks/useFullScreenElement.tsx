import { useEffect, useRef, useState } from "react";

export const useFullScreenElement = (selectorOrRef: ElementSelector) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if(!selectorOrRef) return;
    if (typeof selectorOrRef === "string") {
      const selectedElement = document.querySelector(selectorOrRef);
      if (selectedElement instanceof HTMLElement) {
        elementRef.current = selectedElement;
      }
    } else if (selectorOrRef && "current" in selectorOrRef) {
      elementRef.current = selectorOrRef.current;
    }

    if (elementRef.current) {
      const element = elementRef.current;

      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };

      element.addEventListener("fullscreenchange", handleFullscreenChange);

      return () => {
        element.removeEventListener("fullscreenchange", handleFullscreenChange);
      };
    }
  }, [selectorOrRef]);

  const requestFullscreen = () => {
    if (elementRef.current) {
      const element = elementRef.current;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      requestFullscreen();
    }
  };

  return { requestFullscreen, exitFullscreen, toggleFullscreen, isFullscreen };
};
