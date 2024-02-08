import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import divierAnimation from '../../lib/animation.json';
import { ImageBox } from '../../components/ImageBox';

export const SC = () => {
  return (
    <>
      <Helmet>
        <title>SC | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">COMMITTEES</span>
        <span className="text-4xl md:text-7xl">Security Council</span>
      </div>

      <ImageBox
        title={
          <p className="text-base leading-loose text-black opacity-70">
            Established in 1945 to mediate conflicts between nations and prevent global warfare, the Security Council
            wields significant authority to enforce its decisions. It stands as the only UN body with legally binding
            decisions for all member states. This year, the Security Council endeavors to address the deteriorating
            security situation in the Republic of Moldova, amid the backdrop of the War in Ukraine.
          </p>
        }
        subtitle=""
        image="/photos/committees/sc.jpeg"
        imageALT="SC">
        <a className="btn-primary" href="/study-guides/SC.pdf" target="_blank">
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
              src="/photos/secretariat/kisel.png"
              alt="Viktor Matusovic"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Michal Kisel</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>
          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Greetings dear delegates!
            <br />
            My name is Michal Kisel and I will be the chair of SC for this year's AproMUN2023. The topic for SC is
            unknown to many, therefore I hope you'll learn something new while doing research. I am certain that this
            conference will be unforgettable for me and I will sure try to make it as good as possible for you as well.
            See you all in October. Sincerely,
            <br />
            Mišo
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/michalkisel/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <img className="invert" src="/icons/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <img className="aspect-square h-24 rounded-full" src="/photos/secretariat/tomica.png" alt="Lucia Dutkova" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Pavol Tomica</span>
              <span className="text-sm font-bold text-primary">Chairperson</span>
            </div>
          </div>

          <p className="mt-6 leading-loose opacity-70 md:pr-36">
            Dear participants,
            <br />
            my name is Pavol Tomica and it is my greatest pleasure to be able to chair the security council in this
            year's edition of AproMUN alongside my co-chair Michal. Our task is to protect the safety and peace of
            moldovan people from the russian warmachine. Delegates you will need to be united and cooperate to find a
            solution for the possible threat from the east before it is too late. See you all in October.
          </p>

          <div className="mt-6 flex gap-x-5">
            <a
              href="https://www.instagram.com/palo.tomica/"
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
