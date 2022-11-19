import { Footer, Head, Navbar } from "@components/common";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
