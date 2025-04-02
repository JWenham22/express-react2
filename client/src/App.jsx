import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [home, setHome] = useState({});
  const [love, setLove] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      try {
        const homeResponse = await fetch('http://localhost:4000/home')
        if (!homeResponse.ok) {
          throw new Error(`HTTP error: status: ${homeResponse.status}`)
        }

        const homeData = await homeResponse.json();
        setHome(homeData);

        const loveResponse = await fetch('http://localhost:4000/love')
        if (!loveResponse.ok) {
          throw new Error(`HTTP error: status: ${loveResponse.status}`)
        }

        const loveData = await loveResponse.json();
        setLove(loveData);

      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <div className="home-message">
        <h1>{home.message}</h1>
      </div>
      <div className="love-message">
        <h2>{love.message}</h2>
      </div>
    </div>
  )
}

export default App;
