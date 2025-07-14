"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

export function ResumeSection() {
  const handleDownload = () => {
    // In a real application, this would trigger a download of the actual resume file
    alert("Resume download would start here. Please add your actual resume file.")
  }

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
              <FileText className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Download My Resume</CardTitle>
            <CardDescription className="text-lg">
              Get a comprehensive overview of my skills, experience, and education
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center">
              <Button size="lg" onClick={handleDownload} className="w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Current Role</h3>
                <p className="text-muted-foreground">Laravel Developer at Venturing Digitallt Pvt Ltd</p>
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground">MCA Student at Netaji Subhas University</p>
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2">Specialization</h3>
                <p className="text-muted-foreground">Backend Development & Web Applications</p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Resume Highlights</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Proficient in PHP, Laravel, Java, and MySQL
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Experience with modern web development frameworks and tools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Strong background in backend development and database management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Proven track record with real-world projects and internship experience
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
