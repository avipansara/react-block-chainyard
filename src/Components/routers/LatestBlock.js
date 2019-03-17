import React from 'react';

import BlockChainAPI from '../../api/blockchainapi';

class LatestBlock extends React.Component{

    state = {data:[]}

    async componentDidMount(){
        const response = await BlockChainAPI.get('latestblock');
        this.setState({data:response.data});
    }

    render(){
        const latest = this.state.data;
        return (
            <div>
                <div className="ui teal tag label"><h4>Latest Block</h4></div>
                <div className="ui raised segment" style={{"marginTop":"30px"}}>
                <div className="ui blue ribbon label" ><div><h4>Hash : </h4></div><span style={{"fontWeight":"bold"}}>{latest.hash}</span></div>
                <div className="ui blue ribbon label" ><div><h4>Time</h4></div><span style={{"fontWeight":"bold"}}>{latest.time}</span></div>
                <div className="ui blue ribbon label" ><div><h4>Block Index</h4></div><span style={{"fontWeight":"bold"}}>{latest.block_index}</span></div>
                <div className="ui blue ribbon label" ><div><h4>Height</h4></div><span style={{"fontWeight":"bold"}}>{latest.height}</span></div></div>
            </div>
        )
    }
}

export default LatestBlock;