const Container = ({ children }) => {
  return (
    <>
      <div className="card" style={{ width: "75%" }}>
        {children}
      </div>
    </>
  );
};

export default Container;
