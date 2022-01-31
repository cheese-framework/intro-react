import { useState, useEffect } from "react";

const InputField = ({ type, value }) => {
  const [text, setText] = useState(value || "");

  // useEffect, function, [changes]
  useEffect(() => {
    const sayHello = () => {
      console.log("Hello World");
    };

    sayHello();
  }, [text]);

  return (
    <>
      <p>{text}</p>
      <input
        type={type || "text"}
        placeholder="Type here"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(e.target.value);
        }}
      />
    </>
  );
};

export default InputField;
