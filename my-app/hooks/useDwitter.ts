import Dwitter from './Dwitter.json'
import ethers from 'ethers'


const contractABI = Dwitter.abi
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const Ethereum = typeof window !== "undefined" && (window as any).ethereum

const getDwitterContract = ()=>{
    const provider = new ethers.providers.Web3Provider(Ethereum)
    const signer = provider.getSigner()
    return new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    )
}

const useDwitter = ()=> {
    // const dwitter = getDwitterContract()

    const connect = async ()=>{
        try {
            if(!Ethereum){
                alert("You don't have metamask wallet, kindly install")
                return;
            }
            
  

        } catch (error) {
            console.log(error)
        }
    }

}

export default useDwitter