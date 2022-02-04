import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
  <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
  
          <img src='img/bot1.png' className='img' />
          <h1 className="heroTitleTextHtml_zYwv">
              Elaina is a nice
          </h1>
  
          <h1 className="heroTitleTextHtml_zYwv">
              <b>music bot</b>
          </h1>
  
          <h1 className="heroTitleTextHtml_zYwv">
              with<b>20+</b> commands
          </h1>

          <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs/about" >
              Get Started
              </Link>

              <Link className="button button--secondary button--lg" to="https://elaina.pages.dev">
              Invite Elaina
              </Link>
          </div>      
  
              <Link className="button button--secondary button--lg" to="https://discord.com/api/oauth2/authorize?client_id=875563372974850059&permissions=3533120&scope=bot%20applications.commands">
              Invite Elaina
              </Link>

              <Link className="button button--secondary button--lg" to="https://discord.com/api/oauth2/authorize?client_id=937175048484192267&permissions=274914998592&scope=bot%20applications.commands">
              Invite Elaina 2.0
              </Link>
          </div>
    </header>
  );
  }

<head>
  <meta charSet='utf8'>
    <meta name='Title' content='Elaina'/>
    <meta name='Description' content= "Elaina is currently in 90+ servers. So why don't give it a try? Feeling Elaina is not giving you the best music service? Don't worry, we love to receive feedback and your feedback will be helpful for us to improve Elaina. Our partner has over 1 year of coding experience. Since Ksoft API lyrics have legal issues we switch to lyrics-finder, so everyone can search lyrics by using song artist and name." />
  </meta>
</head>

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title= "Elaina">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
