import React from "react";
import allwallet from "../allwallet-logo.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src={allwallet} alt="logo" className="frontPageLogo" />
        <h4 className="h4"> Welcome to your AllWallet</h4>
        <Button onClick={() => navigate("/yourwallet")} className="frontPageButton">
          Create A Wallet
        </Button>
        <Button onClick={() => navigate("/recover")} className="frontPageButton secondaryButton">
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          Need help? Contact:{" "}
          <a href="/" target="_blank" rel="noreferrer">
            AllWalllet support
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
