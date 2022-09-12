import { useState } from "react";
import Link from "next/link";

export default function Reset() {
  const [initData] = useState({
    sub_heading: "Forgot",
    heading: "Reset your password",
    btn: "Get Reset Link",
    signin_title: "Remember your password?",
    sign_btn: "Sign In",
  });
  return (
    <section className="apply-area vh-100">
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-12 col-md-7">
            <div className="apply-form card no-hover">
              {/* Intro */}
              <div className="intro d-flex justify-content-between align-items-end mb-4">
                <div className="intro-content">
                  <span className="intro-text">{initData.sub_heading}</span>
                  <h3 className="mt-3 mb-0">{initData.heading}</h3>
                </div>
              </div>
              <form action="#">
                <div className="form-group mb-0">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@yourmail.com"
                  />
                  <small className="form-text mt-2">
                    Enter your email address
                  </small>
                </div>
                <button type="submit" className="btn btn-bordered active my-4">
                  {initData.btn} <i className="icon-login ml-2" />
                </button>
                <span className="notice d-block">
                  {initData.signin_title}{" "}
                  <Link href={"/auth/login"}>
                    <a>{initData.sign_btn}</a>
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
