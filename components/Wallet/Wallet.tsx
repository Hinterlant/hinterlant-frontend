import axios from "axios";
import { IWallet } from "models/IWallet";
import { useEffect, useState } from "react";
import Image from "next/future/image";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/gameon-json-1/wallet";
export default function Wallet() {
  const [data, setData] = useState<IWallet>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
        // console.log(data)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="wallet-connect-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center">
              <div className="intro-content">
                <span className="intro-text">{data?.subHeading}</span>
                <h3 className="mt-3 mb-0">{data?.heading}</h3>
                <p>{data?.content}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center items">
          {data?.walletData.map((item, idx) => {
            return (
              <div key={`wd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                {/* Single Wallet */}
                <div className="card single-wallet">
                  <a className="d-block text-center" href="/login">
                    <Image
                      src={item.img}
                      alt={""}
                      height={80}
                      width={80}
                      className="avatar-lg"
                    />
                    <h4 className="mb-0">{item.title}</h4>
                    <p>{item.content}</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
