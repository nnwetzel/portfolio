import { ProjectPosts } from 'app/components/posts'

export const metadata = {
  title: 'My Project',
  description: 'Read my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">My Projects</h1>
      <ProjectPosts/>
    </section>
  )
}
