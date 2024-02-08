import { FAQItem, FAQ } from '../components/FAQ';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ImageBox } from '../components/ImageBox';
import { Notice } from '../components/Notice';
import { PerksItem, Perks } from '../components/Perks';
import { RatingsItem, Ratings } from '../components/Ratings';
import { BM } from '../components/BoldMark';
import { Partners, PartnersItem } from '../components/Partners';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';
import divierAnimation from '../lib/animation.json';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>AproMUN - A #3 MUN conference in the world</title>
      </Helmet>

      <Header />

      <Hero />

      <ImageBox
        title={
          <>
            Back for its <br /> <mark>6th edition</mark>
          </>
        }
        subtitle="ONE OF THE BEST MUNS"
        image="/photos/highlight.png"
        imageALT="AproMUN 2022 Highlight">
        <a className="btn-primary" href="https://mymun.com/conferences/apromun-2023">
          SIGN UP NOW
        </a>
        <a className="btn-secondary" href="/committees">
          COMMITTEES
        </a>
      </ImageBox>

      <Perks>
        <PerksItem
          title="3 action-packed days"
          description="Enjoy a fulfilling, enriching and fast-paced simulation of diplomacy and politics."
          icon="/icons/committees.svg"
        />
        <PerksItem
          title="7 different committees"
          description="Join a committee which best fits your interests."
          icon="/icons/committees.svg"
        />
        <PerksItem
          title="Over 100 delegates"
          description="Meet, network and have fun with a crowd of wonderful people with similar interests."
          icon="/icons/committees.svg"
        />
      </Perks>

      <div className="relative mx-auto mt-48 flex w-full flex-col px-5 py-12 md:max-w-8xl md:pb-36 md:pt-24">
        <span className="z-10 text-sm font-bold text-white">AWARDS</span>
        <span className="z-10 text-4xl text-white md:text-7xl">
          2022 -{' '}
          <strong>
            3<sup>rd</sup> Best rated
          </strong>
          <br />
          MUN Conference
        </span>
        <p className="z-10 mt-5 text-white lg:w-1/3">
          <strong>AproMUN</strong> is pushing the limits of MUN conferences higher and higher each year, resulting in
          the <strong>best MUN experience</strong> you can get
          <br />
          <br />
          Last year, we were the <strong>best-rated</strong> MUN in Slovakia and 3rd best small MUN{' '}
          <strong>in the world</strong>
        </p>

        <div className="absolute bottom-0 left-0 right-0 top-0 bg-primary lg:-left-1/2 xl:right-1/3">
          <img
            className="absolute right-0 hidden max-w-3xl translate-x-2/3 translate-y-2/3 rounded-lg 2xl:block"
            src="/photos/best-rated.png"
            alt="AproMUN 2022 Group Photo"
          />
        </div>
      </div>
      <Notice text="* According to a leaderboard published by MyMUN.com" />

      <Ratings>
        <RatingsItem text="AproMUN 2022 was by far the best MUN that I have attended." />
        <RatingsItem text="AproMUN 2022 was perfect, thank you :)" />
        <RatingsItem text="AproMUN 2022 was fantastic with excellent logistics, venues, and food." />
      </Ratings>
      <Notice text="* Hand picked from over 60 reviews averaging 4.6 / 5" />

      <FAQ>
        <FAQItem question="What is AproMUN?">
          <>
            <BM>AproMUN</BM> is a Model United Nations conference organized by the <BM>AproMUN</BM> team from{' '}
            <a className="font-bold text-primary" href="https://www.spmndag.sk/" target="_blank" rel="noreferrer">
              ŠpMNDaG
            </a>
            . It is a simulation of the <BM>United Nations</BM>, where students take on the role of diplomats and debate
            on a variety of topics. It is a great opportunity to meet new people, improve your public speaking skills,
            and learn about the world around you.
          </>
        </FAQItem>
        <FAQItem question="What are the requirements to participate?">
          <>
            You have to be between <BM>14 and 21 years</BM> of age , apply via{' '}
            <a className="font-bold text-primary" href="https://www.mymun.com/" target="_blank" rel="noreferrer">
              MyMUN
            </a>{' '}
            and pay your delegate fee. You need the ability to speak <BM>English</BM>, know about your committee's
            topic, and have a passion for global affairs.
          </>
        </FAQItem>
        <FAQItem question="How much is the delegate fee and how do I pay it?">
          <>
            The delegate fee is <BM>40€</BM>. It has to be paid via{' '}
            <a className="font-bold text-primary" href="https://www.mymun.com/" target="_blank" rel="noreferrer">
              MyMUN
            </a>
          </>
        </FAQItem>
        <FAQItem question="How many delegates will participate?">
          <>
            We expect there will be up to <BM>105 delegates</BM>.
          </>
        </FAQItem>
        <FAQItem question="I am not from Slovakia. Am I allowed to attend?">
          <>
            Of course, as long as you can get to <BM>AproMUN</BM> independently, you are more than welcome to attend,
            irrespective of your country of residence
          </>
        </FAQItem>
        <FAQItem question="Does AproMUN provide housing or host families for delegates?">
          <>
            We provide <BM>neither housing nor host families</BM> for attending delegates. Delegates and delegations are
            invited to utilize accommodation apps such as{' '}
            <a className="font-bold text-primary" href="https://www.booking.com/" target="_blank" rel="noreferrer">
              Booking
            </a>{' '}
            or{' '}
            <a className="font-bold text-primary" href="https://www.airbnb.com/" target="_blank" rel="noreferrer">
              Airbnb
            </a>{' '}
            to find a suitable place to stay in Bratislava.
          </>
        </FAQItem>
        <FAQItem question="What is the language of the conference?">
          <>
            The language of the conference is <BM>English</BM>. All delegates are expected to be able to{' '}
            <BM>speak English fluently</BM>.
          </>
        </FAQItem>
        <FAQItem question="Where will AproMUN 2023 take place?">
          <>
            <BM>AproMUN 2023</BM> will take place in Bratislava, Slovakia. Specifically, the opening ceremony and
            general assembly will take place at the <BM>Ministry of Foreign Affairs</BM> of the Slovak Republic, and the
            rest of <BM>AproMUN</BM> will take place at the <BM>Law Faculty of Comenius University</BM>.
          </>
        </FAQItem>
        <FAQItem question="Who can I contact regarding AproMUN?">
          <>
            You can contact us using the contact form on this website, or by sending us an email at{' '}
            <a className="font-bold text-primary" href="mailto:secretariat@apromun.com">
              secretariat@apromun.com
            </a>
          </>
        </FAQItem>
      </FAQ>

      <Partners>
        {/* <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/bevanda.png" /> */}
        <PartnersItem alt="BSK" logo="/photos/partners/bsk.png" />
        {/* <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/corwin.svg" /> */}
        {/* <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/dedoles.svg" /> */}
        {/* <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/lunter.svg" /> */}
        <PartnersItem alt="MZV SR" logo="/photos/partners/mzv.png" />
        {/* <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/poradca.svg" /> */}
        <PartnersItem alt="PRAF UK" logo="/photos/partners/prafuk.svg" />
        <PartnersItem className="scale-50" alt="Resco" logo="/photos/partners/resco.svg" />
        <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/spmndag.svg" />
        {/* <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/tesco.svg" /> */}
        <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/uk.svg" />
        <PartnersItem className="invert" alt="Lion Catering" logo="/photos/partners/lion.png" />
        <PartnersItem alt="STU FIIT" logo="/photos/partners/FIIT.png" />
        {/* <PartnersItem alt="ŠpMNDaG" logo="/photos/partners/yumearth.svg" /> */}
      </Partners>

      <Lottie className="mt-24 hidden lg:block" animationData={divierAnimation} loop={true} />

      <CTA />
      <Footer />
    </>
  );
};
