import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: "$gray900",
    fontFamily: "Roboto",
    fontWeight: 200,
    color: "$gray100",
  },
});
