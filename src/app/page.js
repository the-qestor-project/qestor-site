import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 text-neutral-900 p-4">
      <div className="flex flex-col items-center space-y-6">
        <Image
          src="/qestor-logo.png"
          alt="QESTOR Logo"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-serif tracking-wider">QESTOR</h1>
        <p className="text-lg italic text-neutral-600">
  &quot;Dubitando Veritatem Quaerit&quot;
    </p>


        <nav className="mt-10 space-x-6 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/thoughts" className="hover:underline">Thoughts</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </main>
  );
}
