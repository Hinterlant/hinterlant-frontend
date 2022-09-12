import Cta from "@components/Cta/Cta";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import ModalMenu from "@components/Modal/ModalMenu";
import ModalSearch from "@components/Modal/ModalSearch";
import Wallet from "@components/Wallet/Wallet";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const WalletConnectPage: NextPage = () => {
  return (
    <div className="main">
      <NextSeo title="IGOPAD" />
      <Header />
      <Wallet />
      <Cta />
      <Footer />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
};

export default WalletConnectPage;
