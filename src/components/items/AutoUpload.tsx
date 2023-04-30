import { BsUpload } from "react-icons/bs";
import Platform from "../reusable/Platform";

interface AutoUploadProps {
  autoUpload: boolean;
  platforms: { platformId: number; platformName: string }[];
}

const AutoUpload: React.FC<AutoUploadProps> = ({ autoUpload, platforms }) => {
  return (
    <div
      className={`${
        autoUpload ? "flex" : "hidden"
      } items-center justify-between gap-2`}
    >
      <div className="flex flex-col text-[10px]">
        <p className="font-bold">Auto-Upload Service</p>
        <p>Usable within 24 hours</p>
      </div>
      <div className="flex flex-col items-center">
        <BsUpload className="text-xl md:text-2xl" />
        <p className="text-[8px] uppercase md:text-[10px]">Ready</p>
      </div>
    </div>
  );
};

export default AutoUpload;
