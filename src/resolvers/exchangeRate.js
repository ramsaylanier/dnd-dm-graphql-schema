import { exchangeRateMap } from "../util/exchangeRateUtil"

const convertCurrency = ({ amount, currency }) => {
  const CP = amount * exchangeRateMap["CP"][currency]
  const SP = amount * exchangeRateMap["SP"][currency]
  const EC = amount * exchangeRateMap["EC"][currency]
  const GP = amount * exchangeRateMap["GP"][currency]
  const PP = amount * exchangeRateMap["PP"][currency]
  return {
    CP,
    SP,
    EC,
    GP,
    PP
  }
}

export { convertCurrency }
