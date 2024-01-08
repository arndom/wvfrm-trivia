import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="background_video_container">
      <video playsInline autoPlay muted loop className="background_video">
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default BackgroundVideo;
