import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Remote Counter</h2>
      <div className="text-4xl text-center mb-4">{count}</div>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>
    </div>
  )
}

export default Counter
