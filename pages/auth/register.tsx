import Register from "@components/Authentication/Register";
import Header from "@components/Header/Header";
import ModalMenu from "@components/Modal/ModalMenu";
import ModalSearch from "@components/Modal/ModalSearch";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const RegisterPage: NextPage = () => {
  return (
    <div className="main">
      <NextSeo title="IGOPAD | Create an Account" />
      <Header />
      <Register />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
};

export default RegisterPage;
