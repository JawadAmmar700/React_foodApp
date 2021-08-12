import React, { useState as State, useEffect as Effect } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

import "../CSS folder/video.css";

const video_uri = "https://www.youtube.com/watch?v=9wt6NjN4oA8";

const video = () => {
  const [mute, setMute] = State(true);

  const handleScroll = () => {
    if (window.scrollY > 300 && window.scrollY < 700) {
      setMute(false);
    } else {
      setMute(true);
    }
  };

  Effect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="video">
      <div className="player">
        <ReactPlayer
          url={video_uri}
          autoplay={true}
          controls={true}
          playing={true}
          muted={mute}
          loop={true}
          width="500px"
          height="300px"
        />
      </div>

      <motion.div
        className="video_info"
        id="video_text"
        animate={{
          opacity: !mute && "1",
          transform: !mute ? "translateX(0px)" : "translateX(40px)",
          transition: "5s ease-in",
        }}
        initial={{ transform: "translateX(40px)", opacity: "0" }}
      >
        <p>We at Cooktube aim to provide the best recipes possible</p>
        <p>
          {" "}
          Our recipes are all tried and tested before putting it out for our
          viewers
        </p>
        {/* <p>jfffffffffffff</p> */}
      </motion.div>
    </div>
  );
};

export default video;
