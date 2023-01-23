import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex container mx-auto items-center justify-between py-5 px-6'>

    <div className="img-logo flex items-center justify-between">
       <span className='text-2xl border-2 px-3 py-2 border-deepSaffron -rotate-12'> E </span>
      <h2 className='font-extra text-xl mx-2 '> Evrajody </h2>
    </div>


    <ul className=" hidden menu-menu lg:inline-flex space-x-5">

      <li className='nav-link'> <span> Accueil </span>  </li>
      <li className='nav-link'> <span> Propos </span>  </li>
      <li className='nav-link'> <span> Compétences </span>  </li>
      <li className='nav-link'> <span> Projets </span>  </li>
      <li className='nav-link'> <span> Contacts </span>  </li>

    </ul>

    <a href="" className='hidden sm:block px-4 text-babyPowder rounded-lg py-3 bg-starCommandBlue'> 
     <span>Telecharger mon cv</span>
    </a>

    <button id="menu-btn" className="block hamburger sm:hidden focus:outline-none">
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>

   </nav>
  )
}

export default Navbar