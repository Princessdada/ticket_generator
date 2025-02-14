import React, { useState } from "react";
import TicketInputForm from "./Components/TicketInputForm";
import TicketDisplay from "./Components/TicketDisplay";
import "./index.css"

export default function App() {
  const [ticketData, setTicketData] = useState(null);

  const handleReset = () => {
    setTicketData(null);
  };

  return (
    <div className="container">
      <h1 className="title">Conference Ticket Generator</h1>
      {!ticketData ? (
        <TicketInputForm onGenerateTicket={setTicketData} />
      ) : (
        <TicketDisplay ticket={ticketData} onReset={handleReset} />
      )}
    </div>
  );
}
