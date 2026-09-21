import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Education from "@/components/Education";
import Entrepreneur from "@/components/Entrepreneur";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  // Only the three most recent posts appear on the landing page.
  // Renders nothing while content/posts/ is empty.
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Entrepreneur />
        <Experience />
        <Skills />
        <Education />
        <Credentials />
        <Writing posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
