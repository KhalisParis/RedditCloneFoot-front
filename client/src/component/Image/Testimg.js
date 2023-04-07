import React, {useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


const Testimg = () => {
  let navigate = useNavigate()

    const [file,setFile] = useState();
    const[titre,setTitre] = useState();
    const[desc,setDesc] = useState();

    const onSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData();

        data.append('file', file);
        data.append('titre', titre);
        data.append('desc', desc);

        axios.post(`//localhost:5000/upload`,data)
        
        .then((response) => {
            console.log("upload success");
            console.log(response);
           
        })
        .catch((error) => {
            console.log("upload error: " + error);
        })

    }

    const onFileChange = (event) => {
        console.log(event.target.files[0])
        setFile(event.target.files[0])
    }
    const onTitreChange = (event) => {
        console.log(event.target.value)
        setTitre(event.target.value)
    }
    const onDescChange = (event) => {
        console.log(event.target.value)
        setDesc(event.target.value)
    }

return (
    <div class="container">
    <div class="form-container w-64">
      <form action="http://localhost:5000/new-post" method='post' onSubmit={onSubmit}>
        <div class="form-group">
        Titre
          <label class="form-label" for="titre"></label>
          <input
            class="form-input"
            onChange={onTitreChange}
            type="text"
            id="titre"
            name="titre"
            required
          />
        </div>
        <div class="form-group">
        Medias

        <div class="flex items-center justify-center w-full">
            
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input  onChange={onFileChange} id="dropzone-file" type="file" class="hidden" name='medias' required />
    </label>
</div> 


        </div>
        <div class="form-group">
        Description
          <label class="form-label" for="desc"></label>
          <textarea
            class="form-input"
            onChange={onDescChange}
            id="desc"
            name="desc"
            required
          />
        </div>
       
          <button class="ui inverted green button">Poster</button>
      
      
        </form>
        </div>
        </div>
)
}
export default Testimg