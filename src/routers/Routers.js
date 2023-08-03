import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails';
import NotFound from './../pages/NotFound';
import Contact from '../pages/Contact';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/blogs'/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/blogs' element={<Blog />}/>
      <Route path='/blogs/:slug' element={<BlogDetails />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default Routers