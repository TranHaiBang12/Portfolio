"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Kodeholik",
    description: [
      "I participated in this project as a back-end developer/team leader in a team of five members",
      "This project was developed as part of my final thesis for graduation - a website that allows users to develop their programming skills online by solving coding problems, taking courses, and participating in tests",
    ],
    image: "/kodeholik.png",
    tags: ["React", "Tailwind CSS", "Spring Boot", "PostgreSQL", "REST API", "WebSocket", "JWT", "Redis", "Elasticsearch", "Docker", "AWS S3", "AWS EC2", "AWS Lambda", "AWS CloudFront"],
    liveUrl: "https://youtu.be/i4gZZnN6e3M",
    githubUrl: "https://github.com/TranHaiBang12/Kodeholik-Backend",
  },
  {
    title: "Car Rental",
    description: [
      "I participated in this project as a back-end developer/team leader in a team of five members",
      "An intuitive and user-friendly car rental platform built to efficiently connect customers with available vehicles, providing a seamless experience for those in need of transportation"
    ],
    image: "/carrental.ico",
    tags: ["Angular", "Tailwind CSS", "Spring Boot", "MySQL", "REST API", "JWT", "Docker", "AWS S3", "HereMap", "VNPay"],
    liveUrl: "https://youtu.be/8Kf7Pwc464w",
    githubUrl: "https://github.com/TranHaiBang12/CarRental",
  },
  {
    title: "Near Me",
    description: [
      "I participated in this project as a full-stack developer in a team of five members",
      "An online freelance marketplace that serves as a bridge between job seekers and employers, helping individuals find opportunities that match their skills and interests"
    ],
    image: "/nearme.png",
    tags: ["React", "Tailwind CSS", "ASP.NET", "SQL Server", "REST API", "JWT", "HereMap"],
    liveUrl: "https://youtu.be/8KhRUxmED9w",
    githubUrl: "https://github.com/TranHaiBang12/NearMeProject",
  }
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Get all unique tags
  const allTags = ["all", ...new Set(projects.flatMap((project) => project.tags))]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.tags.includes(filter)))
    }
  }, [filter])

  return (
    <section id="projects" className="section-container bg-muted/10">
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-title-full mx-auto">My Project</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Below are the projects I have worked on.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {allTags.map((tag, index) => (
            <Badge
              key={index}
              variant={filter === tag ? "default" : "outline"}
              className="cursor-pointer text-sm py-1 px-3 capitalize transition-all"
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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
              <div className="relative h-48 overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button asChild size="sm" variant="outline" className="mr-2 bg-background/20 backdrop-blur-sm">
                    <Link href={project.liveUrl} target="_blank">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Link>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {project.description.map((des, i) => (
                      <li key={i}>{des}</li>
                    ))}
                  </ul>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="transition-all duration-300 hover:scale-105">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="transition-all duration-300 hover:scale-105">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
