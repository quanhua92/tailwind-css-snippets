import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-w-7xl items-center justify-center m-auto">
      <h1 className="text-3xl text-emerald-500">Tailwind CSS Snippets</h1>
      <ul className="flex flex-col gap-y-8 mt-8">
        <li>
          <Link href="/cards">
            <a>Cards</a>
          </Link>
        </li>
        <li>
          <Link href="/collections">
            <a>Collections</a>
          </Link>
        </li>
        <li>
          <Link href="/headers">
            <a>Headers</a>
          </Link>
        </li>
        <li>
          <Link href="/heros">
            <a>Heros</a>
          </Link>
        </li>
        <li>
          <Link href="/offers">
            <a>Offers</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
