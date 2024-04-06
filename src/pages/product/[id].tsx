import { useRouter, Router } from "next/router";
import { styled } from "../../styles/index";

const Button = styled("button", {
  backgroundColor: "$rocket",
  padding: 4,
  border: 0,
  borderRadius: 4,
  cursor: "pointer",
});
export default function Product() {
  const router = useRouter();
  const { query } = useRouter();
  return (
    <main>
      <h1> Produto: {JSON.stringify(query)}</h1>
      <Button onClick={() => router.push("/success")}> Success </Button>
    </main>
  );
}
