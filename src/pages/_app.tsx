import { Header } from "@/components/header";
import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import { Container } from "@/styles/pagesTemplates";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header /> <Component {...pageProps} />
      </Container>
    </>
  );
}
