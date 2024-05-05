import React from "react";
import loadingIMG from "../components/images/loading.webp";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={loadingIMG}
        alt="BlackCart"
        style={{
          width: "200px",
          height: "200px",
        }}
      />
    </div>
  );
}

export default Loading;
