import React from "react";

const Editor = ({ value, dispatch }) => {
  return (
    <div className="h-[55%] overflow-hidden">
      <textarea
        value={value}
        onChange={(e) => dispatch({ type: "CHANGE", content: e.target.value })}
        rows={22}
        className="w-full h-full outline-none p-2 overflow-auto"
        style={{ height: "100%" }}
      ></textarea>
      {/* <div
        contentEditable="true"
        className="w-full h-full outline-none p-2"
      >{""}</div> */}
    </div>
  );
};

export default Editor;
