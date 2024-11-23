export default function ExperiencePage() {
  return (
      <section className="p-6">
        <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
          Experience
        </h1>
        <p className="mb-6 text-lg">
          Here’s a glimpse into my professional journey, internships, and roles that have shaped my skills and expertise.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Amazon</h2>
            <p className="italic">Software Development Engineer Intern – May 2024 to Aug 2024</p>
            <ul className="mt-4 list-disc list-inside text-lg">
              <li>Designed and implemented scalable features using AWS services, including Lambda and EventBridge.</li>
              <li>Collaborated with a mentor and team to build a data-driven solution that improved efficiency.</li>
              <li>Strengthened technical skills in system design, cloud computing, and software engineering.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Northeastern University</h2>
            <p className="italic">Founding Member, Association for Computing Machinery</p>
            <ul className="mt-4 list-disc list-inside text-lg">
              <li>Played a key role in establishing the ACM chapter to foster student engagement in computing.</li>
              <li>Organized and participated in workshops, coding challenges, and collaborative projects.</li>
            </ul>
          </div>
        </div>
      </section>
  );
}