import React from 'react'
import Counter from './components/Counter.jsx'

function App () {
  return (
    <div className='absolute w-full h-full bg-neutral'>
      <div class="mx-8 my-4">
        <header className='mb-8'>
          <p className='text-xl text-primary'>Hello Vite + React + Tailwind!</p>
        </header>
        <main>
          <Counter />
        </main>
      </div>
    </div>
  )
}

export default App
