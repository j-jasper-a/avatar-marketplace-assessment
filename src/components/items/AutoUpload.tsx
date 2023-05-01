import { BsUpload } from "react-icons/bs";
import Platform from "../reusable/Platform";

interface AutoUploadProps {
  autoUpload: boolean;
  isSmall: boolean;
}

const AutoUpload: React.FC<AutoUploadProps> = ({ autoUpload, isSmall }) => {
  return (
    <div
      className={`${autoUpload ? "flex" : "hidden"} ${
        isSmall ? "justify-between gap-2" : "justify-start gap-8 text-white"
      } items-center`}
    >
      <div className={`${isSmall ? "text-[10px]" : "text-sm"} flex flex-col`}>
        <p className="font-bold">Auto-Upload Service</p>
        <p>Usable within 24 hours</p>
      </div>
      <div className="flex flex-col items-center">
        <BsUpload
          className={`${
            isSmall ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
          }`}
        />
        <p
          className={`${
            isSmall ? "text-[8px] md:text-[10px]" : "text-xs md:text-sm"
          }  uppercase`}
        >
          Ready
        </p>
      </div>
    </div>
  );
};

export default AutoUpload;
