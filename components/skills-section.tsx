import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "PHP"],
    icon: "💻",
  },
  {
    title: "Databases",
    skills: ["MySQL"],
    icon: "🗄️",
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
    icon: "🌐",
  },
  {
    title: "Frameworks & Tools",
    skills: ["Laravel", "Bootstrap", "Node.js"],
    icon: "🛠️",
  },
  {
    title: "Development Tools",
    skills: ["Git", "VS Code", "Postman"],
    icon: "⚙️",
  },
  {
    title: "Soft Skills",
    skills: ["Teamwork", "Project Management", "Agile"],
    icon: "🤝",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
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
