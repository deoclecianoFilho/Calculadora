import React, { Component } from "react";
import './Calculator.css'

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
    render(){
        return(
            <div className="calculator">
                <Display value={1000000000}></Display>
                <Button lable="AC"></Button>
                <Button lable="/"></Button>
                <Button lable="7"></Button>
                <Button lable="8"></Button>
                <Button lable="9"></Button>
                <Button lable="*"></Button>
                <Button lable="4"></Button>
                <Button lable="5"></Button>
                <Button lable="6"></Button>
                <Button lable="-"></Button>
                <Button lable="1"></Button>
                <Button lable="2"></Button>
                <Button lable="3"></Button>
                <Button lable="+"></Button>
                <Button lable="0"></Button>
                <Button lable="."></Button>
                <Button lable="="></Button>
            </div>
        )
    }
}