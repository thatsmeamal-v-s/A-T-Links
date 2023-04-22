import React from "react";
import edit from "../../../../images/edit.png";
import address from "../../../../images/address.png";

const AddressCard = () => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-heading">
          <img className="card-header-icon" alt="contact" src={address} />
          <p>Address</p>
          <img className="edit-icon" alt="edit" src={edit} />
        </div>
        <div className="card-content-container">
          <div className="card-content">
            <span>C-1/351/4, GIDC Makarpura</span>
          </div>
          <span>Vadodara - 390010, Gujarat, India</span>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
