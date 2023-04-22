import React from "react";
import contact from "../../../../images/contact.png";
import mail from "../../../../images/mail.png";
import phone from "../../../../images/phone.png";
import edit from "../../../../images/edit.png";
import "./ContactCard.css";

const ContactCard = (props) => {
  let { showPanel, toggleShowPanel, contactList } = props;

  const showEditPanel = () => {
    toggleShowPanel(!showPanel);
  };

  return (
    <div className="column">
      <div className="card">
        <div className="card-heading">
          <img className="card-header-icon" alt="contact" src={contact} />
          <p>Contacts</p>
          <img
            className="edit-icon"
            alt="edit"
            src={edit}
            onClick={() => showEditPanel()}
          />
        </div>
        <div className="edit-card-content-container">
          <div className="email-content">
            <img className="edit-mail-icon" alt="contact" src={mail} />
            <span>
              {contactList.length === 0 || contactList[0].emails.length === 0
                ? "No Emails"
                : contactList[0].emails.join("/")}
            </span>
            <div className="contacts-count">
              +{contactList.length === 0 ? 0 : contactList.length - 1}
            </div>
          </div>
          <div className="phonenumber-content">
            <img className="edit-phone-icon" alt="contact" src={phone} />
            <span>
              {contactList.length === 0 ||
              contactList[0].phonenumbers.length === 0
                ? "No Contacts"
                : contactList[0].phonenumbers.join("/")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
