import { CloudCog, Clock, Users, Target, CheckCircle, ArrowRight, BookOpen, Server, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DevOpsCoursePage() {
  const courseDetails = {
    title: 'DevOps Engineering',
    description: 'Master CI/CD pipelines, Docker, Kubernetes, AWS Cloud, and infrastructure automation to become a DevOps expert.',
    duration: '16 Weeks',
    level: 'Intermediate',
    students: '850+',
    fee: '₹55,000',
    nextBatch: 'March 20, 2024',
  };

  const modules = [
    { 
      title: 'Linux & Shell Scripting', 
      topics: ['Linux Fundamentals', 'Bash Scripting', 'System Administration', 'Process Management'],
      icon: <Server className="w-6 h-6" />
    },
    { 
      title: 'Version Control & CI/CD', 
      topics: ['Git & GitHub', 'Jenkins Pipeline', 'GitLab CI', 'Build Automation'],
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: 'Containerization', 
      topics: ['Docker Fundamentals', 'Docker Compose', 'Container Orchestration', 'Docker Swarm'],
      icon: <CloudCog className="w-6 h-6" />
    },
    { 
      title: 'Kubernetes Mastery', 
      topics: ['K8s Architecture', 'Pods & Services', 'Deployments', 'Helm Charts', 'Monitoring'],
      icon: <Target className="w-6 h-6" />
    },
  ];

  const tools = [
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'AWS', category: 'Cloud Platform' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Ansible', category: 'Configuration' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Visualization' },
  ];

  const benefits = [
    'AWS/Azure/GCP cloud certification prep',
    'Real-world project deployment',
    'Hands-on with 15+ DevOps tools',
    'Industry mentorship',
    '100% placement assistance',
    'Lifetime access to updates',
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
              <span className="text-[#FF7A1E]">DevOps Engineering</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                  <CloudCog className="w-4 h-4" />
                  <span className="text-sm font-semibold">High-Demand Skill</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  DevOps <span className="text-[#FF7A1E]">Engineering</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-8">
                  Master the complete DevOps lifecycle: CI/CD, containerization, cloud infrastructure, 
                  and automation to deploy and scale applications efficiently.
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
                  <Link href="/contact?course=DevOps Engineering" className="btn inline-flex items-center justify-center gap-2">
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
                  <h4 className="font-bold mb-4">Tools You'll Master</h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.slice(0, 6).map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tool.name}
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
              Comprehensive DevOps curriculum covering modern tools and practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{module.title}</h3>
                    <p className="text-blue-600 text-sm">Module {index + 1}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Tools Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">DevOps Tools Ecosystem</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl text-center">
                  <div className="text-lg font-bold text-gray-800 mb-1">{tool.name}</div>
                  <div className="text-sm text-gray-600">{tool.category}</div>
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
            Real-World <span className="text-[#FF7A1E]">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A1E] text-white flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-3">CI/CD Pipeline Setup</h3>
              <p className="text-gray-600">Build automated deployment pipeline with Jenkins and GitHub Actions</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A1E] text-white flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-3">Kubernetes Cluster</h3>
              <p className="text-gray-600">Deploy and manage microservices on production Kubernetes cluster</p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A1E] text-white flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-3">Cloud Infrastructure</h3>
              <p className="text-gray-600">Automate AWS/Azure infrastructure using Terraform and Ansible</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="section-padding text-center">
          <CloudCog className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your DevOps Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the most comprehensive DevOps program and become an in-demand DevOps Engineer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?course=DevOps Engineering" className="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
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
            
            <Link href="/courses/react" className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-shadow group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
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