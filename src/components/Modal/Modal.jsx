export const Modal = ({ card, setIsModalOpen }) => {
  const { id, make, model, year, type, mileage, img, rentalPrice } = card[0];

  const handleBackdropClick = event => {
    if (event.target.id !== 'backdrop') return;
    setIsModalOpen(false);
  };
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '50',

        background: 'rgba(0, 0, 0, 0.6)',
      }}
      onClick={handleBackdropClick}
      id="backdrop"
    >
      <div
        key={id}
        style={{
          position: 'fixed',
          width: '500px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid black',
          borderRadius: '15px',
          backgroundColor: 'white',
          zIndex: '52',
        }}
        id="modal"
      >
        <img src={img} alt={model} width="400px" />
        <h1>
          {make} {model}, {year}
        </h1>
        <p>
          {type} {mileage} {rentalPrice}
        </p>
      </div>
    </div>
  );
  // });
};
