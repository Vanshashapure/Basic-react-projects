import { useState } from "react";
import { genTicket, sum } from './helper.js'
import Ticket from "./Ticket";


export default function LotteryGame({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="lottery-wrapper">
      <div className="lottery-card">
        <h2 className="lottery-title">Lottery Game!</h2>
        <div className="lottery-info">
          <p>Goal: Sum of digits should be <strong>{winningSum}</strong></p>
        </div>
        
        <Ticket ticket={ticket} />
        
        <button className="lottery-buy-btn" onClick={buyTicket}>
          Buy New Ticket
        </button>

        <div className={`lottery-result ${isWinning ? "win" : ""}`}>
          {isWinning && (
            <div className="win-message">
              <span className="win-icon">🎉</span>
              <h3>Congratulations, you won!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
