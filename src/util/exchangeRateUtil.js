const exchangeRateMap = {
  CP: { CP: 1, SP: 10, EC: 50, GP: 100, PP: 1000 },
  SP: { CP: 0.1, SP: 1, EC: 5, GP: 10, PP: 100 },
  EC: { CP: 0.02, SP: 0.2, EC: 1, GP: 2, PP: 20 },
  GP: { CP: 0.01, SP: 0.1, EC: 0.5, GP: 1, PP: 10 },
  PP: { CP: 0.001, SP: 0.01, EC: 0.05, GP: 0.1, PP: 1 }
}

export { exchangeRateMap }
