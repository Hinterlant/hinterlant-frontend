import Content from "@components/Content/Content";
import Cta from "@components/Cta/Cta";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Hero from "@components/Hero/Hero";
import ModalMenu from "@components/Modal/ModalMenu";
import ModalSearch from "@components/Modal/ModalSearch";
import Project from "@components/Project/ProjectOne";
import ProjectTwo from "@components/Project/ProjectTwo";
import Work from "@components/Work/Work";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const HomePage: NextPage = () => {
  return (
    <div className="main">
      <NextSeo title="IGOPAD" />
      <Header />
      <Hero />
      <Project />
      <ProjectTwo />
      <Content />
      {/* <Team /> */}
      <Work />
      <Cta />
      <Footer />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
};

export default HomePage;
