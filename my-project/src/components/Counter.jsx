import { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`)
    }
  }, [count])

  return (
    <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
        Counter Demo
      </h2>
      <div className="flex items-center justify-center space-x-6">
        <button 
          onClick={() => setCount(count - 1)}
          className="transform hover:-translate-x-1 transition-transform px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-md hover:shadow-lg active:scale-95"
        >
          -
        </button>
        <span className="text-4xl font-bold animate-float bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
          {count}
        </span>
        <button 
          onClick={() => setCount(count + 1)}
          className="transform hover:translate-x-1 transition-transform px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg active:scale-95"
        >
          +
        </button>
        <button 
          onClick={() => setCount(0)}
          className="transform hover:scale-105 transition-transform px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg shadow-md hover:shadow-lg active:scale-95"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter