import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Core = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800">
          🚧 Under Development 🚧
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-md">
          We are working hard to bring you this feature. Please check back soon!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Core;