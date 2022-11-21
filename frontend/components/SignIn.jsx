import React from "react"
import camera from "../assets/camera.jpg"

export default function SignIn({ sign }) {
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="camera"
            src={camera}
            class="absolute overflow-hidden inset-0 h-full w-full object-cover"
          />
        </aside>

        <main class="flex items-center justify-center  py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div class="max-w-xl lg:max-w-3xl">
            <h1 class="mt-6 text-2xl tracking-wide font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Cableguard VPN NFTC
            </h1>

            <p class="mt-4 leading-relaxed w-80 text-gray-500">
              Cableguard VPN brings secure and easy connections to De-Fi space.
              Create your VPN in 5 minutes!
            </p>
            <div className="mt-4 sm:mt-8" onClick={sign}>
              <a
                href="#"
                className="inline-flex items-center rounded-full mt-4 md:mt-0 bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none "
              >
                <span className="text-sm font-medium tracking-wide">
                  {" "}
                  Mint Now{" "}
                </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
