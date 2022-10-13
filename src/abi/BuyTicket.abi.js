export const BuyTicketAbi = {
  "inputs": [
      {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
      },
      {
          "internalType": "uint256",
          "name": "_schedule",
          "type": "uint256"
      },
      {
          "internalType": "uint80",
          "name": "_seat",
          "type": "uint80"
      }
  ],
  "name": "buyTicket",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}