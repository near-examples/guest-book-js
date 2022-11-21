import React, { useState } from "react"
import { formSchema } from "../schemas/stepThreeSchema"
import { Field, Form, Formik } from "formik"
import { Input } from "./Input"

export const StepThree = (props) => {
  const handleSubmit = (values, actions) => {
    props.next(values, true)
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={props.data}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div className="grid md:grid-cols-2 md:gap-6">
            <Input
              label="Initial Ipv4 Addresses"
              name="initialIPv4"
              type="text"
              placeholder="0.0.0.0/0"
            />
            <Input
              label="Ipv4 Address of VPN Service"
              name="IPv4Address"
              type="text"
              placeholder=""
            />
          </div>
          <Input
            label="Maximum KB"
            name="maximumKb"
            type="text"
            placeholder="100000 "
          />

          <Input
            label="Private Key"
            name="privateKey"
            type="text"
            placeholder=""
          />
          <Input
            label="Account of the server"
            name="account"
            type="text"
            placeholder=""
          />
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              className="inline-flex items-center rounded-xl duration-300 ease-in-out my-2.5 bg-indigo-700 px-4 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none"
              disabled={isSubmitting}
              type="button"
              onClick={() => props.prev(values)}
            >
              Back
            </button>
            <button
              className="inline-flex items-center rounded-xl duration-300 ease-in-out my-2.5 bg-indigo-700 px-4 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none"
              disabled={isSubmitting}
              type="submit"
            >
              Mint
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
