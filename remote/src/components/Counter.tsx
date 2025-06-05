import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-container">
      <h2 className="counter-title">Remote Counter</h2>
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="counter-button-decrease"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="counter-button-increase"
        >
          Increase
        </button>
      </div>
    </div>
  )
}

export default Counter
