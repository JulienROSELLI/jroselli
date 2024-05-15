import Navbar from "@/components/NavBar";
import { Layout } from "@/components/dom/Layout";
import "@/app/globals.css";

export const metadata = {
  title: "Next.js + Three.js",
  description: "A minimal starter for Nextjs + React-three-fiber and Threejs."
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='overflow-x-hidden antialiased'>
      <head />
      <body className='grid h-screen grid-rows-[auto,1fr]  '>
        <Navbar />

        <main className='pt-16'>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}

//TODO https://www.linkedin.com/jobs/search/?alertAction=viewjobs&currentJobId=3920608486&f_TPR=a1715089011-&origin=JOB_ALERT_EMAIL&savedSearchId=1741989682
