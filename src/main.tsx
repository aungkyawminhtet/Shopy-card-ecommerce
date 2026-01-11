import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CardContextProvider from './conponents/CardContextProvider.tsx'


createRoot(document.getElementById('root')!).render(
  <CardContextProvider>
    <App />
  </CardContextProvider>,
)
