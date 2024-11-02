import Cell from "./Cell";
import "./Grid.css";
import { useState } from 'react';

export default function Grid() {
    const [countState, setCountState] = useState(0);

    return (
        <div>
            <div>
                <p>Count: {countState}</p>
            </div>
            <div className="container">
                <Cell setCountState = {setCountState}/>
                <Cell setCountState = {setCountState}/>
                <Cell setCountState = {setCountState}/>
                <Cell setCountState = {setCountState}/>
            </div>
        </div>
    )
}