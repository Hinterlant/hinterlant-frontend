import Link from "next/link";
import { useState } from "react";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/gameon-json/footer";

export default function Footer() {
  const [data, setData] = useState({
    copyright: "©2022 IGOPAD, All Rights Reserved By",
    img: "/img/logo.png",
  });
  const [socialData, setSocialData] = useState([
    {
      id: 1,
      link: "https://www.facebook.com/",
      icon: "icon-social-facebook",
    },
    {
      id: 2,
      link: "https://twitter.com/igopad",
      icon: "icon-social-twitter",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/igopad",
      icon: "icon-social-linkedin",
    },
    {
      id: 4,
      link: "https://www.reddit.com/igopad",
      icon: "icon-social-reddit",
    },
    {
      id: 5,
      link: "https://discord.com/igopad",
      icon: "icon-social-vkontakte",
    },
    {
      id: 6,
      link: "https://www.youtube.com/igopad",
      icon: "icon-social-youtube",
    },
  ]);
  const [widgetData, setWidgetData] = useState([
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 2,
      text: "Projects",
      link: "/projects",
    },
    {
      id: 3,
      text: "Staking",
      link: "/staking",
    },
    {
      id: 4,
      text: "Contact",
      link: "/contact",
    },
    {
      id: 5,
      text: "Privacy Policy",
      link: "/privacy-policy",
    },
  ]);

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Logo */}
              <Link href="/">
                <a className="navbar-brand">
                  <img src={data.img} alt="" />
                </a>
              </Link>
              {/* Social Icons */}
              <div className="social-icons d-flex justify-content-center my-4">
                {socialData.map((item, idx) => {
                  return (
                    <Link target="_blank" key={`fsd_${idx}`} href={item.link}>
                      <a className="facebook">
                        <i className={item.icon} />
                        <i className={item.icon} />
                      </a>
                    </Link>
                  );
                })}
              </div>
              <ul className="list-inline">
                {widgetData.map((item, idx) => {
                  return (
                    <li key={`fwd_${idx}`} className="list-inline-item">
                      <a href={item.link}>{item.text}</a>
                    </li>
                  );
                })}
              </ul>
              {/* Copyright Area */}
            </div>
            {/* Scroll To Top */}
            <div id="scroll-to-top" className="scroll-to-top">
              <a href="#header" className="smooth-anchor">
                <i className="fa-solid fa-arrow-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
/* class Footer extends Component {
  state = {
    data: {},
    socialData: [],
    widgetData: [],
  };
  componentDidMount() {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        this.setState({
          data: res.data,
          socialData: res.data.socialData,
          widgetData: res.data.widgetData,
        });
        // console.log(data)
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      
    );
  }
} */
