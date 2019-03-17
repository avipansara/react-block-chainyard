import React from 'react';
import  {Link}  from 'react-router-dom';

import BlockChainAPI from '../../api/blockchainapi';


class BlockList extends React.Component{
    state = { data:[] };


    // waits until it recieves data from API
    async componentDidMount(){
        const response = await BlockChainAPI.get('blocks');
        console.log(response.data.blocks);
        this.setState({data:response.data.blocks}); 
    }

    //Helper method, renders one by one
    renderAllBlock(){
        if(this.state.data.map){
        return this.state.data.map(block => {
            return ( 
                <div className="item" key={block.hash}> 
                    <i className="marker icon" />
                    <div className="content">
                        <div className="description">
                            <h4><span style={{"color":"#217ad0"}}>Hash:</span>{block.hash}</h4>
                            <p><span style={{"color":"#217ad0"}}>Height:</span>{block.height}</p>
                            <p><span style={{"color":"#217ad0"}}>Time: </span>{block.time}</p>
                            <div className="right floated content">
                                <Link to={`/singleblock/${block.hash}`}>
                                    <button style={{"color":"white"}} className="ui blue button">Show</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    else{
        return <div className="ui active centered inline loader"></div>}
    }
   

    render(){
        return (
            <div className="ui container">
             <div className="ui relaxed divided list">{this.renderAllBlock()}</div>
            </div>
        )}
}

export default BlockList;