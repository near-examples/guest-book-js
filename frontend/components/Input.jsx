import { useField } from "formik"
import React from "react"

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="  ">
      <label className="block my-2 text-base font-medium text-gray-900 ">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error
            ? "border-[#fc8181]"
            : "bg-gray-50 border-gray-300"
        } shadow-sm  border  text-gray-900 text-sm focus:outline-none rounded-lg 0 block w-full p-2.5 `}
      />
      {meta.touched && meta.error && (
        <div className="text-[#fc8181] mt-0.5">{meta.error}</div>
      )}
    </div>
  )
}
