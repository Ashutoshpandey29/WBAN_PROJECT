//import "./styles.css";
import DiagnosisForm from "./DiagnosisForm";
import FlipCard from "./FlipCard";
import Organs from "./Organs";
import SymptomsInput from "./search";
import Parameters from "./Parameters";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./footer";

export default function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1>NAVBAR</h1>
      </div>
      <div className="top-container">
        <SymptomsInput className="text-box" />
      </div>
      <div className="diagnosis">
        <form>
          {Parameters.map((input) => {
            return <DiagnosisForm text={input.text} />;
          })}
        </form>
      </div>
      <div className="cards-container">
        <Carousel
          swipeable={true}
          draggable={true}
          arrows={true}
          showDots={true}
          keyBoardControl={true}
          responsive={responsive}
        >
          {Organs.map((organ, index) => {
            return (
              <FlipCard
                key={index}
                id={organ.id}
                name={organ.name}
                symptoms={organ.symptoms}
                img={organ.img}
              />
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
