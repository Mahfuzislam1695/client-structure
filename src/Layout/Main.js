import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div>this is heder</div>
      {/* <div style={{
        display:"grid", gridTemplateColumns: "1fr 4fr"
      }}> */}
        <Outlet></Outlet>
      {/* </div> */}
      <div>this is footer</div>
    </>
  );
};

export default Main;
