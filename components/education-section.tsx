import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Netaji Subhas University",
    period: "2023 – 2025",
    status: "Completed",
    description:
      "Focusing on advanced computer science concepts, software development, and emerging technologies. Gaining expertise in system design, database management, and modern programming paradigms.",
  },
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "Kolhan University",
    period: "2020 – 2023",
    status: "Completed",
    description:
      "Strong foundation in mathematical concepts, logical reasoning, and analytical thinking. Developed problem-solving skills that complement programming and software development.",
  },
  {
    degree: "12th Grade (PCM - Physics, Chemistry, Mathematics)",
    institution: "Karim City College",
    period: "2017 – 2019",
    status: "Completed",
    description:
      "Science stream with focus on Physics, Chemistry, and Mathematics. Built strong analytical and mathematical foundation.",
  },
  {
    degree: "10th Grade",
    institution: "Amar Jyoti School",
    period: "2016 – 2017",
    status: "Completed",
    description:
      "Completed secondary education with good academic performance and developed interest in mathematics and science.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mb-2">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {edu.period}
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <span
                        className={`font-medium ${
                          edu.status === "Currently Pursuing" ? "text-primary" : "text-green-600"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
