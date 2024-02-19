import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'


function App() {
  
  const[amount, setAmount] = useState("")
  const[from, setFrom] = useState("inr")
  const[to, setTo] = useState("usd")
  const[convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  // const options = Object.keys(currencyInfo)
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    
  }

  const convert = () => {
    
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-black  w-fit h-fit rounded-sm  flex flex-col p-9 shadow-md " >
          <h1 className="text-white text-3xl text-center italic mb-5">
            Currency Convertor
          </h1>

            <InputBox
            
            label = "From"
            amount ={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)
              
            }
            selectCurrency={from}
            onAmountChange= {(amount) => setAmount(amount)}
            />
    
          <div className="flex justify-center my-5">
            <button
              title="Switch currency"
              className="bg-blue-600 opacity-75 text-white p-3 hover:opacity-100 rounded-2xl"
              onClick={swap}

            >
              Switch
            </button>
          </div>

          <InputBox
          
            label = "To"
            amount ={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)
            }

            selectCurrency={to}
            amountDisable
            
            />

          <div className="flex justify-center mt-5">
            <button
              title="Click to Convert Currency"
              className="bg-blue-600 opacity-75 text-white p-3 hover:opacity-100 rounded-2xl"
              onClick={convert}
            >
              Convert Currency
            </button>
          </div>
          <div className="flex justify-center ">
          {amount === "" ? (
            <span className="opacity-100 text-2xl text-red-500 p-3 mt-5">
              Please enter amount for conversion.
            </span>
          ) : (
            <span className="opacity-100 text-2xl text-green-500 p-3 mt-5">
              {amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}
            </span>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App


