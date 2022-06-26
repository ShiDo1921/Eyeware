import React from 'react'
import styles from '../styles/ImageSlider.module.css'
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Next from '@mui/icons-material/NavigateNext';
import Prev from '@mui/icons-material/NavigateBefore';



const ImageSlider = ({heading}) => {
  return (
    <div className={styles.slider_container}>
        <div className={styles.prev_button}>
          <IconButton size='large'>
            <Prev/>
          </IconButton>
          
        </div>
        <div className={styles.next_button}>
          <IconButton size='large'>
            <Next/>
          </IconButton>
        </div>
        <div className={styles.content_container}>
            <h3 className={styles.sub_content}>
                Men Collection 2020
            </h3>
            <h2 className={styles.heading_content}>
              New Styles Black Googles
            </h2>
            <h3 className={styles.sub_content}>
              Only Starting @ $250
            </h3>
            <Button 
              variant="contained"
              style={{
                backgroundColor: 'var(--fontColor)',
                color: 'var(--fontDarkColor)',
                margin: '0 .5rem 0 0'
              }}
            >
              Shop Now
            </Button>
            <Button 
              variant="outlined"
              style={{
                color: 'var(--fontColor)',
                margin: '0 .5rem 0 0'
              }}
            >
              Virtual Try
            </Button>
        </div>
        <div className={styles.content_container}>
            
        </div>
    </div>
  )
}

export default ImageSlider