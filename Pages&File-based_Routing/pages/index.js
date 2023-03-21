import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Hallo</h1>
      <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
      </ul>
    </div>
  )
}

export default Home
