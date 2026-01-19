import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CallToAction } from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <CallToAction />
    </Layout>
  );
};

export default Index;
