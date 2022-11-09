import "./App.css";
import { useState } from "react";
// components
import DisplayBlock from "./components/DisplayBlock";
import PriceEntryField from "./components/PriceEntryField";
import VatRateField from "./components/VatRateField";

function App() {
  // states
  const [netPrice, setNetPrice] = useState(0.0);
  const [grossPrice, setGrossPrice] = useState(0.0);
  const [vatToPay, setVatToPay] = useState(Math.round(0.0));
  const [vatRate, setVatRate] = useState(20.0);

  const handleNetPriceChange = (price) => {
    const grossPriceLocal = price * (vatRate / 100 + 1);
    setNetPrice(price);
    setGrossPrice(grossPriceLocal);

    // calc vat to pay and set state
    setVatToPay(grossPriceLocal - price);
  };
  const handleGrossPriceChange = (price) => {
    const netPriceLocal = price / (vatRate / 100 + 1);
    setNetPrice(netPriceLocal);
    setGrossPrice(price);

    // calc vat to pay and set state
    setVatToPay(price - netPriceLocal);
  };

  const handleVatRateChange = (rate) => {
    setVatRate(rate);
    handleNetPriceChange(netPrice);
  };

  const updatePrices = () => {
    handleNetPriceChange(netPrice);
  };

  return (
    <div className="header field App">
      <h1>VAT Calculator</h1>
      <div className=" pale-green-border">
        <VatRateField
          customerstyle="field"
          vatRateChanged={handleVatRateChange}
          updatePrices={updatePrices}
          value={vatRate}
        />
        <PriceEntryField
          label="Price excl VAT: "
          priceChanged={handleNetPriceChange}
          price={netPrice === 0.0 ? "" : netPrice}
          customerstyle="field"
        />
        <DisplayBlock
          label="VAT to pay: "
          value={vatToPay}
          customerstyle="field"
        />
        <PriceEntryField
          label="Price incl VAT: "
          priceChanged={handleGrossPriceChange}
          price={grossPrice === 0.0 ? "" : grossPrice}
        />
      </div>
    </div>
  );
}

export default App;
