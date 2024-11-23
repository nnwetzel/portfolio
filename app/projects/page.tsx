import { ProjectPosts } from 'app/components/posts'

export const metadata = {
  title: 'My Project',
  description: 'Read my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <ProjectPosts />
    </section>
  )
}
