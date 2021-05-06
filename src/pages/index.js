import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import FeatureTwo from 'sections/feature-2';
import FeatureThree from 'sections/feature-3';
import Hero from 'sections/hero';
import FeatureOne from 'sections/feature-1';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="become a better you"
          title="accountable."
        />
        <Hero />
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
      </Layout>
    </ThemeProvider>
  );
}
