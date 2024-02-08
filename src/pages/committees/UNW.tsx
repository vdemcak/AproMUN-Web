import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import divierAnimation from '../../lib/animation.json';
import { ImageBox } from '../../components/ImageBox';

export const UNW = () => {
  return (
    <>
      <Helmet>
        <title>UNW | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">COMMITTEES</span>
        <span className="text-4xl md:text-7xl">United Nations Women</span>
      </div>

      <ImageBox
        title={
          <p className="text-base leading-loose text-black opacity-70">
            The Commission on the Status of Women strives to elevate the position of women globally, ensuring their
            parity with men. In this year's UN WOMEN committee, efforts will concentrate on aiding girls and women in
            South Asia to attain educational, social, and economic parity with men.
          </p>
        }
        subtitle=""
        image="/photos/committees/unw.jpeg"
        imageALT="UNW">
        <a className="btn-primary" href="/study-guides/UNW.pdf" target="_blank">
          Download study guide
        </a>
      </ImageBox>

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">COMMITTEES</span>
        <span className="text-4xl md:text-7xl">Committee Chairs</span>
      </div>

      <div className="relative mx-auto mt-32 grid max-w-8xl grid-cols-1 gap-y-16 px-5 md:grid-cols-2 ">
        <div>
          <div className="flex items-center gap-x-5">
            <img
              className="aspect-square h-24 rounded-full"
              src="/photos/secretariat/matusovic.jpg"
              alt="Viktor Matusovic"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Viktor Matušovič</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>
          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Hello my name is Viktor and I will be one of your chairs as well as the Vice President of the General
            Assembly. Our dear ladies have not been treated as equals since the dawn of time and that is precisely the
            reason why our committee is so important. I believe that this year we picked a topic that will bring plenty
            of debate as well as a wonderful resolution. I can't wait to see all of you in October :)).
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/viktor_matusovic/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <img className="aspect-square h-24 rounded-full" src="/photos/secretariat/molcan.jpg" alt="Lucia Dutkova" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Matúš Molčan</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>

          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Esteemed delegates!
            <br />
            It is both my honor and pleasure to be the one that will guide you throughout the journey that will be
            UNWOMEN. I am very excited to see what you as delegates will bring to table vis-à-vis the promotion of
            Girls' Education in South Asia as it is a topic full of unique perspectives and plethora of possible
            solutions. I believe that I have seen everything that can happen at an MUN so I always look forward to
            delegates who can prove me wrong. :-)
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/molginn/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <Lottie className="mt-24 hidden lg:block" animationData={divierAnimation} loop={true} />

      <CTA />
      <Footer />
    </>
  );
};
