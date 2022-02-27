import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Support from "sections/support";
import PremiumFeature from "sections/premium-feature";
import AppFeature from "sections/app-feature";
import Team from "sections/team";
import Testimonials from "sections/testimonials";
import Subscribe from "sections/subscribe";
import Login from "components/authPages/login";
import AudioUpload from "components/dashboard/audioUpload";
import AudioList from "components/dashboard/audioList";
// import Dashboard from "components/dashboard/dashboard";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      {/* <AudioUpload/> */}
      {/* <AudioList/> */}
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <Layout>
        <SEO
          title="Pratikriya"
          description="Voice Analysis of call in Emergency Response System"
        />
        <Banner />
        <Support />
        {/* <AudioList /> */}
        {/* <PremiumFeature />
        <AppFeature />
        <Dashboard />
        <Pricing />
        <Testimonials /> */}
        <Team />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
