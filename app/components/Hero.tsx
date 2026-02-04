'use client';

import { ArrowRight, Code2, CloudCog, Cpu, Sparkles, Users, Award, Clock } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const floatingElements = [
    { icon: <Sparkles className="w-6 h-6" />, color: 'bg-gradient-to-br from-primary to-secondary', animation: 'animate-float', top: '10%', right: '5%' },
    { icon: <Users className="w-6 h-6" />, color: 'bg-gradient-to-br from-secondary to-accent', animation: 'animate-float-delay', top: '70%', right: '15%' },
    { icon: <Award className="w-6 h-6" />, color: 'bg-gradient-to-br from-accent to-orange-300', animation: 'animate-float-delay-2', top: '30%', right: '90%' },
  ];

  return (
    <section className="relative overflow-hidden gradient-bg pt-20 md:pt-28 pb-16 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-dark">Trending Tech Institute 2024</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master{' '}
              <span className="text-gradient">Python, DevOps</span>{' '}
              & React Development
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Launch your tech career with industry-focused training. Learn from experts, 
              work on real projects, and get placement assistance in top companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="#courses" className="btn group flex items-center justify-center gap-3 text-lg">
                Explore Courses 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Book Free Demo
              </Link>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-orange-100">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">5,000+</div>
                <div className="text-gray-600 text-sm">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                <div className="text-gray-600 text-sm">Placement Rate</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600 text-sm">Expert Trainers</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-orange-50 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-sm font-mono text-gray-500 ml-auto">codemasters-terminal</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                    <Code2 className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-semibold">Python Development</div>
                      <div className="text-sm text-gray-600">Full Stack & AI/ML</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                    <CloudCog className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-semibold">DevOps Engineering</div>
                      <div className="text-sm text-gray-600">Cloud & Automation</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                    <Cpu className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-semibold">React Development</div>
                      <div className="text-sm text-gray-600">Modern Frontend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            {floatingElements.map((element, index) => (
              <div
                key={index}
                className={`absolute w-14 h-14 ${element.color} rounded-2xl flex items-center justify-center text-white shadow-xl ${element.animation}`}
                style={{ top: element.top, right: element.right }}
              >
                {element.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;