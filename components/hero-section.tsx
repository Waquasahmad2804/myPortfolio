"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToResume = () => {
    const element = document.getElementById("resume")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Waquas Ahmad"
                width={192}
                height={192}
                className="rounded-full object-cover border-4 border-primary/20"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm <span className="text-primary">Waquas Ahmad</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A web developer skilled in <span className="text-primary font-semibold">PHP</span>,{" "}
              <span className="text-primary font-semibold">Laravel</span>,{" "}
              <span className="text-primary font-semibold">Java</span>, and{" "}
              <span className="text-primary font-semibold">MySQL</span>. I build practical web applications and aim to
              solve real-world problems with clean, efficient code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToResume} className="w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact} className="w-full sm:w-auto bg-transparent">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
