import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Connexion extends Component {
  render() {
    return (
        <div class="container">
        <div class="form-container w-64">
          <form action="http://localhost:5000/api/signin" method='post'>
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
              <label class="form-label" for="password">Mot de passe</label>
              <input
                class="form-input"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <button class="ui inverted green button">Connexion</button>
            </form>
            </div>
            
            </div>
  
    )
  }
}

export default Connexion