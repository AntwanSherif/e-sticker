import { Fragment, useEffect, useMemo, useRef } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createAppTheme from '../theme';
import RootContainer from '../containers/RootContainer';


export default function MyApp({ Component, pageProps, store }) {
    // Remove the server-side injected CSS.
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Fragment>
            <Head>
                <title key='title'>E-Sticker</title>
                <meta name='viewport' content='initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86 width=device-width' />
            </Head>
            <ThemeProvider theme={createAppTheme('ltr')}>
                <CssBaseline />
                <RootContainer>
                    <Component {...pageProps} />
                </RootContainer>
            </ThemeProvider>
        </Fragment>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {}
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
};