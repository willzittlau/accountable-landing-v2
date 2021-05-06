import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Privacy from 'sections/privacy';

export default function PrivacyPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="become a better you"
          title="accountable. | Privacy"
        />
        <Privacy/>
      </Layout>
    </ThemeProvider>
  );
}
