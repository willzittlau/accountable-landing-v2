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
          description="Plan your bedtime for better sleeps!"
          title="sleeptyme blog"
        />
        <Privacy/>
      </Layout>
    </ThemeProvider>
  );
}
