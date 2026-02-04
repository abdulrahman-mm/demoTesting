import { Code2, Clock, Users, Target, CheckCircle, ArrowRight, BookOpen, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function PythonCoursePage() {
  const courseDetails = {
    title: 'Python Full Stack Development',
    description: 'Master Python programming, web development with Django & FastAPI, and build real-world applications.',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    students: '1,200+',
    fee: '₹45,000',
    nextBatch: 'March 15, 2024',
  };

  const modules = [
    { title: 'Python Fundamentals', topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'OOP Concepts'] },
    { title: 'Web Development', topics: ['Django Framework', 'FastAPI', 'REST APIs', 'Database Models'] },
    { title: 'Frontend Integration', topics: ['HTML/CSS Basics', 'JavaScript for Python Devs', 'API Integration', 'AJAX'] },
    { title: 'Advanced Topics', topics: ['Authentication & Authorization', 'Testing & Debugging', 'Deployment', 'Performance'] },
  ];

  const benefits = [
    'Industry-recognized certification',
    '100+ hours of live instruction',
    '10+ real-world projects',
    '1:1 mentorship sessions',
    'Placement assistance',
    'Lifetime course access',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-[#FF7A1E]">Home</Link>
              <span>›</span>
              <Link href="/courses" className="hover:text-[#FF7A1E]">Courses</Link>
              <span>›</span>
              <span className="text-[#FF7A1E]">Python Development</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF7A1E] px-4 py-2 rounded-full mb-6">
                  <Code2 className="w-4 h-4" />
                  <span className="text-sm font-semibold">Most Popular Course</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Python Full Stack <span className="text-[#FF7A1E]">Development</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-8">
                  Master Python programming, web development with Django & FastAPI, and build real-world applications that get you hired.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-[#FF7A1E]">{courseDetails.duration}</div>
                    <div className="text-gray-600 text-sm">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FF7A1E]">{courseDetails.level}</div>
                    <div className="text-gray-600 text-sm">Level</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FF7A1E]">{courseDetails.students}</div>
                    <div className="text-gray-600 text-sm">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FF7A1E]">{courseDetails.fee}</div>
                    <div className="text-gray-600 text-sm">Course Fee</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact?course=Python Development" className="btn inline-flex items-center justify-center gap-2">
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="#curriculum" className="btn-secondary inline-flex items-center justify-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    View Curriculum
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-6">Course Highlights</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Next Batch Starts</span>
                    <span className="font-bold text-[#FF7A1E]">{courseDetails.nextBatch}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Limited seats available. Early enrollment discount of 15% valid until March 10.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Course <span className="text-[#FF7A1E]">Curriculum</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum designed by industry experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-orange-50 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF7A1E] text-white flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A1E]"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white">
        <div className="section-padding text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Become a Python Developer?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the next batch and start your journey to becoming a professional Python developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?course=Python Development" className="bg-white text-[#FF7A1E] font-bold px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors">
              Enroll Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Other Courses */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Explore Other <span className="text-[#FF7A1E]">Courses</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/courses/devops" className="bg-white p-6 rounded-2xl hover:shadow-xl transition-shadow group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-[#FF7A1E] transition-colors">DevOps Engineering</h3>
                  <p className="text-gray-600 text-sm">Master CI/CD, Docker, Kubernetes & Cloud</p>
                </div>
              </div>
            </Link>
            
            <Link href="/courses/react" className="bg-white p-6 rounded-2xl hover:shadow-xl transition-shadow group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-[#FF7A1E] transition-colors">React Development</h3>
                  <p className="text-gray-600 text-sm">Build modern web applications with React</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}