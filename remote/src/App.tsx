import ReactDOM from 'react-dom/client'
import Counter from './components/Counter'
import './index.css'

const App = () => (
  <div className="mt-10 mx-auto max-w-6xl">
    <Counter />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(<App />)
