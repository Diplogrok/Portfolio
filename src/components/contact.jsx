import React from "react";
import data from "../assets/datas/text.json";

function Contact() {
  return (
    <div className="pb-32 flex space-x-3 justify-center">
      {data.Contact.map((contact, index) => (
        <div key={index} className="">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{contact.title}</div>
            <p className="text-gray-700 text-base">{contact.logo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
