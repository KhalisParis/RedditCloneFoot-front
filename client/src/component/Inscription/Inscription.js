import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom';
class Inscription extends Component {
    render() {
        return (

   <div class="container">
      <div class="form-container ">
        <form action="http://localhost:5000/api/signup" method='post'>
          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input
              class="form-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="username">Nom d'utilisateur</label>
            <input
              class="form-input"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Mot de passe</label>
            <input
              class="form-input"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          

          <button class="ui inverted green button">S'inscrire</button>
          
          <Link to="/connexion">
            <p className=''>Deja un compte? Connectez vous ici</p>
          </Link>
          <Link to="/ttlemonde">
            <p className=''>Continuez sans compte</p>
          </Link>

          

          </form>
          </div>
          <Outlet/>
          </div>

        )
    }
}
export default Inscription