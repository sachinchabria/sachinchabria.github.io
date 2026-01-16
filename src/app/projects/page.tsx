import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logo49prints from '@/images/logos/49prints.svg'
import logoSpotify from '@/images/logos/spotify.svg'
import logoTennisBall from '@/images/logos/tennis.svg'

const projects = [
  {
    name: 'Intransitive Tennis',
    description:
      'A graph neural network (MagNet) for tennis match prediction that models matches as directed graphs to capture intransitive relationships (e.g., Federer beats Davydenko, Davydenko beats Nadal, Nadal beats Federer). Evaluated on ATP matches from 2025, the model achieved statistically significant betting performance, yielding a 3.9% Kelly ROI across more than 200 bets.',
    link: { href: 'https://github.com/sachinchabria/intransitive-tennis-match-prediction', label: 'github.com' },
    logo: logoTennisBall,
  },
  {
    name: 'Forty Nine Prints',
    description:
      'A full-stack web app that hosts my photography portfolio and lets users buy physical prints, as well as read the process behind (most of) my work. Built with React, Django and Tailwind CSS. Implemented a responsive gallery system and a secure e-commerce workflow. Integrated Stripe’s API for payment processing, checkout, and order tracking.',
    link: { href: 'https:/49prints.com/', label: '49prints.com' },
    logo: logo49prints,
  },
  {
    name: 'Spotify Rapped',
    description:
      'A web app that allows users to visualize their personalized Spotify data, built with React and Styled Components. Anyone can view their top artists, top tracks, recently played tracks, as well as create and save new playlists of recommended tracks based on their existing playlists. Currently pending approval from Spotify, but I can grant you access if you send me your spotify username.',
    link: { href: 'https:/spotifyrapped.com/', label: 'spotifyrapped.com' },
    logo: logoSpotify,
  },
  {
    name: 'Grand Slam Predictor',
    description:
      'An XGBoost model for Grand Slam tennis match prediction that considers 12 time- and surface-weighted player features (aces, double faults, winners, win streak, etc.). When evaluated on all four 2025 Grand Slams, it achieved 71% accuracy, beating IBM.',
    link: { href: '#', label: 'github.com' },
    logo: logoTennisBall,
  },
  {
    name: 'Buffet Indicating',
    description:
      'A Python-based mean-reversion trading strategy that dynamically trades SPY using probabilistic extremes of the Buffett Indicator, achieving a Sharpe ratio of 1.53 and outperforming a yield-spread benchmark.',
    link: { href: '#', label: 'github.com' },
    logo: logo49prints,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made for fun."
      intro="I’ve worked on a bunch of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
