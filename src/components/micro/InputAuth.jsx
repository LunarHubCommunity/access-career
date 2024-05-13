import React from "react";

function InputAuth({ placeholder, name, type }) {
  return (
    <div className="w-full space-y-3">
      <input
        id={name}
        name={name}
        type={type}
        className="py-2 px-4 block w-full outline outline-[1.30px] outline-blue-primary  focus:outline-blue-primary focus:outline-2 rounded-lg text-sm  "
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputAuth;
