import TechSkills from '@/components/TechSkills'
import LastestProjects from '@/components/LastestProjects'
import HomePageContact from '@/components/HomePageContact'
import Resume from '@/components/Resume'

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 to-gray-700 text-white">
      <Resume />
      <TechSkills />
      <LastestProjects />
      <HomePageContact />
    </main>
  )
}