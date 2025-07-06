import Head from 'next/head'
import Bio from '../components/Bio'
import Work from '../components/Work'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Responsibility from '../components/Responsibility'
import CyberSecHero from '../components/CyberSecHero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vijay Yadav | Cybersecurity Portfolio</title>
      </Head>
      <main className="p-4 font-sans">
        <h1 className="text-4xl font-bold text-center mb-6">Vijay Yadav</h1>
        <Bio />
        <Work />
        <Projects />
        <Skills />
        <Responsibility />
        <CyberSecHero />
      </main>
    </>
  )
}
