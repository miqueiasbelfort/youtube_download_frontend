import styles from "./Content.module.css";
import React from "react";

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infor}>
          <h1>Como usar?</h1>
          <p>
            Para usar o YuYuDwon e fazer o download do seu video, basta apenas
            colocar a url do seu video do youtube no campo onde se pede ela.
          </p>
          <img src="../../src/assets/01.png" alt="Como usar?" />
        </div>
        <div className={styles.infor}>
          <hr />

          <h1>Como pegar a URL?</h1>
          <p>
            Para pegar a URL basta apenas ir no video do youtube e copiar a url
            como mostra na imagem!
          </p>
          <img src="../../src/assets/02.png" alt="Como usar?" />
        </div>
        <div className={styles.infor}>
          <hr />
          <p>
            Você também pode ir em compartilhar video e copiar a url que aparece
            lá.
          </p>
          <img src="../../src/assets/03.png" alt="Como usar?" />
        </div>
        <p className={styles.text}>Com sua ajuda esse site pode continuar funcionando e melhorando, para isso você pode doar qualquer valor para esse pix: <span className={styles.span}>miqueiasbelfort8323@gmail.com</span></p>
      </div>
      <div className={styles.anuncio}>

      </div>
    </div>
  );
}
