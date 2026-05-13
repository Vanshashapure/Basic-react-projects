import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket-container">
      <p className="ticket-label">Your Ticket</p>
      <div className="ticket-nums">
        {ticket.map((num, index) => (
          <TicketNum num={num} key={index} />
        ))}
      </div>
    </div>
  )
}