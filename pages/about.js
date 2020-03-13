import { Fragment } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Layout from '../components/PageLayout';
import { attributes, html } from '../content/about.md'

const About = () => (
  <Fragment>
    <Head>
      <title key='title'>E-Sticker | About</title>
    </Head>
    <NextSeo config={{
      title: 'E-Sticker | About',
      description: 'About E-Sticker business.',
      canonical: 'https://e-sticker.netlify.com/about',
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

export default About
