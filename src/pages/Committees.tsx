import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import divierAnimation from '../lib/animation.json';
import CountryMatrix from '../components/CountryMatrix';

const Committee = ({
  title,
  image,
  description,
  difficulty,
  link,
}: {
  title: string;
  image: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  link?: string;
}) => {
  return (
    <div className="flex flex-col items-start pb-12 md:grid md:grid-cols-[14rem_1fr_min-content] md:items-center ">
      <img
        className="aspect-square h-24 md:h-32 md:self-center md:justify-self-center"
        src={image}
        alt={`${title} logo`}
      />
      <div className="mt-3 flex flex-col items-start">
        <span className="text-2xl font-bold md:text-3xl">{title}</span>
        <span
          className={`mt-1 rounded-full px-4 py-1 text-xs font-bold text-white ${
            difficulty == 'Beginner' ? 'bg-green-500' : difficulty == 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
          }`}>
          {difficulty}
        </span>
        <p className="mt-2 opacity-70">{description}</p>
      </div>
      <a href={link} className="mt-2 whitespace-nowrap font-bold text-primary">
        VIEW DETAILS
      </a>
    </div>
  );
};

export const Committees = () => {
  return (
    <>
      <Helmet>
        <title>Committees | AproMUN 2023</title>
      </Helmet>

      <Header dark />

      <div className="relative mx-auto mt-32 flex max-w-8xl flex-col px-5">
        <span className="text-sm font-bold text-primary">INFORMATION</span>
        <span className="text-4xl md:text-7xl">This Year's Committees</span>

        <div className="mt-12">
          <Committee
            title="UN Women"
            difficulty="Beginner"
            image="/icons/committees/UNW.svg"
            description="Overcoming barriers to girls' education in South Asia, such as poverty, cultural norms, and early marriage"
            link="/committees/unw"
          />
          <Committee
            title="Economic and Social Council"
            difficulty="Beginner"
            image="/icons/committees/ECOSOC.svg"
            description="Addressing the consequences of the food crisis in the Horn of Africa"
            link="/committees/ecosoc"
          />
          <Committee
            title="United Nations Environment Programme"
            difficulty="Beginner"
            image="/icons/committees/UNEP.svg"
            description="Examining the risks associated with nuclear meltdowns at power plants in volatile regions, especially in Ukraine"
            link="/committees/unep"
          />
          <Committee
            title="Human Rights Council"
            difficulty="Intermediate"
            image="/icons/committees/HRC.svg"
            description="Finding a solution to the phenomenon of democratic backsliding"
            link="/committees/hrc"
          />
          <Committee
            title="United Nations Office on Drugs and Crime"
            difficulty="Intermediate"
            image="/icons/committees/Generic.svg"
            description="Tackling the problem of the production and trafficking of captagon in the Middle East and Europe"
            link="/committees/unodc"
          />
          <Committee
            title="Historical Diplomatic Summit"
            difficulty="Expert"
            image="/icons/committees/HDS.svg"
            description="1919: Attempting to peacefully resolve the Russian Civil War"
            link="/committees/hds"
          />
          <Committee
            title="Security council"
            difficulty="Expert"
            image="/icons/committees/Generic.svg"
            description="Ensuring the safety and stability in Moldova in the face of Russian Aggression in Ukraine"
            link="/committees/sc"
          />
        </div>

        <div className="mt-12 flex flex-col md:mt-36 lg:mt-48">
          <span className="text-sm font-bold text-primary">INFORMATION</span>
          <span className="text-4xl md:text-7xl">Country Matrix</span>

          <CountryMatrix />
        </div>
      </div>

      <Lottie className="mt-24 hidden lg:block" animationData={divierAnimation} loop={true} />

      <CTA />
      <Footer />
    </>
  );
};
