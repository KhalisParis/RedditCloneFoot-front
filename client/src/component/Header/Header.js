import React from 'react';
import { Link } from 'react-router-dom';
import { head } from '../style/header.style';
import Logo from './Logo.png';
import { LogoFoot } from '../style/header.style';
import { Input } from 'semantic-ui-react';
import Football from './Football.jpg';
import Allposts from '../Allpost/Allposts';
// import Recherche from '..Recherche/Recherche/';

function Header() {
  return (
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

        <Link to="/post">
         <button  className='m-1 mx-5'>
          
         <i class="large inverted plus icon"></i>
         
         </button>
         </Link>
         </div>
         <div className='flex p-4 m-1'>
         <Link to="/connexion">
         <button className='m-1 mx-2'>
         <i class="large inverted user icon"></i>
         </button>
         </Link>
          
          <i class="large green circle icon"></i>
          <button>
          
          </button>
          
         </div>

       

      </header>
      <div className='bg-green-600 w-full h-2'></div>
       <Allposts/>
    </div>
  )
}

export default Header