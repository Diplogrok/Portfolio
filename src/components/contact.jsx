import React from "react";
import { useModeContext } from "../context/ModeContext";
import data from "../assets/datas/text.json";

function Contact() {
  const { textColor } = useModeContext();
  return (
    <div className="pb-32 flex space-x-3 justify-center">
      {data.Contact.map((contact, index) => (
        <div key={index} className="">
          <div className="px-6 py-4">
            <img src={contact.logo} alt={contact.title} className="h-10 w-10" />
            <div className={`font-bold text-xl mb-2 ${textColor}`}>
              {contact.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
