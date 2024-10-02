import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
      </Routes>
      <HomePage />

      <Footer />
    </>
  )
}

export default App