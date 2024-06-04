import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Form, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, About, Contactus} from './components/index.js'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import Github, { githubdata } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contactus',
//         element: <Contactus />
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<Contactus/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      loader={githubdata}
      path='github'
      element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
