import { useState } from 'react'
import './options.css'

function Options({getData, page}) {
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
      })
    const handleOptions = (type, op) => {   
        setOptions({
            ...options,
            [type]: op==='inc'? options[type] + 1 : options[type] -1, 
        })
    }
    getData(options);
  return (
    <div className={page? 'optionSection searchResultOptions' : 'optionSection'}>
        <div className="optionitem">
            <p>Adult</p>
            <div className="adultControler">
                <button disabled={options.adult <= 1} onClick={() => {handleOptions('adult', 'dec')}}>-</button>
                <span>{options.adult}</span>
                <button onClick={() => {handleOptions('adult', 'inc')}}>+</button>
            </div>
        </div>
        <div className="optionitem">
            <p>Children</p>
            <div className="adultControler">
                <button disabled={options.children <= 0} onClick={() => {handleOptions('children', 'dec')}}>-</button>
                <span>{options.children}</span>
                <button onClick={() => {handleOptions('children', 'inc')}}>+</button>
            </div>
        </div>
        <div className="optionitem">
            <p>Room</p>
            <div className="adultControler">
                <button disabled={options.room <= 1} onClick={() => {handleOptions('room', 'dec')}}>-</button>
                <span>{options.room}</span>
                <button onClick={() => {handleOptions('room', 'inc')}}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Options