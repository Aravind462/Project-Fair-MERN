import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContexstShare from './contexts/ContexstShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContexstShare>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContexstShare> 
  </StrictMode>,
)
