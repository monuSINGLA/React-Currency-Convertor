import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions= [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {

    const amountInputId =useId()

  return (
    <div className={`bg-white flex flex-col rounded-sm ${className}`}>
      <div className="w-full h-fit outline-blue-300 p-5">
        <label htmlFor={amountInputId} className="text-white bg-blue-600 h-10 p-3">
          {label}
        </label>
        <input
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          id={amountInputId}
          type="number"
          value={amount}
          className="  border-none h-8 p-5 outline-none"
          disabled={amountDisable}
        />
        <select
          title="Select Currency"
          className=" h-10 bg-blue-600 px-5 opacity-75 hover:opacity-100 text-white italic cursor-pointer"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          value={selectCurrency}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
