interface PopUpProps {
  message: string;
  onClose: () => void;
}

export function PopUp({ message, onClose }: PopUpProps) {
  return (
    <div
      className="popup"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        backgroundColor: message.includes("success") ? "green" : "red",
        color: "white",
        borderRadius: "5px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
      }}
    >
      <p style={{ margin: 0 }}>{message}</p>
      <button
        type="button"
        onClick={onClose}
        style={{
          marginLeft: "10px",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ×
      </button>
    </div>
  );
}
