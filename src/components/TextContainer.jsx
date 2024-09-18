import React from "react";

const TextContainer = ({ text, setText }) => {
  return (
    <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
      <div className="flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-[300px] max-h-[500px] text-black text-[20px] rounded p-[10px]"
        ></textarea>
      </div>
      <div className="flex-1">
        <textarea
          value={text}
          disabled
          className="text-gray-300 w-full min-h-[300px] max-h-[500px] text-[20px] rounded p-[10px]"
        ></textarea>
      </div>
    </div>
  );
};

export default TextContainer;
