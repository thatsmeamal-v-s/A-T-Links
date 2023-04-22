import React from "react";
import "./AboutusCards.css";
import ContactCard from "./ContactCard/ContactCard";
import AddressCard from "./AddressCard/AddressCard";
import OperationHoursCard from "./OperationHoursCard/OperationHoursCard";
import SocialMediaCard from "./SocialMediaCard/SocialMediaCard";
import StatementCard from "./StatementCard/StatementCard";

const AboutusCards = (props) => {
  return (
<<<<<<< HEAD
    <div className="card-container">
=======
    <div className="asd">
>>>>>>> fb21a800efe5f02e23d451acd2a4b34bbfbd63a8
      <ContactCard
        showPanel={props.showPanel}
        toggleShowPanel={props.toggleShowPanel}
        contactList={props.contactList}
      />
      <AddressCard />
      <OperationHoursCard />
      <SocialMediaCard />
      <StatementCard />
    </div>
  );
};

export default AboutusCards;
