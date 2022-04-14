import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Btn from '../components/Btn'
import MyForm from '../components/MyForm'
import useDwitter from '../hooks/useDwitter'
import { useState } from 'react'

const Home: NextPage = () => {
  const { connect, account, user, createUser, postDweets } = useDwitter()
  const [dweetInput, setdweetInput] = useState<string>('')
  console.log(user)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dwitter-Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="my-8 text-6xl font-bold">
          Welcome to <span className="text-blue-600">Dwitter-Twitter</span>
        </h1>

        {/* Button */}

        {account ? (
          account.toUpperCase() !== user?.wallet.toUpperCase() ? (
            <MyForm createUser={createUser} />
          ) : (
            <div className="">
              <div className="flex items-center">
                <img
                  className="h-[60px] rounded-full"
                  src={user?.bio}
                  alt="avatar"
                />
                <textarea
                value={dweetInput}
                  onChange={(e) => setdweetInput(e.target.value)}
                  placeholder="What is in your mind....."
                  className="mx-3 max-h-[300px] min-h-[60px] w-60 rounded-xl border-2 border-gray-400 px-3 py-1 outline-blue-500"
                  name="post"
                  id="post"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <Btn
                  text="Tweet"
                  onClick={() =>
                    postDweets(dweetInput)
                  }
                />
              </div>
            </div>
          )
        ) : (
          <Btn text="Signup to Dwitter-twitter" onClick={connect} />
        )}
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
