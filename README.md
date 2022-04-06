# Crypto Pro
![crypto-pro-demo](https://user-images.githubusercontent.com/97796341/162019654-e1b99c7b-4546-4209-b3d3-527ff197ae8c.PNG)


This project was bootstrapped with Create React App.

This project allows you to stream real time crypto currency data using Socket.io by pluging into CryptoCompare's web socket api. It also comes with react-bootstrap-table so you could integrate any type of table you like.

### Get Started
- `git clone`
- `cd crypto-stream`
- `npm install`
- `npm start`

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
