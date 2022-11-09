import { React, useEffect } from "react";
const VatRateField = (props) => {
  const { updatePrices } = props;

  useEffect(() => {
    updatePrices();
  }, [props.value, updatePrices]);

  return (
    <div className={props.customstyle}>
      <label htmlFor="">VAT Rate:</label>
      <select
        onChange={(e) => {
          props.vatRateChanged(e.target.value);
        }}
      >
        <option value="20">20%</option>
        <option value="15">15%</option>
        <option value="12.5">12.5%</option>
        <option value="0">Exempt</option>
      </select>
    </div>
  );
};

export default VatRateField;
