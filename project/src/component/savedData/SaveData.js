import axios from "axios";
import React, { useEffect, useState } from "react";
import "../savedData/SaveData.css"
const SaveData = () => {
  useEffect(() => {
    getApiData();
  }, []);
  const getApiData = async () => {
    try {
      const res = await axios.get(`http://localhost:8084/api/v1/allData`);
      setData(res?.data?.getData);
    } catch (error) {
      console.log(error.response);
    }
  };
  const [data, setData] = useState([]);

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8084/api/v1/delete/${id}`
      );
      console.log(res);
      if (res.data.success === true) {
        alert("user delete successfully")
        window.location.reload();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const [input, setInput] = useState();
  const [searchData, setSearchData] = useState([]);
  const dataSearch = async () => {
    try {
      console.log(input);
      const res = await axios.get(
        `http://localhost:8084/api/v1/allData?keyword=${input}`
      );
      setSearchData(res?.data?.getData);
    } catch (error) {
      return error;
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
    <>
      {input ? (
        <table class="table caption-top w-75 m-auto mt-4  text-center">
            <div className="d-flex">
            <div>
          <caption className="saveHeading">Saved Data</caption>
          </div>
          <div class="input-group ">
            <div>
            <input
              type="text"
              class="form-control rounded w-auto"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e)=>setInput(e.target.value)}
            />
            </div>
            <div>
            <button type="button" class="btn btn-outline-primary" onClick={dataSearch}>
              search
            </button>
            </div>
          </div>
          </div>
          {searchData?.slice(page.start, page.end).map((elem, index) => {
            const { _id, name, symbol, marketPrice, currentPrice } = elem;
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{name}</th>
                  <td>{symbol}</td>
                  <td>{marketPrice}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => deleteUser(_id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>{currentPrice}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <table class="table caption-top w-75 m-auto mt-4  text-center">
          <div className="d-flex">
            <div>
          <caption className="saveHeading">Saved Data</caption>
          </div>
          <div class="input-group ">
            <div>
            <input
              type="text"
              class="form-control rounded w-auto"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e)=>setInput(e.target.value)}
            />
            </div>
            <div>
            <button type="button" class="btn btn-outline-primary" onClick={dataSearch}>
              search
            </button>
            </div>
          </div>
          </div>
          {data?.slice(page.start, page.end).map((elem, index) => {
            const { _id, name, symbol, marketPrice, currentPrice } = elem;
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{name}</th>
                  <td>{symbol}</td>
                  <td>{marketPrice}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => deleteUser(_id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>{currentPrice}</td>
                </tr>
              </tbody>
            );
          })}
          <div className="d-flex">
           <button className="btn btn-primary w-50" onClick={prev}>Prev</button>
        <button className="btn btn-primary w-50" onClick={next}>Next</button>
        </div>
        </table>
      )}
    </>
  );
};

export default SaveData;
