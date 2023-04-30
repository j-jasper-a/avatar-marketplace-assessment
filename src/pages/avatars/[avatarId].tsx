import { useRouter } from "next/router";
import Filters from "@/components/filters/Filters";
import Header from "@/components/header/Header";
import AllItems from "@/components/items/AllItems";
import data from "@/data.json";

const AvatarPage = () => {
  const router = useRouter();
  const { avatarId } = router.query;

  return (
    <div>
      <div>
        <main className="mx-auto max-w-screen-xl">
          <Header />
          <section className="flex justify-between p-4">
            <div className="hidden md:block">
              <Filters />
            </div>
            <AllItems />
          </section>
        </main>
      </div>
    </div>
  );
};

export default AvatarPage;
