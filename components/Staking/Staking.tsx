import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { IStakingPackage } from "models/IStakingPackage";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/gameon-json-2/tier";

export default function Staking() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data.tierData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="tier-system-area">
      <div className="container">
        <div className="row items">
          {data.map((item: IStakingPackage, idx: number) => {
            return (
              <div key={`tid_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                {/* Single Tier Card */}
                <div className="card no-hover tier-card text-center">
                  <h3 className="title mb-0">{item.title}</h3>
                  <span className="category mt-2">{item.category}</span>
                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li>
                        <span>Staking Requirement</span>
                        <span>{item.amount}</span>
                      </li>
                      <li>
                        <span>Allocation Size</span>
                        <span>{item.size}</span>
                      </li>
                      <li>
                        <span>Allocation Type</span>
                        <span>{item.type}</span>
                      </li>
                      <li>
                        <span>Locked for</span>
                        <span>{item.locked}</span>
                      </li>
                      <li>
                        <span>Pool Weight</span>
                        <span>{item.weight}</span>
                      </li>
                    </ul>
                  </div>
                  {/* Tier Type */}
                  <div className="tier-type">
                    <span>{item.tierType}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
