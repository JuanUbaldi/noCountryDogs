import SimpleCarousel from "@/components/simpleCarousel";
import React from "react";

export default function Carousel() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="./doggy.mp4" type="video/mp4" />
      </video>
      <div className="  pt-80">
        
        <SimpleCarousel />
      </div>
    </div>
  );
}
