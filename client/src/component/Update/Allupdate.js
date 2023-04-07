import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Updateposts() {
    const initialState = {
        loading: true,
        error: '',
        posts: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SUCCESS':
                return {
                    loading: false,
                    error: '',
                    posts: action.payload
                }
            case 'ERROR':
                return {
                    loading: false,
                    error: action.payload,
                    posts: {}
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('http://localhost:5000/allposts')
            .then((response) => {
                dispatch({ type: 'SUCCESS', payload: response.data})
            })
            .catch((error) => {
                dispatch({ type: 'ERROR', payload: error })
            })
    });
    return (
        <div className='grid grid-cols-2'>
            
                {
                    state.loading ? 'Loading...' : state.posts.data.map((post, index) => {
                        return (
                            

                            <div key={index} class="containerPost">
                                <div class="post">
                        <div class="post-title bg-green-600 rounded-t-lg">{post.titre}</div>
                        <div class="">
                            <img src={'http://localhost:5000/' + post.medias} class="rounded-b-lg"/>
                        </div>
                        <div class="">
                            <p class="">{post.description}</p>
                        </div>
                        <Link to={"/update"}>
                        <button type='submit' >Modifier </button>
                        </Link>
                    </div>
                    </div>

                                
                            
                        )
                    })
                }
            
        </div>
    )
}
export default Updateposts