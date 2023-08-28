import React from "react";
import Border from "./components/Border";
import Resume from "./resume/Resume";
import Data from "./DATA/data";

const Cv = () => {
  return (
    <div className="App">
      <Border>
        <Resume resume={Data.resumeData} />
      </Border>
    </div>
  );
};

export default Cv;
