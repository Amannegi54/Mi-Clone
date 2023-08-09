import React from "react";
import Data from "../Data/data.json";
import "../style/videos.css";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";
const Videos = () => {
  const Video = Data.videos;
  return (
    <div className="d-flex justify-content-center gap-2 video-content">
      {Video.map((item, index) => (
        <div className="text-center text-white ">
          <div className="width-video">
            <img className="video-img" src={item.image} index={index} />
          </div>
          <div className="d-flex justify-content-center">
            <div className="play-icon">
              <PlayCircleOutlineTwoToneIcon sx={{ fontSize: 40 }} />
            </div>
          </div>
          <div className="video-text">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
