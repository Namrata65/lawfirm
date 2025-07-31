import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";

export const metadata = {
  title: "Top Law Firm | Legal Solutions Tailored for You",
  description: "We offer expert legal services in corporate, civil, and criminal law.",
  robots: "index, follow",
  openGraph: {
    title: "Top Law Firm",
    description: "We offer expert legal services in corporate, civil, and criminal law.",
    // url: "https://yourdomain.com",
    siteName: "Top Law Firm",
    // images: [
    //   {
    //     url: "https://yourdomain.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Top Law Firm Office",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        {/* Add more sections here as needed */}
      </main>
    </div>
  );
}
