export const Modal = ({ card }) => {
  const { id, make, model, year, type, mileage, img, rentalPrice } = card[0];

  // card.map(({ id, make, model, year, type, mileage, img, rentalPrice }) => {
  //   console.log(id, make, model, year, type, mileage, img, rentalPrice);
  return (
    <div
      key={id}
      style={{
        position: 'absolute',
        width: '500px',
        border: '1px solid black',
        borderRadius: '15px',
        backgroundColor: 'white',
      }}
    >
      <img src={img} alt={model} width="400px" />
      <h1>
        {make} {model}, {year}
      </h1>
    </div>
  );
  // });
};
