import React, {useEffect, useState} from 'react';
import API from "./API";

import './Main.css';

function Main() {
    const [price1, setPrice1] = useState(0);
    const [price11, setPrice11] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [price22, setPrice22] = useState(0);
    const [token1, setToken1] = useState(0.0);
    const [token2, setToken2] = useState(0.0);
    const [cost1, setCost1] = useState(0);
    const [cost2, setCost2] = useState(0);
    const [percent, setPercent] = useState(0);
    const [coefficient1, setCoefficient1] = useState(1.00);
    const [coefficient2, setCoefficient2] = useState(1.00);
    const [scroll, setScroll] = useState(50);

    useEffect(()=>{
        setCost1(price1*token1);
        setCost2(price2*token2);
    },[price1,price2,token1,token2])

    useEffect(()=>{
        setPrice1((price11*coefficient1).toFixed(2));
        setPrice2((price22*coefficient2).toFixed(2));
    },[coefficient1,coefficient2])

    const postHandle = () =>{
        API.post(price1,price2,token1,token2 ).then(response=>{
            setPercent(response.data.percent);
        });
    }
    const handleSelect = (e) => {
        e.target.select();
    };

    return(
        <div className={"main"}>
            <div className={"calc"}>
                <div className={"label_input text_header"}>
                    <label  htmlFor="name">Liquidity pool</label>
                </div>
                <div className={"crypt"}>
                    <div>
                            <div className={"label_input"}>
                                <div className={"text"}>
                                    <label htmlFor="amount1">Token №1</label>
                                </div>
                                <div>
                                    <input  type="number"
                                            id="amount1"
                                            onClick={(event) => event.target.select()}
                                            className={"input"}
                                            value={token1}
                                            onChange={(event) => setToken1(event.target.value)}
                                    />
                                </div>
                            </div >
                            <div className={"label_input"}>
                                <div className={"text"}>
                                    <label htmlFor="course1">Price №1</label>
                                </div>
                                <div>
                                    <input  type="number"
                                            id="course1"
                                            value={price1}
                                            onBlur={(event) => setPrice1((price11*coefficient1).toFixed(2))}
                                            onClick={(event) => event.target.select()}
                                            className={"input"}
                                            onChange={(event) => {
                                                setPrice1(event.target.value);
                                                setPrice11(event.target.value);
                                            }}
                                    />
                                </div>
                            </div>
                            <div className={"label_input"}>
                                  <div className={"text"}>
                                      <label htmlFor="usd1">Cost №1</label>
                                  </div>
                                <div>
                                    <input
                                          id="usd1"
                                          value={cost1.toFixed(2)}
                                          onClick={(event) => event.target.select()}
                                          className={"input"}
                                          disabled={true}
                                    />
                                </div>
                        </div>
                    </div>
                    <div>
                            <div className={"label_input"}>
                                <div className={"text"}>
                                    <label htmlFor="amount2">Token №2</label>
                                </div>
                                <div>
                                    <input  type="number"
                                            id="amount2"
                                            className={"input"}
                                            value={token2}
                                            onClick={(event) => event.target.select()}
                                            onChange={(event) => setToken2(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"label_input"}>
                                <div className={"text"}>
                                    <label htmlFor="course2">Price №2</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="course2"
                                        onClick={(event) => event.target.select()}
                                        className={"input"}
                                        value={price2}
                                        onBlur={(event) => setPrice2((price22*coefficient2).toFixed(2))}
                                        onChange={(event) => {
                                            setPrice2(event.target.value);
                                            setPrice22(event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={"label_input"}>
                                <div className={"text"}>
                                    <label htmlFor="usd2">Cost №2</label>
                                </div>
                                <div>
                                    <input
                                        className={"input"}
                                        id="usd2"
                                        onClick={(event) => event.target.select()}
                                        value={cost2.toFixed(2)}
                                        disabled={true}
                                    />
                                </div>
                            </div>
                    </div>
                </div>

                <div className={"label_input"}>
                    <div className={"coefficient"}>
                        <label htmlFor="coefficient">({coefficient1.toFixed(2)}:{coefficient2.toFixed(2)})</label>
                    </div>
                    <div className={"scroll_bar"}>
                        <input type="range"
                               className={"scroll"}
                                id="range1"
                                value={scroll}
                                onChange={(event) =>{
                                    setScroll(event.target.value);
                                    setCoefficient1((1/50)*event.target.value);
                                    setCoefficient2((1/50)*(100-event.target.value));


                                } }
                        />
                    </div>

                </div>
                <div className={"label_input"}>
                    <div className={"text"}>
                        <label  htmlFor="name">Total</label>
                    </div>
                    <div>
                        <input  type="number"
                                id="calc"
                                className={"input"}
                                disabled={true}
                                value={percent}
                        />
                    </div>
                    <div className={"crypt1label"}>
                        <button
                            className={"total_button"}
                            onClick={postHandle}
                        >Calc</button>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default Main