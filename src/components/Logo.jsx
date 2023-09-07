import logo from '@/images/logos/logo.svg'
import Image from 'next/image'

export function Logo(props) {
  return (
    <Image
      src={logo}
      alt="Committable"
      width={300}
      height={100}
      style={{ width: '100%', height: 'auto' }} // optional
      unoptimized
    />
  )
}
