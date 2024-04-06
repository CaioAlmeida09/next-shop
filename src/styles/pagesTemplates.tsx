import { styled } from "@/styles/index";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100 vh",
});

export const Head = styled("header", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: 15,
  padding: "2rem 0 ",
  margin: "0 auto",
  maxWidth: 1100,
  width: "100%",
});

export const TextHead = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  justifyContent: "center",
  alignItems: "center",
});
