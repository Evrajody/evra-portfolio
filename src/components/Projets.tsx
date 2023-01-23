import React from 'react'

const Projets = () => {
  return (
    <section id="projets" className="bg-babyPowder py-10">
      <div className="container flex flex-col px-4 mx-auto space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2 px-5">
          <h2 className="md:max-w-md text-4xl font-bold text-center md:text-left">
            Mes Projets
          </h2>

          <p className="md:max-w-sm  text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 md:w-1/2">
          <div className="project w-[450px]">
            <a href="#" className="group relative block bg-black rounded-lg">
              <img
                alt="Developer"
                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-8">
         

                <p className="text-2xl font-bold text-white">Trésor Public App</p>

                <div className="mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="controls"></div>
        </div>
      </div>
    </section>
  )
}

export default Projets
