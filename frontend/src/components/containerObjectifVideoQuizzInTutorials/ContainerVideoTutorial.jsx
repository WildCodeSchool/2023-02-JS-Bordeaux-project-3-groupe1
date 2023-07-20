import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

function ContainerVideoTutorial({ videoTutorials }) {
  const startIndex = videoTutorials.indexOf("v=") + 2;
  const endIndex = videoTutorials.indexOf("&ab_channel=");
  const videoId = videoTutorials.slice(startIndex, endIndex);
  const [opts, setOpts] = useState();

  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 767px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    if (isMobile) {
      setOpts({ height: "200", width: "360" });
    } else if (isTablet) {
      setOpts({ height: "300", width: "540" });
    } else if (isDesktop) {
      setOpts({ height: "500", width: "600" });
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div>
      <p className="pTutoVideo">Vidéo</p>
      <div className="container-Video-preview">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

ContainerVideoTutorial.propTypes = {
  videoTutorials: PropTypes.string,
};

ContainerVideoTutorial.defaultProps = {
  videoTutorials: "image",
};

export default ContainerVideoTutorial;
