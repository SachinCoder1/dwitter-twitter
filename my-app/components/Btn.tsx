type Props = {
    text: string,
    onClick: ()=>void
}

const Btn :  React.FC<Props> = ({text, onClick})=>{
 return (
     <button onClick={onClick} className="px-6 my-2 py-2 text-white bg-blue-500 rounded-lg">
         {text}
     </button>
 )
}

export default Btn;