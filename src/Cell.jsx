import { useState } from 'react'
import './Cell.css'

export default function Cell({setCountState}) {
    let [isCellOnState, setIsCellOnState] = useState(false)

    function changeCellState(){
        if (isCellOnState){
            setCountState(countState => countState - 1)
        } else {
            setCountState(countState => countState + 1)
        }
        setIsCellOnState(!isCellOnState)
    }

    let className = "cell"
    if (isCellOnState){
        className = "cell on"
    } else {
        className = "cell off"
    }

    return (
        <div className = {className} onClick={changeCellState}></div>
    )
}
