import { useEffect, useState } from "react";

export default function Contact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("Submit");
  const [showmessage, setShowMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (firstName || lastName || email || message) {
      setSubmitMessage("Submit");
      setShowModal(false);
    }
  }, [firstName, lastName, email, message]);

  function handleSubmitButton() {
    setShowMessage(true);
    setSubmitMessage("Your message has been sent");

    setShowModal(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact-page-container">
      <div className="page-title">Contact Page</div>
      <div className="page-subtitle">Please send us a message!</div>
      <div className="info-wrapper">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="How can we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmitButton}>{submitMessage}</button>
        <div className="popup-message">
          {showModal ? "Your message as been sent to the product master" : ""}
        </div>
      </div>
    </div>
  );
}
