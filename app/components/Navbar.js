import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='flex justify-between'>
        <div className='flex space-x-6'>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
     
        <div><Link href="/blog">Blog</Link></div>
    </div>
  )
}


