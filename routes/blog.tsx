/** @jsx h */
import { h } from 'preact'
import { Handlers, PageProps } from '$fresh/server.ts'
import { tw } from '@twind'
import { listPosts, Post, State } from '../utils/posts.ts'
import Layout from '../components/Layout.tsx'

interface Data extends State {
  posts: Post[]
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts()
    return ctx.render({ ...ctx.state, posts })
  },
}

export default function Home(props: PageProps<Data>) {
  const { posts, locales } = props.data
  return (
    <Layout>
      <main
        class={tw` my-[calc(1rem+5vh)] mx-4 grid grid-cols-[2fr,3fr,auto,1fr]`}
      >
        <h1
          class={tw`col-[2/4] ml-2 mb-4 md:mb-0 font-serif text-[calc(1em+10vw)]`}
        >
          Blog
        </h1>
        <ul class={tw`mt-8 col-[3/4] mb-[1em] max-w-[70ch] leading-normal`}>
          {posts.map((post) => (
            <PostEntry post={post} locales={locales} />
          ))}
        </ul>
      </main>
    </Layout>
  )
}

function PostEntry(props: { post: Post; locales: string[] }) {
  const { post, locales = 'id' } = props
  const dateFmt = new Intl.DateTimeFormat(locales, { dateStyle: 'medium' })

  return (
    <li class={tw`mb-4 border-b`}>
      <a href={`/blog/${post.slug}`} class={tw``}>
        <div>
          <time class={tw`pt-2 text-xs`}>{dateFmt.format(post.date)}</time>
          <h2 class={tw`font-bold text-2xl group-hover:underline`}>
            {post.title}
          </h2>
          <p class={tw`text-slate-600`}>{post.summary}</p>
        </div>
      </a>
    </li>
  )
}
