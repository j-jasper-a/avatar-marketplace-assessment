import { useState } from "react";
import ItemSmall from "./ItemSmall";
import data from "@/data.json";
import Pagination from "../reusable/Pagination";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "../header/SearchBar";

const PAGE_SIZE = 12;
const dropdownMenuOptions = [
  { label: "Sort: Featured", value: "featured" },
  { label: "Sort: (Price) Low to High", value: "pricetohigh" },
  { label: "Sort: (Price) High to Low", value: "pricetolow" },
  { label: "Sort: Reviews", value: "reviews" },
  { label: "Sort: New", value: "new" },
  { label: "Sort: (Polygon) Low to High", value: "polygontohigh" },
  { label: "Sort: (Polygon) High to Low", value: "polygontolow" },
];

const AllItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedAvatars = data.avatars.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.avatars.length / PAGE_SIZE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelect = (value: string) => {
    console.log(`Selected item value: ${value}`);
  };

  return (
    <div className="flex flex-col gap-4 py-2">
      <SearchBar className="flex shadow md:hidden" />
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium">All avatars</p>
        <DropdownMenu
          dropdownMenuOptions={dropdownMenuOptions}
          onSelect={handleSelect}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {paginatedAvatars.map((avatar) => (
          <ItemSmall
            id={avatar.id}
            imageUrl={avatar.imageUrl}
            name={avatar.name}
            sex={avatar.sex}
            price={avatar.price}
            ratings={avatar.ratings}
            likes={avatar.likes}
            autoUpload={avatar.autoUpload}
            platforms={avatar.platforms}
            key={avatar.id}
            creatorName={avatar.creatorName}
            creatorAvatar={avatar.creatorAvatar}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AllItems;
