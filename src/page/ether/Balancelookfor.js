import { ethers } from "ethers";

const abi = ["function balanceOf(address _owner) view returns(uint256)"]

const ethprovider = new ethers.providers.JsonRpcProvider("https://endpoints.omniatech.io/v1/eth/mainnet/public");
const arbprovider = new ethers.providers.JsonRpcProvider("https://endpoints.omniatech.io/v1/arbitrum/one/public");
const opprovider = new ethers.providers.JsonRpcProvider("https://endpoints.omniatech.io/v1/op/mainnet/public");
const maticprovider = new ethers.providers.JsonRpcProvider("https://endpoints.omniatech.io/v1/matic/mainnet/public");
const bscprovider = new ethers.providers.JsonRpcProvider("https://1rpc.io/bnb");
const zksyncprovider = new ethers.providers.JsonRpcProvider("https://mainnet.era.zksync.io");

const ethUSDT = new ethers.Contract("0xdac17f958d2ee523a2206206994597c13d831ec7",abi,ethprovider);
const ethUSDC = new ethers.Contract("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",abi,ethprovider);

const arbUSDT = new ethers.Contract("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",abi,arbprovider);
const arbUSDC = new ethers.Contract("0xaf88d065e77c8cc2239327c5edb3a432268e5831",abi,arbprovider);
const arbUSDCe = new ethers.Contract("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",abi,arbprovider);

const opUSDT = new ethers.Contract("0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",abi,opprovider);
const opUSDC = new ethers.Contract("0x7f5c764cbc14f9669b88837ca1490cca17c31607",abi,opprovider);

const bscUSDT = new ethers.Contract("0x55d398326f99059fF775485246999027B3197955",abi,bscprovider);
const bscBUSD = new ethers.Contract("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",abi,bscprovider);

const maticUSDT = new ethers.Contract("0xc2132d05d31c914a87c6611c10748aeb04b58e8f",abi,maticprovider);
const maticUSDC = new ethers.Contract("0x2791bca1f2de4661ed88a30c99a7a9449aa84174",abi,maticprovider);

const zksyncUSDC = new ethers.Contract("0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",abi,zksyncprovider);


const EthBalanceLookfor = async (address) =>{
  const a = await ethprovider.getBalance(address)
  const b = ethers.utils.formatEther(a)
  return(b)
}

const EthUSDTLookfor = async (address) =>{
  const a = await ethUSDT.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}

const EthUSDCLookfor = async (address) =>{
  const a = await ethUSDC.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}

//ARB

const ArbBalanceLookfor = async (address) =>{
  const a = await arbprovider.getBalance(address)
  const b = ethers.utils.formatEther(a)
  return(b)
}

const ArbUSDTLookfor = async (address) =>{
  const a = await arbUSDT.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}

const ArbUSDCLookfor = async (address) =>{
  const a = await arbUSDC.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}

const ArbUSDCeLookfor = async (address) =>{
  const a = await arbUSDCe.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}

//OP

const OpBalanceLookfor = async (address) =>{
  const a = await opprovider.getBalance(address)
  const b = ethers.utils.formatEther(a)
  return(b)
}

const OpUSDTLookfor = async (address) =>{
  const a = await opUSDT.balanceOf(address)
  const b = ethers.utils.formatUnits(a,6)
  return(b)
}

const OpUSDCLookfor = async (address) =>{
  const a = await opUSDC.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}

//MATIC

const MaticBalanceLookfor = async (address) =>{
  const a = await maticprovider.getBalance(address)
  const b = ethers.utils.formatEther(a)
  return(b)
}

const MaticUSDTLookfor = async (address) =>{
  const a = await maticUSDT.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}

const MaticUSDCLookfor = async (address) =>{
  const a = await maticUSDC.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}

//BSC

const BnbBalanceLookfor = async (address) =>{
  const a = await bscprovider.getBalance(address)
  const b = ethers.utils.formatEther(a)
  return(b)
}

const BscUSDTLookfor = async (address) =>{
  const a = await bscUSDT.balanceOf(address)
  const b = ethers.utils.formatEther(a)
  return(b)
}

const BscBUSDLookfor = async (address) =>{
  const a = await bscBUSD.balanceOf(address)
  const b = ethers.utils.formatEther(a)
  return(b)
}

//ZKsync

const ZksyncBalanceLookfor = async (address) =>{
  const a = await zksyncprovider.getBalance(address)
  const b = ethers.utils.formatEther(a)
  return(b)
}

const ZksyncUSDCLookfor = async (address) =>{
  const a = await zksyncUSDC.balanceOf(address)
  const b = ethers.utils.formatEther(a,6)
  return(b)
}




export{MaticBalanceLookfor,MaticUSDTLookfor,MaticUSDCLookfor,ArbBalanceLookfor,ArbUSDCLookfor,ArbUSDTLookfor,ArbUSDCeLookfor,EthBalanceLookfor,EthUSDCLookfor,EthUSDTLookfor,OpBalanceLookfor,OpUSDCLookfor,OpUSDTLookfor,BnbBalanceLookfor,BscBUSDLookfor,BscUSDTLookfor,ZksyncBalanceLookfor,ZksyncUSDCLookfor};