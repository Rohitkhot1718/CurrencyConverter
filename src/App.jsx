import { useEffect, useState } from "react";

const App = () => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState("");
  const [countryList, setCountryList] = useState({ USD: "US", INR: "IN" });

  useEffect(() => {
    fetchCurrencyList();
    updateExchangeRate();
  }, [fromCurrency, toCurrency]);

  const fetchCurrencyList = async () => {
    let response = await fetch("/countryList.json");
    let data = await response.json();
    setCountryList(data[0]);
  };

  const updateExchangeRate = async () => {
    if (!amount || amount < 1) setAmount("1");

    try {
      const baseurl =
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";
      const response = await fetch(
        `${baseurl}/currencies/${fromCurrency.toLowerCase()}.json`
      );
      const data = await response.json();
      const rate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];
      setExchangeRate(`${(amount * rate).toFixed(2)}`);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  const handleFlagUpdate = (currency, setCurrency) => {
    setCurrency(currency);
  };

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 w-full fixed">
      <div className="flex flex-col items-center justify-center w-4/5 md:w-1/4 bg-gray-100 p-6 border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateExchangeRate();
          }}
          className="w-full"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="amount" className="text-gray-700">
              Enter Amount
            </label>
            <input
              type="number"
              value={amount}
              min={1}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 mt-1 border rounded-md"
            />
          </div>

          <div className="flex justify-between items-center my-4">
            <div className="flex flex-col items-center">
              <p className="mb-1 text-gray-700">From</p>
              <div className="flex items-center border p-2 rounded-md">
                <img
                  src={`https://flagsapi.com/${countryList[fromCurrency]}/flat/64.png`}
                  alt="flag"
                  className="w-4"
                />
                <select
                  value={fromCurrency}
                  onChange={(e) =>
                    handleFlagUpdate(e.target.value, setFromCurrency)
                  }
                  className="bg-gray-100 p-2 rounded-md"
                >
                  {Object.keys(countryList).map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="mx-4" onClick={swapCurrency}>
              <i className="fa-solid fa-arrow-right-arrow-left text-xl mt-8 " />
            </button>
            <div className="flex flex-col items-center">
              <p className="mb-1 text-gray-700">To</p>
              <div className="flex items-center border p-2 rounded-md">
                <img
                  src={`https://flagsapi.com/${countryList[toCurrency]}/flat/64.png`}
                  alt="flag"
                  className="w-4"
                />
                <select
                  value={toCurrency}
                  onChange={(e) =>
                    handleFlagUpdate(e.target.value, setToCurrency)
                  }
                  className="bg-gray-100 p-2 rounded-md"
                >
                  {Object.keys(countryList).map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-2 my-4 border rounded-md bg-white text-gray-700">
            {amount} {fromCurrency} = {exchangeRate} {toCurrency}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-pink-300 text-black rounded-md mt-2"
          >
            Get Exchange Rate
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
