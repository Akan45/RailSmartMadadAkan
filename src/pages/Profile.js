import React from 'react';
import img from "../assets/images/profileimg.png";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Side - Profile Info */}
      <div className="bg-[#7C2A2A] text-white flex flex-col justify-center items-center p-8">
        <h2 className="text-2xl font-bold mb-8">Your Profile</h2>
        <div className="flex flex-col items-center">
          <img src={img} alt="profileimg" className="w-24 h-24 rounded-full mb-4"/>
          <button className="text-sm underline mb-2">Edit Image ✏️</button>
          <p className="mb-8">abc@gmail.com</p>
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4">Additional User Details</h3>
          <div className="mb-4">
            <p className="mb-1">Username ✏️</p>
            <input type="text" className="w-full p-2 bg-[#C04A4A] rounded" />
          </div>
          <div className="mb-8">
            <p className="mb-1">Phone No. ✏️</p>
            <input type="text" className="w-full p-2 bg-[#C04A4A] rounded" />
          </div>
          <button className="flex items-center space-x-1 mt-4">
            <span>Log out</span> 
            <span>↩️</span>
          </button>
        </div>
      </div>

      {/* Right Side - Menu Options */}
      <div className="flex flex-col justify-center items-start p-8">
        <div className="w-full max-w-sm space-y-4">
          <button className="flex justify-between items-center w-full bg-gray-200 p-4 rounded">
            <span>Settings</span>
            <span>➡️</span>
          </button>
          <button className="flex justify-between items-center w-full bg-gray-200 p-4 rounded">
            <span>Track your Concerns</span>
            <span>➡️</span>
          </button>
          <button className="flex justify-between items-center w-full bg-gray-200 p-4 rounded">
            <span>Rail Anubhav</span>
            <span>➡️</span>
          </button>
          <button className="flex justify-between items-center w-full bg-gray-200 p-4 rounded">
            <span>Suggestions</span>
            <span>➡️</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
