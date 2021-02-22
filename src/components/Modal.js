const Modal = () => {
  const onClose = (event) => {
    props.onClose && props.onClose(event);
  };

  if (!props.open) {
    return null;
  } else {
    return (
      <>
        <h2>{props.name}</h2>

        <img src={props.image} alt={`${props.name}`} />

        <div>
          {props.moves.map((element) => {
            let str = element;
            let newStr = str.replace(/-/g, ' ');
            return <p style={{ textAlign: 'center' }}>{newStr}</p>;
          })}
        </div>
        <button onClick={onClose}>close</button>
      </>
    );
  }
};

export default Modal;
