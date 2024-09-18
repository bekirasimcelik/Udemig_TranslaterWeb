import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";

const LanguageSelect = () => {
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
      <ReactSelect className="flex-1" options={formatted} />

      <button className="bg-zinc-700 py-2 px-6 hover:bg-zinc-600 transition rounded text-white">
        Change
      </button>

      <ReactSelect className="flex-1" options={formatted} />
    </div>
  );
};

export default LanguageSelect;
