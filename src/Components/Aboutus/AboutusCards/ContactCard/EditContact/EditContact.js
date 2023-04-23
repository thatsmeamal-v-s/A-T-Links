import React, { useState } from "react";
import "./EditContact.css";
import contact from "../../../../../images/contact.png";
import mail from "../../../../../images/mail.png";
import phone from "../../../../../images/phone.png";
import edit from "../../../../../images/edit.png";
import trash from "../../../../../images/trash.png";
import leftarrow from "../../../../../images/leftarrow.png";

const EditContact = (props) => {
  let {
    showPanel,
    toggleShowPanel,
    setShowEditPanel,
    updateEmail,
    updatePhoneNumber,
    setEditContactIndex,
  } = props;
  let contactList = props.contact;
  let setContactList = props.updateContact;

  const [deletedContacts, setDeletedContacts] = useState([]);
  const [initialContactList] = useState(contactList);

  const togglePanel = () => {
    setContactList(initialContactList);
    toggleShowPanel(!showPanel);
  };

  const openEditPanel = (editContact, index) => {
    setEditContactIndex(index);
    setShowEditPanel(true);
    toggleShowPanel(!showPanel);
    updateEmail(editContact.emails);
    updatePhoneNumber(editContact.phonenumbers);
  };

  const updateContactList = () => {
    let updatedContacts = initialContactList;
    deletedContacts.forEach((element) => {
      updatedContacts = contactList.filter((item) => item.id !== element.id);
    });
    setContactList(updatedContacts);
    toggleShowPanel(!showPanel);
  };

  const deleteContact = (deleteContact) => {
    setDeletedContacts([...deletedContacts, deleteContact.id]);
    let newContactList = contactList.filter(
      (item) => item.id !== deleteContact.id
    );
    setContactList(newContactList);
  };

  return (
    <div className="sidenav">
      <div className="sidenav-heading">
        <img
          className="card-header-icon edit-contact-leftarrow"
          alt="leftarrow"
          src={leftarrow}
          onClick={() => togglePanel()}
        />
        <span>Contacts</span>
        <p>Please provide company's email & contacts</p>
      </div>
      <div className="edit-contact-container">
        {contactList.length !== 0 ? (
          contactList.map((item, index) => {
            return (
              <div key={item.id} id={index} className="card edit-contact-card">
                <div className="edit-card-heading">
                  <img
                    className="card-header-icon edit-card-header"
                    alt="contact"
                    src={contact}
                  />
                  <span>{item.name}</span>
                  <img
                    className="edit-header-icon"
                    alt="edit"
                    src={edit}
                    onClick={() => openEditPanel(item, index)}
                  />
                  <img
                    className="delete-header-icon"
                    alt="delete"
                    src={trash}
                    onClick={() => deleteContact(item)}
                  />
                </div>
                <div className="edit-card-content-container">
                  <div className="email-content edit-content">
                    <img className="edit-mail-icon" alt="contact" src={mail} />
                    <span>
                      {item.emails.length === 0
                        ? "No Emails"
                        : item.emails.join("/")}
                    </span>
                  </div>
                  <div className="phonenumber-content">
                    <img
                      className="edit-phone-icon"
                      alt="contact"
                      src={phone}
                    />
                    <span>
                      {item.phonenumbers.length === 0
                        ? "No Contacts"
                        : item.phonenumbers.join("/")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <button
            type="button"
            className="add-contact-button"
            onClick={() => openEditPanel({ emails: [], phonenumbers: [] }, 0)}
          >
            <span>Add Contacts</span>
          </button>
        )}
      </div>
      <button
        type="button"
        className="add-contact-save-button"
        onClick={() => updateContactList()}
      >
        <span>Save</span>
      </button>
    </div>
  );
};

export default EditContact;
