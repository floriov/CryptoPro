# Crypto Pro
![crypto-pro-demo](https://user-images.githubusercontent.com/97796341/162019654-e1b99c7b-4546-4209-b3d3-527ff197ae8c.PNG)

CryptoPro provides a real time crytpo currency stream for crypto currencies [BTC,ETH,XRP,LTC,BCH,ETC] and their value in fiat currencies [USD,GBP,EUR,JPY,ZAR].

This project allows you to stream real time crypto currency data using Socket.io by plugging into CryptoCompare's web socket api. It also comes with a react-bootstrap-table.

### Get Started
- `git clone`
- `cd crypto-stream`
- `npm install`
- `npm start`

### Instructions
When the react app opens up in your browser, simply click on 'start stream' to see the live conversions of crypto into fiat currencies.
You can also use the search function to look for any particular crypto currency. 

##### Example Bitcoin JSON Object you get back from CryptoCompare

```json
{
  CHANGE24HOUR: "$ -40.53",
  CHANGE24HOURPCT: "-0.36%",
  FLAGS: "1",
  FROMSYMBOL: "BTC",
  HIGH24HOUR: 11758.37,
  HIGHHOUR: 11293.6,
  LASTMARKET: "bitFlyer",
  LASTTRADEID: "122990069",
  LASTUPDATE: 1516927087,
  LASTVOLUME: 0.01,
  LASTVOLUMETO: 112.5066,
  LOW24HOUR: 10896.79,
  LOWHOUR: 11159.81,
  MARKET: "CCCAGG",
  OPEN24HOUR: 11333.75,
  OPENHOUR: 11175.87,
  PRICE: 11293.22,
  TOSYMBOL: "USD",
  TYPE: "5",
  VOLUME24HOUR: 90524.22690170842,
  VOLUME24HOURTO: 1028918153.113864,
  VOLUMEHOUR: 1192.5534692810902,
  VOLUMEHOURTO: 13428562.363502882
}
```
