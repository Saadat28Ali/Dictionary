import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MeaningProvider } from './contexts/meaningContext.tsx'
import { FetchingProvider } from './contexts/fetchingContext.tsx'

createRoot(document.getElementById('root')!).render(
  <MeaningProvider child={
    <FetchingProvider child={
      <StrictMode>
        <App />
      </StrictMode>
    } />
  } />
  
  
)
