import React from 'react';
import Registration from './registration';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    component: (
      <Layout>
        <Registration />
      </Layout>
    ),
  };
}

export default action;
