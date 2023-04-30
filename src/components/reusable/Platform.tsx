interface PlatformProps {
  platform: string;
}

const Platform: React.FC<PlatformProps> = ({ platform }) => {
  if (platform === "PC") {
    return <p className="rounded-lg bg-cyan-600 p-1 text-white">PC</p>;
  }

  return <div></div>;
};

export default Platform;
