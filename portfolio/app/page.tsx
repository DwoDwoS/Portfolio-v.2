import TechSkills from '@/components/TechSkills'
import LastestProjects from '@/components/LastestProjects'
import HomePageContact from '@/components/HomePageContact'
import Resume from '@/components/Resume'

export default function Home() {
  return (
      <main className="min-h-screen transition-colors duration-300 bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))]">
      <Resume />
      <TechSkills />
      <LastestProjects />
      <HomePageContact />
    </main>
  )
}