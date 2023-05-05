import Head from 'next/head';
import Spline from '@splinetool/react-spline';
import subtext from './subtext.svg'

export default function App() {
  return (
    <div>
      <Head>
        <title>create-permaweb-app App</title>
        <meta name="description" content="Generated by npx create-permaweb-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="main">
          <div className="content">
            <Spline className="animation" scene="https://prod.spline.design/XLnDWYFfWJOD4Qlq/scene.splinecode" />
            <div className="overlay">
              <img src={subtext} alt="Logo" />
              <p><a href="#" target="_blank">Get Started</a></p>
              <a href="https://cookbook.arweave.dev" target="_blank">Explore the Arweave Cookbook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
