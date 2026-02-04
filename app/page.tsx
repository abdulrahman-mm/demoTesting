import Hero from './components/Hero';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Courses />
      <Stats />
      <Features />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FF7A1E]/10 to-white">
        <div className="section-padding text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-[#FF7A1E]">Tech Journey</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who transformed their careers with CodeMasters Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              Enroll Now - Limited Seats
            </a>
            <a 
              href="#contact" 
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              Book Free Demo Class
            </a>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            Next batch starts: <span className="font-semibold text-[#FF7A1E]">March 15, 2024</span>
          </p>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <h3 className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">
            Trusted by students from
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-70">
            {/* Company logos - using simple placeholders */}
            <div className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">Google</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">Amazon</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">Microsoft</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">Infosys</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">TCS</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">Wipro</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}