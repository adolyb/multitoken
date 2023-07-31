import './Balance.css';
import * as balance from "../ether/Balancelookfor.js";
import { Table,Card, Button,Modal,Input,Spin} from "antd";
import { useState,useEffect } from "react"; 
import {TagOutlined,UserDeleteOutlined,CiCircleOutlined} from "@ant-design/icons";


const Balance = () =>{
    const [lookaddres, setAddres] = useState([]);
    const [modal1visible,modal1setVisible] = useState(false)
    const [addressvalue,setAddressValue] = useState('')
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
            Linea_eth:null,
            zkevm_eth:null,
            base_eth:null,
        }));
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
                const linea = await balance.LineaBalanceLookfor(item.address);
                const base = await balance.BaseBalanceLookfor(item.address);
                const zkevm = await balance.ZkevmBalanceLookfor(item.address);
                console.log(linea)
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
                    Linea_eth:Number(linea).toFixed(3),
                    base_eth:Number(base).toFixed(3),
                    zkevm_eth:Number(zkevm).toFixed(3),
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
        {className:"address" ,title:"Address",dataIndex:"address" ,align:"center",width:"250px"},

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
        {title:"USDC",dataIndex: "zksync_usdc",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]},

        {className:"linea", title:"Linea" ,dataIndex:"Linea", align:"center",
        children:[{className:"eth_eth" ,title:"ETH",dataIndex: "Linea_eth",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]},
        {className:"zkevm", title:"Zkevm" ,dataIndex:"zkevm", align:"center",
        children:[{className:"eth_eth" ,title:"ETH",dataIndex: "zkevm_eth",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]},
        {className:"base", title:"Base" ,dataIndex:"base", align:"center",
        children:[{className:"eth_eth" ,title:"ETH",dataIndex: "base_eth",align:"center",render: (text, record) => (text === null ? <Spin/> : text)}]}
    ]
    return(
        <div>
            <Card className='card' style={{zIndex:2}}>
            <Button onClick={showmoda} icon={<TagOutlined/> } className='button1'>添加地址</Button>
            <Button icon={<CiCircleOutlined/>} className='button2' onClick={refresh}>刷新所有地址</Button>
            <Button icon={<UserDeleteOutlined/>} className='button3' onClick={clearout}>删除所有地址</Button>
            </Card>
            <div className="Tableview">
                <Table className="nonono" columns={colum} dataSource={lookaddres} pagination={false} style={{overflowY:"auto"}}
                summary={pageData =>{
                    let a1 = 0;
                    let a2 = 0;
                    let a3 = 0;
                    let a4 = 0;
                    let a5 = 0;
                    let a6 = 0;
                    let a7 = 0;
                    let a8 = 0;
                    let a9 = 0;
                    let a10 = 0;
                    let a11= 0;
                    let a12 = 0;
                    let a13 = 0;
                    let a14 = 0;
                    let a15 = 0;
                    let a16 = 0;
                    let a17 = 0;
                    let a18 = 0;
                    let a19 = 0;
                    let a20 = 0;
                    let a21 = 0;

                    pageData.forEach(({
                        eth_eth, 
                        eth_usdc, 
                        eth_usdt, 
                        arb_eth, 
                        arb_usdc, 
                        arb_usdce, 
                        arb_usdt, 
                        op_eth, 
                        op_usdc, 
                        op_usdt, 
                        matic_matic, 
                        matic_usdc, 
                        matic_usdt, 
                        bsc_bnb, 
                        bsc_busd, 
                        bsc_usdt, 
                        zksync_eth, 
                        zksync_usdc,
                        Linea_eth,
                        zkevm_eth,
                        base_eth
                    }) => {
                        a1+=Number(eth_eth), 
                        a2+=Number(eth_usdc), 
                        a3+=Number(eth_usdt),
                        a4+=Number(arb_eth),
                        a5+=Number(arb_usdc), 
                        a6+=Number(arb_usdce), 
                        a7+=Number(arb_usdt),
                        a8+=Number(op_eth),
                        a9+=Number(op_usdc), 
                        a10+=Number(op_usdt), 
                        a11+=Number(matic_matic), 
                        a12+=Number(matic_usdc),
                        a13+=Number(matic_usdt),
                        a14+=Number(bsc_bnb),
                        a15+=Number(bsc_busd), 
                        a16+=Number(bsc_usdt),
                        a17+=Number(zksync_eth), 
                        a18+=Number(zksync_usdc),
                        a19+=Number(Linea_eth),
                        a20+=Number(zkevm_eth), 
                        a21+=Number(base_eth)
                    });

                    // let emptyCells = [];
                    // let numberOfEmptyCells = colum.length - 2
                    // for (let i = 0; i < numberOfEmptyCells; i++) {
                    // emptyCells.push(<Table.Summary.Cell index={i+12} key={i} />);
                    // }
                    return(
                        <>
                        <Table.Summary.Row>
                            <Table.Summary.Cell className='Total' align='center'index={0}>Total总计</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={1}>{a1.toFixed(3)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={2}>{a2.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={3}>{a3.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={4}>{a4.toFixed(3)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={5}>{a5.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={6}>{a6.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={7}>{a7.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={8}>{a8.toFixed(3)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={9}>{a9.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={10}>{a10.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={11}>{a11.toFixed(3)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={12}>{a12.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={13}>{a13.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={14}>{a14.toFixed(3)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={15}>{a15.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={16}>{a16.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={17}>{a17.toFixed(3)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={18}>{a18.toFixed(2)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={19}>{a19.toFixed(3)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={20}>{a20.toFixed(3)}</Table.Summary.Cell>
                            <Table.Summary.Cell className='Total' align='center' index={21}>{a21.toFixed(3)}</Table.Summary.Cell>
                            {/* {emptyCells} */}
                            
                        </Table.Summary.Row>
                        </>
                    )
                }}
                ></Table>
            </div>
            <Modal  className='addressinput' title='请输入你的地址' open={modal1visible} onOk={modalyeseclick} onCancel={modalcanccleclick}>
                <Input.TextArea rows={18} style={{resize:'none'}} value={addressvalue} onChange={e => setAddressValue(e.target.value)} placeholder="一行一个地址"></Input.TextArea>
            </Modal>
        </div>
    )
}

export default Balance