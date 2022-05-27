import { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(0)

  return (
    <p className='text-secondary'>
      <button className='btn btn-accent' type='button' onClick={() => setCount(count => count + 1)}>
        count is: {count}
      </button>
    </p>
  )
}

export default Counter
