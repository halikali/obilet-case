import "./Modal.style.scss";

const Modal = (props) => {
  return (
    <div className="modal" {...props}>
      <div className="modal__content"> {props.children} </div>
    </div>
  );
};

export default Modal;
