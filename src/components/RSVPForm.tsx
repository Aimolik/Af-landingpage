import React, { useState } from "react";
import { db } from "../config/firebase-config.js"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from '@emailjs/browser'

const colRef = collection(db, 'rsvps');

export const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(e)
    // Handle form submission
    console.log("Form submitted:", formData);
    addDoc(colRef, {
      name: formData.name,
      email: formData.email,
      submittedAt: serverTimestamp(),
    });
    setFormData({
      name: "",
      email: ""
    })


    function sendEmail(e) {
      e.preventDefault();
      var params = {
        name: formData.name,
        email: formData.email,
        reply_to: "aimmalikmo@gmail.com"
      };

      emailjs.init({
        publicKey: "Jsb9HWrnzWXMpWE-G",
      });

      emailjs.send('service_dxid0bv', 'template_xejn33g', params).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Thank you for RSVPing. Your email gift will be sent shortly.");
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    }
    
  };
  return <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 flex-col m-auto">
      <div>
        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.name} onChange={e => setFormData({
        ...formData,
        name: e.target.value
      })} required />
      </div>
      <div>
        <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={e => setFormData({
        ...formData,
        email: e.target.value
      })} required />
      </div>
      <button type="submit" className="px-8 py-4 text-2xl text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
        RSVP
      </button>
    </form>;
};