"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const certifications = [
  {
    name: "User Experience Research and Design",
    issuer: "Coursera",
    date: "October 29, 2024",
    description: "",
    credentialUrl: "https://coursera.org/share/97212a80f8a3a473cdc3c81d7c65269e",
  },
  {
    name: "Project Management Principles and Practices",
    issuer: "Coursera",
    date: "June 18, 2024",
    description: "",
    credentialUrl: "https://coursera.org/share/5914bb78d1209ae84f601eb997492cd8",
  },
  {
    name: "Software Development Lifecycle",
    issuer: "Coursera",
    date: "May 20, 2023",
    description: "",
    credentialUrl: "https://coursera.org/share/90e7a4644f619024af8ec05cc25f9a49",
  },
  {
    name: "Basics of Web Development & Coding",
    issuer: "Coursera",
    date: "January 22, 2023",
    description: "",
    credentialUrl: "https://coursera.org/share/836ef8a9579b4fab494d4530bbc1ec3e",
  },
]

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("certifications")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="certifications" className="section-container">
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-title-full mx-auto">Certificate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Below are the certifications I have obtained</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
            key={index}
            className="card-hover"
            style={{
              animationDelay: `${index * 150 + 200}ms`,
              opacity: 0,
              animation: isVisible ? "fadeInUp 0.5s ease forwards" : "none",
            }}
          >
            <span className="border-line border-top"></span>
            <span className="border-line border-bottom"></span>
            <span className="border-line border-right"></span>
            <span className="border-line border-left"></span>
              <CardHeader >
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-8 w-5 text-primary mr-2" />
                  {cert.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 ">
                  <span>{cert.issuer}</span>
                  <span className="text-xs">•</span>
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="sm" variant="outline" className="transition-all duration-300 hover:scale-105">
                  <Link href={cert.credentialUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
