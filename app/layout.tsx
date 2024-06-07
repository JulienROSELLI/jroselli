import Navbar from "@/components/NavBar";
import { Layout } from "@/components/dom/Layout";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/dom/ThemeProvider";

export const metadata = {
  title: "Mon Cv",
  description: "Une simple page pour me presenter",
  icons: [{ rel: "icon", url: "/logo/j.png" }]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className=' overflow-x-hidden antialiased'
      suppressHydrationWarning
    >
      <head />
      <body className='grid h-screen grid-rows-[auto,1fr]  '>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Navbar />
          <main className='pt-16'>
            <Layout>{children}</Layout>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

//TODO https://www.linkedin.com/jobs/search/?alertAction=viewjobs&currentJobId=3920608486&f_TPR=a1715089011-&origin=JOB_ALERT_EMAIL&savedSearchId=1741989682
