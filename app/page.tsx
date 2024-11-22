import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Nathaniel
      </h1>
      <p className="mb-4">
        {`As a second-year Computer Science student at Northeastern University, concentrating in Artificial Intelligence, I’ve seen firsthand how computer science is transforming the world. From platforms like Khan Academy making education accessible to artificial intelligence forecasting the spread of COVID-19, the possibilities are endless. I’ve even seen how AWS-powered machine learning models operate a fleet of drones to prevent wildfires in Australia.<br /><br />
          I’m passionate about problem-solving and creative engineering and view every opportunity as a stepping stone toward creating meaningful change. During my Amazon internship as an SDE and as a recipient of the Amazon Future Engineer Scholarship, I deepened my love for software engineering and developed a strong foundation in designing innovative solutions. I’m excited to further explore opportunities that challenge me to grow my skills and contribute to solving pressing global challenges.<br /><br />
          In the future, I see myself as a full-time software engineer. However, regardless of where I end up, my experience and dedication to computer science will empower me to make a substantial impact on the world.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
