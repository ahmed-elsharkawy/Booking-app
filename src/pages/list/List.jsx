import "./list.css";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import MyNav from "../../components/nav/MyNav";
import SearchBar from "./searchBar/SearchBar";
import SearchResult from "./searchResult/SearchResult";

function List() {
  const location = useLocation();
  return (
    <>
      <MyNav />
      <Header type={"list"} />
      <div className="searchList">
        <div className="listContainer">
          <div className="searchBar">
            <SearchBar></SearchBar>
          </div>
          <div className="searchResult">
            <SearchResult></SearchResult>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </>
  );
}

export default List;
