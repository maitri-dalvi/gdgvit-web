import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Interviews = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800">
            GDG VIT&apos;s Interviews 2025-26 <br />Coming Soon...
        </h1>
        {/* <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-md">
          For the new tenure 2025-26
        </p> */}
      </div>
      <Footer />
    </>
  );
};

export default Interviews;
