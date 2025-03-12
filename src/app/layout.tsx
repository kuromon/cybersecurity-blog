import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Kumosec Cybersecurity Blogs",
  description:
    "Collection of blogs on cybersecurity, CTFs, and other related topics.",
};

const navbar = <Navbar logo={<b>kumosec.</b>} />;
const footer = <Footer>{new Date().getFullYear()} © kumosec.</Footer>;
const pageMap = await getPageMap();
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <title>Kumosec Cybersecurity Blogs</title>
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          feedback={{ content: null }}
          editLink={null}
          navigation={false}
          sidebar={{ autoCollapse: true }}
          footer={footer}
          search={<Search placeholder={"Search..."} />}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
