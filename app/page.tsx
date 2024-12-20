export const metadata = {
  title: 'About Me',
  description: 'Read my about me.',
}

export default function Page() {
  return (
      <section>
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
          Hi, I'm Nat
        </h1>
        <p className="mb-4">
          As a second-year Computer Science student at Northeastern University, concentrating in
          Artificial Intelligence, I’ve seen firsthand how computer science is transforming
          the <i>world</i>. From platforms like Khan Academy making education accessible to
          artificial intelligence forecasting the spread of COVID-19, the possibilities are endless.
        </p>
        <p className="mb-4">
          I’ve even seen how machine learning models powered by Amazon Web Services (AWS) operate a
          fleet of drones to prevent wildfires in Australia.
        </p>
        <p className="mb-4">
          Therefore, I’m passionate about <b>problem-solving</b> and <b>creative engineering</b>,
          viewing
          every opportunity as a stepping stone toward meaningful change.
        </p>
        <p className="mb-4">
          During my Amazon internship as an SDE and as a recipient of the Amazon Future Engineer
          Scholarship, I
          strengthened my passion for <b>software engineering</b> and developed a strong foundation
          in <b>designing innovative solutions</b>.
          I’m excited to further explore opportunities that challenge me to grow my skills and
          contribute to solving pressing global challenges.
        </p>
        <p className="mb-4">
          In the future, I see myself working as a full-time software engineer. Regardless of the
          path I take, my <b>dedication</b> to computer science will allow me to make a meaningful
          impact on the <i>world</i>.
        </p>
      </section>
  )
}