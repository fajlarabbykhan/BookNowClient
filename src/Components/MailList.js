import React from "react";

const MailList = () => {
  return (
    <div className="w-full mt-5 bg-[#dfeecb]  flex flex-col items-center gap-4 p-5">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="w-[300px] h-[40px] border-none	mr-[10px] rounded	">
        <input type="text" placeholder="Your Email" className="h-[30px] p-1 " />
        <button className="h-[30px] border-none rounded p-1 mr-1">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
