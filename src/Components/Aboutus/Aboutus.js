import React, {useState} from 'react'
import './Aboutus.css'
import AboutusCards from './AboutusCards/AboutusCards'
import AboutusContent from './AboutusContent/AboutusContent'
import AboutusHeading from './AboutusHeading/AboutusHeading'
import AboutusNavbar from './AboutusNavbar/AboutusNavbar'
import AddContact from './AboutusCards/ContactCard/AddContact/AddContact'
import EditContact from './AboutusCards/ContactCard/EditContact/EditContact'
import contacts from './AboutusCards/ContactCard/Contacts'

const Aboutus = () => {
  const [emailList, setEmailList] = useState([{id: 1, value: ""}]);
  const [phoneNumberList, setPhoneNumberList] = useState([{id: 1, value: ""}])
  const [contactList, setContactList] = useState(contacts) 
  const [showPanel, setShowPanel] = useState(false)
  const [showEditPanel, setShowEditPanel] = useState(false)
  const [editContactIndex, setEditContactIndex] = useState(0)

  return (
    <div className="aboutus-container">
      <p className="aboutus-heading">About Us</p>
      <AboutusHeading/>
      <AboutusContent/>
      <AboutusNavbar/>
      <AboutusCards
        showPanel={showPanel} toggleShowPanel={setShowPanel}
        contactList={contactList}
      />
      {
        showPanel &&
        <EditContact
          contact={contactList} updateContact={setContactList}
          showPanel={showPanel} toggleShowPanel={setShowPanel}
          showEditPanel={showEditPanel} setShowEditPanel={setShowEditPanel}
          setEditContactIndex={setEditContactIndex}
          updateEmail={setEmailList}
          updatePhoneNumber={setPhoneNumberList}
        />
      }
      {
        showEditPanel &&
        <AddContact
          contact={contactList} updateContact={setContactList}
          email={emailList} updateEmail={setEmailList}
          phoneNumber={phoneNumberList} updatePhoneNumber={setPhoneNumberList}
          showPanel={showPanel} toggleShowPanel={setShowPanel}
          showEditPanel={showEditPanel} setShowEditPanel={setShowEditPanel}
          editContactIndex={editContactIndex}
        />
      }
    </div>
  )
}

export default Aboutus