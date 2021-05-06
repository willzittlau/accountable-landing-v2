import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO
          description="become a better you"
          title="accountable. | About"
        />
      </Layout>
    </ThemeProvider>
  );
}
