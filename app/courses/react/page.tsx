import { Cpu, Clock, Users, Target, CheckCircle, ArrowRight, BookOpen, Code2, Layout, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ReactCoursePage() {
  const courseDetails = {
    title: 'React Development',
    description: 'Master React, Next.js, TypeScript, and modern frontend development to build scalable web applications.',
    duration: '10 Weeks',
    level: 'Beginner to Advanced',
    students: '1,500+',
    fee: '₹35,000',
    nextBatch: 'March 25, 2024',
  };

  const modules = [
    { 
      title: 'React Fundamentals', 
      topics: ['JSX & Components', 'Props & State', 'Hooks', 'Event Handling', 'Conditional Rendering'],
      icon: <Code2 className="w-6 h-6" />
    },
    { 
      title: 'Advanced React', 
      topics: ['Context API', 'Redux Toolkit', 'Custom Hooks', 'Performance', 'Error Boundaries'],
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: 'Next.js Framework', 
      topics: ['App Router', 'Server Components', 'API Routes', 'SSR/SSG', 'Deployment'],
      icon: <Layout className="w-6 h-6" />
    },
    { 
      title: 'Modern Frontend', 
      topics: ['TypeScript', 'Testing (Jest)', 'State Management', 'UI Libraries', 'Animations'],
      icon: <Target className="w-6 h-6" />
    },
  ];

  const technologies = [
    { name: 'React 18', category: 'Library' },
    { name: 'Next.js 14', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Redux Toolkit', category: 'State' },
    { name: 'Jest/RTL', category: 'Testing' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'Framer Motion', category: 'Animations' },
  ];

  const benefits = [
    'Build 5+ full-stack applications',
    'Industry-grade project portfolio',
    'Master modern React patterns',
    'Learn from senior developers',
    'Career guidance & interviews',
    'GitHub repository setup',
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
              <span className="text-[#FF7A1E]">React Development</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full mb-6">
                  <Cpu className="w-4 h-4" />
                  <span className="text-sm font-semibold">Frontend Mastery</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  React <span className="text-[#FF7A1E]">Development</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-8">
                  Become a frontend expert by mastering React, Next.js, and modern JavaScript 
                  to build fast, scalable, and beautiful web applications.
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
                  <Link href="/contact?course=React Development" className="btn inline-flex items-center justify-center gap-2">
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
                  <h4 className="font-bold mb-4">Modern Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 6).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech.name}
                      </span>
                    ))}
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
              Master modern frontend development with comprehensive React training
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{module.title}</h3>
                    <p className="text-purple-600 text-sm">Module {index + 1}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Technologies Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Modern Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl text-center group hover:bg-purple-50 transition-colors">
                  <div className="text-lg font-bold text-gray-800 mb-1 group-hover:text-purple-700">{tech.name}</div>
                  <div className="text-sm text-gray-600">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Build Real <span className="text-[#FF7A1E]">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A1E] text-white flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-3">E-Commerce Platform</h3>
              <p className="text-gray-600">Full-featured online store with cart, checkout, and payment integration</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Stripe</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A1E] text-white flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-3">Social Media App</h3>
              <p className="text-gray-600">Real-time messaging, posts, likes, and user authentication</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Firebase</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Context API</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Tailwind</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A1E] text-white flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-3">Dashboard Analytics</h3>
              <p className="text-gray-600">Interactive data visualization with charts, filters, and real-time updates</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Recharts</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="section-padding text-center">
          <Cpu className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become a React Developer
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Master modern frontend development and build your dream career as a React developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?course=React Development" className="bg-white text-purple-600 font-bold px-8 py-3.5 rounded-xl hover:bg-purple-50 transition-colors">
              Enroll Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Other Courses */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Explore Other <span className="text-[#FF7A1E]">Courses</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/courses/python" className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-shadow group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF7A1E] flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-[#FF7A1E] transition-colors">Python Development</h3>
                  <p className="text-gray-600 text-sm">Master Python, Django & Full Stack Development</p>
                </div>
              </div>
            </Link>
            
            <Link href="/courses/devops" className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-shadow group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-[#FF7A1E] transition-colors">DevOps Engineering</h3>
                  <p className="text-gray-600 text-sm">Master CI/CD, Docker, Kubernetes & Cloud</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}