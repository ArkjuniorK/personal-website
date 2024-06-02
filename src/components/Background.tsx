import bg from "/bg.jpg";

function Background() {
  return (
    <img
      src={bg}
      className="w-full h-full absolute z-0 object-cover object-center overflow-hidden"
      alt="background"
    />
  );
}

export default Background;
