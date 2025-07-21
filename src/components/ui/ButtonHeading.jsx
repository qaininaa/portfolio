const ButtonHeading = ({ children, bg, color }) => {
  return (
    <>
      <button
        className={`${bg} ${color} p-2 px-5 rounded-full font-semibold hover:opacity-70`}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonHeading;
