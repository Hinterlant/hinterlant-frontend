import Login from "@components/Authentication/Login";
import Header from "@components/Header/Header";
import ModalMenu from "@components/Modal/ModalMenu";
import ModalSearch from "@components/Modal/ModalSearch";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const LoginPage: NextPage = () => {
  return (
    <div className="main">
      <NextSeo title="IGOPAD | Sign In" />
      <Header />
      <Login />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
};

export default LoginPage;
