import './Modal.module.css';

const Modal = ({ advert, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{advert.name}</h2>
        <p>{advert.description}</p>
        {/* Додаємо таби для переключення між інформацією */}
        <form>
          <label>
            Name: <input type="text" required />
          </label>
          <label>
            Email: <input type="email" required />
          </label>
          <label>
            Booking Date: <input type="date" required />
          </label>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
