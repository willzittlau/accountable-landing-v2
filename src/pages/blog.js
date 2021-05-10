import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import InstagramFeed from 'sections/instagram';

export default function BlogPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO
          description="become a better you"
          title="accountable. | Blog"
        />
        <InstagramFeed />
      </Layout>
    </ThemeProvider>
  );
}
