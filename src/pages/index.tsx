import Filters from "@/components/filters/Filters";
import Header from "@/components/header/Header";
import AllItems from "@/components/items/AllItems";
import MetaTags from "@/components/reusable/MetaTags";

export default function Home() {
  return (
    <>
      <MetaTags />
      <main className="mx-auto max-w-screen-xl">
        <Header />
        <section className="flex justify-between p-4">
          <div className="hidden md:block">
            <Filters />
          </div>
          <AllItems />
        </section>
      </main>
    </>
  );
}
