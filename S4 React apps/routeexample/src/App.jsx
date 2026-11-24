import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>
      <div style={{textAlign: 'center', marginTop: '20px', fontSize: '20px', fontWeight: 'bold', color: 'blue',border: '2px solid black', padding: '10px', borderRadius: '5px',gap: '10px', display: 'flex', justifyContent: 'center'}}>

        <Link to="/">Home</Link> | 
        <Link to="/about">About Us</Link> | 
        <Link to="/contact">Contact Us</Link>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

    </>
  )
}

const Home = () => {
  return(
    <h2>Welcome to Home Page</h2>
  )
}

function About(){
  return(
    <h2>Welcome to About Us Page</h2>
  )
}

function ContactUs(){
  return(
    <h2>Welcome to Contact Us Page</h2>
  )
}
export default App