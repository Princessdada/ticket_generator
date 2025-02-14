import React from 'react'

const InputField = ({ label, name, type = "text", register, validation, error }) => {
  return (
    <div>
    <label className="form-box">{label}:</label>
      <input
        type={type}
        {...register(name, validation)}
        className="border p-2 w-full rounded"
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
  )
}

export default InputField