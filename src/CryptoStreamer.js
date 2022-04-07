import React from 'react';
import './react-bootstrap-table-all.min.css'
import './CryptoStreamer.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CCC from './Socket';

// Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
// SubscriptionId 0 for TRADE, 2 for CURRENT and 5 for CURRENTAGG

import io from 'socket.io-client';
const socket = io.connect('https://streamer.cryptocompare.com/');

export default class CryptoStreamer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPrice: {},
        cryptos: [],
        subscription: [
          '5~CCCAGG~BTC~USD',
          '5~CCCAGG~BTC~EUR',
          '5~CCCAGG~BTC~GBP',
          '5~CCCAGG~BTC~ZAR',
          '5~CCCAGG~BTC~JPY',
          '5~CCCAGG~ETH~USD',
          '5~CCCAGG~ETH~EUR',
          '5~CCCAGG~ETH~GBP',
          '5~CCCAGG~ETH~ZAR',
          '5~CCCAGG~ETH~JPY',
          '5~CCCAGG~XRP~USD',
          '5~CCCAGG~XRP~EUR',
          '5~CCCAGG~XRP~GBP',
          '5~CCCAGG~XRP~ZAR',
          '5~CCCAGG~XRP~JPY',
          '5~CCCAGG~BCH~USD',
          '5~CCCAGG~BCH~EUR',
          '5~CCCAGG~BCH~GBP',
          '5~CCCAGG~BCH~ZAR',
          '5~CCCAGG~BCH~JPY',
          '5~CCCAGG~LTC~USD',
          '5~CCCAGG~LTC~EUR',
          '5~CCCAGG~LTC~GBP',
          '5~CCCAGG~LTC~ZAR',
          '5~CCCAGG~LTC~JPY',
          '5~CCCAGG~ETC~USD',
          '5~CCCAGG~ETC~EUR',
          '5~CCCAGG~ETC~GBP',
          '5~CCCAGG~ETC~ZAR',
          '5~CCCAGG~ETC~JPY',
        ]
      };
    }

    dataUnpack = (data) => {
      const currentPrice = this.state.currentPrice;
      const from = data.FROMSYMBOL;
      const to = data.TOSYMBOL;
      // const fsym = CCC.STATIC.CURRENCY.getSymbol(from);
      const tsym = CCC.STATIC.CURRENCY.getSymbol(to);
      const pair = from + to;

      
      if (!currentPrice.hasOwnProperty(pair)) {
        currentPrice[pair] = {};
      }

      for (const key in data) {
        currentPrice[pair][key] = data[key];
      }

      if (currentPrice[pair].LASTTRADEID) {
        currentPrice[pair].LASTTRADEID =
        parseInt(currentPrice[pair].LASTTRADEID, 10).toFixed(0);
      }

      currentPrice[pair].CHANGE24HOUR = CCC.convertValueToDisplay(
          tsym, (currentPrice[pair].PRICE - currentPrice[pair].OPEN24HOUR)
        );

      currentPrice[pair].CHANGE24HOURPCT = (
        (currentPrice[pair].PRICE - currentPrice[pair].OPEN24HOUR) /
        currentPrice[pair].OPEN24HOUR * 100).toFixed(2) + '%';

      
      const indexOfCrypto = this.state.cryptos.indexOf(currentPrice[pair]);
      if (indexOfCrypto === -1) {
        this.state.cryptos.push(currentPrice[pair]);
      } else {
        this.state.cryptos[indexOfCrypto] = currentPrice[pair];
      }
      this.setState({ cryptos: this.state.cryptos });
    }

    handleStartStream = () => {
      socket.emit('SubAdd', { subs: this.state.subscription });
      const that = this;
      socket.on('m', (message) => {
        const messageType = message.substring(0, message.indexOf('~'));
        let res = {};
        if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
          res = CCC.CURRENT.unpack(message);
          that.dataUnpack(res);
        }
      });
    }

    handleStopStream = () => {
      socket.emit('SubRemove', { subs: this.state.subscription } );
    }

    handlePriceDirection = (price, cryptoObject) => {
      // 1 = Price Up, 2 = Price Down, 4 = Price Unchanged
      if (cryptoObject.FLAGS === '1') {
        return 'up';
      } else if (cryptoObject.FLAGS === '2') {
        return 'down';
      } else if (cryptoObject.FLAGS === '4') {
        return 'unchanged';
      }
    }

    handlePriceChange = (priceChange) => {
      // Check to see if price has a negative symbol '-'
      if (/[-]/.test(priceChange)) {
        return 'down';
      } else {
        return 'up';
      }
    }

    handleFormatNumber = (number) => {
      const n = parseFloat(number).toFixed(2);
      return Number(n).toLocaleString('en');
    }

    render() {
      return (
        <div className='col-md-offset-1 col-md-10'>
          <button type='button' onClick={ this.handleStartStream } className='btn btn-success'>Start Stream</button>
          <button type='button' onClick={ this.handleStopStream } className='btn btn-danger'>Stop Stream</button>

          <BootstrapTable ref='allTable' data={ this.state.cryptos } search>
            <TableHeaderColumn
              dataField='FROMSYMBOL'
              isKey dataSort> Cryptocurrency
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField='PRICE'
              dataFormat={ this.handleFormatNumber }
              columnClassName={ this.handlePriceDirection }
              dataSort>Price
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField='CHANGE24HOUR'
              columnClassName={ this.handlePriceChange }
              dataSort>Change 24h 
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField='CHANGE24HOURPCT'
              columnClassName={ this.handlePriceChange }
              dataSort>Change 24h (%)
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField='VOLUME24HOURTO'
              dataFormat={ this.handleFormatNumber }
              dataSort>Volume 24h 
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField='HIGH24HOUR'
              dataFormat={ this.handleFormatNumber }
              dataSort>24h High
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField='LASTMARKET'
              columnClassName={ 'exchange' }
              dataSort>Exchange
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
}