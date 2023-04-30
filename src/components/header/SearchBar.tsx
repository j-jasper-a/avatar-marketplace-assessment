import { BsSearch } from "react-icons/bs";

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <form
      className={`${className} h-8 w-full max-w-md justify-between rounded-md bg-white`}
      onSubmit={(e) => {
        e.preventDefault;
      }}
    >
      <input
        className="ml-4 w-full rounded-md text-sm placeholder:text-sm placeholder:opacity-75 focus:outline-none"
        type="text"
        placeholder="Search your avatar"
        onChange={(e) => {
          e.preventDefault;
        }}
      />
      <button className="px-4" type="submit">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
