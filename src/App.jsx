import React, { useEffect, useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import TextContainer from "./components/TextContainer";
import { useDispatch } from "react-redux";
import getLangs from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const [sourceLang, setSourceLang] = useState({
    label: "Turkish",
    value: "tr",
  });
  const [targetLang, setTargetLang] = useState({
    label: "English",
    value: "en",
  });
  const [text, setText] = useState();

  useEffect(() => {
    dispatch(getLangs());
  }, []);

  const handlerTranslate = () => {};

  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">Çeviri +</h1>

        {/* TOP PART */}
        <LanguageSelect
          sourceLang={sourceLang}
          targetLang={targetLang}
          setSourceLang={setSourceLang}
          setTargetLang={setTargetLang}
        />

        {/* TEXT PART */}
        <TextContainer setText={setText} text={text} />

        {/* BUTTONS */}
        <button
          onClick={handlerTranslate}
          className="px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-zinc-900 cursor-pointer transition mt-3 disabled:brightness-50"
        >
          SWITCH
        </button>
      </div>
    </div>
  );
};

export default App;
