import React from 'react'
import { facebook, github, twitter, instagram } from '../icons'
const Contact = () => {
  return (
    <footer className="py-12">
    <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-6 md:flex-row md:space-y-0">

       <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">

         <div className=" mx-auto my-6 text-white md:hidden">
           copyright &copy; , Tout droit réservée
         </div>

         <div className="img-logo flex items-center justify-between">
       <span className='text-2xl border-2 px-3 py-2 border-deepSaffron -rotate-12'> E </span>
      <h2 className='font-extra text-xl mx-2'> Evrajody </h2>
    </div>

           <div className="flex justify-center space-x-4">
               <a href="">
                    <img src={github} className="h-8"/>
               </a>

               <a href="">
                    <img src={facebook} className="h-8"/>
               </a>

               <a href="">
                    <img src={instagram} className="h-8"/>
               </a>

               <a href="">
                    <img src={twitter} className="h-8"/>
               </a>

           </div>

       </div>


       <div className="flex justify-around space-x-32">

           <div className="flex flex-col space-y-3 text-white">
               <a href="" className="hover:text-brightRed">Acceuil</a>
               <a href="" className="hover:text-brightRed">Propos</a>
               <a href="" className="hover:text-brightRed">Compétences</a>
               <a href="" className="hover:text-brightRed">Projets</a>
               <a href="" className="hover:text-brightRed">Contacts</a>
           </div>

           <div className="flex flex-col space-y-3 text-white">
               <a href="" className="hover:text-brightRed">Acceuil</a>
               <a href="" className="hover:text-brightRed">Propos</a>
               <a href="" className="hover:text-brightRed">Compétences</a>
               <a href="" className="hover:text-brightRed">Projets</a>
               <a href="" className="hover:text-brightRed">Contacts</a>
           </div>

       </div>

       <div className="flex flex-col justify-end">

         <div className="hidden text-white md:block">
           copyright &copy; 2023, All rights reserved <br />
           +229 61764777 
         </div>

       </div>

    </div>

   </footer>
  )
}

export default Contact