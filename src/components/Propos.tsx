import React from 'react'

const Propos = () => {
  return (
    <section id="feature" className='bg-babyPowder py-10'>
      <div className="container flex flex-col px-4 mx-auto space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2 px-5">
          <h2 className="md:max-w-md text-4xl font-bold text-center md:text-left">
            A Propos 
          </h2>

          <p className="md:max-w-sm  text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-deepSaffron">
                  {' '}
                  01{' '}
                </div>
                <h3 className="text-base font-medium md:mb-4 md:hidden">
                  {' '}
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div className=''>
              <h3 className="hidden mb-4 text-lg font-medium md:block">
                {' '}
                Track company-wide progress
              </h3>

              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-deepSaffronSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-deepSaffron">
                  {' '}
                  02{' '}
                </div>
                <h3 className="text-base font-medium md:mb-4 md:hidden">
                  {' '}
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-medium md:block">
                {' '}
                Advanced built-in reports
              </h3>

              <p className="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-deepSaffronSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-deepSaffron">
                  {' '}
                  03{' '}
                </div>
                <h3 className="text-base font-medium md:mb-4 md:hidden">
                  {' '}
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-medium md:block">
                {' '}
                Everything you need in one place
              </h3>

              <p className="text-darkGrayishBlue">
                Everything you need in one place Stop jumping from one service
                to another to communicate, store files, track tasks and share
                documents. Manage offers an all-in-one team productivity
                solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Propos
