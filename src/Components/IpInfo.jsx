import React, { Component } from "react";
import './style.css';
import { Circles } from 'react-loader-spinner';
import Info from "./Info";
import getInfo from "../Services/getInfo"


export default class IpInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: null,
            isLoading: true
        }
    }

    componentDidMount() {
        getInfo().then(data => {
            this.setState({
                info: data,
                isLoading: false
            })
        });
    }

    render() {
        const isLoading = this.state.isLoading
        return (
            <>
                {isLoading ?
                    <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    :
                    <Info data={this.state.info} />
                }
            </>
        )
    }
}