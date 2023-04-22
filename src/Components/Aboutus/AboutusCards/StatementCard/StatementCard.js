import React from "react";
import quote from "../../../../images/quote.png";
import edit from "../../../../images/edit.png";

const StatementCard = () => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-heading">
          <img className="card-header-icon" alt="contact" src={quote} />
          <p>Statement</p>
          <img className="edit-icon" alt="edit" src={edit} />
        </div>
        <div className="card-content-container">
          <div className="card-content">
            <span>You think it we ink it</span>
            <span className="contacts-count">+1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementCard;
