import { useState } from "react";

export default function LudoButtons() {
    let [moves, setMoves] = useState({
        blue: 0,
        green: 0,
        red: 0,
        yellow: 0,
    })
    let updateblue = () => {
        setMoves((prevmove) => {
            return { ...prevmove, blue: prevmove.blue + 1 }
        });

    };
    let updategreen = () => {
        setMoves((prevmove) => {
            return { ...prevmove, green: prevmove.green + 1 }
        });
    }
    let updatered = () => {
        setMoves((prevmove) => {
            return { ...prevmove, red: prevmove.red + 1 }
        })
    }
    let updateyellow = () => {
        setMoves((prevmove) => {
            return { ...prevmove, yellow: prevmove.yellow + 1 }
        })
    }

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateblue}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={updategreen}>+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updatered}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateyellow}>+1</button>
            </div>
        </div>
    );
}