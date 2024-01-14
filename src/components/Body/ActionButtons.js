import React from "react";
import Button from "./Button";
const ActionButtons = () => {
  return (
      <div className="bg-primary h-[10%] flex justify-center items-center gap-1 py-2">
        <Button title="Convert to Uppercase" bg="accent" />
        <Button title="Convert to Lowercase" bg="accent" />
        <Button title="Clear All" bg="error" />
        <Button title="Remove Extra Spaces" bg="warning"/>
        <Button title="Copy to Clipboard" bg="success"/>
  </div>
  );
};

export default ActionButtons;
