/** @jsx h */
import { Head } from '$fresh/src/runtime/head.ts'
import { Fragment, h } from 'preact'
import Layout from '../components/Layout.tsx'
import { tw } from '@twind'

const ContactList = () => {
  return (
    <section class={tw`col-[3/5] text-slate-900 md:px-10`}>
      <p class={tw`text-2xl`}>Sonyfauzi@outlook.co.id</p>
      <p class={tw`text-2xl`}>0813-3205-6357</p>
      <p class={tw`text-2xl mb-8`}>Kediri, Jawa Timur.</p>
      <p class={tw`text-2xl`}>Akan menjawab dalam 24 jam.</p>
    </section>
  )
}
const ContactPage = () => {
  return (
    <Layout>
      <div class={tw`px-4 min-h-screen`}>
        <main
          class={tw`container mx-auto my-10 p-4 md:p-8 grid grid-cols-[1fr,auto,1fr] rounded-md
          bg-gradient-to-r from-green-400 to-purple-500`}
        >
          <h1
            class={tw`col-[1/4] font-serif font-extrabold text-[calc(1em+3.5vw)] mb-8`}
          >
            Punya Ide Menarik? ayo bangun bersama
          </h1>
          <ContactList />
        </main>
      </div>
    </Layout>
  )
}

export default ContactPage
