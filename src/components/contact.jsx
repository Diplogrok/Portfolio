import React from "react";
import { useModeContext } from "../context/ModeContext";
import data from "../assets/datas/text.json";

function Contact() {
  const { getColor } = useModeContext();
  const iconColor = getColor();

  return (
    <div className="pb-32 flex space-x-3 justify-center">
      {data.Contact.map((contact, index) => (
        <div
          key={index}
          className="transition-transform transform hover:scale-110">
          <div className="px-6 py-4">
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-10 w-10"
                style={{ fill: iconColor }}
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
