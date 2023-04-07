import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom';
import { Card, Icon, Item } from 'semantic-ui-react'


function Allposts() {
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
    const deleteProduct= async(id)=>{
        console.log(id)
        let result = await fetch(`http://localhost:5000/allposts/delete/${id } ` ,{
            method: 'Delete'
        });
        result = await result.json();
        if (result)
        {
            alert("Post deleted successfully")
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
        <div className='tout '>
            
                {
                    state.loading ? 'Loading...' : state.posts.data.map((post, index) => {
                        return (
                            

                            <div key={index} class="containerPost">
                                <div class="post">
                        <div class="post-title bg-green-600 rounded-t-lg">{post.titre}</div>
                        <div class="">
                            <img src={'http://localhost:5000/' + post.medias} class="rounded-b-lg w-full h-30"/>
                        </div>
                        <div class="text-xl text-green-600">
                            <p class="">{post.description} {post.username}</p>
                        </div>
                        
                        <button onClick={()=>deleteProduct(post._id)} class="ui inverted red button">Supprimer</button>
                       
                    </div>
                    </div>

                                
                            
                        )
                    })
                }
                    <Outlet />

        </div>
    )
}

export default Allposts


