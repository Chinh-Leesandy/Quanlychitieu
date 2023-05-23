import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState, useEffect } from "react";
import "./assets/wallet.css";
export const Wallet = () => {
  const [wallet, setWalllet] = useState({});
  useEffect(() => {
    fetch("http://localhost:8080/wallet")
      .then((response) => response.json())
      .then((data) => setWalllet(data))
      .catch((err) => console.log(err));
  }, {});
  return (
    <div>
      <div className="container">
        <div className="day"></div>
        <div className="wallet">
          <div className="row align-items-center">
            <label className="topic_wallet" htmlFor="text">
              Thông tin ví của {wallet.name}
            </label>
            <div className="col avt_wallet">
              <span>{wallet.name}</span>
              <div className="avt">
                <img
                  src="https://kynguyenlamdep.com/wp-content/uploads/2022/08/avatar-nu-giau-mat-ngau-chat.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col">
              <div className="info">
                <span className="text-center" style={{fontSize : '1.2rem'}}>Thông tin</span>
                <div className="name_wallet d-flex align-items-start justify-content-center">
                  <span>Name:</span>
                  <input
                    type="text"
                    name="NameWallet"
                    id="NameWallet"
                    value={wallet.name}
                    disabled 
                  />
                </div>
                <div className="totalIncome_wallet d-flex align-items-start justify-content-center">
                  <span>TotalIncome: </span>
                  <input
                    type="text"
                    name="IncomeWallet"
                    id="IncomeWallet"
                    value={wallet.totalIncome}
                    disabled
                  />
                </div>
                <div className="totalExpense_wallet d-flex align-items-start justify-content-center">
                  <span>TotalExpense: </span>
                  <input
                    type="text"
                    name="TotalExpense"
                    id="TotalExpense"
                    value={wallet.totalExpense}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
