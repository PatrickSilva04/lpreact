import { useState } from 'react';
import './App.css';

// Importando as imagens
import jsIcon from './assets/Images/javascript.png';
import htmlIcon from './assets/Images/html.png';
import cssIcon from './assets/Images/css-3.png';
import pythonIcon from './assets/Images/python.png';
import instagramIcon from './assets/Images/instagram.png';
import facebookIcon from './assets/Images/facebook.png';
import linkedinIcon from './assets/Images/linkedin.png';
import profileLogo from './assets/Images/images.png';
import githubIcon from './assets/Images/github.png';
import profileLogo2  from './assets/Images/profilelogo.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="img-logo" src={profileLogo} alt="Logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="#s1">Perfil</a>
                <a className="nav-link" href="#s2">Tecnologias</a>
                <a className="nav-link" href="#s3">Projetos</a>
                <a className="nav-link" href="#s4">Contato</a>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <section id="s1">
            <div className="s1-left">
              <div className="wrap-img">
                <img className="img-s1" src={profileLogo2} alt="Profile" />
              </div>
            </div>
            <div className="s1-right">
              <h2 className="title-name">Patrick Silva</h2>
              <p>
                Eu sou Patrick Silva e eu sou um amante de tecnologia.
                Especificamente, eu gosto da área de desenvolvimento.
                Desde criança, sempre quis saber o que estava por trás da tela do computador ou do smartphone.
                Sempre amei criar experimentos em diferentes plataformas, linguagens e ferramentas.
                Quero continuar aprendendo e melhorando minha competência técnica.
              </p>
            </div>
          </section>

          <section id="s2">
            <div className="cartao">
              <div className="wrap-img-card">
                <img src={jsIcon} alt="logo JavaScript" width="80px" />
              </div>
              <div className="wrap-info-card">
                <h3>JavaScript</h3>
                <p>JavaScript é uma linguagem de programação interpretada e estruturada, muito usada no desenvolvimento web.</p>
              </div>
            </div>

            <div className="cartao">
              <div className="wrap-img-card">
                <img src={htmlIcon} alt="Logo HTML" width="80px" />
              </div>
              <div className="wrap-info-card">
                <h3>HTML</h3>
                <p>HTML é uma linguagem de marcação usada para estruturar conteúdos na web.</p>
              </div>
            </div>

            <div className="cartao">
              <div className="wrap-img-card">
                <img src={cssIcon} alt="Logo CSS" width="80px" />
              </div>
              <div className="wrap-info-card">
                <h3>CSS</h3>
                <p>CSS é utilizado para estilizar elementos HTML, aplicando cores, layouts e muito mais.</p>
              </div>
            </div>

            <div className="cartao">
              <div className="wrap-img-card">
                <img src={pythonIcon} alt="Logo Python" width="80px" />
              </div>
              <div className="wrap-info-card">
                <h3>Python</h3>
                <p>Python é uma linguagem poderosa, usada em ciência de dados, web, automação e muito mais.</p>
              </div>
            </div>
          </section>

          <section id="s3">
            <div className="wrap-acc">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Projeto 01
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne">
                  <div className="accordion-body">
                    Projeto feito com HTML, CSS e JavaScript <br />
                    <a target="_blank" href="https://github.com/PatrickSilva04/tds-148-intro-">Acessar no GitHub</a>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Projeto 02
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo">
                  <div className="accordion-body">
                    Projeto feito com HTML e CSS <br />
                    <a target="_blank" href="https://github.com/PatrickSilva04/meu-site">Acessar no GitHub</a>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Projeto 03
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree">
                  <div className="accordion-body">
                    Projeto feito em aula com o professor <br />
                    <a target="_blank" href="https://github.com/PatrickSilva04/SENAI-TDS-IOT">Acessar no GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="s4">
            <h2>Contato</h2>
            <div className="formulario">
              <label htmlFor="nome">Nome</label>
              <input type="text" placeholder="Digite seu nome" id="nome" />
              <label htmlFor="assunto">Assunto</label>
              <input type="text" placeholder="Digite o assunto" id="assunto" />
              <br />
              <button onClick={() => alert('Mensagem enviada!')}>Enviar</button>
            </div>
          </section>

          <footer>
            <a target="_blank" href="https://www.instagram.com/silvafer_04">
              <img src={instagramIcon} alt="Instagram" width="30px" />
            </a>
            <a target="_blank" href="https://www.facebook.com/patrick.ferreiradasilva.520">
              <img src={facebookIcon} alt="Facebook" width="30px" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/patrick-ferreira-a04a55155">
              <img src={linkedinIcon} alt="LinkedIn" width="30px" />
            </a>
            { <a target="_blank" href="https://github.com/PatrickSilva04R">
              <img src={githubIcon} alt="GitHub" width="30px" />
            </a> }
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
