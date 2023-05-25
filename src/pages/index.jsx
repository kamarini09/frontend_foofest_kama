import Anchor from "@/components/Anchor";
import Image from "next/image";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <Layout>
      <Anchor
        href="/campingsite/"
        className="fixed bottom-5 right-5 text-4xl z-50"
      >
        <p className="font-normal text-sm">FooFest Extravaganza 2023</p>
        BUY TICKETS <span className="ml-2">→</span>
      </Anchor>
      <section className="h-screen flex flex-col justify-center items-center px-10">
        <h1 className="text-8xl font-bold text-center py-4">
          FOOFEST <br /> EXTRAVAGANZA
        </h1>
        <p className="font-bold text-center text-4xl pb-2">1 - 7 July 2023</p>
        <p className="text-center text-4xl">Fantasy Island</p>
      </section>

      <section>
        <div className="flex justify-between items-center my-4 px-10 pb-5">
          <h2 className="text-4xl text-white font-bold">FEATURED ARTISTS</h2>
          <Anchor href="/schedule/">
            FULL LINE-UP<span className="ml-2">→</span>
          </Anchor>
        </div>
        <Gallery></Gallery>
      </section>

      <section className="mx-auto h-[70vh] flex flex-col md:flex-row items-center justify-center my-4 px-10">
        <div className="mb-4 md:mb-0 md:mr-4 md:flex-1">
          <h2 className="text-2xl font-bold">Join the Community</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className="md:flex-1">
          <Image
            src="https://images.unsplash.com/photo-1684346819553-11174cbc8f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            alt="Random Unsplash Image"
            width={200}
            height={200}
          />
        </div>
      </section>
    </Layout>
  );
}
