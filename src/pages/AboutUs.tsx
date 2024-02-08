import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { Helmet } from 'react-helmet';
import { Person } from '../components/Person';
import Lottie from 'lottie-react';
import divierAnimation from '../lib/animation.json';

export const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-48 flex max-w-8xl flex-col px-5">
        <span className="text-3xl md:text-6xl">
          Providing an <br />
          <mark>educative, and enjoyable experience</mark>
        </span>
      </div>

      <div className="relative mx-auto mt-48 flex max-w-8xl flex-col items-center px-5">
        <span className="text-center text-sm font-bold text-primary">OUR TEAM</span>
        <span className="text-center text-4xl md:text-7xl">
          This year's <br />
          <mark>secretariat</mark>
        </span>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
          <Person name="Pavol Beblavý" position="Secretary General" image="/photos/secretariat/beblavy.jpeg" />
          <Person
            name="Viktor Vaškanin"
            position="President of the General Assembly"
            image="/photos/secretariat/vaskanin.jpeg"
          />
          <Person
            name="Michael Krištof"
            position="Vice-President of the General Assembly"
            image="/photos/secretariat/kristof.jpeg"
          />
          <Person
            name="Viktor Matušovič"
            position="Vice-President of the General Assembly"
            image="/photos/secretariat/matusovic.jpg"
          />
          <Person
            name="Sofia Bujalková"
            position="Deputy Secretary-General"
            image="/photos/secretariat/bujalkova.jpg"
          />
          <Person name="Jakub Benčo" position="Deputy Secretary-General" image="/photos/secretariat/benco.jpg" />
          <Person name="Patrícia Molčanová" position="Vice-USG for Pages" image="/photos/secretariat/molcanova.jpg" />
          <Person name="Viola Lacková" position="USG for Pages" image="/photos/secretariat/lackova.jpeg" />
          <Person name="Sofia Hradková" position="USG for Partnerships" image="/photos/secretariat/hradkova.jpg" />
          <Person name="Daren Ludvig" position="USG for Social Media" image="/photos/secretariat/daren.jpg" />
        </div>
      </div>

      <Lottie className="mt-24 hidden lg:block" animationData={divierAnimation} loop={true} />

      <CTA />
      <Footer />
    </>
  );
};
