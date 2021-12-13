import { useState } from 'react'

import Image from 'next/image'
import SongName from '@/components/SongName'

import styles from '@/components/AlbumArt.module.scss'

// Solid light yellow
const blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88u3+fwAJeQPKz5nhtAAAAABJRU5ErkJggg=='

export default function AlbumArt({ 
  song, 
  isCurrentSong, 
  setCurrentSong, 
}: {
  song: Song, 
  isCurrentSong: boolean, 
  setCurrentSong: (newState: null | Song) => void,
}) {
  const {id, image_uri, music_uri, name: { 'name-USen': nameUsEn }} = song
  const [showName, setShowName] = useState(false)

  const handleMouseEnter = () => {
    setShowName(true)
  }

  const handleMouseLeave = () => {
    setShowName(false)
  }

  const handleOnClick = () => {
    setCurrentSong(song)
  }
  
  return (
    <li 
      key={id}
      className={styles.listItem} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
    <SongName name={nameUsEn} showName={showName} />
    <div className={styles.songImageContainer}>
      <div className={`${styles.selected} ${isCurrentSong ? '' : styles.hidden}`}>
        <Image 
          className={styles.songImage} 
          src={image_uri} 
          alt={nameUsEn} 
          width={200} 
          height={200} 
          layout='responsive' 
          placeholder='blur'
          blurDataURL={blurDataURL}
        />
      </div>
    </div>
  </li>
  )
}
