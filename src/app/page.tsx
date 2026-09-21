import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Writing from "@/components/Writing";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  // Only the three most recent posts appear on the landing page.
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <Writing posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
