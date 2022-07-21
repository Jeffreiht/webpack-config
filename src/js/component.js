import '../css/component.css';
// import imgAnime from '../assets/img/one-punch-man.jpg';

export const saludar = (nombre) => {
    console.log('Vamos a crear una etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText=`Hola ${nombre}`;

    // const img = document.createElement('img');
    // img.src = imgAnime

    document.body.append(h1);

    // document.body.append(img)
}

