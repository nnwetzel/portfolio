export default function ExperiencePage() {
  return (
      <section>
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
          Experience
        </h1>
        <section className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold tracking-tighter">Amazon</h2>
            <span className="text-xl text-neutral-500">May - Aug 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg text-neutral-600">Software Development Engineer Intern</p>
            <p className="text-sm text-neutral-500">Seattle, WA</p>
          </div>
          <p className="mb-4">
            Designed and implemented scalable features using AWS services, including Lambda and
            EventBridge. Strengthened technical skills in system design, cloud computing, and software
            engineering.
          </p>
        </section>
      </section>
  );
}