'use client';

import { Users, Award, Briefcase, Star, Target, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    students: 0,
    placement: 0,
    projects: 0,
    mentors: 0,
  });

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '5000+', label: 'Students Trained', color: 'text-primary' },
    { icon: <Briefcase className="w-8 h-8" />, value: '98%', label: 'Placement Rate', color: 'text-secondary' },
    { icon: <Award className="w-8 h-8" />, value: '1200+', label: 'Projects Completed', color: 'text-accent' },
    { icon: <Star className="w-8 h-8" />, value: '50+', label: 'Expert Mentors', color: 'text-primary' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        students: Math.min(prev.students + 100, 5000),
        placement: Math.min(prev.placement + 2, 98),
        projects: Math.min(prev.projects + 50, 1200),
        mentors: Math.min(prev.mentors + 2, 50),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 gradient-bg">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="text-gradient">CodeMasters</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're committed to transforming careers through practical, industry-focused education. 
              Our proven methodology ensures you gain the skills employers actually need.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Industry-Ready Curriculum</h4>
                  <p className="text-gray-600">Courses designed with input from tech industry leaders</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Global Certification</h4>
                  <p className="text-gray-600">Recognized certifications that boost your resume</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`${stat.color} mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;