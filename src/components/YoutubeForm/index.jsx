import styles from "./YoutubeForm.module.css"
import React, {useState} from 'react'

export default function YoutubeForm() {

  const [url, setURL] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `http://localhost:5000?url=${url}`
  }

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.header}>
                <h1>Download de videos do youtube</h1>
                <p>OBS: Algums videos podem sair sem audio, dependendo do quão antigo é o video!</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Coloque a URL:" onChange={e => setURL(e.target.value)}/>
                <input type="submit" value="Fazer Download"/>
            </form>
            <div className={styles.anuncio}>

            </div>
        </div>
    </div>
  )
}
