const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet;
//for reference
// const Pet = (props) => {
//     return React.createElement("div", null, [
//       React.createElement("h1", null, props.name),
//       React.createElement("h2", null, props.animal),
//       React.createElement("h2", null, props.breed),
//     ]);
//   };
