import { Fragment } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Layout from '../../components/PageLayout'

const Sticker = ({ sticker, slug }) => {
  if (!sticker) return <div>not found</div>

  const { html, attributes } = sticker.default

  return (
    <Fragment>
      <Head>
        <title key='title'>E-Sticker | {attributes.title} sticker</title>
      </Head>
      <NextSeo config={{
        title: `E-Sticker | ${attributes.title} sticker`,
        description: `${attributes.title} sticker is one of the most selling stickers.`,
        canonical: `https://e-sticker.netlify.com/stickers/${slug}`,
      }}
      />

      <Layout>
        <article>
          <h1>{attributes.title}</h1>
          <img src={attributes.thumbnail} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <style jsx>{`
        article {
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
      `}</style>
      </Layout>
    </Fragment>
  )
}

Sticker.getInitialProps = async ({ query }) => {
  const { slug } = query
  const sticker = await import(`../../content/stickers/${slug}.md`).catch(
    () => null
  )
  return { sticker, slug }
}

export default Sticker;