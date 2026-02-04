'use client';

import { Video, Users2, Briefcase, FileCode, ShieldCheck, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Live Interactive Sessions',
      description: 'Real-time classes with industry experts and Q&A sessions',
      color: 'bg-orange-100 text-primary',
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: '1:1 Mentorship',
      description: 'Personalized guidance from experienced professionals',
      color: 'bg-orange-100 text-primary',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Placement Assistance',
      description: 'Dedicated support for job interviews and resume building',
      color: 'bg-orange-100 text-primary',
    },
    {
      icon: <FileCode className="w-8 h-8" />,
      title: 'Hands-on Projects',
      description: 'Real-world projects to build your portfolio',
      color: 'bg-orange-100 text-primary',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Industry Certifications',
      description: 'Globally recognized certificates upon completion',
      color: 'bg-orange-100 text-primary',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Weekend and weekday batches to suit your needs',
      color: 'bg-orange-100 text-primary',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Learning <span className="text-gradient">Advantages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience education designed for the modern tech professional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Transform Your Career?
              </h3>
              <p className="opacity-90">
                Join thousands of successful graduates. Limited seats available!
              </p>
            </div>
            <button className="bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors whitespace-nowrap">
              Enroll Now - 20% Off
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;