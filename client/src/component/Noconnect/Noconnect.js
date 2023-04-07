import React from 'react'
import Allposts from '../Allpost/Allposts';
import { Link } from 'react-router-dom';
import Allpostnoconnect from '../Allpostnoconnect/Allpostnoconnect';

function Noconnect() {
  return (
    <div>
            <div >
      <header className="flex w-full bg-reddit_dark ">
          <div className='p-5 mx-7'>
          <i class="inverted large futbol icon"></i>
          </div>
          <div className='w-full mt-6'>      
          <div class="ui fluid inverted transparent icon input" >
              <input type="text" placeholder="Search..."/>
          <i class="search icon"></i>
          {/* <Recherche/> */}
          </div>
          </div>  

         <div className='p-4 flex'>
          <button className='m-1 mx-5'>
         <i class="large  inverted comments icon" ></i>
         </button>
         
         <Link to="/">
         <button className='m-1 mx-2'>
         <i class="large inverted user icon"></i>
         </button>
         </Link>
          
          <i class="large red circle icon"></i>
         </div>

       

      </header>
      <div className='bg-green-600 w-full h-2'></div>
       
       <Allpostnoconnect/>
    </div>
    </div>
  )
}

export default Noconnect