import React, { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer';
import Header from './Header';
import logo from '../assets/weed.png';
import './portfolioContainer.css';

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button=> {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button=> {
  button.addEventListener('click', () => {
    const modal = button.closest('#modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="fsdTitle">
          Frozen Smoke Dispensary
        </p>
        <p>
          500 US-50 #103, Gunnison, CO 81230
        </p>
        <h3 className="areYouTO">
          Are you over the age of 21?
        </h3>
        <div>
          <ul className="nav-item">
            <a href="#home" onClick={() => handlePageChange('Home')} className='button'>
              YES
            </a>
          </ul>
          <ul className="nav-item">
            <a data-modal-target="#modal" className='button'>NO</a>
            <div className="modal" id="modal">
              <div className="modal-header">
                <div className="title">Oops!</div>
                <button data-modal-close className="close-button">&times;</button>
              </div>
              <div className="modal-body">
                Sorry, you must be 21 or older to continue to this website.
              </div>
            </div>
            <div id="overlay"></div>
          </ul>
        </div>
      </header>
    </div>
  );
}