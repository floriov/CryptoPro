# CryptoPro
![crypto-pro-demo](https://user-images.githubusercontent.com/97796341/162019654-e1b99c7b-4546-4209-b3d3-527ff197ae8c.PNG)

CryptoPro provides a real time crytpocurrency stream for crypto currencies [BTC,ETH,XRP,LTC,BCH,ETC] and their value in fiat currencies [USD,GBP,EUR,JPY,ZAR].

This project allows you to stream real time cryptocurrency data using Socket.io by plugging into CryptoCompare's web socket api. It also comes with a react-bootstrap-table.

### Get Started
- `git clone`
- `npm install`
- `npm start`

### Instructions
When the react app opens up in your browser, simply click on 'start stream' to see the live conversions of crypto into fiat currencies.
You can also use the search function to look for any particular crypto currency. 

##### Example Bitcoin JSON Object you get back from CryptoCompare

```json
{
  MARKET: "CCCAGG"
FROMSYMBOL: "BTC"
TOSYMBOL: "USD"
FLAGS: "2052"
PRICE: 43464.6
LASTUPDATE: 1649321506
MEDIAN: 43462.45
LASTVOLUME: 0.02
LASTVOLUMETO: 869.5
LASTTRADEID: "1649321506.116739"
VOLUMEDAY: 8864.278807913905
VOLUMEDAYTO: 383352925.4067963
VOLUME24HOUR: 41951.555130479996
VOLUME24HOURTO: 1841929568.7066717
OPENDAY: 43177.61
HIGHDAY: 43560.92
LOWDAY: 42766.45
OPEN24HOUR: 45380.97
HIGH24HOUR: 45465.9
LOW24HOUR: 42748.91
LASTMARKET: "Kraken"
VOLUMEHOUR: 405.10301979999383
VOLUMEHOURTO: 17611817.371733278

}
```
