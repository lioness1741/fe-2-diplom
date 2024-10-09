import React from 'react';
import About from './About';
import Faq from './Faq';
import Reviews from './Reviews';
import HomePageForm from '../Forms/HomePageForm';
import './First-page.scss';

export default function HomePage() {
   return (
      <main className="main">
         <HomePageForm />
         <About />
         <Faq />
         <Reviews />
      </main>
   );
}