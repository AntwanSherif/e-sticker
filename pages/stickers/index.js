import { Fragment } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Link from 'next/link'
import Layout from '../../components/PageLayout'

const importStickers = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/stickers', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../content/stickers/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const StickersListingPage = ({ stickersList }) => (
  <Fragment>
    <Head>
      <title key='title'>E-Sticker | Stickers</title>
    </Head>
    <NextSeo config={{
      title: 'E-Sticker | Stickers',
      description: 'Find all your favorite stickers',
      canonical: 'https://e-sticker.netlify.com/stickers',
    }}
    />

    <Layout>
      {stickersList.map(sticker => (
        <div key={sticker.slug} className='sticker'>
          <Link href="/stickers/[slug]" as={`/stickers/${sticker.slug}`}>
            <a>
              <img src={sticker.attributes.thumbnail} />
              <h2>{sticker.attributes.title}</h2>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
      .sticker {
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
    </Layout>
  </Fragment>
)

StickersListingPage.getInitialProps = async () => {
  const stickersList = await importStickers()
  return { stickersList };
}

export default StickersListingPage;