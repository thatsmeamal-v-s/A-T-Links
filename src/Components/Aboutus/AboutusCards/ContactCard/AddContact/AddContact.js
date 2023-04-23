import React from "react";
import "./AddContact.css";
import plus from "../../../../../images/plus.png";
import leftarrow from "../../../../../images/leftarrow.png";

const AddContact = (props) => {
  let emailList = props.email;
  let setEmailList = props.updateEmail;
  let phoneNumberList = props.phoneNumber;
  let setPhoneNumberList = props.updatePhoneNumber;
  let contactList = props.contact;
  let setContactList = props.updateContact;
  let { toggleShowPanel, setShowEditPanel, editContactIndex } = props;

  const addEmailField = () => {
    const emailField = "";
    setEmailList([...emailList, emailField]);
  };

  const addContactField = () => {
    const contactField = "";
    setPhoneNumberList([...phoneNumberList, contactField]);
  };

  const handleEmailChange = (email) => {
    let id = parseInt(email.target.id);
    let newEmailList = [...emailList];
    newEmailList[id] = email.target.value;
    setEmailList(newEmailList);
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    let id = parseInt(phoneNumber.target.id);
    let newPhoneNumberList = [...phoneNumberList];
    newPhoneNumberList[id] = phoneNumber.target.value;
    setPhoneNumberList(newPhoneNumberList);
  };

  const validateEmails = (emails) => {
    let valid = true;
    emails.forEach((email) => {
      if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        valid = false;
      }
    });
    return valid;
  };

  const validatePhonenumbers = (phoneNumbers) => {
    let valid = true;
    phoneNumbers.forEach((phoneNumber) => {
      if (!phoneNumber.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
        valid = false;
      }
    });
    return valid;
  };

  const addNewContact = () => {
    let newContactList = [...contactList];
    let filteredEmails = emailList.filter((email) => {
      return email !== "";
    });
    let filteredPhonenumbers = phoneNumberList.filter((phonenumber) => {
      return phonenumber !== "";
    });
    let validEmails = validateEmails(filteredEmails);
    let validPhonenumbers = validatePhonenumbers(filteredPhonenumbers);
    if (newContactList.length === 0) {
      let initialContact = {
        id: 1,
        name: "Sales Team",
        emails: [],
        phonenumbers: [],
      };
      newContactList.push(initialContact);
    }
    if (validEmails && validPhonenumbers) {
      newContactList[editContactIndex].emails = filteredEmails;
      newContactList[editContactIndex].phonenumbers = filteredPhonenumbers;
      setContactList(newContactList);
      setShowEditPanel(false);
      toggleShowPanel(true);
    } else if (!validEmails && !validPhonenumbers) {
      alert("One or more emails/phone numbers are wrong");
    } else if (!validEmails) {
      alert("One or more emails are wrong");
    } else if (!validPhonenumbers) {
      alert("One or more phone numbers are wrong");
    }
  };

  const backToContacts = () => {
    setShowEditPanel(false);
    toggleShowPanel(true);
  };

  return (
    <div className="sidenav">
      <div className="sidenav-heading">
        <img
          className="card-header-icon edit-contact-leftarrow"
          alt="leftarrow"
          src={leftarrow}
          onClick={() => backToContacts()}
        />
        <span>Contacts</span>
        <p>Please provide company's email & contacts</p>
      </div>
      <div className="add-contact-container">
        <label>Email ID</label>
        {emailList.map((email, index) => {
          return (
            <input
              type="text"
              key={index}
              id={index}
              placeholder="eg: salesteam@br.in"
              value={email}
              className="form-control"
              onChange={(e) => handleEmailChange(e)}
            />
          );
        })}
        <button
          type="button"
          className="add-contact-button"
          onClick={() => addEmailField()}
        >
          <img className="plus-icon" alt="plus" src={plus} />
          <span>Add More</span>
        </button>
        <label>Contact Number</label>
        {phoneNumberList.map((phoneNumber, index) => {
          return (
            <input
              type="number"
              key={index}
              id={index}
              placeholder="eg: 8517463218"
              value={phoneNumber}
              className="form-control"
              onChange={(e) => handlePhoneNumberChange(e)}
            />
          );
        })}
        <button
          type="button"
          className="add-contact-button"
          onClick={() => addContactField()}
        >
          <img className="plus-icon" alt="plus" src={plus} />
          <span>Add More</span>
        </button>
      </div>
      <button
        type="button"
        className="add-contact-save-button"
        onClick={() => addNewContact()}
      >
        <span>Save</span>
      </button>
    </div>
  );
};

export default AddContact;
