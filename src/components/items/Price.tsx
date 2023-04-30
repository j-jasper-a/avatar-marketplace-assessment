interface PriceProps {
  value: number;
}

const Price: React.FC<PriceProps> = ({ value }) => {
  const valueWithDecimals = value.toFixed(2);
  const valueWhole = Math.floor(value);
  const valueCents = ((value - valueWhole) * 100).toFixed(0).padStart(2, "0");

  return (
    <div className="flex items-start justify-end gap-[2px] text-[#7e1f89]">
      <span className="text-xs">$</span>
      <span className="text-2xl font-bold">{valueWhole}</span>
      <span className="text-xs">{valueCents}</span>
    </div>
  );
};

export default Price;
