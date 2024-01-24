import Image from "next/image";
import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="background_video_container">
      <video playsInline autoPlay muted loop className="background_video">
        <source src="bkg.mp4" type="video/mp4" />
      </video>
      <Image
        className="background_fallback"
        src="/bkg.jpg"
        alt="bkg"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default BackgroundVideo;
