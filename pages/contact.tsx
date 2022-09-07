import Contact from "@components/Contact/Contact";
import Header from "@components/Header/Header";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const ContactPage: NextPage = () => {
  return (
    <div>
      <NextSeo title="ContactPage" />
      <Header />
      <Contact />
    </div>
  );
};
export default ContactPage;
