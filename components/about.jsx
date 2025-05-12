import Image from "next/image"
import { User, Mail, MapPin, Calendar, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="section-container bg-muted/10 py-20">
      <div className="section-content">
        <div className="text-center mb-12">
          <h2 className="section-title-full mx-auto">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A few things about me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left" style={{ animationDelay: "200ms" }}>
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl ">
              <Image
                src="/programmer2.png"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110 "
              />
            </div>
          </div>

          <div className="animate-slide-in-right" style={{ animationDelay: "300ms" }}>
            <h3 className="text-2xl font-semibold mb-4">
              Who am I ? 
            </h3>

            <p className="text-muted-foreground mb-6">
            I am a full stack developer who graduated from FPT University with distinction degree. I was honored with the title of Outstanding Student in multiple semesters. Through the projects I have worked on, I have built a strong foundation in back-end programming, with proficiency in Java and C#, as well as a solid understanding of cloud platforms such as AWS. I am looking to further develop my skills with the goal of transitioning into a DevOps engineer role.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Name</h4>
                  <p className="text-sm text-muted-foreground">Trần Hải Bằng</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">bangth.work@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Date Of Birth</h4>
                  <p className="text-sm text-muted-foreground">20/04/2003</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Language</h4>
                  <p className="text-sm text-muted-foreground">Vietnamese, English, Japanese</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
