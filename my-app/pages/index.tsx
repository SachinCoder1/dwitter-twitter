import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Btn from '../components/Btn'
import MyForm from '../components/MyForm'
import useDwitter from '../hooks/useDwitter'

const Home: NextPage = () => {
  const {connect, account, user, createUser} = useDwitter()
  console.log(user)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dwitter-Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold my-8">
          Welcome to{' '}
          <span className="text-blue-600">
           Dwitter-Twitter
          </span>
        </h1>

        {/* Button */}

       {account? account.toUpperCase() !== user?.wallet.toUpperCase() ? <MyForm createUser={createUser} /> : `Hey ${user?.name} Welcome back` : <Btn text='Signup to Dwitter-twitter' onClick={connect} />}

       
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
