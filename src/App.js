import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { RSVPForm } from "./components/RSVPForm.tsx";

const colors = [
  "text-blue-500",
  "text-red-500",
  "text-yellow-500",
  "text-blue-500",
  "text-green-500",
  "text-red-500",
];

export function App() {
  const title = "AbuBakr Foundation";
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="block text-2xl md:text-3xl mb-4 font-normal bg-gradient-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #4285f4, #ea4335, #fbbc05, #4285f4, #34a853, #ea4335)",
              backgroundSize: "200% auto",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              animation: "gradient 6s linear infinite",
            }}
          >
            AbuBakr Foundation's
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-3 drop-shadow-lg">
            7th
          </h1>
          <h1 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-lg">
            <span className="relative inline-block animate-title-shine">
              Annual Fundraising Banquet
            </span>
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-8 my-8 text-lg">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6" />
              <span>April 19, 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>H.J.C. Bowden Senior Multipurpose Facility, East Point</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-6 h-6" />
              <span>6:00 PM - 9:00 PM</span>
            </div>
          </div>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join us for an evening of inspiration and generosity as we come
            together to support our community and create lasting change.
          </p>
          <h2> RSVP Now and You'll Receive 10 Duas and Hadiths to encompass all matters. </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Reserve Your Seat</h2>
            <RSVPForm />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App