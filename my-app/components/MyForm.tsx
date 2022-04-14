import { useState } from 'react'
import Btn from './Btn'

type Props = {
  createUser: (
    username: string,
    name: string,
    bio: string,
    avatar: string
  ) => void
}

const MyForm: React.FC<Props> = ({ createUser }) => {
  const [yourUserName, setyourUserName] = useState<string>('')
  const [yourName, setyourName] = useState<string>('')
  const [yourBio, setyourBio] = useState<string>('')
  const [yourAvatar, setyourAvatar] = useState<string>('')

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <div className="flex flex-col">
        <label className='text-left' htmlFor="username">Enter Username</label>
        <input
          className="my-1 w-80 border-2 border-gray-400 rounded-xl px-2 py-2 outline-blue-500"
          type="text"
          placeholder="Enter username"
          value={yourUserName}
          onChange={(e) => setyourUserName(e.target.value)}
          name="username"
          id="username"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left" htmlFor="name">Enter name</label>
        <input
          className="my-1 w-80 border-2 border-gray-400 rounded-xl px-2 py-2 outline-blue-500"
          type="text"
          placeholder="Enter name"
          value={yourName}
          onChange={(e) => setyourName(e.target.value)}
          name="name"
          id="name"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left" htmlFor="bio">Enter bio</label>
        <input
          className="my-1 w-80 border-2 border-gray-400 rounded-xl px-2 py-2 outline-blue-500"
          type="text"
          placeholder="Enter bio"
          value={yourBio}
          onChange={(e) => setyourBio(e.target.value)}
          name="bio"
          id="bio"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left" htmlFor="avatar">Enter avatar</label>
        <input
          className="my-1 w-80 border-2 border-gray-400 rounded-xl px-2 py-2 outline-blue-500"
          type="text"
          placeholder="Enter avatar"
          value={yourAvatar}
          onChange={(e) => setyourAvatar(e.target.value)}
          name="avatar"
          id="avatar"
        />
      </div>
      <Btn
        text="Sign Up"
        onClick={() => createUser(yourUserName, yourName, yourBio, yourAvatar)}
      />
    </div>
  )
}

export default MyForm
