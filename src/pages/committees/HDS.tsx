import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import divierAnimation from '../../lib/animation.json';
import { ImageBox } from '../../components/ImageBox';

export const HDS = () => {
  return (
    <>
      <Helmet>
        <title>HDS | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">COMMITTEES</span>
        <span className="text-4xl md:text-7xl">Historical Diplomatic Summit</span>
      </div>

      <ImageBox
        title={
          <p className="text-base leading-loose text-black opacity-70">
            The Historical Diplomatic Summit aims to simulate a peaceful resolution of a historical conflict. This
            year's focus is on the Russian Civil War, an exceptionally brutal and unresolved conflict. Delegates at the
            Summit bear the responsibility of striving to end this horrific chapter before it escalates further.
          </p>
        }
        subtitle=""
        image="/photos/committees/hds.png"
        imageALT="HRC">
        <a className="btn-primary" href="/study-guides/HDS.pdf" target="_blank">
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
              src="/photos/secretariat/machaj.png"
              alt="Viktor Matusovic"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Oliver Machaj</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>
          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Jó napot delegates!
            <br />
            It is I, Oliver Machaj, and this year I will be guiding you through our Historical Diplomatic Summit.
            Although I am quite the history nerd, I am actually a people-person, so come talk to me about anything you
            want!
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/olivermachaj/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <img className="aspect-square h-24 rounded-full" src="/photos/secretariat/michna.png" alt="Matej Styk" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Lukas Libor Michna</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>

          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Dear participants,
            <br />
            my name is Lukas Libor Michna and it is my pleasure to be one of the chairs at Apromun this year. I'm
            looking forward to meeting you all. MUNs are also great learning opportunites, and I believe that this year
            will be a prime example of that. I will be one of the chairs of the Historical Diplomatic Summit concerning
            the Russian Civil War. It is a very interesting topic and I can't wait to see your debates on the topic.
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.facebook.com/lukas.michnovsky"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/facebook.svg" alt="Facebook" />
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
