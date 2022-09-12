import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar gameon-navbar navbar-expand"
      >
        <div className="container header">
          {/* Logo */}
          <Link href={"/"}>
            <a className="navbar-brand">
              <Image width={43} height={52} src="/img/logo.png" alt="IGOPAD" />
            </a>
          </Link>
          <div className="ml-auto" />
          {/* Navbar Nav */}
          <ul className="navbar-nav items mx-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/staking"}>
                <a className="nav-link">Staking</a>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          {/* Navbar Toggler */}
          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#menu"
              >
                <i className="icon-menu m-0" />
              </a>
            </li>
          </ul>
          {/* Navbar Action Button */}
          <ul className="navbar-nav action">
            <li className="nav-item">
              <a
                href="/wallet-connect"
                className="btn ml-lg-auto btn-bordered-white"
              >
                <i className="icon-wallet mr-md-2" />
                Connect Wallet
              </a>
            </li>
          </ul>
          {/* Navbar Icons */}
          <ul className="navbar-nav icons">
            <li className="nav-item">
              <Link href={"/auth/login"}>
                <a className="btn ml-lg-3 btn-bordered-white">
                  <i className="icon-user" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
