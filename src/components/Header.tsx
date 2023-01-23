import React from 'react'

const Header = () => {
  return (
    <section className="home pt-24 px-5 md:px-24">
      <div className="flex container flex-col-reverse px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
        <div className="flex flex-col  mb-20 space-y-10 md:w-1/2">

          <div className="md:max-w-md">
            <h3 className='text-xl py-4 text-center md:text-left'> Hello, Salut ! je suis </h3>
            <h1 className="text-4xl font-bold text-deepSaffron text-center md:text-5xl md:text-left">
             Evrajody Gildas,
            </h1>
            <h3 className='text-xl py-4 text-center md:text-left'> 
              analyse-programmeur, developpeur web et mobile, redacteur web et community manager 
            </h3>
          </div>

          <p className="md:max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <div className="flex justify-center items-center md:justify-start">
            <a href="#"
              className="p-3 px-6 text-babyPowder font-medium bg-starCommandBlue rounded-md hover:bg-brightRedLight">
              Contatez-moi
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center ">

          <div className="h-80 w-80 rounded-full border border-maroon bg-opacity-25"></div>

          {/* RANGER SON IMAGE DE PROFILE ICI */}

        </div>
      </div>
    </section>
  )
}

export default Header
