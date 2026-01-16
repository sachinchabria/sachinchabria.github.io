import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'My name is Sachin and I live with my parents (by choice, I promise).',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              unoptimized
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            My name is Sachin and I live with my parents (by choice, I promise).
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I was born in the province of Colon in Panama and I lived there until
              I was 12 years old. When my oldest sister graduated from
              high school, my family and I moved to Panama City, where I 
              continued to take tennis lessons, albeit at a higher level of
              difficulty then I was used to in Colon.
            </p>
            <p>
              I started competing in tennis tournaments at age 10 but it was
              only until I moved to Panama City that I began taking it 
              seriously. National tournaments turned into international
              tournaments and 3x a week turned into two-a-days, all while
              managing a full-time job (going to school).
            </p>
            <p>
              At 16, I came to the unfortunate realization that I wouldn't be
              able to pursue a professional tennis career unless I quit my
              full-time job (and did home school instead). Unfortunately, my
              parents refused the offer and I instead began putting my effort
              into interests that could impact my lifetime income. The only one
              that stuck was coding.
            </p>
            <p>
              Today, I’m an analyst at McKinsey, but I play more of a "whatever
              the client team needs" role thanks to the flexibility of a small
              country like Panama. That might be anything from a data scientist
              to an event planner depending on the client we are serving. When 
              I am not on the 21st floor of the Davivienda building, you can 
              find me at the Curundu tennis courts or one of the 50 waterfalls
              in my bucket list (42 to go).
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://instagram.com/sach.png" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/sachinchabria" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/sachinchhabria" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:sach.chhabria@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              sach.chhabria@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
