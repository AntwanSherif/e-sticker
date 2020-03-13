import { Fragment } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Layout from '../components/PageLayout';
import { attributes, html } from '../content/home.md'

const Home = () => (
  <Fragment>
    <Head>
      <title key='title'>E-Sticker</title>
    </Head>
    <NextSeo config={{
      title: 'E-Sticker',
      description: 'E-Sticker landing page. Find all your favorite stickers here.',
      canonical: 'https://e-sticker.netlify.com/',
    }}
    />

    <Layout>
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
    </Layout>
  </Fragment>
)

export default Home
