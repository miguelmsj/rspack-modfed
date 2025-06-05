import ReactDOM from 'react-dom/client'

import Counter from 'remote/Counter'

import './index.css'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>

    <Counter />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(<App />)
