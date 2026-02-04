'use client';

import { Code2, CloudCog, Cpu, ChevronRight, Clock, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Python Full Stack Development',
      description: 'Master Python, Django, FastAPI, and modern web development with hands-on projects.',
      icon: <Code2 className="w-8 h-8" />,
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      students: '1,200+',
      color: 'from-primary to-orange-400',
      features: ['Django & FastAPI', 'REST APIs', 'Database Design', 'AI/ML Basics'],
    },
    {
      id: 2,
      title: 'DevOps Engineering',
      description: 'Learn CI/CD, Docker, Kubernetes, AWS, and infrastructure automation from experts.',
      icon: <CloudCog className="w-8 h-8" />,
      duration: '16 Weeks',
      level: 'Intermediate',
      students: '850+',
      color: 'from-blue-500 to-cyan-400',
      features: ['Docker & Kubernetes', 'AWS Cloud', 'CI/CD Pipeline', 'Terraform'],
    },
    {
      id: 3,
      title: 'React & Modern Frontend',
      description: 'Build interactive UIs with React, Next.js, TypeScript, and state management.',
      icon: <Cpu className="w-8 h-8" />,
      duration: '10 Weeks',
      level: 'Beginner to Advanced',
      students: '1,500+',
      color: 'from-purple-500 to-pink-400',
      features: ['React & Next.js', 'TypeScript', 'State Management', 'Testing'],
    },
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-primary px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Trending Courses</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Featured</span> Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-relevant curriculum designed by tech leaders to make you job-ready
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group card-hover bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-6`}>
                {course.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {course.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {course.students}
                </div>
              </div>
              
              <Link
                href={`/courses/${course.id}`}
                className="btn-secondary w-full flex items-center justify-center gap-2 group"
              >
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses" className="btn px-12 inline-flex items-center gap-2">
            View All Courses
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;