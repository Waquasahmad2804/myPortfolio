import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Laravel Developer",
    company: "Venturing Digitallt Pvt Ltd",
    location: "On-Site",
    period: "May 2025 – Present",
    type: "Full-time",
    description:
      "Working on backend development and Laravel-based applications. Responsible for developing scalable web solutions, implementing new features, and maintaining existing codebases.",
    responsibilities: [
      "Developing and maintaining Laravel-based web applications",
      "Backend API development and integration",
      "Database design and optimization",
      "Code review and quality assurance",
      "Collaborating with cross-functional teams",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Git"],
  },
  {
    title: "PHP Developer Intern",
    company: "X-way Designs",
    location: "Remote",
    period: "Sep 2024 – Oct 2024",
    type: "Internship",
    description:
      "Gained hands-on experience in PHP development, built internal tools, and learned version control practices. Worked on client-side logic and improved understanding of web development workflows.",
    responsibilities: [
      "Built internal PHP tools and utilities",
      "Learned version control with Git",
      "Developed client-side logic and interfaces",
      "Participated in code reviews and team meetings",
      "Assisted in debugging and testing applications",
    ],
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{experience.company}</CardDescription>
                  </div>
                  <Badge variant={experience.type === "Full-time" ? "default" : "secondary"}>{experience.type}</Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {experience.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {experience.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{experience.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
