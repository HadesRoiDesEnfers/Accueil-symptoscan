import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaHeartbeat, FaStream} from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { BiGridAlt, BiStats, BiCog, BiLogOut, BiCaretLeft, BiCaretRight } from "react-icons/bi";


function App() {

  return (
    <>
      <div className="logo">
        <p>+</p>
      </div>
      <nav className="nav-menu">  
        <ul>
          <li className='burger'><a href="#" ><FaStream/></a></li>
          <li className='Active'><a href="#"><BiGridAlt/></a></li>
          <li><a href="#"><BiStats/></a></li>
          <li><a href="#"><FaHeartbeat/></a></li>
          <li><a href="#"><FaCalendar/></a></li>
          <div className="indi"></div>
        </ul>
        <div className="ambany">
          <a href="#"><BiCog/></a>
          <a href="#"><BiLogOut/></a>
          {/* <p></p> */}
        </div>
      </nav>
      {/* A propos du patient */}
      <div className="card">
        {/* Sary Patient */}
        <p className='user'></p>
        <h3 className="nom">Satoru Gojo</h3>
        <p className="about">19 ans, Antananarivo</p>
        {/* Informatitons supplémentaires */}
        <div className="info">
          <div className="blood">
            <p>Sang</p>
            <p className='sort'>AB+</p>
          </div>
          <div className="height">
            <p>Longueur</p>
            <p className='cm'>173cm</p>
          </div>
          <div className="weight">
            <p>Poids</p>
            <p className='kg'>65kg</p>
          </div>
        </div>
      </div>
      <h3 className='prescr'>Medicaments préscrit</h3>
      {/* Médicaments et docteur */}
      <div className="medoc">
        {/* Médicaments */}
        <div className="scroll">
          <div>
            <div className='about'>
              <p className='nom'>Paracetamol</p>
              <p className="dose">500mg</p>
            </div>
            <p className='duration'>Jusqu'à l''arrêt de la fièvre</p>
            <p className='times'>une fois toutes les 6 heures</p>
          </div>
          <div>
            <div className='about'>
              <p className='nom'>Ibuprofène</p>
              <p className="dose">400mg</p>
            </div>
            <p className='duration'><span>LUN</span><span>MAR</span><span>MER</span></p>
            <p className='times'>Matin Midi Soir</p>
          </div>
          <div>
            <div className='about'>
              <p className='nom'>Antiviral</p>
              <p className="dose">75mg</p>
            </div>
            <p className='duration'><span>LUN</span><span>MAR</span><span>MER</span><span>JEU</span><span>VEN</span></p>
            <p className='times'>Matin et Soir</p>
          </div>
          <div>
            <div className='about'>
              <p className='nom'>Paracetamol</p>
              <p className="dose">500mg</p>
            </div>
            <p className='duration'>Jusqu'à l''arrêt de la fièvre</p>
            <p className='times'>une fois toutes les 6 heures</p>
          </div>
        </div>
        {/* Docteur */}
        <div className="docteur">
          <div className="propos">
            <p className='img'></p>
            <div className="ab">
              <h3 className="nom">Dr. Shaun Murphy</h3>
              <p className='hopital'>Hôpital Saint Bonne Aventure</p>
            </div>
          </div>
          <h3 className='type'>Médecin Traitant</h3>
          <p className='faire'>Diagnastic les patients malades</p>
          <div className="dateTime">
            <div className="date">
              <h3>Date</h3>
              <h3 className='dateT'>09 Sept 2024</h3>
            </div>
            <div className="hour">
              <h3>Heure</h3>
              <h3 className='heureT'>10:30</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
