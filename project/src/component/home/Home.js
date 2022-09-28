import React from "react";
import "../home/Home.css";
import SaveData from "../savedData/SaveData";
import Table from "../table/Table";
const Home = () => {
  const data = [
    {
      id: "1",
      name: "Google",
      img: "./images/GOOGL.png",
      price: "1515",
    },
    {
      id: "2",
      name: "FB",
      img: "./images/FB.png",
      price: "1515",
    },
    {
      id: "3",
      name: "Amazon",
      img: "./images/AMZN.svg",
      price: "1515",
    },
  ];

  const tableData = [
    {
      id: "1",
      companyName: "141 Capital Inc",
      symbol: "ONCP",
      marketCap: "145.4k",
      button: "View",
      currentPrice: "0.001",
    },
    {
      id: "2",
      companyName: "Cardlytics Inc",
      symbol: "CDLX",
      marketCap: "1.8B",
      button: "Save Data",
      currentPrice: "66",
    },
  ];
  return (
    <div >
      <div className="main-box">
        <div className="content-box">
          <div className="cards">
            {data.map((elem, index) => {
              const { name, img, price } = elem;
              return (
                <div className="card" key={index}>
                  <div className="card-logo">
                    <div>
                      <p className="google">{name}</p>
                    </div>
                    <div>
                      <img src={img} alt="logo" className="google-logo" />
                    </div>
                  </div>
                  <div className="price">
                    <p className="usd">{price}USD</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="homeContainer">
        <div className="shadow p-3 mb-5 bg-body rounded w-75 m-auto mt-5">
      <Table />
      </div>
      <div className="shadow p-3 mb-5 bg-body rounded w-75 m-auto mt-5">
      <SaveData/>
      </div>
      </div>
    </div>
  );
};

export default Home;
