import { useRouter } from "next/router";

export default function ClientProjectIdPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Client Project Id Page</h1>
    </div>
  );
}
