import { type Config } from "prettier";

const config: Config = {
  semi: true,
  quoteProps: "consistent",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
