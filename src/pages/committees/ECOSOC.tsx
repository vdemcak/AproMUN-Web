import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import divierAnimation from '../../lib/animation.json';
import { ImageBox } from '../../components/ImageBox';

export const ECOSOC = () => {
  return (
    <>
      <Helmet>
        <title>ECOSOC | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">COMMITTEES</span>
        <span className="text-4xl md:text-7xl">United Nations Environment Programme</span>
      </div>

      <ImageBox
        title={
          <p className="text-base leading-loose text-black opacity-70">
            The Economic and Social Council, one of the UN's original six main bodies, champions sustainable development
            through economic, social, and environmental avenues. Delegates face a formidable challenge - addressing the
            ongoing food crisis in the Horn of Africa. How can the UN mitigate the strain on the population in this
            turbulent region?
          </p>
        }
        subtitle=""
        image="/photos/committees/ecosoc.jpeg"
        imageALT="ECOSOC">
        <a className="btn-primary" href="/study-guides/ECOSOC.pdf" target="_blank">
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
            <img className="aspect-square h-24 rounded-full" src="/photos/secretariat/maca.png" alt="Michal Máca" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Michal Máca</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>
          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Hello there delegates,
            <br />
            My name is Michal Máca and I will be one of the chairs of the ECOSOC for AproMUN2023. I believe that for
            this council we have picked an interesting topic and I hope that while doing your research you will learn a
            lot about Africa. The history and policies of many African countries always fascinate me. I am looking
            forward to seeing the debates and meeting all of you in October. :)
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/michal.maca/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <img className="aspect-square h-24 rounded-full" src="/photos/secretariat/benco.jpg" alt="Jakub Benco" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Jakub Benčo</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>

          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Dear delegates!
            <br />
            My name is Jakub, and I'm honored to be one of your chairs at ECOSOC this year, as well as AproMUN's DSG.
            I'm here to hear your arguments, to criticize you for using personal pronouns and to have a great time.
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/idlestray/"
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
