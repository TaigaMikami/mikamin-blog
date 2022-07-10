import { client } from '@/libs/client'
import { Profile } from 'types/profile'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'

export default function About({ profile }: { profile: Profile }) {
  const { name, avatar_icon, occupation, company, description, twitter, linkedin, github } = profile
  console.log(twitter)

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar_icon.url}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            {description}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'profile' })

  return {
    props: {
      profile: data.contents[0],
    },
  }
}
