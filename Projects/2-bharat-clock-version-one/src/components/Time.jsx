function Time() {
  let currTime = new Date();

  return (
    <p className="lead">
      This is the current time: <span>{currTime.toLocaleDateString()}</span> -{" "}
      <span>{currTime.toLocaleTimeString()}</span>
    </p>
  );
}

export default Time;
