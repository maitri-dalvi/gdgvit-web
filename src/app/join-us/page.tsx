import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Interviews = () => {
  return (
    <>
      <Navbar />

      <main className="px-4">
        <section className="mx-auto w-full max-w-screen-xl py-12 lg:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800">
            Apply to Join Us!
          </h1>

          {/* Scrollable Google Form */}
          <div className="mt-10 mx-auto w-full max-w-5xl h-[800px] rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://forms.gle/pA4tx8ZKABSEh9dJ7"
              className="w-full h-full overflow-y-scroll"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Interviews;
