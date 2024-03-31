import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-extralight uppercase">
        Danilo
        <span className="font-extrabold">Feitosa</span>
      </h1>
      <div className="flex flex-row gap-8">
        <Link href={"https://linkedin.com/in/danilofeitosa"} target="_blank">
          <Image src={"/linkedin.png"} alt={"LinkedIn"} width={36} height={36} />
        </Link>
        <Link href={"https://github.com/feitosadanilo"} target="_blank">
          <Image src={"/github.png"} alt={"GitHub"} width={36} height={36} />
        </Link>
      </div>
    </main>
  );
}
