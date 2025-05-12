"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Database, Palette, Wrench, Cpu, Book, Languages, Github } from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages, Mark Up",
    icon: <Code className="h-5 w-5 text-primary" />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "C#"
    ],
  },
  {
    name: "Frameworks",
    icon: <Server className="h-5 w-5 text-primary" />,
    skills: ["Spring Boot", "Spring MVC", "Spring JPA", "Spring Security", "ASP.NET"],
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5 text-primary" />,
    skills: ["PostgreSQL", "MySQL", "Redis", "SQL Server", "Tools: Elasticsearch"],
  },
  {
    name: "Version Control",
    icon: <Github className="h-5 w-5 text-primary" />,
    skills: ["GitHub", "GitLab"],
  },
  {
    name: "Languages",
    icon: <Languages className="h-5 w-5 text-primary" />,
    skills: ["Vietnamese (Native)", "English (Communicate)", "Japanese (Basic)"],
  },
  {
    name: "Knowledge",
    icon: <Book className="h-5 w-5 text-primary" />,
    skills: [
      "Agile",
      "REST API",
      "WebSocket",
      "Docker"
    ],
  },
]

export function Skills() {
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

    const element = document.getElementById("skills")
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
    <section id="skills" className="section-container">
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-title-full mx-auto">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">I'm interested in learning new skills. Below is what I've learned</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
            key={index}
            className="card-hover cursor-pointer"
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
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-card hover:bg-primary/10 transition-colors duration-300 py-1.5 px-3 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
