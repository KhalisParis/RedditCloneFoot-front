
import { Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Allposts from './component/Allpost/Allposts';
import Connexion from './component/Connexion/Connexion';
import Header from './component/Header/Header';
import Inscription from './component/Inscription/Inscription';
import Post from './component/Post/Post';
import { AppContainer } from './Container.style';
import Testimg from './component/Image/Testimg';
import './style.css';
import Recherche from './component/Recherche/Recherche';
import Update from './component/Update/Update';
import Error from './component/Error/Error';
import Noconnect from './component/Noconnect/Noconnect';
import Comment from './component/Comments/Comment';




function App() {
  return (

<AppContainer>
  <Routes>
    <Route path='/' element={<Inscription/>}/>

      {/* <Route path='/allpost' element={<Allposts/>}/> */}
      {/* <Route path='/update' element={<Update/>}/> */}
      {/* <Route path='/post' element={<Testimg/>}/> */}
      <Route path='/post' element={<Testimg/>}/>
      <Route path='/user' element={<Header/>}/>
      <Route path='/Connexion' element={<Connexion/>}/>
      <Route path='Comment' element={<Comment/>}/>
    
      <Route path='/*'element={<Error/>}/>
      <Route path='/ttlemonde'element={<Noconnect/>}/>
  </Routes>

</AppContainer>

  );
}

export default App;
