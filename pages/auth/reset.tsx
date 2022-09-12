import Reset from "@components/Authentication/Reset";
import Header from "@components/Header/Header";
import ModalMenu from "@components/Modal/ModalMenu";
import ModalSearch from "@components/Modal/ModalSearch";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const AuthResetPage: NextPage = () => {
  return (
    <div className="main">
      <NextSeo title="IGOPAD | Forgot Password" />
      <Header />
      <Reset />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
};

export default AuthResetPage;
