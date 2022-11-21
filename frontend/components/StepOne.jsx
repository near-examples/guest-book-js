import React from "react"
import { formSchema } from "../schemas/stepOneSchema"
import { Field, Form, Formik } from "formik"
import { Input } from "./Input"

// const handleSubmit = async (values, actions) => {
//   console.log(values)
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   actions.resetForm()
// }

const todayDate = () => {
  let date = new Date()
  let currentDate = date.getDate()
  let currentMonth = date.getMonth() + 1
  let currentYear = date.getFullYear()
  return (
    currentYear +
    "-" +
    (currentMonth < 10 ? "0" + currentMonth : currentMonth) +
    "-" +
    (currentDate < 10 ? "0" + currentDate : currentDate)
  )
}
const nextYearDate = () => {
  let date = new Date()
  let currentDate = date.getDate()
  let currentMonth = date.getMonth() + 1
  let currentYear = date.getFullYear() + 1
  return (
    currentYear +
    "-" +
    (currentMonth < 10 ? "0" + currentMonth : currentMonth) +
    "-" +
    (currentDate < 10 ? "0" + currentDate : currentDate)
  )
}

export const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values, false)
  }

  const initialValues = {
    clientNumber: "",
    vpnProvider: "",
    vpnDescription: "",
    expirationDate: nextYearDate(),
    startingDate: todayDate(),
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="grid my-2 md:grid-cols-2 md:gap-6">
            <Input
              label="Client Number"
              name="clientNumber"
              type="text"
              placeholder=""
            />
            <Input
              label="VPN Provider"
              name="vpnProvider"
              type="text"
              placeholder=""
            />
          </div>
          <div className="my-2">
            <Input
              label="VPN Description"
              name="vpnDescription"
              type="text"
              placeholder=""
            />
          </div>
          <div className="grid my-2 md:grid-cols-2 md:gap-6">
            <Input
              label="Expiration Date"
              name="expirationDate"
              type="date"
              placeholder=""
            />
            <Input
              label="Starting Date"
              name="startingDate"
              type="date"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className="inline-flex items-center rounded-xl duration-300 ease-in-out my-2.5 bg-indigo-700 px-4 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none"
              disabled={isSubmitting}
              type="submit"
            >
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
