import { Routes, Route } from '@solidjs/router'
import { lazy } from 'solid-js'
import './App.css'

const About = lazy(() => import('./pages/about/About'))
const Home = lazy(() => import('./pages/home/Home'))

import AppNav from './components/nav/AppNav'

function App() {

  return (
    <>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
