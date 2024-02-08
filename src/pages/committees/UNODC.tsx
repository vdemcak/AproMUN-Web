import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import divierAnimation from '../../lib/animation.json';
import { ImageBox } from '../../components/ImageBox';

export const UNODC = () => {
  return (
    <>
      <Helmet>
        <title>UNODC | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">COMMITTEES</span>
        <span className="text-4xl md:text-7xl">United Nations Office on Drugs and Crime</span>
      </div>

      <ImageBox
        title={
          <p className="text-base leading-loose text-black opacity-70">
            The United Nations Office on Drugs and Crime confronts international criminality. This year's critical focus
            revolves around the widespread circulation of the highly addictive drug, captagon, across the Middle East,
            North Africa, and Europe. The damage it inflicts on individuals, families, and societies is grave, placing
            the onus on delegates to work towards resolving this epidemic.
          </p>
        }
        subtitle=""
        image="/photos/committees/unodc.jpeg"
        imageALT="UNODC">
        <a className="btn-primary" href="/study-guides/UNODC.pdf" target="_blank">
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
              src="/photos/secretariat/vaskanin.jpeg"
              alt="Viktor Vaskanin"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Viktor Vaškanin</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>
          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            To whomever it may concern, we once again find ourselves in disarray. The whole Middle East is ridden with
            malicious drugs, every other week authorities bust kilograms of captagon pills, but the end is nowhere to
            come. We, the UNODC must find a swift solution. I am honored to lead this operation, along with my great
            colleague Dávid. We will entertain the most fruitful discussion, the best ideas, and compose a
            ground-breaking resolution. But most importantly, we will have lots of fun together, as a group of amazing
            people.
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/vici_vasko/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <img
              className="aspect-square h-24 rounded-full"
              src="/photos/secretariat/patoprsty.png"
              alt="Lucia Dutkova"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Dávid Pätoprstý</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>

          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Hello dear delegates,
            <br />
            My name is Dávid Pätoprstý and I will be chairing the UNODC committee on AproMUN 2023. I hold to be amiable
            yet scrupulous, always welcoming a witty comment. Hope we can forge a banger committee experience together.
            See you in october ;))
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/david_patoprsty/"
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
