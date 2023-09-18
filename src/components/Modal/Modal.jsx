import { AiOutlineClose } from 'react-icons/ai';
import css from './Modal.module.css';
export const Modal = ({ card, setIsModalOpen }) => {
  const {
    id,
    make,
    model,
    year,
    type,
    mileage,
    img,
    rentalPrice,
    description,
    accessories,
    rentalConditions,
  } = card[0];

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
        <img className={css.img} src={img} alt={model} width="400px" />
        <div className={css.title}>
          <h2>{make}</h2> <h2 className={css.model}>{model}</h2> <h2>{year}</h2>
        </div>
        {/* <h1>
          {make} {model}, {year}
        </h1> */}
        <p>
          {type} {mileage} {rentalPrice}
        </p>
        <p className={css.description}>{description}</p>
        <p className={css.accessories}>Accessories and functionalities: </p>
        <div className={css.accessoriesBox}>
          {accessories.map(acces => (
            <p className={css.accessory}>{acces}</p>
          ))}
        </div>
        <div className={css.rentalConditions}>
          <p>Rental conditions:</p>
          <p>{rentalConditions}</p>
        </div>
        <a className={css.rentalLink} href="tel:+380730000000">
          Rental Car
        </a>
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
};
