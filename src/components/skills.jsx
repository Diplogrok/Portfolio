import React from "react";
import { useModeContext } from "../context/ModeContext";
import Card from "./SkillsCard";
import data from "../assets/datas/text.json";

function Skills() {
  const { textColor } = useModeContext();

  return (
    <div className="pb-32">
      <h2 className={`font-semibold text-3xl pt-32 pb-10 ${textColor}`}>
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
