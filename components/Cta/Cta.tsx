import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { ICta } from "models/ICta";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/gameon-json/cta";

export default function Cta() {
  const [data, setData] = useState<ICta>();
  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="cta-area p-0">
      <div className="container">
        <div className="row">
          <div className="col-12 card">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-5 text-center">
                <img src={data?.img} alt="" />
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0">
                <h2 className="m-0">{data?.title}</h2>
                <p>{data?.content}</p>
                <a
                  className="btn btn-bordered active d-inline-block"
                  href="/apply"
                >
                  <i className={data?.btnIcon} />
                  {data?.btn}
                </a>
              </div>
            </div>
            <a className="cta-link" href="/apply" />
          </div>
        </div>
      </div>
    </section>
  );
}
