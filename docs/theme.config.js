// import { useTheme } from "next-themes";

const github = "https://github.com/ropats16/create-permaweb-app";

export default {
  github,
  projectLink: github,
  titleSuffix: " – Create Web3",
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">create-permaweb-app</span>
      <span className="text-gray-600 dark:text-gray-200 font-normal hidden md:inline">
        A boilerplate for web3 projects
      </span>
    </>
  ),
  head: ({ meta, title }) => {
    const description =
      meta.description ||
      "create-permaweb-app is a boilplate for creating and deploying dapps and smart contracts.  non opinionated, user choice of frameworks, and quick to setup.";
    const title_ =
      title && !title.startsWith("create-permaweb-app")
        ? title + " – create-permaweb-app"
        : "create-permaweb-app: A boilerplate to quickly create a new web3 project.";

    return (
      <>
        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <title>{title_}</title>

        {/* SEO */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:title" content={title_} />
        {/* <meta name="og:image" content="https://.png" /> */}
        <meta name="twitter:card" content="summary" />

        <meta name="apple-mobile-web-app-title" content="create-permaweb-app" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </>
    );
  },
  search: true,
  prevLinks: true,
  nextLinks: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  footer: true,
  footerEditLink: "",
  footerText: <>MIT {new Date().getFullYear()} © Eric Roupe</>,
  unstable_faviconGlyph: "🧱",
  unstable_flexsearch: true,
};
