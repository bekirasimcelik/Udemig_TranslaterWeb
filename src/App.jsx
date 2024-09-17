import React from "react";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex felx-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">Çeviri +</h1>

        {/* TOP PART */}
        <div className="flex gap-2 text-black">
          <select className="flex-1">
            <option value="">Seçiniz</option>
          </select>

          <button></button>

          <select className="flex1">
            <option value="">Seçiniz</option>
          </select>
        </div>

        {/* TEXT PART */}
        <div className="flex gap-3 mt-5">
          <div>
            <textarea className=""></textarea>
          </div>
          <div>
            <textarea className=""></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
