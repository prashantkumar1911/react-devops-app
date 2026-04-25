import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "red" }}>
        🚀 CI/CD Deployment Successful!
      </h1>

      <h2>
        Updated at: {new Date().toLocaleTimeString()}
      </h2>

      <p>
        This change was deployed automatically via GitHub Actions 🎉
      </p>
    </div>
  );
}

export default App;