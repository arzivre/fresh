/** @jsx h */
import { Head } from '$fresh/src/runtime/head.ts'
import { Fragment, h } from 'preact'
import Layout from '../components/Layout.tsx'
import { tw } from '@twind'

const Hero = () => {
  return (
    <Fragment>
      <article
        class={tw`container mx-auto px-4 min-h-[90vh] mt-10 lg:flex gap-8`}
      >
        <picture>
          <source srcset='images/profile.avif' type='image/avif' />
          <img
            type='image/webp'
            src='images/profile.webp'
            alt='Potrait Muhammad Sony Fauzi'
            width={800}
            height={800}
          />
        </picture>
        <section class={tw`mb-4`}>
          <h1 class={tw`text-[calc(1em+6vh)] font-bold mb-4`}>
            Muhammad Sony Fauzi
          </h1>
          <h2 class={tw`text-[calc(1em+5vh)] font-thin`}>Web Developer,</h2>
          <h2 class={tw`text-[calc(1em+5vh)] font-thin`}>Penulis</h2>
        </section>
        <section class={tw`whitespace-nowrap text-right lg:text-left`}>
          <h3 class={tw`text-2xl mb-1`}>Sosial Media</h3>
          <p>
            <a
              href='https://twitter.com/arzivre'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              href='https://github.com/arzivre'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </p>
        </section>
      </article>
    </Fragment>
  )
}

const ProjectHouseOfJesho = () => {
  return (
    <section class={tw`container mx-auto px-4 md:my-10`}>
      <div class={tw`grid md:grid-cols-2 lg:grid-cols-3`}>
        <h2 class={tw`text-4xl mb-4 md:mb-10 lg:mb-20`}>Houseofjesho</h2>
        <p class={tw`mb-4 md:mb-10`}>
          Houseofjesho adalah perusahaan mebel yang berbasis di Semarang,
          Indonesia.
        </p>
      </div>
      <div class={tw`md:flex gap-4`}>
        <picture class={tw`mb-4 text-[0px] border-4 border-gray-900`}>
          <source srcset='images/profile.avif' type='image/avif' />
          <img
            type='image/webp'
            src='images/house-of-jesho.webp'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
          />
        </picture>
        <div class={tw`w-80`}>
          <div class={tw`mb-5 flex justify-between gap-4 md:block`}>
            <div>
              <h2 class={tw`text-2xl mb-1`}>URL</h2>
              <a
                href='https://houseofjesho.com'
                target='_blank'
                rel='noopener noreferrer'
                class={tw`hover:text-blue-600`}
              >
                houseofjesho.com
              </a>
            </div>
            <div>
              <h2 class={tw`text-2xl mb-1 md:mt-4`}>Teknologi</h2>
              <p>ReactJS</p>
              <p>NextJS</p>
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectKopiLokal = () => {
  return (
    <section class={tw`container mx-auto px-4 md:my-10`}>
      <div class={tw`grid md:grid-cols-2 md:gap-1 lg:grid-cols-3 lg:gap-40`}>
        <h2 class={tw`text-4xl mb-4 md:mb-10 lg:mb-20`}>Kopi Lokal</h2>
        <p class={tw`mb-4 md:mb-10`}>
          Kopi Lokal adalah project sampingan saya untuk menulis lokasi warung
          kopi dan artikel tentang Kopi
        </p>
        <p class={tw`mb-4 md:mb-10`}>
          Web ini menggukan teknologi Supabase untuk menyimpan data dan file
        </p>
      </div>
      <div class={tw`md:flex gap-4`}>
        <picture class={tw`mb-4 text-[0px] border-4 border-gray-900`}>
          <source srcset='images/profile.avif' type='image/avif' />
          <img
            type='image/avif'
            src='images/kopi-lokal.webp'
            alt='Project Kopi Lokal'
            width={1235}
            height={585}
          />
        </picture>
        <div class={tw`w-80`}>
          <div class={tw`mb-5 flex justify-between gap-4 md:block`}>
            <div>
              <h2 class={tw`text-2xl mb-1`}>URL</h2>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://kopilokal.com'
                class={tw`hover:text-blue-600`}
              >
                kopilokal.com
              </a>
            </div>
            <div>
              <h2 class={tw`text-2xl mb-1 mt-4`}>Teknologi</h2>
              <p>ReactJS</p>
              <p>NextJS</p>
              <p>Supabase</p>
              <p>MDX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Arzivre</title>
        <link rel='stylesheet' href='/index.css' />
        <meta name='description' content='Web Developer, Penulis' />
        <meta
          property='og:image'
          content={`https://arzivre.deno.dev/images/profile.webp`}
        />
      </Head>

      <Layout>
        <main role='main' class={tw`container mx-auto px-4`}>
          <Hero />
          <h2 class={tw`relative md:left-20 px-4 mb-4 text-[calc(1em+8vh)]`}>
            Projects
          </h2>
          <ProjectHouseOfJesho />
          <ProjectKopiLokal />
        </main>
      </Layout>
    </Fragment>
  )
}
