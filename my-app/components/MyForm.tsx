import Btn from "./Btn"

type Props = {
  createUser: (username : string, name: string, bio:string, avatar : string)=> void,
}

const MyForm: React.FC<Props> = ({ createUser }) => {
  return (
    <div>
     
   <Btn text="Sign Up" onClick={()=>createUser("This is Username", "this is name", "This is bio", "this is a avatar")} />
    </div>
  )
}

export default MyForm
