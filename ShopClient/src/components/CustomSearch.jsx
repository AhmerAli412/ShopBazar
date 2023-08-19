import React from "react";
import Header from "./Header";
import "./Custom.css";

const CustomSearch = () => {
  const [userData, setUserData] = React.useState([]);

  const [name, setName] = React.useState("");

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setUserData(data);
  }, []);

  const data = [
    { name: "MediaTek", battery: "4000", Ram: "6gb", price: 55000 },
    { name: "MediaTekCore2", battery: "4000", Ram: "6gb", price: 58000 },
    { name: "MediaTekCore3", battery: "5000", Ram: "6gb", price: 57500 },
    { name: "MediaTekCore4", battery: "5000", Ram: "6gb", price: 60000 },
    { name: "SnapdragonS1", battery: "5000", Ram: "4gb", price: 35000 },
    { name: "SnapdragonS2", battery: "4000", Ram: "4gb", price: 35000 },
    { name: "SnapdragonS3", battery: "6000", Ram: "4gb", price: 45000 },
    { name: "SnapdragonS4", battery: "4000", Ram: "4gb", price: 40000 },
    { name: "Snapdragon200", battery: "5000", Ram: "4gb", price: 45000 },
    { name: "Snapdragon205", battery: "5000", Ram: "4gb", price: 46000 },
    { name: "Snapdragon215", battery: "5000", Ram: "4gb", price: 47000 },
    { name: "Snapdragon400", battery: "4000", Ram: "6gb", price: 50000 },
    { name: "Snapdragon410", battery: "4000", Ram: "6gb", price: 52000 },
    { name: "Snapdragon425", battery: "4000", Ram: "6gb", price: 55000 },
    { name: "Snapdragon429", battery: "4000", Ram: "6gb", price: 57000 },
    { name: "Snapdragon460", battery: "4000", Ram: "8gb", price: 60000 },
    { name: "Snapdragon480", battery: "4000", Ram: "8gb", price: 65000 },
    { name: "Snapdragon490", battery: "4000", Ram: "8gb", price: 68000 },
    { name: "Snapdragon600", battery: "4000", Ram: "8gb", price: 70000 },
    { name: "Apple A10", battery: "3700", Ram: "6gb", price: 75000 },
    { name: "Apple A11", battery: "3800", Ram: "6gb", price: 95000 },
    { name: "Apple A12", battery: "4010", Ram: "6gb", price: 105000 },
    { name: "Apple A13", battery: "4000", Ram: "6gb", price: 125000 },
    { name: "Apple A14", battery: "4234", Ram: "6gb", price: 255000 },
    { name: "Apple A15", battery: "4150", Ram: "6gb", price: 395000 },
    { name: "Apple A15 bionic", battery: "4250", Ram: "8gb", price: 755000 },
    { name: "MediaTek", battery: "4000", Ram: "6gb", price: 55000 },
    { name: "MediaTek", battery: "4000", Ram: "6gb", price: 55000 },
    { name: "MediaTek", battery: "4000", Ram: "6gb", price: 55000 },
    { name: "MediaTek", battery: "4000", Ram: "6gb", price: 55000 },
    // { name: "Ahmer1", age: "29", profession: "se1", price: 300 },
    // { name: "Ahmer2", age: "27", profession: "se2", price: 400 },
    // { name: "Ahmer3", age: "26", profession: "se3", price: 500 },
    // { name: "Ahmer4", age: "25", profession: "se4", price: 600 },
  ];

  const handleSearch = () => {
    const newData = userData.filter((x) => x.name == name);

    setUserData(newData);
  };

  return (
    <div>
      <Header />
      <div className="s">
        <h2>
          Don't know <span className="ander">how much</span> does it cost?
        </h2>
      </div>
      <div className="container mt-5 mb-3">
        <table className="table">
          <tr>
            <td>
              <input
                type="text"
                placeholder="Enter processor..."
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <input type="text" placeholder="Enter battery..." />
              <br />
              <br />
              <input type="text" placeholder="Enter ram..." />
              <br />
              <br />
            </td>
            <td>
              {/* <button onClick={() => handleSearch()}>Search</button> */}

              <div class="form-check">
                <input
                 onClick={() => handleSearch()}
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Price may vary from brand to brand
                </label>
              </div>
              <br />
              <br />
             <div className="bu"><button onClick={() => setShow(!show)}>Predict</button></div> 
            </td>
          </tr>
        </table>
        <div className="Table">
          <thead>
            <div className="he">
              <tr>
                {/* <div className='hea1'><th >Name : </th></div>
                    <div className='hea1'><th  >Age :</th></div>
                    <div className='hea1'><th  >Profession :</th></div> */}
                <div className="hea1">
                  <th>Price :</th>
                </div>
              </tr>
            </div>
          </thead>
          <tbody>
            {show &&
              userData.map((item) => (
                <tr>
                  {/* <td>{item.name}</td>
                            <br/>
                            <td>{item.age}</td>
                            <td>{item.profession}</td> */}
                  <td>{item.price}</td>
                </tr>
              ))}
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default CustomSearch;
