import Dwitter from './Dwitter.json'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

const ContractABI = Dwitter.abi
const ContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const Ethereum = typeof window !== 'undefined' && (window as any).ethereum

const getDwitterContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner()
  return new ethers.Contract(ContractAddress, ContractABI, signer)
} 

const useDwitter = () => {
  const dwitter = getDwitterContract()
  const [currentAccount, setCurrentAccount] = useState<string>('')
    // const [currentUser, setCurrentUser] = useState<string>('')

  const connect = async () => {
    try {
      if (!Ethereum) {
        alert("You don't have metamask wallet, kindly install")
        return
      }

      const accounts = await Ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (accounts.length == 0) {
        console.log('No authorization accounts')
        return
      }

      const account = accounts[0]
      console.log('Connected to your account', account)
      setCurrentAccount(account)
    } catch (error) {
      console.log("there is a alo", error)
    }
  }

  useEffect(() => {
    if (!Ethereum) {
      console.log("you don't have any wallet connected, pleaset get metamask")
      return;
    }
    connect()
  }, [])

  const getUser = async () => {
    const contract = getDwitterContract()
    const user = await contract.getUser(currentAccount)
    console.log(user)
    return user
  }

  useEffect(() => {
    if (currentAccount) {
      getUser()
    }
  }, [currentAccount])

  return { connect, currentAccount }
}

export default useDwitter
