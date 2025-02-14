import React from "react";

const TicketDisplay = ({ ticket, onReset }) => {
  return (
    <div >
      <h2 className="text-2xl font-bold">Your Conference Ticket</h2>
      <img 
        src={ticket.avatar} 
        alt="User Avatar" 
      
      />
      <p ><strong>Name:</strong> {ticket.fullName}</p>
      <p ><strong>Email:</strong> {ticket.email}</p>

    
      <button 
        onClick={onReset} 
       
      >
        Refresh
      </button>
    </div>
  );
};

export default TicketDisplay;
