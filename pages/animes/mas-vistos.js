import React, { Component } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { api } from '../../lib/api';
import ListAnimes from '../../components/ListAnimes';
import Layout from '../../components/Layout';

import styles from '../../styles/Animes.module.css';

class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <Layout>
                <Head>
                    <title>{`Lista de Animes más Vistos - ${process.env.NAME}`}</title>
                    <meta name="description" content={`Anime Online gratis en sub español y latino, podrás disfrutar tus animes de manera gratuita, sin ninguna restricción en tu PC, Movil o Tablets - ${process.env.NAME}`} />
                    <link rel="canonical" href={`${process.env.URL}/animes`} />
                    <meta name="og:title" content={`Lista de Animes más Vistos - ${process.env.NAME}`} />
                    <meta name="og:description" content={`Anime Online gratis en sub español y latino, podrás disfrutar tus animes de manera gratuita, sin ninguna restricción en tu PC, Movil o Tablets - ${process.env.NAME}`} />
                    <meta name="og:url" content={`${process.env.URL}/animes/mas-vistos`} />
                    <meta name="og:locale" content="es_LA" />
                    <meta name="og:type" content="website" />
                    <meta name="og:image" content={`${process.env.URL}/index.jpg`} />
                    <meta property="og:image:width" content="265" />
			        <meta property="og:image:height" content="265" />
                    <meta itemProp="image" content={`${process.env.URL}/index.jpg`} />
                </Head>
                <main className={styles.container}>
                    <ListAnimes title={'Animes más vistos'} animes={data?.being_watched}/>
                </main>
            </Layout>
        );
    }
}

export async function getStaticProps() {
    const res = await api.get(`anime/more-view`);
    return {
        props: {
            data: res.data,
        },
        revalidate: 1
    }
}

export default withRouter(index);