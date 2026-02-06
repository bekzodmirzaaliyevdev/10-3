import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, add } from './store/slices/counterSlice'
import { useNavigate } from 'react-router-dom'


function App() {
  const [inputValue, setInputValue] = useState(0)
  const value = useSelector(state => state.counter.value)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // console.log(inputValue);


  useEffect(() => {
    navigate('/login')
  }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div>
          <p>{value}</p>
        </div>
        <div className='flex gap-5'>
          <button className='btn btn-primary btn-soft' onClick={() => dispatch(increment())}>+</button>
          <button className='btn btn-primary btn-soft' onClick={() => dispatch(decrement())}>-</button>
          <button className='btn btn-primary btn-soft' onClick={() => dispatch(reset())}>reset</button>
        </div>

        <div className='flex gap-1 mt-10'>
          <input className='input input-primary' type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button className='btn btn-primary btn-soft' onClick={() => dispatch(add(+inputValue))}>add</button>
        </div>
      </div>
    </>
  )
}

export default App
