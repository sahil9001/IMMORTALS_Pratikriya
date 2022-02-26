import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Dashboard from 'sections/dashboard';
import Team from 'sections/team';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';
import Login from 'components/authPages/login';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Login /> */}
      <Layout>
        <SEO
          title="Pratikriya"
          description="Voice Analysis of call in Emergency Response System"
        />
        <Banner />
        <Support />
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
