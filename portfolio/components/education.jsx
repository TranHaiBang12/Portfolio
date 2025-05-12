"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "FPT University",
    year: "2021 - 2025",
    description: "Graduated with Distinction, GPA: 3.4/4.0",
    achievements: ["Outstanding Student"],
  },
  {
    degree: "Japanese Language Proficiency Test (JLPT) N5 Certificate",
    institution: "",
    year: "2025",
    description: "",
    achievements: [""],
  },
]

export function Education() {
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

    const element = document.getElementById("education")
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
    <section id="education" className="section-container">
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-title-full mx-auto">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My educational background and the qualifications I have obtained</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{
                  opacity: 0,
                  animation: isVisible ? `fadeInUp 0.5s ease forwards ${index * 0.2}s` : "none",
                }}
              >
                <div className="timeline-dot"></div>
                <div className="mb-1 text-sm text-muted-foreground">{item.year}</div>
                <Card className="card-hover border-none shadow-none bg-transparent">
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {item.degree}
                    </CardTitle>
                    <CardDescription className="text-base">{item.institution}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/10 hover:bg-primary/20">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
