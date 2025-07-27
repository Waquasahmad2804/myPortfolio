import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
  title: "Plant Maintenance ERP System",
  description:
    "A robust ERP solution developed for managing tank cleaning records, lubricant usage, and machine servicing across multiple plants. The system streamlines operations with modules for data entry, reporting, user roles, and plant-wise segregation. Designed for efficiency, compliance tracking, and integration with plant maintenance workflows.",
  techStack: ["Laravel", "MySQL", "JavaScript", "Blade", "HTML/CSS"],
  features: [
    "Tank cleaning data management",
    "Lubricant and oil usage tracking",
    "Machine maintenance history logging",
    "Multi-plant support with user roles",
    "Dynamic reporting and analytics dashboard",
  ],
  image: "/sa.png?height=200&width=400",
},

  {
    title: "E-Learning Platform",
    description:
      "A full-featured learning management system built with Laravel, offering course catalogs, video lectures, instructor dashboards, and certificate generation. Includes role-based authentication and revenue tracking for instructors.",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    features: [
      "Course catalog management",
      "Video lecture streaming",
      "Instructor dashboard",
      "Certificate generation",
      "Role-based login system",
      "Course progress tracking",
      "Revenue system for instructors",
    ],
    image: "/2.png?height=200&width=400",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
