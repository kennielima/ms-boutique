import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Spot from "@/components/Spot";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Latest />
      <Spot />
    </div>
  )
}
