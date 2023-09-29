import Header from "../components/Header/Header";
import Links from "../components/Links/Links";
import Footer from "../components/Footer/Footer";
import { linkItems } from "../data/linkData";
import Dates from "../components/Dates/Dates";
import { shows } from "../data/showDateData";
import { headerData } from "../data/headerData";

const Main: React.FC = () => {
  return (
    <>
      <Header headerProps={headerData} />
      <Links linkItems={linkItems} />
      <Dates dates={shows} />
      <Footer />
    </>
  );
};

export default Main;
