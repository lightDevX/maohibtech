import Contact from "@/components/Contact/contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container m-2 mx-auto flex items-center justify-center p-2 text-white">
      <Contact />
      <Link href="/clipping-path">Clipping Path</Link>
    </div>
  );
}
