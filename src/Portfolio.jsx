
import React, { useState } from 'react';
import { FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    image: 'https://via.placeholder.com/300x180',
    link: '#'
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    image: 'https://via.placeholder.com/300x180',
    link: '#'
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3',
    image: 'https://via.placeholder.com/300x180',
    link: '#'
  }
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="min-h-screen px-4 py-8 text-gray-800 dark:text-white bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">João • Dev Front-End</h1>
        <button onClick={toggleDarkMode} className="text-2xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <section className="mb-12">
        <h2 className="text-xl mb-4 font-semibold">Sobre Mim</h2>
        <p className="text-lg max-w-xl">
          Sou um desenvolvedor front-end apaixonado por criar experiências incríveis com React, Tailwind CSS e animações modernas.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl mb-4 font-semibold">Projetos</h2>
        <Slider {...settings}>
          {projects.map((proj, idx) => (
            <div key={idx} className="p-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{proj.title}</h3>
                  <p className="text-sm mb-2">{proj.description}</p>
                  <a href={proj.link} className="text-blue-500 hover:underline">Ver Projeto</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <footer className="text-center text-sm mt-12 space-x-4">
        <a href="#" className="inline-flex items-center gap-1"><FaGithub /> GitHub</a>
        <a href="#" className="inline-flex items-center gap-1"><FaLinkedin /> LinkedIn</a>
        <p className="mt-2">© 2025 João Dev. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
