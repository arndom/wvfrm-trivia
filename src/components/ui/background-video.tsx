import React from "react";

const BackgroundVideo = () => {
  return (
    <video playsInline autoPlay muted loop className="background_video">
      <source src="background.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default BackgroundVideo;
