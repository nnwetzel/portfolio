export const metadata = {
  title: 'My Skills',
  description: 'Read my skills.',
}

export default function Page() {
  return (
      <section>
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
          My Skills
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold tracking-tighter">Languages</h2>
          <p>Java, Python, HTML5, CSS</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-tighter">Developer Tools</h2>
          <p>Git, Docker, Linux, AWS CDK, AWS Lambda, Amazon VPC, Amazon EventBridge, CloudWatch, ElasticSearch, Gradle, JUnit, Dagger, Pandas, LaTeX</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-tighter">Skills</h2>
          <p>Software Development Life Cycle (SDLC), Object-Oriented Design (OOD), Cloud Computing, Version Control with Git, Testing and Debugging, Technical Writing</p>
        </div>
      </section>
  );
}