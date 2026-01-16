import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="The things I use to build software, stay productive, or buy to fool myself into thinking I will be more productive by indulging in consumerism."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M4 Pro, 24GB RAM (2024)">
            I was using an M2-based 14” MacBookAir (2022) prior to this and the
            difference is night and day. The only time I've heard the fans on this
            beast turn where when I naïvely trained an XGBoost model (to predict 
            tennis matches) on 100+ variables because I needed an extra 0.01 of accuracy
            to beat IBM. I eventually figured it out by changing my random seed. I know, 
            I cheated.
          </Tool>
          <Tool title="27” LG Smart Monitor (2024)">
            I couldn't care less about my monitor being smart or not...but our
            neighbor happens to be someone important at LG and was able to secure 
            this monitor at a fat discount. When I need something portable, I use the
            ThinkVision M14 Flat Panel Monitor that was personally gifted to me by Bob 
            Sternfels.
          </Tool>
          <Tool title="EPOMAKER X Aula F75 MAX Blank Mechanical Keyboard">
            I managed to convince myself that I would a better software engineer if I could
            type faster. This is a blank mechanical keyboard that will supposedly train me to
            stop looking at my keyboard while typing, which will make me a faster typer,
            which will lead to an $25M pay-package from OpenAI. 
          </Tool>
          <Tool title="Logitech MX Master 3 for Mac">
            I found this mouse while snooping through my sister’s room for gadgets she 
            abandoned after moving to NYC, hoping I could repurpose them or at least give
            them a new life. One thing I really love about this mouse is the infinite scroll 
            wheel. Genuinely, this should be a standard feature on every mouse. I don’t even 
            use the shortcuts—which is basically the whole point of this mouse.
          </Tool>
          <Tool title="WorkSmart Office Chair">
            Bought this on an ordinary Costco run that was originally planned to feature nothing
            more than the regulars: fish, chicken, strawberries, oats, and greek yogurt. But I
            came across an offer I could not refuse, at a time when I was desperate for an office
            chair. Comfortable enough to work, but not conmfortable enough to make good use of the
            Netflix on my Smart Monitor. Basically, perfect.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            My first CS professor from Berkeley, John DeNero, recommended this during lecture
            back in 2020 and I have not looked back since. 
          </Tool>
          <Tool title="Github Copilot">
            Currently on a detox from Github Copilot because I accidentally forgot to write 
            import statements after developing a Copilot dependency. But I will surely relapse
            very soon because it's the only way to keep up with my competition (Berkeley students
            who mumbled "AI agents" minutes after exiting the womb).
          </Tool>
          <Tool title="Tailwind UI">
            I'm a front-end engineer stuck in the body of back-end engineer, so Tailwind CSS makes
            my life much easier. I purchased the lifetime membership about a year and a half ago.
            Saved me way more than 8 hours of work, which was approximately how many hours I would
            have had to work at the time to make my money back.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma/Canva">
            I can't tell the difference between Figma and Canva. Whichever platform is offering 
            a free trial at the time in which I require their services, is free to exploit my 
            personal data however they deem fair and necessary.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="ClearSpace">
            Enforces screentime limits on your phone. It's similar to ScreenZen, except
            it has a much better UI and is not free. However, if you have a school email address,
            you can get the premium version for free.
          </Tool>
          <Tool title="Notion">
            I alternate between Notion and a Moleskin notebook that I always carry around to keep
            track of to-do-lists. Recently, however, I must must admit I am shifting away from Notion 
            because a Youtuber by the name of Reysu has convinced me to romanticize the idea of 
            a physical journal.
          </Tool>
          <Tool title="Oura Ring">
            So far, I've barely spent three days with it. But I can already feel myself becoming more
            disciplined, especially when it comes to getting 8 hours of sleep, drinking coffee no 
            less than 6 hours before bed, and avoiding blue light at night.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
