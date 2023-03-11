import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const Watermark = () => {
  return <div className={styles.watermark}></div>
}
