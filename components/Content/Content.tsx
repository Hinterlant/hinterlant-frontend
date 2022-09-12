import axios from "axios";
import { IContent } from "models/IContent";
import { IContentData } from "models/IContentData";
import { useEffect, useState } from "react";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/gameon-json/content";

export default function Content() {
  const [data, setData] = useState<IContent>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="content-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="content intro">
              <span className="intro-text">{data?.subHeading}</span>
              <h2>{data?.heading}</h2>
              <p>{data?.excerpt}</p>
              <ul className="list-unstyled items mt-5">
                {data?.contentData.map((item: IContentData, idx) => {
                  return (
                    <li key={`cd_${idx}`} className="item">
                      {/* Content List */}
                      <div className="content-list d-flex align-items-center">
                        <div className="content-icon">
                          <span className={item.featured}>
                            <i className={item.icon} />
                          </span>
                        </div>
                        <div className="content-body ml-4">
                          <h3 className="m-0">{item.title}</h3>
                          <p className="mt-3">{item.content}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Blockchain Animation */}
            <div className="wrapper-animation d-none d-md-block">
              <div className="blockchain-wrapper">
                <div className="pyramid">
                  <div className="square">
                    <div className="triangle" />
                    <div className="triangle" />
                    <div className="triangle" />
                    <div className="triangle" />
                  </div>
                </div>
                <div className="pyramid inverse">
                  <div className="square">
                    <div className="triangle" />
                    <div className="triangle" />
                    <div className="triangle" />
                    <div className="triangle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
