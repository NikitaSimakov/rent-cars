import { AiOutlineClose } from 'react-icons/ai';
import css from './Modal.module.css';
export const Modal = ({ card, setIsModalOpen }) => {
  const { id, make, model, year, type, mileage, img, rentalPrice } = card[0];

  const handleBackdropClick = event => {
    if (event.target.id !== 'backdrop') return;
    setIsModalOpen(false);
  };
  return (
    <div
      className={css.modalBackdrop}
      onClick={handleBackdropClick}
      id="backdrop"
    >
      <div className={css.modalWrapper} key={id} id="modal">
        <img src={img} alt={model} width="400px" />
        <h1>
          {make} {model}, {year}
        </h1>
        <p>
          {type} {mileage} {rentalPrice}
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className={css.closeBtn}
          type="button"
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
  // });
};
