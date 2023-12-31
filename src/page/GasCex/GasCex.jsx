import React, { useState, useEffect } from 'react';
import  './GasCex.css'
import { Input, Spin } from 'antd';
import axios from 'axios';

const GasCex = () => {
    const [cexfee, getCexfee] = useState([]);
    const [data, setData] = useState([]); //最终要展示的表格
    const [coin, setCoin] = useState("");
    const [rowColors, setRowColors] = useState([]);

    const gasCex =async () =>{
        const response = await axios.get('https://few.tools/chaineye/getCexFee');
        return response.data
    }

    useEffect(() => {
        let currentGroup = null;
        let isEvenGroup = false;
        const colors = data.map((item) => {
          if (item.Chain !== currentGroup) {
            currentGroup = item.Chain;
            isEvenGroup = !isEvenGroup;
          }
          return isEvenGroup ? "white" : "#FAFAFA";
        });
        setRowColors(colors);
      }, [data]);

    useEffect(()=>{ //获取整张表格的数据
        const printResult = async () => {
            const result = await gasCex();
            getCexfee(result)
        };
        printResult()
    })

    const output = (coin) =>{ //要输出的币
        const final = []
        const target = []
        let regex = /(.*)(E-)(.*)/;
        for(const i of cexfee){
            if(i.Asset == coin.toUpperCase()){
              target.push(i)
              // console.log(i.WithdrawFee,i.CEX,i.Chain,'\n');
            }
          }

        target.sort((a,b) =>{
            if(a.Chain != b.Chain){
              return a.Chain.localeCompare(b.Chain)
            }if(a.CEX != b.CEX){
                return a.WithdrawFee-b.WithdrawFee
            }
        })

          for(const i of target){
            const a ={}
            a.Asset = coin.toUpperCase()
            a.Chain =i.Chain
            a.CEX=i.CEX
            let re = i.WithdrawFee.match(regex)
            if(re != null){
              i.WithdrawFee = re[1]/10**re[3]
              a.WithdrawFee = i.WithdrawFee
            }else{
              a.WithdrawFee = i.WithdrawFee
            }
            a.WithdrawFee= String(a.WithdrawFee)+"("+i.WithdrawFeeInUSDT+"u)"
            a.MinWithdraw = i.MinWithdraw
            a.Price=i.Price
            final.push(a)
          }
        return final
    }

    useEffect(() => {  //根据输入的币自动找寻币进行排列
        const fetchData = () => {
            if(coin != ""){
                const result = output(coin);
                setData(result);
            }else{
                const result = output("ETH");
                setData([  {
                    CEX: '',
                    Asset: '',
                    Chain: '',
                    WithdrawFee: '',
                    WithdrawFeeInUSDT: '',
                    Price: '',
                  },]);
            }
        };
        fetchData();
    },[coin]);
    
    const handleInputChange = (event) => {
        setCoin(event.target.value);
      };

    return (
        <div className='Main'>
            <div className='CoinInput'>
                <Input addonBefore="请输入你要查询的币" placeholder='ETH/USDT/USDC/BNB...' value={coin} onChange={handleInputChange}></Input>
            </div>
            <table>
                <thead>
                <tr>
                    {data && data.length > 0 && Object.keys(data[0]).map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {data && data.map((item, index) => (
                <tr key={index} style={{backgroundColor: rowColors[index]}}>
                    {Object.values(item).map((value, i) => (
                        <td key={i}>{value}</td>
                    ))}
                </tr>
            ))}
                </tbody>
            </table>
        </div>
    );
};
  
export default GasCex;