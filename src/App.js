import React from "react";
import Border from "./components/Border";
import Resume from "./resume/Resume";
function App() {
  const resume = {
    name: "Muhammad Bilal Abbas",
    interests: [
      "Drawing",
      "Photography",
      "Design",
      "Programming",
      "Computer Science",
    ],
    experience: [
      { year: 2012, company: "abc", role: "Something abc" },
      { year: 2013, company: "xyz", role: "Something xyz" },
    ],
    education: [
      "Wilton High School",
      "Silvermine School of Arts",
      "Codeacademy",
    ],
    skills: ["react js", "node js"],
    Extracurriculars: ["Recycling Club", "Book Club", "Gardening Club"],
  };
  return (
    <div className="App">
      <Border>
        <Resume resume={resume} />
      </Border>
    </div>
  );
}

export default App;
