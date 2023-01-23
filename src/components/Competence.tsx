import React from 'react'
import '../main.css'

const Competence = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-8 text-center py-5">
        <h2 className="text-4xl font-bold text-center">Mes Compétences</h2>

        <div className="mx-auto flex flex-col justify-center md:flex-row gap-4 py-8">

          <div className="service text-center hover:shadow-lg transition-shadow rounded-md bg-babyPowder py-5 px-4 flex flex-col gap-3">
            <span className="h-16 w-16 my-0 mx-auto rounded-full bg-starCommandBlue flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </span>
            <h3 className='text-xl font-medium'>UI/UX Intégration</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              inventore perferendis iure autem, veritatis provident, laboriosam
              ea praesentium ad deleniti eligendi fugiat aspernatur doloribus
              earum repellat sit. Pariatur, magni repudiandae!
            </p>
          </div>

          <div className="service text-center hover:shadow-lg transition-shadow rounded-md bg-babyPowder py-5 px-4 flex flex-col gap-3">
            <span className="h-16 w-16 my-0 mx-auto bg-deepSaffron rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                />
              </svg>
            </span>
            <h3 className='text-xl font-medium'>Developpement Site</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              inventore perferendis iure autem, veritatis provident, laboriosam
              ea praesentium ad deleniti eligendi fugiat aspernatur doloribus
              earum repellat sit. Pariatur, magni repudiandae!
            </p>
          </div>

          <div className="service text-center hover:shadow-lg transition-shadow rounded-md bg-babyPowder py-5 px-4 flex flex-col gap-3">
            <span className="h-16 w-16 my-0 mx-auto bg-maroon rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </span>

            <h3 className='text-xl font-medium'>Developpement Mobile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              inventore perferendis iure autem, veritatis provident, laboriosam
              ea praesentium ad deleniti eligendi fugiat aspernatur doloribus
              earum repellat sit. Pariatur, magni repudiandae!
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Competence
