import React from "react";
import { useModeContext } from "../context/ModeContext";
import Card from "./SkillsCard";
import data from "../assets/datas/text.json";

function Skills() {
  const { textColor } = useModeContext();

  return (
    <div className="sm:pb-32 pb-10">
      <h2
        className={`font-semibold sm:text-3xl text-xl sm:pt-32 pt-10 pb-10 ${textColor}`}>
        How can I help you ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 m-auto">
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
