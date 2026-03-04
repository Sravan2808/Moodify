import React from "react";

export const FormGroup = ({ label,type, placeholder,value,onChange }) => {
  return (
    <div className="form-group">
      <label  htmlFor={label}>{label}</label>
      <input value={value} onChange={onChange} type={type} id={label} name={label} placeholder={placeholder} required />
    </div>
  );
};

export default FormGroup;
