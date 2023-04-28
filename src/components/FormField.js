import React, { useState, forwardRef } from "react";
import MyInput from "./MyInput.js";

const FormField = forwardRef(function FormField({ label, isRequired }, ref) {
  const [state, setState] = useState("");
  return (
    <>
      <MyInput
        onChange={(e) => setState(e.target.value)}
        value={state}
        ref={ref}
        label={label}
      />
      {(isRequired && state === "") && <i>Required</i>}
    </>
  );
});

export default FormField;

// import { forwardRef, useState } from 'react';
// import MyInput from './MyInput.js';

// const FormField = forwardRef(function FormField({ label, isRequired }, ref) {
//   const [value, setValue] = useState('');
//   return (
//     <>
//       <MyInput
//         ref={ref}
//         label={label}
//         value={value}
//         onChange={e => setValue(e.target.value)} 
//       />
//       {(isRequired && value === '') &&
//         <i>Required</i>
//       }
//     </>
//   );
// });

// export default FormField;

