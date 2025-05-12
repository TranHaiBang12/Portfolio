"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Code, Terminal, FileCode } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer"
  const highlightLength = 10 // số ký tự "Back-end"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 100) // tốc độ gõ

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-medium mb-2 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Hello!
            </h2>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              I'm <span className="gradient-text">Trần Hải Bằng</span>,
            </h1>
            <div className="relative h-12">
              <div className="typing-cursor text-2xl md:text-3xl font-medium font-mono inline-block">
                <span className="text-primary">{text.slice(0, highlightLength)}</span>
                <span>{text.slice(highlightLength)}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "900ms" }}>
              <Button size="lg" className="transition-all duration-300 hover:scale-105">
                <Link href="#projects" className="flex items-center">
                  View My Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] animate-float">
              <Image
                src="/programmer.png"
                alt="Developer illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-[10%] left-[10%] bg-card p-3 rounded-lg shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Code className="h-6 w-6 text-primary" />
            </div>

            <div
              className="absolute top-[20%] right-[15%] bg-card p-3 rounded-lg shadow-lg animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <Terminal className="h-6 w-6 text-primary" />
            </div>

            <div
              className="absolute bottom-[20%] left-[20%] bg-card p-3 rounded-lg shadow-lg animate-float"
              style={{ animationDelay: "2s" }}
            >
              <FileCode className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
