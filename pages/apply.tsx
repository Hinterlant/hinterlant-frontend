import Apply from "@components/Apply/Apply";
import Header from "@components/Header/Header";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const ApplyPage: NextPage = () => {
  return (
    <div>
      <NextSeo title="Apply" />
      <Header />
      <Apply />
    </div>
  );
};
export default ApplyPage;
