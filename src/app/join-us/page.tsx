import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Interviews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 py-8 sm:py-12 lg:py-16">
        <section className="mx-auto w-full max-w-screen-xl">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6">
              Apply to Join Us!
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              We're excited to hear from you! Please fill out the form below to start your application process.
            </p>
          </div>

          {/* Google Form Container */}
          <div className="w-full max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-10">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              {/* Loading fallback */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50 z-0">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-500 text-sm">Loading application form...</p>
                </div>
              </div>
              
              {/* Google Form Iframe */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdANzIj-mZ1yGjeqGyekKvWCowrscWIqaY3EsQpmyDaZoSFOg/viewform?embedded=true"
                className="relative z-10 w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] border-0"
                loading="lazy"
                title="Application Form"
                allowFullScreen
              >
                <p className="text-center text-gray-500 p-8">
                  Your browser does not support iframes. 
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdANzIj-mZ1yGjeqGyekKvWCowrscWIqaY3EsQpmyDaZoSFOg/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline ml-1"
                  >
                    Please click here to access the form directly.
                  </a>
                </p>
              </iframe>
            </div>
            
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Interviews;