import React, { useState } from "react"
import { TiTick } from "react-icons/ti"

export const Step = ({ current }) => {
  const steps = ["Client Setup", "VPN Setup", "Mint"]
  return (
    <>
      <div className="flex py-4 justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${current === i && "active"} ${
              i < current && "complete"
            } `}
          >
            <div className="step">
              {i < current ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500 mt-1">{step}</p>
          </div>
        ))}
      </div>
    </>
  )
}
