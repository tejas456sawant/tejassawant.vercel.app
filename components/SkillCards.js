import React from "react";
import { MdWeb } from "react-icons/md";
import { GoServer } from "react-icons/go";
import { FiDatabase, FiCloud, FiCode } from "react-icons/fi";
import {
  FaMobile,
  FaBullhorn,
  FaShoppingCart,
  FaDesktop,
} from "react-icons/fa";

const SkillCards = () => (
  <div className='skills-boxes'>
    <div className='skills-box skills-box-frontend'>
      <MdWeb className='skills-box-img' />
      <h2 className='skills-box-title small-title'>Frontend</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>
          JavaScript | TypeScript
        </li>
        <li className='skills-box-list-skill filler'>
          React | NextJs | GatsbyJs | Redux | MERN
        </li>
        <li className='skills-box-list-skill filler'>Vue.js | NuxtJs</li>
        <li className='skills-box-list-skill filler'>AngularJs | MEAN</li>
        <li className='skills-box-list-skill filler skills-box-list-skill-last'>
          HTML | CSS3 | SASS
        </li>
      </ul>
    </div>
    <div className='skills-box skills-box-backend'>
      <GoServer className='skills-box-img' />
      <h2 className='skills-box-title small-title'>Backend</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>NodeJS | Express</li>
        <li className='skills-box-list-skill filler'>Java | Spring Boot</li>
        <li className='skills-box-list-skill filler'>
          Python | Django | Flask
        </li>
        <li className='skills-box-list-skill filler'>JSP</li>
        <li className='skills-box-list-skill filler'>PHP</li>
        <li className='skills-box-list-skill filler skills-box-list-skill-last'>
          C#
        </li>
      </ul>
    </div>
    <div className='skills-box skills-box-database'>
      <FiDatabase className='skills-box-img' />
      <h2 className='skills-box-title small-title'>Database</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>MYSQL</li>
        <li className='skills-box-list-skill filler'>Firebase</li>
        <li className='skills-box-list-skill filler'>Oracle DB</li>
        <li className='skills-box-list-skill filler'>MongoDB</li>
        <li className='skills-box-list-skill skills-box-list-skill-last filler'>
          PostgreSQL
        </li>
      </ul>
    </div>
    <div className='skills-box skills-box-deployment'>
      <FiCloud className='skills-box-img' />
      <h2 className='skills-box-title small-title'>Deployment</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>Heroku</li>
        <li className='skills-box-list-skill filler'>Netlify</li>
        <li className='skills-box-list-skill filler'>Vercel</li>
        <li className='skills-box-list-skill filler'>Google App Engine</li>
        <li className='skills-box-list-skill filler'>Firebase</li>
        <li className='skills-box-list-skill filler'>NGINX | PM2</li>
        <li className='skills-box-list-skill filler'>Git | Github</li>
        <li className='skills-box-list-skill skills-box-list-skill-last filler'>
          Linux | Ubuntu Server
        </li>
      </ul>
    </div>
    <div className='skills-box skills-box-desktop-applications'>
      <FaDesktop className='skills-box-img' />
      <h2 className='skills-box-title small-title'>Desktop Application</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>
          Electronjs | JavaScript
        </li>
        <li className='skills-box-list-skill filler'>Swing | Java</li>
        <li className='skills-box-list-skill skills-box-list-skill-last filler'>
          Tkinter | Python
        </li>
      </ul>
    </div>
    <div className='skills-box skills-box-android-app-development'>
      <FaMobile className='skills-box-img' />
      <h2 className='skills-box-title small-title'>Android App</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>
          React Native | Javascript
        </li>
        <li className='skills-box-list-skill skills-box-list-skill-last filler'>
          Android Studio | Java
        </li>
      </ul>
    </div>
    <div className='skills-box skills-box-programming-langauges'>
      <FiCode className='skills-box-img' />
      <h2 className='skills-box-title small-title'>Programming Languages</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>Javascript</li>
        <li className='skills-box-list-skill filler'>Java</li>
        <li className='skills-box-list-skill filler'>C++ </li>
        <li className='skills-box-list-skill filler'>C</li>
        <li className='skills-box-list-skill filler'>Python</li>
        <li className='skills-box-list-skill filler'>C#</li>
        <li className='skills-box-list-skill skills-box-list-skill-last filler'>
          Golang
        </li>
      </ul>
    </div>
    <div className='skills-box skills-box-digital-marketing'>
      <FaBullhorn className='skills-box-img' />
      <h2 className='skills-box-title small-title'>Digital Marketing</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>Facebook Ads</li>
        <li className='skills-box-list-skill filler'>Google Ads</li>
        <li className='skills-box-list-skill filler'>Tiktok Ads</li>
        <li className='skills-box-list-skill skills-box-list-skill-last filler'>
          Email Marketing
        </li>
      </ul>
    </div>
    <div className='skills-box skills-box-ecommerce'>
      <FaShoppingCart className='skills-box-img' />
      <h2 className='skills-box-title small-title'>E Commerce</h2>
      <ul className='skills-box-list'>
        <li className='skills-box-list-skill filler'>Shopify</li>
        <li className='skills-box-list-skill filler'>WooCommerce</li>
        <li className='skills-box-list-skill filler'>Magento</li>
        <li className='skills-box-list-skill skills-box-list-skill-last filler'>
          Wix
        </li>
      </ul>
    </div>
  </div>
);

export default SkillCards;
