import "./home.css";
import Featcherd from "../../components/featcherd/Featcherd";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import MyNav from "../../components/nav/MyNav";
import PropertyList from "../../components/propertyList/PropertyList";
import Recommended from "../../components/recommended/Recommended";

function Home() {
  return (
    <>
      <MyNav></MyNav>
      <Header />
      <div className="homeContainer">
        <PropertyList />
        <Featcherd />
        <Recommended />
      </div>
      <MailList />
      <Footer />
    </>
  );
}

export default Home;
