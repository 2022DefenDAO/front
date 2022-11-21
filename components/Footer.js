import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className=" body-font fixed bottom-0 w-full bg-gray-100 dark:bg-[#1B1E25] h-12 shadow-md rotate-180">
        <div className="rotate-180 text-center font-semibold text-xl py-2 text-stone-100 text-opacity-40">
          <span>DeFenDAO</span>{" "}
          <span className="text-sm">(DeFi / Defend / DAO)</span>
        </div>
      </footer>
    </>
  );
}
