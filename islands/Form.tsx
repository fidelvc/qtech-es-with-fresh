import { useState } from "preact/hooks";
import { ContactForm } from "../components/ContactForm/ContactForm.tsx";
import { PopUp } from "../components/ContactForm/PopUp.tsx";

export default function Form() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        body: formData,
      });
      const message = response.ok
        ? "Form submitted successfully!"
        : "Form submission failed. Please try again.";
      setPopupMessage(message);
    } catch (error) {
      console.error("Error:", error);
      setPopupMessage("An error occurred. Please try again.");
    } finally {
      setShowPopup(true);
    }
  };

  return (
    <div>
      <ContactForm handleSubmit={handleSubmit} />
      {showPopup && (
        <PopUp
          message={popupMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
