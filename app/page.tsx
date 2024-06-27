import Footer from "@/components/common/Footer";
import { data } from "@/components/common/Helper";
import Navbar from "@/components/common/Navbar";
import { renderSections } from "@/contexts/RenderSection";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Just Get Visible: Award Winning Web Design Agency in London',
  description: 'Just Get Visible is an award-winning London-based web design agency, serving clients from start-ups to recognised brands for over 10 years.',
}
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">{renderSections(data)}</main>
      <Footer />
    </>
  );
};

export default Home;
