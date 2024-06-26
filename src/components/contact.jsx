import React from "react";
import { useModeContext } from "../context/ModeContext";
import data from "../assets/datas/text.json";

function Contact() {
  const { getColor } = useModeContext();
  const iconColor = getColor();

  return (
    <div className="sm:pb-32 pb-20 flex space-x-3 justify-center">
      {data.Contact.map((contact, index) => (
        <div
          key={index}
          className="transition-transform transform hover:scale-110">
          <div className="px-6 py-4">
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              <svg
                className="h-10 w-10"
                style={{ fill: iconColor }}
                alt="logo"
                dangerouslySetInnerHTML={{ __html: contact.logo }}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
