import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";

const LanguageSelect = ({
  setSourceLang,
  setTargetLang,
  sourceLang,
  targetLang,
}) => {
  const { isLoading, error, langs } = useSelector((store) => store.lang);

  const formatted = useMemo(
    () =>
      langs.map((i) => ({
        label: i.name,
        value: i.code,
      })),
    [langs]
  );

  return (
    <div className="flex gap-2 text-black">
      <ReactSelect
        value={sourceLang}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        onChange={(e) => setSourceLang(e)}
        className="flex-1"
      />

      <button className="bg-zinc-700 py-2 px-6 hover:bg-zinc-600 transition rounded text-white">
        Change
      </button>

      <ReactSelect
        value={targetLang}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        onChange={(e) => setTargetLang(e)}
        className="flex-1"
      />
    </div>
  );
};

export default LanguageSelect;
