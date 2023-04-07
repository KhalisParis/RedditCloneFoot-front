import React from 'react'

function Comment() {
  return (
    <div>
        <form action="http://localhost:5000/new-comment" method='post'>
        <label class="form-label" for="comment"></label>
          <input
            class="form-input"
            type="text"
            id="comment"
            name="comment"
            required
          />

<button class="ui inverted green button">Commenter</button>
        </form>
    </div>
  )
}

export default Comment