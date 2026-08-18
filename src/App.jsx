// import { useState } from 'react'
// import { InputBox } from './components'


// import useCurrecyInfo from './hooks/useCurrenyInfo'

// function App() {

//   const [amount,setAmount]=useState(0)
//   const [from,setFrom]=useState("usd")
//   const [to,setTo]=useState("inr")
//   const[convertedAmount,setConvertedAmount]=useState(0)

//   const currencyInfo=useCurrecyInfo(from)

//  const options = currencyInfo ? Object.keys(currencyInfo) : []

// const swap = () => {
//   const tempFrom = from
//   const tempTo = to

//   setFrom(tempTo)
//   setTo(tempFrom)

//   setAmount(convertedAmount)
//   setConvertedAmount(amount)
// }

//  const convert = () => {
//   if (currencyInfo && currencyInfo[to]) {
//     setConvertedAmount(amount * currencyInfo[to])
//   }
// }//currencyInfo API se data aaya ya nahi check kar raha

   



//   return (
     
//     <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//             backgroundImage: `url('https://i.pinimg.com/1200x/72/2b/e3/722be3123d573e6cba06f532835abdf3.jpg')`,
//         }}
//     >
//         <div className="w-full">
//             <div className="w-full max-w-md mx-auto border border-amber-300 rounded-lg p-6 backdrop-blur-sm bg-white/30">
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();// page reload hona sa rokh deta hai
//                         convert()
                       
//                     }}
//                 >
//                     <div className="w-full mb-1">
//                         <InputBox
                            
//                             label="From"
//                             amount={amount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setFrom(currency)}
//                             selectCurrency={from}
//                             onAmountChange={(amount) => setAmount(amount)}
//                         />
//                     </div>
//                     <div className="relative w-full h-0.5">
//                         <button
//                             type="button"
//                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700active:scale-95 transition-all"
//                             onClick={swap}
//                         >
//                             swap
//                         </button>
//                     </div>
//                     <div className="w-full mt-1 mb-4">
//                         <InputBox
//                             label="To"
//                             amount={convertedAmount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setTo(currency)}
//                             selectCurrency={to}
//                             amountDisable
//                         />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                         Convert {from.toUpperCase()} to {to.toUpperCase()}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import { InputBox } from './components'
import useCurrecyInfo from './hooks/useCurrenyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrecyInfo(from)

  const options = currencyInfo ? Object.keys(currencyInfo) : []

  const swap = () => {
    const tempFrom = from
    const tempTo = to

    setFrom(tempTo)
    setTo(tempFrom)

    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(
        Number((amount * currencyInfo[to]).toFixed(2))
      )
    }
  }

  return (
    <div
      className="
        min-h-screen
        w-full
        flex
        flex-col
        items-center
        justify-center
        bg-cover
        bg-center
        bg-no-repeat
        relative
        px-4
      "
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(5, 10, 25, 0.65),
            rgba(5, 10, 25, 0.65)
          ),
          url('https://i.pinimg.com/1200x/72/2b/e3/722be3123d573e6cba06f532835abdf3.jpg')
        `,
      }}
    >

      {/* ================= HEADER ================= */}
{/* ================= HEADER ================= */}

<div className="text-center mb-8">

  {/* LOGO */}
  <div className="flex justify-center mb-3">
    <img
      src="/currencyx-logo.png"
      alt="CurrencyX Logo"
      className="
        w-20
        h-20
        object-contain
        drop-shadow-2xl
        transition-all
        duration-300
        hover:scale-110
      "
    />
  </div>

  {/* TITLE */}
  <h1
    className="
      text-4xl
      md:text-5xl
      font-extrabold
      tracking-wide
      bg-gradient-to-r
      from-blue-400
      to-purple-500
      bg-clip-text
      text-transparent
      drop-shadow-lg
    "
  >
    CurrencyX
  </h1>

  <p className="text-white/80 mt-2 text-sm md:text-base">
    Convert currencies quickly and easily
  </p>

  <div
    className="
      w-16
      h-1
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      mx-auto
      mt-4
      rounded-full
    "
  />

</div>


      {/* ================= CONVERTER CARD ================= */}

      <div
        className="
          w-full
          max-w-lg
          p-5
          md:p-7
          rounded-3xl

          bg-slate-950/60
          backdrop-blur-xl

          border
          border-white/20

          shadow-2xl
          shadow-black/50

          transition-all
          duration-300

          hover:-translate-y-1
        "
      >

        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
        >

          {/* ================= FROM ================= */}

          <div className="w-full mb-2">

            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

          </div>


          {/* ================= SWAP ================= */}

          <div className="relative w-full h-7">

            <button
              type="button"
              onClick={swap}
              title="Swap currencies"
              className="
                absolute
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                z-10

                w-12
                h-12

                flex
                items-center
                justify-center

                rounded-full

                border-4
                border-slate-900

                bg-gradient-to-r
                from-blue-500
                to-purple-600

                text-white
                text-xl

                shadow-lg
                shadow-blue-500/30

                transition-all
                duration-500

                hover:rotate-180
                hover:scale-110

                active:scale-90
              "
            >
              ⇅
            </button>

          </div>


          {/* ================= TO ================= */}

          <div className="w-full mt-2 mb-5">

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

          </div>


          {/* ================= CONVERT BUTTON ================= */}

          <button
            type="submit"
            className="
              w-full

              py-4

              rounded-xl

              bg-gradient-to-r
              from-blue-500
              to-purple-600

              hover:from-blue-600
              hover:to-purple-700

              text-white

              font-bold
              text-lg

              shadow-lg
              shadow-blue-500/30

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl

              active:scale-95
            "
          >
            ⇄ &nbsp;
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>


          {/* ================= RESULT ================= */}

          {convertedAmount > 0 && (

            <div
              className="
                mt-5
                p-4

                rounded-xl

                bg-white/5
                backdrop-blur-md

                border
                border-white/15

                text-center
              "
            >

              <p className="text-sm text-white/60">
                Conversion Result
              </p>

              <p className="text-xl font-bold text-white mt-1">
                {amount} {from.toUpperCase()} ={' '}
                {convertedAmount} {to.toUpperCase()}
              </p>

              <p className="text-xs text-white/50 mt-2">
                Exchange rate updated just now
              </p>

            </div>

          )}

        </form>

      </div>


      {/* ================= FEATURES ================= */}

      <div className="flex items-center gap-5 mt-6 text-white/80 text-sm">

        <span>⚡ Fast</span>

        <span className="text-white/30">•</span>

        <span>🛡️ Simple</span>

        <span className="text-white/30">•</span>

        <span>🌍 Global</span>

      </div>


      {/* ================= FOOTER ================= */}

      <p className="text-white/40 text-xs mt-4">
        CurrencyX • Simple global currency conversion
      </p>

    </div>
  )
}

export default App