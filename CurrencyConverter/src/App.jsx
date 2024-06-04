import { useState } from 'react'
import { InputBox } from './components'
import  usecurrencyinof from './hooks/usecrrencyinfo'
function App() {
const [amount,setAmount] = useState(0)
const [from,setFrom] = useState("usd")
const [to,setTO] = useState("inr")
const [convertamount, setconvertamount] = useState(0)

const CurrencyInfo = usecurrencyinof(from)
const opetions = Object.keys(CurrencyInfo)
const swap = ()=>{ 
  setFrom(to)
  setTO(from)
  setconvertamount(amount)
  setAmount(convertamount)
}
const convert = ()=>{setconvertamount(amount * CurrencyInfo[to])}
const BackgroundImage = "https://images.pexels.com/photos/6765367/pexels-photo-6765367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('${BackgroundImage}')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={opetions}
                          onCurrencyChnage={(cur)=>{
                            setAmount(amount)
                          }}
                          onAmountChange={(amount)=> 
                            setAmount(amount)}
                          selectCurrency='{from}'
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertamount}
                          currencyOptions={opetions}
                          onCurrencyChnage={(cur)=> {
                            setTO(cur)
                          }}
                          selectCurrency='{from}'
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from} to {to}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
