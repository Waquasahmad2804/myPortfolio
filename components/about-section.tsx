export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a self-motivated and agile-ready web developer with a strong passion for backend technologies and
            problem-solving. My expertise lies in creating robust web applications using modern technologies like PHP,
            Laravel, Java, and MySQL.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Completed my{" "}
            <span className="text-primary font-semibold">Master of Computer Applications (MCA)</span> at Netaji Subhas
            University (2023–2025), I have gained valuable hands-on experience through my internship and professional
            work with Laravel-based applications.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I am deeply committed to continuous learning and collaboration, always staying updated with the latest
            industry trends and best practices. My goal is to contribute to innovative projects while growing as a
            developer and team member in an agile environment.
          </p>
        </div>
      </div>
    </section>
  )
}
