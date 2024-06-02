import bg from "../assets/bg.png";

function Background() {
  return (
    <div>
      <div className="w-full h-full bg-darker absolute bg-opacity-95 backdrop-blur-xl z-10 object-cover object-center overflow-hidden"></div>
      <img
        src={bg}
        className="w-full h-full absolute z-0 object-cover object-center overflow-hidden"
        alt="background"
      />
    </div>
  );
}

export default Background;
