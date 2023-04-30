import CategoryTitle from "./CategoryTitle";
import Checkbox from "./Checkbox";
import data from "@/data.json";
import { BsChevronDown } from "react-icons/bs";

const Filters = () => {
  return (
    <div className="flex w-64 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <CategoryTitle title="Categories" />
        <div className="ml-4 flex flex-col items-start gap-2 text-xs">
          <button className="flex items-center gap-1">
            <p>Human-based</p>
            <BsChevronDown className="text-green-400" />
          </button>
          <button className="flex items-center gap-1">
            <p>Animal & Mythical Creature-based</p>
            <BsChevronDown />
          </button>
          <button className="flex items-center gap-1">
            <p>Robot-based</p>
            <BsChevronDown />
          </button>
          <button className="flex items-center gap-1">
            <p>Others</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <CategoryTitle title="Contents" />
        <div className="ml-4 flex flex-col gap-2">
          {data.categories.contents.map((value) => (
            <Checkbox value={value} key={value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <CategoryTitle title="Price" />
        <div className="ml-4 flex flex-col gap-2">
          {data.categories.price.map((value) => (
            <Checkbox value={value} key={value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <CategoryTitle title="Polygon Count" />
        <div className="ml-4 flex flex-col gap-2">
          {data.categories.polygonCount.map((value) => (
            <Checkbox value={value} key={value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium">Auto-Upload Service</p>
        <div className="ml-4 flex flex-col gap-2">
          {data.categories.autoUploadService.map((value) => (
            <Checkbox value={value} key={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
