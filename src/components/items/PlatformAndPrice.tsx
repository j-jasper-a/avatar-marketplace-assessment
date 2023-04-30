import Platform from "../reusable/Platform";
import Price from "./Price";

interface PlatformAndPriceProps {
  price: number;
  platforms: { platformId: number; platformName: string }[];
}

const PlatformAndPrice: React.FC<PlatformAndPriceProps> = ({
  price,
  platforms,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        {platforms.map((platform) => {
          return (
            <Platform
              platform={platform.platformName}
              key={platform.platformId}
            />
          );
        })}
      </div>
      <div className="mx-2 h-2 grow rounded-lg bg-neutral-800/25"></div>
      <Price value={price} />
    </div>
  );
};

export default PlatformAndPrice;
