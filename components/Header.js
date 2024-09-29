import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">T0modachi</Link>
        <Image src="/logo_50_34.jpg" width={50} height={34} alt="Logo" />
      </div>
      <div className="nav-links">
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
}
