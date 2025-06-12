import React from 'react';
import { Link } from 'react-router-dom';

import Abinaya from '../assests/users/Abinaya.jpeg';
import abishek3 from '../assests/users/Abishek3.jpeg';
import abishek4 from '../assests/users/Abishek4.jpg';
import akilan from '../assests/users/Akilan.jpg';
import akash from '../assests/users/Akash.jpg';
import akshaya from '../assests/users/Akshaya.jpg';
import Aravinth9 from '../assests/users/Aravinth9.jpg';
import aravinth10 from '../assests/users/Aravinth10.jpg';
import asikap from '../assests/users/P-asika.jpg';
import asikas from '../assests/users/Asika-S.jpg';
import Avanthika from '../assests/users/Avk.jpg';
import Clina from '../assests/users/Clina.jpg';
import Brinda from '../assests/users/Brinda.jpg';
import Balaji from '../assests/users/balaji.jpeg';
import Annaporani from '../assests/users/Annaporani.jpg'
import Ayswariya from '../assests/users/Aishwariya.jpg';
import dhanajayn from '../assests/users/Dhanajayan.jpg';
import Eswar from '../assests/users/Eshwar.jpg';
import jassim from '../assests/users/jassim.png';
import harish from '../assests/users/harish.jpeg';
import Harshini from '../assests/users/Harshini.jpg';
import Indhu from '../assests/users/Indhu.jpg';
import Iswariya from '../assests/users/Iswariya.jpg'
import Jagath from '../assests/users/Jagath.jpg'
import Kiranchawla from '../assests/users/Kiranchawla.jpg'
import Kailash from '../assests/users/Kailash.jpg'
import Lakshmi from '../assests/users/Lakshmi.jpeg'
import Lokeshram from '../assests/users/Logeshram.jpg'
import Meenakshi from '../assests/users/Meenakshi.jpg'
import Maheswaran from '../assests/users/maheswaran38.jpg'
import mahesawran38 from '../assests/users/Maheswaeran.jpg'
import mahendran from '../assests/users/Mahendran.jpg'
import Malayarasan from '../assests/users/Malai.jpg'
import Mahas from '../assests/users/S-Maha.jpg'
import mahaJ from '../assests/users/Mahaj.jpg'
import mary from '../assests/users/Mary.jpg'
import mercy from '../assests/users/Mercy.jpg'
import megha from '../assests/users/Meghavarshini.jpg'
import haleem from '../assests/users/Haleem.jpg'
import ibrahim from '../assests/users/ibrahim.png'
import farvees from '../assests/users/Farvees.jpg'
import mishba from '../assests/users/Mishba.png'
import midhun from '../assests/users/Midhun.jpg'
import hanas from '../assests/users/Hanas.jpg'
import Sameer from '../assests/users/Sameer.jpg'
import Manikandan from '../assests/users/Manikandan.jpeg'

// b class
 import Safeek from '../assests/users/Mohammad Safeek.jpg'
 import Monisha from '../assests/users/Monisha.jpg'
import Nirmal from '../assests/users/Nirmal kumar.jpg'
import Dharani from '../assests/users/Dharani.jpg'
import Dharun from '../assests/users/Dharun.jpg'
import Dhayanidhi from '../assests/users/Dhayanidi.JPG'
import Elancheliyan from '../assests/users/Elancheliyan.jpg'
import Ezhilan from '../assests/users/Ezhilaln.jpg'
import Gokul from '../assests/users/Gokul.JPG'
import Logesh from '../assests/users/logesh.jpg'
import Jayraman from '../assests/users/Jayaram.jpg'
import Livin from '../assests/users/Livin.jpg'
import nandhaGoapal from '../assests/users/Nandha Gopal.jpg'
import Narendar from '../assests/users/Narendar.jpg'
import Naveen from '../assests/users/Naveen.jpg'
import Naveen2 from '../assests/users/Naveen .jpg'
import Neha from '../assests/users/Neha.jpg'
import Nishanth from '../assests/users/Nishant.jpg'
import Pasupathi from '../assests/users/Pasupathi.jpg'
import Prasana from '../assests/users/Prasanna.jpg'
import Praveen from '../assests/users/Praveen.jpg'
import Ragu from '../assests/users/Ragu.jpg'
import Ranjith from '../assests/users/Ranjith.jpg'
import Rashmina from '../assests/users/Rashmina sherin.jpg'
import Revanth from '../assests/users/Revanth.jpg'
import SabrishKumar from '../assests/users/Sabarish kumar.jpg'
import Sabrishan from '../assests/users/Sabarishan.JPG'
import Sam from '../assests/users/Sam.jpg'
import Sangeetha from '../assests/users/Sangeetha.jpg'
import Santhosh from '../assests/users/Santhosh.jpg'
import Saravana from '../assests/users/Saravana.jpg'
import seethaladevi from '../assests/users/seethaladevi.jpg'
import seramRaj from '../assests/users/Serma raj.jpg'
import SahinRose from '../assests/users/Shahin rose.jpg'
import Shahul from '../assests/users/Shahul.jpg'
import Shakthi from '../assests/users/Shakti.jpg'
import sharan from '../assests/users/Sharan.JPG'
import siva from '../assests/users/Siva.jpg'
import sneha from '../assests/users/Sneha.jpg'
import Surendar from '../assests/users/Surendar.jpg'
import surya  from '../assests/users/Surya.jpg'
import Thamreen from '../assests/users/Thamreen.jpg'
import Thenmozhli from '../assests/users/Thenmozli.jpg'
import Varhsa  from '../assests/users/Varsha.jpg'
import Vedha from '../assests/users/Vedha.jpg'
import Vengatesh from '../assests/users/Vengatesh.jpg'
import Vignesh from '../assests/users/Vignesh.jpg'
import Vignesh2 from '../assests/users/Vignesh2.jpg'
import Vishal from '../assests/users/Vishal.JPG'


import '../Components/clasmates.css'

const classmates = [
  { name: 'Abinaya', image: Abinaya },
  { name: 'Abishek.R', image: abishek3 },
  { name: 'Abishek.MGR', image: abishek4 },
  { name: 'Akash', image: akash },
  { name: 'Akilan', image: akilan },
  { name: 'Akashaya', image: akshaya },
  { name: 'Aravinth.A', image: Aravinth9 },
  { name: 'Aravinth.B', image: aravinth10 },
  { name: 'Asika.P', image: asikap },
  { name: 'Asika.S', image: asikas },
  { name: 'Avanthika', image: Avanthika },
  
  { name: 'Clina', image: Clina },
  { name: 'Annaporani', image: Annaporani },
  { name: 'Ayshwarya', image: Ayswariya },
  { name: 'Brinda', image: Brinda },
  { name: 'Balaji', image: Balaji },
  { name: 'Dhanajyan', image: dhanajayn },
  { name: 'Eswar', image: Eswar },
  { name: 'Jassim', image: jassim },
  { name: 'Harish', image: harish },
  { name: 'Harshini', image: Harshini },
  { name: 'Indhumathi', image: Indhu },
  { name: 'Iswariya', image: Iswariya },
  { name: 'Jagath', image: Jagath },
  { name: 'Kiranchawla', image: Kiranchawla },
  { name: 'Kailash', image: Kailash },
  { name: 'Lakshmi', image: Lakshmi },
  { name: 'Lokeshram', image: Lokeshram },
  { name: 'Meenakshi', image: Meenakshi },
  { name: 'Maheswaran.R', image: Maheswaran },
  { name: 'Mageswaran.R', image: mahesawran38 },
  { name: 'Mahendran', image: mahendran },
  { name: "Manikandan", image: Manikandan},
  { name: 'Malayarasan', image: Malayarasan },
  { name: 'Maha.S', image: Mahas },
  { name: 'Maha.j', image: mahaJ },
  { name: 'Mary', image: mary },
  { name: 'Mercy', image: mercy },
  { name: 'MeghaVarshini', image: megha },
  { name: 'Haleem', image: haleem },
  { name: 'Ibrahim', image: ibrahim },
  { name: 'Farvees', image: farvees },
  { name: 'Mishba', image: mishba },
  { name: 'Midhun', image: midhun },
  { name: 'Hanas', image: hanas },
  { name: 'Sameer', image: Sameer },
  { name: 'Safeek', image: Safeek },
  { name: 'Monisha', image: Monisha },
  { name: 'Nirmal Kumar', image: Nirmal },
  { name: 'Dharani', image: Dharani },
  { name: 'Dharun', image: Dharun },
  { name: 'Dhayanidhi', image: Dhayanidhi },
  { name: 'Elancheliyan', image: Elancheliyan },
  { name: 'Ezhilan', image: Ezhilan },
  { name: 'Gokul', image: Gokul },
  { name: 'Logesh', image: Logesh },
  { name: 'Jayraman', image: Jayraman },
  { name: 'Livin', image: Livin },
  { name: 'Nandha Gopal', image: nandhaGoapal },
  { name: 'Narendar', image: Narendar },
  { name: 'Naveen', image: Naveen },
  { name: 'Naveen Kumar', image: Naveen2 },
  { name: 'Neha', image: Neha },
  { name: 'Nishanth', image: Nishanth },
  { name: 'Pasupathi', image: Pasupathi },
  { name: 'Prasanna', image: Prasana },
  { name: 'Praveen', image: Praveen },
  { name: 'Ragu', image: Ragu },
  { name: 'Ranjith', image: Ranjith },
  { name: 'Rashmina Sherin', image: Rashmina },
  { name: 'Revanth', image: Revanth },
  { name: 'Sabarish Kumar', image: SabrishKumar },
  { name: 'Sabarishan', image: Sabrishan },
  { name: 'Sam', image: Sam },
  { name: 'Sangeetha', image: Sangeetha },
  { name: 'Santhosh', image: Santhosh },
  { name: 'Saravana', image: Saravana },
  { name: 'Seethaladevi', image: seethaladevi },
  { name: 'Serma Raj', image: seramRaj },
  { name: 'Shahin Rose', image: SahinRose },
  { name: 'Shahul', image: Shahul },
  { name: 'Shakti', image: Shakthi },
  { name: 'Sharan', image: sharan },
  { name: 'Siva', image: siva },
  { name: 'Sneha', image: sneha },
  { name: 'Surendar', image: Surendar },
  { name: 'Surya', image: surya },
  { name: 'Thamreen', image: Thamreen },
  { name: 'Thenmozhi', image: Thenmozhli },
  { name: 'Varsha', image: Varhsa },
  { name: 'Vedha', image: Vedha },
  { name: 'Vengatesh', image: Vengatesh },
  { name: 'Vignesh', image: Vignesh },
  { name: 'Vignesh M', image: Vignesh2 },
  { name: 'Vishal', image: Vishal },


];

function Classmates() {
  return (
    <div className="classmates-page">
      <h2 className="page-title">👥 Our Classmates</h2>
      <div className="classmates-grid">
        {classmates.map(({ name, image }, index) => (
          <Link to={`/memory/${name}`} key={`${name}-${index}`} className="classmate-card-link">
            <div className="classmate-card">
              <img src={image} alt={name} className="classmate-image" onContextMenu={(e) => e.preventDefault()}/>
              <div className="classmate-name">{name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Classmates;
