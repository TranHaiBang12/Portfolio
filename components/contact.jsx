"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, FileUser } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

    const element = document.getElementById("contact")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Giả lập gửi form
    setTimeout(() => {
      console.log(formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset trạng thái sau 3 giây
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Điện thoại",
      value: "+84 123 456 789",
      link: "tel:+84123456789",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Địa chỉ",
      value: "Hà Nội, Việt Nam",
      link: "https://maps.google.com/?q=Hanoi,Vietnam",
    },
  ]

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      name: "Gmail",
      detail: "bangth.work@gmail.com",
      link: "#",
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      detail: "TranHaiBang12",
      link: "https://github.com/TranHaiBang12",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      detail: "Tran Hai Bang",
      link: "https://www.linkedin.com/in/tran-hai-bang-0ab628365/",
    },
    {
      icon: <FileUser className="h-5 w-5" />,
      name: "CV",
      detail: "My CV",
      link: "https://drive.google.com/drive/folders/1UX8h9W_u6dGLtpqeaupJmBPfNsfAC7az?usp=sharing",
    }
  ]

  return (
    <section id="contact" className="section-container bg-muted/10">
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-title-full mx-auto">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thank you for taking the time to view my portfolio. Below is my contact information
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 w-full flex justify-center mx-auto">
          {socialLinks.map((link, index) => (
            <Card
              key={index}
              className="card-hover w-full max-w-xs"  // Đảm bảo Card có chiều rộng linh hoạt
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

              <CardContent className="pt-6 cursor-pointer relative z-10 rounded-xl">
                <div className="flex items-center gap-2 justify-center">
                  <div>{link.icon}</div>
                  <h3 className="text-xl font-semibold">{link.name}</h3>
                </div>
                <div className="flex justify-center text-blue-600 items-center gap-2 mt-2">
                  <Link href={link.link} target="_blank" rel="noopener noreferrer" className="truncate">
                    {link.detail}
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
