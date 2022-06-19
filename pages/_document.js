import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import React from 'react';
import { ColorModeScript } from '@chakra-ui/react'
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

class MyDocument extends Document {
    static getInitialProps = getInitialProps;

    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     return {
    //         ...initialProps,
    //         styles: React.Children.toArray([initialProps.styles])
    //     };
    // }

    render() {
        return (
            <Html lang="en">
                <Head>{CssBaseline.flush()}</Head>
                <body>
                    <ColorModeScript initialColorMode={"light"} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
