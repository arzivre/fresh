import { extract } from '$std/encoding/front_matter.ts'

export interface State {
  locales: string[]
}

export interface Post {
  id: string
  slug: string
  title: string
  date: Date
  summary: string
  content: string
}

export async function loadPost(id: string): Promise<Post | null> {
  let text: string
  try {
    text = await Deno.readTextFile(`./data/posts/${id}.md`)
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return null
    }
    throw err
  }
  const { attrs, body } = extract(text)
  const params = attrs as Record<string, string>
  const date = new Date(params.date)
  return {
    id,
    slug: params.slug,
    title: params.title,
    date,
    summary: params.summary,
    content: body,
  }
}

export async function listPosts(): Promise<Post[]> {
  const promises = []
  for await (const entry of Deno.readDir('./data/posts')) {
    const id = entry.name.replace('.md', '')
    promises.push(loadPost(id))
  }
  const posts = (await Promise.all(promises)) as Post[]
  posts.sort((a, b) => b.date.getTime() - a.date.getTime())
  return posts
}
