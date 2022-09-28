import React, { useEffect, useState } from "react";
import axios from "axios";
import { postFetch } from "../../api/Api";

const Table = () => {
  useEffect(() => {
    getApiData();
  }, []);
  const [data, setData] = useState([]);
  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.binance.com/api/v3/ticker/24hr");
      setData(res.data);
    } catch (error) {
      return error;
    }
  };

  const [dataRes, setDataRes] = useState(false);

  const sendData = async (symbol, highPrice, lowPrice) => {
    const saveData = {
      name: symbol,
      symbol: symbol,
      marketPrice: highPrice,
      currentPrice: lowPrice,
    };
    console.log(saveData);
    try {
      const res = await postFetch(
        "http://localhost:8084/api/v1/userDataSave",
        saveData
      );
      console.log(res)
      if(res===undefined){
        alert("data saved successfully")
        window.location.reload()
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const[page,setPage]=useState({
    start:0,
    end:5
  })
  const next=()=>{
    setPage({start:page.start+5,end:page.end+5})
  }
  const prev=()=>{
    if(page.end>5){
      setPage({start:page.start-5,end:page.end-5})
    }
  }
  
  return (
    <div>
      <table class="table caption-top w-75 m-auto mt-4  text-center">
        <caption>Stock Details Table</caption>
        <thead>
          <tr>
            <th scope="col">COMPANY NAME</th>
            <th scope="col">SYMBOL</th>
            <th scope="col">MARKET CAP</th>
            <th scope="col"></th>
            <th scope="col">CURRENT PRICE</th>
          </tr>
        </thead>
        {data?.slice(page.start, page.end)?.map((elem, index) => {
          
          const { symbol, highPrice, lowPrice } = elem;
          return (
            <>
              <tbody>
                <tr key={index}>
                  <th scope="row">{symbol}</th>
                  <td>{symbol}</td>
                  <td>{highPrice}</td>
                  <td>
                    {dataRes? (
                      <button
                        className="btn btn-primary"
                        onClick={() => sendData(symbol, highPrice, lowPrice)}
                      >
                         View
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => sendData(symbol, highPrice, lowPrice)}
                      >
                          Save Data
                      </button>
                    )}
                  </td>
                  <td>{lowPrice}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      <div className="d-flex ">
        <button className="btn btn-primary w-50" onClick={prev}>Prev</button>
        <button className="btn btn-primary w-50" onClick={next}>Next</button>
        </div>
      </table>
    </div>
  );
};

export default Table;
