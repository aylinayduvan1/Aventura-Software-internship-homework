import React,{useState} from "react";
import Americano from "../components/Americano";
import Kore from "../components/Kore";
import Italian from "../components/Italian";
import Navbar from "../components/Navbar";
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import RamenDiningSharpIcon from '@mui/icons-material/RamenDiningSharp';


function HomePage() {
  const [country, setCountry] = useState("");


  const handleButtonClick = (e) => {
    setCountry(e);
  };

  return (
    <div className="home-page">
    <Navbar/>
      <div className="home-body">
          <div className="body-title">
          <h2>Hangi Ülkenin Yemekleri Gelsin?</h2>
          </div>
          <div className="country-button">
          <button onClick={() => handleButtonClick("italian")}><LocalPizzaOutlinedIcon style={{ fontSize: "40" }} />İtalyan</button>
          <button onClick={() => handleButtonClick("japon")}><RamenDiningSharpIcon style={{ fontSize: "40" }}/>Japon</button>
          <button onClick={() => handleButtonClick("americano")}><LunchDiningOutlinedIcon style={{ fontSize: "40" }}/>American</button>
          </div>
          {country === "italian" && <Italian />}
          {country === "japon" && <Kore />}
          {country === "americano" && <Americano />}
          </div>
    </div>
  );
}

export default HomePage;