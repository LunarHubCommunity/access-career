import React from "react";

function InputAuth({ placeholder }) {
  return (
    <div className="w-full space-y-3">
      <input
        type="text"
        className="py-2 px-4 block w-full outline outline-[1.30px] outline-blue-primary  focus:outline-blue-primary focus:outline-2 rounded-lg text-sm  "
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputAuth;
