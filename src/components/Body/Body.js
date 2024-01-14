import React, { useReducer } from "react";
import ActionButtons from "./ActionButtons";
import Editor from "./Editor";

const Body = () => {
  const editorReducer = (content, action) => {
    switch (action.type) {
      case "CHANGE":
        return { content: action.content };
      case "UPPERCASE":
        return { content: content.content.toUpperCase() };
      case "LOWERCASE":
        return { content: content.content.toLowerCase() };
      case "CLEARALL":
        return { content: "" };
      case "REMOVEEXTRASPACE":
        return { content: content.content.replace(/\s+/g, " ") };
      case "COPY":
        navigator.clipboard.writeText(content.content);
        return content;
      default:
        return content;
    }
  };


  const [state, dispatch] = useReducer(editorReducer, {content:""})
    return (
      <div className="w-11/12 min-h-[85vh] mx-auto mt-4 rounded-3xl overflow-hidden bg-[#3b3b3b]">
        <ActionButtons dispatch={dispatch} />
        <Editor value={state.content} dispatch={ dispatch} />
      </div>
    );
};

export default Body;
