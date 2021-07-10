import Header from './components/Header/Header'
import Todopanel from './components/Todolistpanel/Todolistpanel'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Users from './components/Users/Users'
import Navbar from './components/Navbar/Navbar'
import Usersposts from './components/Usersposts/Usersposts'
const App = ()=> {
  return (
    <BrowserRouter>
     <div className = 'wrapper' >
      <Header/>
      <Navbar/>
      <Usersposts />
      <div className ='wrapper-components'>
      <Route path='/Todolistpanel' render={() => <Todopanel/>}/>
      <Route path='/Users' render={() => <Users/>}/>
      </div>
     </div>
    </BrowserRouter>
  )
}

export default App
