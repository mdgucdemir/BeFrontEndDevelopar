import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The Portfolio Details Page</h1>
    </div>
  );
}
