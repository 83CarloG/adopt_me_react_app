const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
      <h2>{props.city}</h2>
      <hr />
    </div>
  );
};

export default Pet;
