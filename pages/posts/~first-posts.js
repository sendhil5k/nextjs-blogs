import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import Layout from '../../components/layout';
export default function Home(){
    return(
        <>
        <Layout>
            <Head>
                <title>First post..</title>
            </Head>
            <Script src="https://connect.facebook.net/en_US/sdk.js" strategy='lazyOnload' 
            onLoad={()=>{
                console.log('scirpt loaded correctly window fb as populated');
            }}>

            </Script>
            <h1>First posts page </h1>
           
            <p id='banner'>hide this using inline scirpt</p>
            <Script id="show-banner"> {`console.log('inline script')`}   </Script>
        </Layout>
        </>
        )
}