import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";




function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src="https://www.antiersolutions.com/wp-content/uploads/2022/11/web-3-unique.png" alt="logo" className="frontPageLogo" />
        <h2> Hey There 👋 </h2>
        <h4 className="h4"> Welcome to your Web3 Wallet</h4>
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          Codes of this wallet on:
          <a href="https://github.com/EskandarAtrakchi/web3_wallet" target="_blank">
            <em>EskandarAtrakchi</em>
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
