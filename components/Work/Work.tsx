import axios from "axios";
import { IWork } from "models/IWork";
import { useEffect, useState } from "react";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/gameon-json/work";

export default function Work() {
  const [data, setData] = useState<IWork>();
  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="work-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end mb-4">
              <div className="intro-content">
                <span className="intro-text">{data?.subHeading}</span>
                <h3 className="mt-3 mb-0">{data?.heading}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row items">
          {data?.workData.map((item, idx) => {
            return (
              <div key={`wd_${idx}`} className="col-12 col-sm-6 col-lg-4 item">
                {/* Single Work */}
                <div className="single-work">
                  <i className={item.icon} />
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
