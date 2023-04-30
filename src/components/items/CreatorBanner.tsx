import Image from "next/image";

interface CreatorBannerProps {
  creatorName: string;
  creatorAvatar: string;
}

const CreatorBanner: React.FC<CreatorBannerProps> = ({
  creatorName,
  creatorAvatar,
}) => {
  return (
    <div className="flex items-center gap-1">
      <Image
        className="h-4 w-4 rounded-full"
        src={creatorAvatar}
        width={64}
        height={64}
        alt={creatorName}
      />
      <p className="text-xs opacity-75">{creatorName}</p>
    </div>
  );
};

export default CreatorBanner;
