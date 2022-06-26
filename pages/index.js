import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { headerData, iconsList } from '../constant/header.data'
import ImageSlider from '../components/ImageSlider'
import Stack from '@mui/material/Stack';
import {SearchButton} from '../components/Buttons'


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eyeware</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className="logo-container">
            <p
              className={styles.logo}><span className={styles.logo_span}>Eye</span>ware</p>
          </div>

          <ul className={styles.nav_list}>
            {headerData.map(item => (
              <Link
                className={styles.nav_list_item}
                key={item.id}
                href={item.link}
              >
                {item.label}
              </Link>
            ))}
          </ul>

          <ul className={styles.icon_list}>
              {iconsList.map((item) => (
                <li key={item.id} title={item.title}>
                  {item.icon}
                </li>
              ))}
          </ul>
        </div>
      </header>

      <div className={styles.landing_page}>
        <ImageSlider />
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
