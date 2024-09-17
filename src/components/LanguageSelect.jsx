import React from "react";

const LanguageSelect = () => {
  return (
    <div className="flex gap-2 text-black">
      <select className="flex-1">
        <option value="">Seçiniz</option>
      </select>

      <button className="bg-zinc-700 py-2 px-6 hover:bg-zinc-600 transition rounded text-white">
        Change
      </button>

      <select className="flex-1">
        <option value="">Seçiniz</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
