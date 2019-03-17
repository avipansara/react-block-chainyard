import React from 'react';
import BlockChainAPI from '../../api/blockchainapi';

class Transaction extends React.Component{
    state = {data:[]};

    constructor(props){
        super(props);
        this.tx_hash = this.props.match.params.hash;
    }

    async componentDidMount(){
        const response = await BlockChainAPI.get(`rawtx/${this.tx_hash}`);
        this.setState({data:response.data});
    }

    //Renders single transaction
    renderTransaction(){
        if(this.state){
            const tx_details = this.state.data;
        return (
            <div>
                <div className="ui red ribbon label"><h4>Transaction Details</h4></div>
                    <div className="ui piled segment" style={{"marginTop":"30px"}}>
                    <div className="ui tag labels" ><div className="ui label"><h4>Hash</h4></div><span style={{"fontWeight":"bold"}}>{tx_details.hash}</span></div>
                    <div className="ui tag labels" ><div className="ui label"><h4>Lock Time</h4></div><span style={{"fontWeight":"bold"}}>{tx_details.lock_time}</span></div>
                    <div className="ui tag labels" ><div className="ui label"><h4>Weight</h4></div><span style={{"fontWeight":"bold"}}>{tx_details.weight}</span></div>
                    <div className="ui tag labels" ><div className="ui label"><h4>Block Height</h4></div><span style={{"fontWeight":"bold"}}>{tx_details.block_height}</span></div>
                    <div className="ui tag labels" ><div className="ui label"><h4>Relayed By</h4></div><span style={{"fontWeight":"bold"}}>{tx_details.relayed_by}</span></div>
                    <div className="ui tag labels" ><div className="ui label"><h4>Block Index</h4></div><span style={{"fontWeight":"bold"}}>{tx_details.block_index}</span></div>
                    </div>
                </div>
        )}
        else{
        return(
        <div className="ui loading segment"><div className="ui image"></div></div>
         )}
    }

    render(){
        return <div>{this.renderTransaction()}</div>
    }
}

export default Transaction;