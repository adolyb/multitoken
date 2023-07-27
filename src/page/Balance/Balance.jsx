import './Balance.css';
import * as balance from "../ether/Balancelookfor.js";
import { Table,Card, Button,Modal,Input,Spin} from "antd";
import { useState,useEffect } from "react"; 
import {TagOutlined,UserDeleteOutlined,CiCircleOutlined} from "@ant-design/icons";


const Balance = () =>{
    const [lookaddres, setAddres] = useState([]);
    const [modal1visible,modal1setVisible] = useState(false)
    const [addressvalue,setAddressValue] = useState('')
    const [arbUSDC,setArbUSDC]=useState('')
    const showmoda = () =>{
        modal1setVisible([true])
    }
    const modalcanccleclick = ()=>{
        modal1setVisible(false)
    }

    const modalyeseclick = ()=>{
        modal1setVisible(false)
        const newAddresses = addressvalue.split("\n");
        const newAddressObjects = newAddresses.map((address, index) => ({
            address: address,
        }));
        setAddres([...lookaddres, ...newAddressObjects]);
        localStorage.setItem('myData', JSON.stringify([...lookaddres, ...newAddressObjects]));
        setAddressValue('');
    }

    useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
        setAddres(JSON.parse(storedData));
    }
    }, []);

    const refresh = async () => {
        const nullAddresses = lookaddres.map(item => ({
            ...item, 
            eth_eth: null,
            eth_usdc: null,
            eth_usdt: null,
            arb_eth: null,
            arb_usdc: null,
            arb_usdce: null,
            arb_usdt: null,
            op_eth: null,
            op_usdc: null,
            op_usdt: null,
            matic_matic: null,
            matic_usdc: null,
            matic_usdt: null,
            bsc_bnb: null,
            bsc_busd: null,
            bsc_usdt: null,
            zksync_eth: null,
            zksync_usdc: null,
        }));
        setAddres(nullAddresses);

        setAddres(nullAddresses);
        const updatedAddresses = await Promise.all(
            lookaddres.map(async (item) => {
                const eth = await balance.EthBalanceLookfor(item.address);
                const ethusdc = await balance.EthUSDCLookfor(item.address);
                const ethusdt = await balance.EthUSDTLookfor(item.address);
                const arbeth = await balance.ArbBalanceLookfor(item.address);
                const arbusdc = await balance.ArbUSDCLookfor(item.address);
                const arbusdce = await balance.ArbUSDCeLookfor(item.address);
                const arbusdt = await balance.ArbUSDTLookfor(item.address);
                const opeth = await balance.OpBalanceLookfor(item.address);
                const opusdc = await balance.OpUSDCLookfor(item.address);
                const opusdt = await balance.OpUSDTLookfor(item.address);
                const matic = await balance.MaticBalanceLookfor(item.address);
                const maticusdc = await balance.MaticUSDCLookfor(item.address);
                const maticusdt = await balance.MaticUSDTLookfor(item.address);
                const bnb = await balance.BnbBalanceLookfor(item.address);
                const bscbusd = await balance.BscBUSDLookfor(item.address);
                const bscusdt = await balance.BscUSDTLookfor(item.address);
                const zksynceth = await balance.ZksyncBalanceLookfor(item.address);
                const zksyncusdc = await balance.ZksyncUSDCLookfor(item.address);
                return { ...item, 
                    eth_eth: Number(eth).toFixed(3),
                    eth_usdc: Number(ethusdc).toFixed(2),
                    eth_usdt: Number(ethusdt).toFixed(2),
                    arb_eth: Number(arbeth).toFixed(3),
                    arb_usdc:Number(arbusdc).toFixed(2),
                    arb_usdce:Number(arbusdce).toFixed(2),
                    arb_usdt:Number(arbusdt).toFixed(2),
                    op_eth: Number(opeth).toFixed(3),
                    op_usdc: Number(opusdc).toFixed(2),
                    op_usdt: Number(opusdt).toFixed(2),
                    matic_matic: Number(matic).toFixed(3),
                    matic_usdc: Number(maticusdc).toFixed(2),
                    matic_usdt: Number(maticusdt).toFixed(2),
                    bsc_bnb: Number(bnb).toFixed(3),
                    bsc_busd: Number(bscbusd).toFixed(2),
                    bsc_usdt: Number(bscusdt).toFixed(2),
                    zksync_eth: Number(zksynceth).toFixed(3),
                    zksync_usdc: Number(zksyncusdc).toFixed(2),
                };
            }),
        );
        setAddres(updatedAddresses);
        localStorage.setItem('myData', JSON.stringify(updatedAddresses));
    };

    function clearout(){
        setAddres('')
        localStorage.setItem('myData','')
    }

    const colum = [
        {className:"address" ,title:"Address",dataIndex:"address" ,align:"center",width:"300px"},

        {className:"eth", title:"ETH" ,dataIndex:"Matic", align:"center",
        children:[{className:"eth_eth" ,title:"ETH",dataIndex: "eth_eth",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDC",dataIndex: "eth_usdc",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDT",dataIndex: "eth_usdt",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]},

        {className:"arb", title:"Arb" ,dataIndex:"Matic", align:"center",
        children:[{className:"eth_eth" ,title:"ETH",dataIndex: "arb_eth",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDC",dataIndex: "arb_usdc",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDCe",dataIndex: "arb_usdce",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDT",dataIndex: "arb_usdt",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]},

        {className:"op", title:"OP" ,dataIndex:"Matic", align:"center",
        children:[{className:"eth_eth" ,title:"ETH",dataIndex: "op_eth",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDC",dataIndex: "op_usdc",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDT",dataIndex: "op_usdt",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]},

        {className:"matic", title:"Matic" ,dataIndex:"Matic", align:"center",
        children:[{className:"eth_eth" ,title:"Matic",dataIndex: "matic_matic",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDC",dataIndex: "matic_usdc",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDT",dataIndex: "matic_usdt",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]},

        {className:"bsc", title:"BSC" ,dataIndex:"Matic", align:"center",
        children:[{className:"eth_eth" ,title:"BNB",dataIndex: "bsc_bnb",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"BUSD",dataIndex: "bsc_busd",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDT",dataIndex: "bsc_usdt",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]},

        {className:"zksync", title:"ZkSync" ,dataIndex:"Matic", align:"center",
        children:[{className:"eth_eth" ,title:"ETH",dataIndex: "zksync_eth",align:"center",render: (text, record) => (text === null ? <Spin/> : text)},
        {title:"USDC",dataIndex: "zksync_usdc",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]}
    ]
    return(
        <div>
            <Table className="nonono" columns={colum} dataSource={lookaddres} pagination={false}></Table>
            <Card className='card'>
                <Button onClick={showmoda} icon={<TagOutlined/> } className='button1'>添加地址</Button>
                <Button icon={<CiCircleOutlined/>} className='button2' onClick={refresh}>刷新所有地址</Button>
                <Button icon={<UserDeleteOutlined/>} className='button3' onClick={clearout}>删除所有地址</Button>
            </Card>
            <Modal  className='addressinput' title='请输入你的地址' open={modal1visible} onOk={modalyeseclick} onCancel={modalcanccleclick}>
                <Input.TextArea rows={18} style={{resize:'none'}} value={addressvalue} onChange={e => setAddressValue(e.target.value)}></Input.TextArea>
            </Modal>
        </div>
    )
}

export default Balance