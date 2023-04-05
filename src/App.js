import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './component/Menu'
import About from './component/About'
import Resume from './component/Resume'
import Project from './component/Project'
import Contact from './component/Contact'
import Home from './component/Home'
import Pnf from "./component/Pnf";
import Footer from './component/Footer'

function App(props) {
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/resume'} element={<Resume/>}/>
        <Route path={'/project'} element={<Project/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        <Route path={'/*'} element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App