interface PriceProps {
  value: number;
  isSmall: boolean;
}

const Price: React.FC<PriceProps> = ({ value, isSmall }) => {
  const valueWithDecimals = value.toFixed(2);
  const valueWhole = Math.floor(value);
  const valueCents = ((value - valueWhole) * 100).toFixed(0).padStart(2, "0");

  return (
    <div
      className={`${
        isSmall ? "justify-end" : "justify-start"
      } flex items-start gap-[2px] text-[#7e1f89]`}
    >
      <span className={`${isSmall ? "text-xs" : "text-lg"}`}>$</span>
      <span className={`${isSmall ? "text-2xl" : "text-6xl"} font-bold`}>
        {valueWhole}
      </span>
      <span className={`${isSmall ? "text-xs" : "text-lg"}`}>{valueCents}</span>
    </div>
  );
};

export default Price;
