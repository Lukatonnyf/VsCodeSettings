import Link from "next/link";
import HomePage from "./pages/Homepage";


export default function Home() {
  return (
    <div className="w-full min-h-screen h-full bg-background overflow-y-hidden">
      <HomePage />
      <Link href="/aboutProject">teste </Link>

    </div>
  );
}




