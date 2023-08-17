import '@/styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import App from './App'
import FallBackComponent from './layouts/FallbackComponent'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={FallBackComponent}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
