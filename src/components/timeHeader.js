import "../components/timeHeader.css";
//greeting and image header component
const TimeHeader = ({ greeting }) => {
  //rendering image based off time
  let headerImg;
  if (greeting === "Morning") {
    headerImg = "morningImg";
  } else if (greeting === "Afternoon") {
    headerImg = "afternoonImg";
  } else {
    headerImg = "eveningImg";
  }

  return (
    <div>
      {/* top greeting message */}
      <p className="w-full flex justify-center items-center h-16 text-center FRGreen text-3xl thin">
        Good {greeting}
      </p>
      {/* top banner image changing based on time */}
      <div id={headerImg} className=" h-32 md:h-96 w-full"></div>
    </div>
  );
};

export default TimeHeader;
