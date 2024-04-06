import Image from "next/image";
import Logo from "../../assets/Ignite simbol (1).svg";

import { Head, TextHead } from "@/styles/pagesTemplates";

export function Header() {
  return (
    <Head>
      <Image src={Logo} alt="logoIngnite" />
      <TextHead>
        <h1> Next</h1>
        <h3> Shop</h3>
      </TextHead>
    </Head>
  );
}
