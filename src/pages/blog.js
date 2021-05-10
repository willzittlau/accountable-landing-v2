import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO
          description="become a better you"
          title="accountable. | Blog"
        />
        <iframe src="//lightwidget.com/widgets/16c1de5e16335f5b8ab20a80158c6760.html" scrolling="no" allowtransparency="true" class="lightwidget-widget"></iframe>
      </Layout>
    </ThemeProvider>
  );
}
