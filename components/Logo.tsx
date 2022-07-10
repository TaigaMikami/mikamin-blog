import siteMetaData from '@/data/siteMetaData'
import Image from 'next/image'

const Logo = () => {
  return (
    <>
      <Image src={siteMetaData.avatar} alt={siteMetaData.avatar} height={60} width={60} />
    </>
  )
}

export default Logo
