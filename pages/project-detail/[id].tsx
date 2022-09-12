import Cta from "@components/Cta/Cta";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import ModalMenu from "@components/Modal/ModalMenu";
import ModalSearch from "@components/Modal/ModalSearch";
import Project from "@components/Project/ProjectFour";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import ProjectDetail from "@components/Project/ProjectDetail";

const ProjectDetailPage: NextPage = () => {
  return (
    <div>
      <NextSeo title="Projects" />
      <Header />
      <ProjectDetail />
      <Cta />
      <Footer />
      <ModalSearch />
      <ModalMenu />
    </div>
  );
};
export default ProjectDetailPage;
