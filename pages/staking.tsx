import Header from "@components/Header/Header";
import Staking from "@components/Staking/Staking";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const StakingPage: NextPage = () => {
  return (
    <div>
      <NextSeo title="Staking" />
      <Header />
      <Staking />
    </div>
  );
};
export default StakingPage;
