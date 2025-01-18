import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controles = () => {
  const dispatch = useDispatch();
  const textValue = useRef(null);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(textValue.current.value));
  };

  const handleSub = () => {
    dispatch(counterActions.subtract(textValue.current.value));
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center custom-gap">
        <input type="text" placeholder="Enter a number" ref={textValue} />
        <button type="button" className="btn btn-success" onClick={handleAdd}>
          Addition
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Subtraction
        </button>
      </div>
    </>
  );
};

export default Controles;
