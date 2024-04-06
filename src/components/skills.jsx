import React from "react";
import Card from "./skillsCards";
import data from "../assets/datas/text.json";

function Skills() {
  return (
    <div className="pb-32">
      <h2 className="font-semibold text-3xl pt-32 pb-10">
        How can I help you ?
      </h2>
      <div className="flex space-x-3 justify-center">
        {data.Skills.map((skill, index) => (
          <Card
            key={index}
            title={skill.title}
            description={skill.description}
            imageUrl={skill.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
