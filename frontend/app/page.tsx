import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flexCenter flex-col gap-4 pt-14">
      <h1 className="text-3xl">
        Hello Kanastra!
      </h1>

      <Link href="/create-charge">
        <Button type="button" title="Create Charge" variant="btn_green"/>
      </Link>
    </div>
  );
}
