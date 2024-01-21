import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const frasesMotivacionales = [
"Porque ninguna cosa es imposible para Dios. (Lucas 1:37)",
"Yo soy el Señor, Dios de toda la humanidad. ¿Hay algo imposible para mí? (Jeremías 32.27)",
"Podrán desfallecer mi cuerpo y mi espíritu, pero Dios fortalece mi corazón; él es mi herencia eterna. (Salmo 73:26)",
"Si confesamos nuestros pecados, Dios, que es fiel y justo, nos los perdonará y nos limpiará de toda maldad. (1 Juan 1:9)",
"No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te fortalezco; siempre te ayudaré; siempre te sustentaré con la diestra de mi justicia. (Isaías 41:10)",
"Alégrense en la esperanza, muestren paciencia en el sufrimiento, perseveren en la oración. (Romanos 12.12)",
"El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido. (Salmos 34.18)",
"Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. (Mateo 7:7)",
];

const App = () => {
  const [frase, setFrase] = useState('');

  const generarFrase = () => {
    const indice = Math.floor(Math.random() * frasesMotivacionales.length);
    setFrase(frasesMotivacionales[indice]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Frases Biblicas</h1>
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{frase}</p>
          </blockquote>
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={generarFrase}>
        Generar Frase
      </button>
    </div>
  );
};

export default App;
