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
            <h2 className="text-xl font-semibold tracking-tighter">Amazon</h2>
            <span className="text-xl tracking-tighter">Jun 2025 – Sep 2025</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="tracking-tighter"><i>Software Development Engineer Intern</i></p>
            <p className="tracking-tighter"><i>Seattle, WA</i></p>
          </div>
          <p className="mb-4">
            Summer '25
          </p>
        </section>
        <section className="mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold tracking-tighter">Wolters Kluwer</h2>
            <span className="text-xl tracking-tighter">Jan 2025 – Present</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="tracking-tighter"><i>DevOps Software Engineer Intern</i></p>
            <p className="tracking-tighter"><i>Waltham, MA</i></p>
          </div>
          <p className="mb-4">
            Leverage Ansible to automate agent installation, develop comprehensive audit scripts, and implement a
            configurable internal patch management tool across Windows and Linux hosts.
          </p>
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
            the status, completeness, and estimated completion time for processing over <b>100,000+
            invoices monthly</b>.
          </p>
          <p className="mb-4">
            Built two AWS Lambda functions in Java and Python,
            utilizing ElasticSearch, CloudWatch, and EventBridge for real-time
            metric collection and automated notifications.
          </p>
          <p className="mb-4">
            Developed an infrastructure-as-code module using Amazon CDK for deploying the
            Lambda service within a VPC, integrating Dagger for secure and efficient
            operations.
          </p>
          <p className="mb-4">
            Immediately enhanced engineering on-call visibility and responsiveness by utilizing the
            service to effectively resolve a high-severity incident, preventing future
            disruptions and ensuring timely invoice rendering and delivery.
          </p>
        </section>
      </section>
  );
}