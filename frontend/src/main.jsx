import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import StoreProvider from './context/StoreContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  <StoreProvider>
    <App />
    </StoreProvider>
    </GoogleOAuthProvider>
    </BrowserRouter>
)
