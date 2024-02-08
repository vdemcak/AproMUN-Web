import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import divierAnimation from '../../lib/animation.json';
import { ImageBox } from '../../components/ImageBox';

export const UNEP = () => {
  return (
    <>
      <Helmet>
        <title>UNEP | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">COMMITTEES</span>
        <span className="text-4xl md:text-7xl">United Nations Environment Programme</span>
      </div>

      <ImageBox
        title={
          <p className="text-base leading-loose text-black opacity-70">
            The United Nations Environment Programme aims to enhance current lives while safeguarding the prospects of
            future generations. Among the contentious tools in combating the climate crisis, nuclear energy stands out
            due to its environmental and national security risks. The UNEP committee will scrutinize power plants in
            volatile regions, with a particular focus on Ukraine. Are the potential risks too substantial, or could this
            pave the way to a prosperous green future?
          </p>
        }
        subtitle=""
        image="/photos/committees/unep.webp"
        imageALT="UNEP">
        <a className="btn-primary" href="/study-guides/UNEP.pdf" target="_blank">
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
              src="/photos/secretariat/kristof.jpeg"
              alt="Michael Kristof"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Michael Krištof</span>
              <span className="text-sm font-bold text-primary">Committee President</span>
            </div>
          </div>
          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Hey there, delegates!
            <br />
            I'm Michael Krištof; the chair that also happens to be VPGA. Undermining authority and sowing dissent in the
            workplace is my jam, alongside this whole MUN thing... Anywho, I'll be seeing you all in UNEP, so try not to
            let the world burn down, but if you do, just remember:
            <br />
            🔥️ we didn't start the fire 🔥️
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/misokristof/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <img
              className="aspect-square h-24 rounded-full"
              src="/photos/secretariat/dutkova.webp"
              alt="Lucia Dutkova"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Lucia Dutková</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>

          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Dear delegates,
            <br />
            It is indeed a delight to be a chairperson at AproMUN once more, this time presiding over the UNEP
            committee. Together with my co-chair, Michael, we form a marvelous and frankly quite an entertaining duo. We
            are hoping your time with us will be splendid, for we shall assuredly derive immense pleasure from it
            ourselves.
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/lucia_dutkova/"
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
