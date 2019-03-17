import React from 'react';
import { Link } from 'react-router-dom';

import BlockChainAPI from '../../api/blockchainapi';
import { TableBody, TableRow, TableCell, Table } from 'semantic-ui-react';

class SelectedBlock extends React.Component {
    state =   {data: []}

    constructor(props) {
        super(props);
        this.hash = this.props.match.params.hash;
      }

    async componentDidMount(){
        const response = await BlockChainAPI.get(`rawblock/${this.hash}`);
        this.setState({data:response.data});
    }

    // Renders single block 
    renderSingleBlock(){
        if(this.state){
            const {data} = this.state;
        return (
            <div>
            <div className="ui horizontal divider">
                <h4 className="ui header"><i aria-hidden="true" className="bar chart icon"></i>Single Block</h4>
            </div>
            <div>
                <Table className="ui definition table">
                    <TableBody className="">
                        <TableRow className="">
                            <TableCell className="two wide">Hash</TableCell>
                            <TableCell className="">{data.hash}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Ver</TableCell>
                            <TableCell className="">{data.ver}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Previous Block</TableCell>
                            <TableCell className="">{data.prev_block}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Merkle Root</TableCell>
                            <TableCell className="">{data.mrkl_root}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Time</TableCell>
                            <TableCell className="">{data.time}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Bits</TableCell>
                            <TableCell className="">{data.bits}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Nonce</TableCell>
                            <TableCell className="">{data.nonce}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Number of Transactions</TableCell>
                            <TableCell className="">{data.n_tx}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Size</TableCell>
                            <TableCell className="">{data.size}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Block Index</TableCell>
                            <TableCell className="">{data.block_index}</TableCell>
                        </TableRow>
                        <TableRow className="">
                            <TableCell className="">Height</TableCell>
                            <TableCell className="">{data.height}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        )}
        else{
            return <div className="ui loading segment">Loading</div>
        }
    }

    // Renders all transaction of single block
    renderAllTransaction(){
        const txs = this.state.data.tx;
        if(txs){
        return txs.map(tx => {
            return (
                <div className="ui card sixteen wide column" key={tx.tx_index}>
                    <div className="content">
                        <div className="ui mini right floated"><h3>Size:{tx.size}</h3></div>
                        <div className="header">Transaction Index</div>
                        <div className="meta"><h3>{tx.tx_index}</h3></div>
                        <div className="description"><strong>Fee:</strong>{tx.fee}</div>
                    </div>
                    <div className="extra content">
                        <Link to={`transaction/${tx.hash}`} className="ui two buttons">
                            <button className="ui facebook button">More</button>
                        </Link>    
                    </div>
                </div>
                )
            })
        }
    }

    render(){
      return (
          <div>
            <div>{this.renderSingleBlock()}</div>
            <div className="ui horizontal divider">
                <h4 className="ui header"><i aria-hidden="true" className="tag icon"></i>Transactions</h4>
            </div>
            <div className="ui grid cards">
            {this.renderAllTransaction()}</div>
          </div>
      )}
}

export default SelectedBlock;