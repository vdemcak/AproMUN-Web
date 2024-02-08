import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import divierAnimation from '../../lib/animation.json';
import { ImageBox } from '../../components/ImageBox';

export const HRC = () => {
  return (
    <>
      <Helmet>
        <title>HRC | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">COMMITTEES</span>
        <span className="text-4xl md:text-7xl">Human Rights Council</span>
      </div>

      <ImageBox
        title={
          <p className="text-base leading-loose text-black opacity-70">
            The United Nations Charter, along with the pioneering Universal Declaration of Human Rights, set the stage
            for universal human rights. The UN has long been at the vanguard of safeguarding these rights. Today, the
            Human Rights Council perseveres in the quest for a dignified life for all. A society cannot truly be free
            without its citizens' right to public participation. Unfortunately, we've witnessed an alarming trend of
            countries sliding towards autocratic practices. It now falls on you, esteemed delegates, to find a solution
            to the challenge of democratic backsliding.
          </p>
        }
        subtitle=""
        image="/photos/committees/hrc.jpeg"
        imageALT="HRC">
        <a className="btn-primary" href="/study-guides/HRC.pdf" target="_blank">
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
              src="/photos/secretariat/durisova.png"
              alt="Viktor Matusovic"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Alexandra Ďurišová</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>
          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Dear delegates,
            <br />
            my name is Alexandra Ďurišová and it is my utmost pleasure to be your chair at AproMUN 2023 alongside my
            dear co-chair Matej. Nowadays, our society is facing a great challenge concerning the threat to all
            democratic principles. It is up to you, dear participants, to cooperate in reaching a consensus to protect
            human rights. Can't wait to see where the discussion will take us. See you all in October!
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/alexandra.durisova_/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <img className="aspect-square h-24 rounded-full" src="/photos/secretariat/styk.png" alt="Matej Styk" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Matej Styk</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>

          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Dear aspiring delegates,
            <br />
            My name is Matej and it is with pleasure that I introduce myself to you, as one of the Human Rights Council
            chairs at AproMUN 2023. Ever since I attended my first Model United Nations conference, I instantly fell in
            love with the world of diplomacy and debate, and I hope to share this passion with you in our committee, for
            the first time as a chair. For skilled and inexperienced delegates alike, there is so much for you to be
            excited about and I hope to see you in October :)
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/matejstyk/"
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
