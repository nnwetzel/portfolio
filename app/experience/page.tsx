export const metadata = {
  title: 'My Experience',
  description: 'Read my experience.',
}

export default function Page() {
  return (

      <section>
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
          My Experience
        </h1>
        <section className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold tracking-tighter">Wolters Kluwer</h2>
            <span className="text-xl tracking-tighter">Jan 2025 – Present</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="tracking-tighter"><i>DevOps Software Engineer Intern</i></p>
            <p className="tracking-tighter"><i>Waltham, MA</i></p>
          </div>
        </section>
        <section className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold tracking-tighter">Amazon</h2>
            <span className="text-xl tracking-tighter">May 2024 – Aug 2024</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="tracking-tighter"><i>Software Development Engineer Intern</i></p>
            <p className="tracking-tighter"><i>Seattle, WA</i></p>
          </div>
          <p className="mb-4">
            Designed and implemented a scalable metric aggregation and notification service to track
            the status, completeness, and estimated completion time for processing over <b>100k+
            invoices</b> monthly.
          </p>
          <p className="mb-4">
            Built two <b>AWS Lambda</b> functions in <b>Java</b> and <b>Python</b>,
            utilizing <b>ElasticSearch</b>, <b>CloudWatch</b>, and <b>EventBridge</b> for real-time
            metric collection and automated notifications.
          </p>
          <p className="mb-4">
            Developed an infrastructure-as-code module using <b>Amazon CDK</b> for deploying the
            Lambda service within a <b>VPC</b>, integrating <b>Dagger</b> for secure and efficient
            operations.
          </p>
          <p className="mb-4">
            Immediately enhanced engineering on-call visibility and responsiveness by utilizing the
            service to effectively resolve a <b>high-severity incident</b>, preventing future
            disruptions and ensuring timely invoice rendering and delivery.
          </p>
        </section>
      </section>
  );
}