"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experienceData = [
  {
    position: "Intern Back-end Developer",
    company: "FPT Software",
    location: "Hà Nội, Việt Nam",
    period: "01/2024 - 06/2024",
    description: [
      "I participated in a project-based internship, where I served as the leader of a team of 5 members.",
      "Our project was a car rental website, using Java Spring for the backend and AngularJS for the frontend.",
      <>During my time working here, I was awarded <span className="font-bold text-primary">second prize</span> in the <span className="font-bold text-primary">Code War competition.</span></>
    ],
    responsibilities: [
      "Completed assigned tasks as a back-end develope",
      "Organized meetings, planned schedules, and led the team as a team leader",
      "Optimized performance and page load time"
    ],
  }
]

export function Experience() {
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

    const element = document.getElementById("experience")
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
    <section id="experience" className="section-container bg-muted/10">
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-title-full mx-auto">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The work experience and positions I have held</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{
                  opacity: 0,
                  animation: isVisible ? `fadeInUp 0.5s ease forwards ${index * 0.2}s` : "none",
                }}
              >
                <div className="timeline-dot"></div>
                <div className="mb-1 text-sm text-muted-foreground">{item.period}</div>
                <Card className="card-hover border-none shadow-none bg-transparent">
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {item.position}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {item.company} • {item.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      {item.description.map((des, i) => (
                        <li key={i}>{des}</li>
                      ))}
                    </ul>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium mt-2">Main Responsibility:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {item.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
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
