import React, { useId } from "react";

function InputBox({
  lable,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex ${className} text-black/80`}
    >
      <div className="w-1/2">
        <label htmlFor={amountInputId} className=" mb-2 inline-block">
          {lable}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full  py-1.5 "
          placeholder="Amount"
          disabled={amountDisable}
          value={amount || ""}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className=" mb-2 w-full"> Currency Type</p>
        <select
          className="rounded-lg py-1 px-1 bg-gray-100 outline-none cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
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
