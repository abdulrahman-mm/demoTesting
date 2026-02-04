// 'use client';

// import { Video, Users2, Briefcase, FileCode, ShieldCheck, Zap } from 'lucide-react';

// const Features = () => {
//   const features = [
//     {
//       icon: <Video className="w-8 h-8" />,
//       title: 'Live Interactive Sessions',
//       description: 'Real-time classes with industry experts and Q&A sessions',
//       color: 'bg-orange-100 text-primary',
//     },
//     {
//       icon: <Users2 className="w-8 h-8" />,
//       title: '1:1 Mentorship',
//       description: 'Personalized guidance from experienced professionals',
//       color: 'bg-orange-100 text-primary',
//     },
//     {
//       icon: <Briefcase className="w-8 h-8" />,
//       title: 'Placement Assistance',
//       description: 'Dedicated support for job interviews and resume building',
//       color: 'bg-orange-100 text-primary',
//     },
//     {
//       icon: <FileCode className="w-8 h-8" />,
//       title: 'Hands-on Projects',
//       description: 'Real-world projects to build your portfolio',
//       color: 'bg-orange-100 text-primary',
//     },
//     {
//       icon: <ShieldCheck className="w-8 h-8" />,
//       title: 'Industry Certifications',
//       description: 'Globally recognized certificates upon completion',
//       color: 'bg-orange-100 text-primary',
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: 'Flexible Scheduling',
//       description: 'Weekend and weekday batches to suit your needs',
//       color: 'bg-orange-100 text-primary',
//     },
//   ];

//   return (
//     <section id="features" className="py-16 md:py-24 bg-white">
//       <div className="section-padding">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             Our Learning <span className="text-gradient">Advantages</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Experience education designed for the modern tech professional
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-2">
//                 Ready to Transform Your Career?
//               </h3>
//               <p className="opacity-90">
//                 Join thousands of successful graduates. Limited seats available!
//               </p>
//             </div>
//             <button className="bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors whitespace-nowrap">
//               Enroll Now - 20% Off
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


'use client';

import { Video, Users, Briefcase, FileCode, ShieldCheck, Zap, Target, Rocket, Brain, Award, Clock, Globe, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  benefits: string[];
}

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const features: Feature[] = [
    {
      id: 1,
      icon: <Brain className="w-8 h-8" />,
      title: 'Intelligent Learning System',
      description: 'Adaptive learning platform that personalizes content based on your progress and learning style.',
      color: 'from-orange-500 to-amber-500',
      gradient: 'bg-gradient-to-br from-orange-50 to-amber-50',
      benefits: ['Personalized learning path', 'AI-powered assessments', 'Progress tracking dashboard', 'Adaptive difficulty levels']
    },
    {
      id: 2,
      icon: <Video className="w-8 h-8" />,
      title: 'Live Interactive Sessions',
      description: 'Real-time classes with industry experts, interactive coding sessions, and instant Q&A.',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      benefits: ['Live coding with mentors', 'Instant doubt resolution', 'Peer collaboration', 'Recorded session access']
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: '1:1 Expert Mentorship',
      description: 'Personalized guidance from industry veterans with regular feedback and career counseling.',
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
      benefits: ['Dedicated mentor', 'Weekly progress reviews', 'Career guidance', 'Portfolio building']
    },
    {
      id: 4,
      icon: <FileCode className="w-8 h-8" />,
      title: 'Real-world Projects',
      description: 'Build 10+ industry-relevant projects that solve real business problems and boost your portfolio.',
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
      benefits: ['Industry case studies', 'GitHub portfolio', 'Code reviews', 'Project deployment']
    },
    {
      id: 5,
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Career Acceleration',
      description: 'Comprehensive placement support including resume building, mock interviews, and job referrals.',
      color: 'from-red-500 to-rose-500',
      gradient: 'bg-gradient-to-br from-red-50 to-rose-50',
      benefits: ['Resume building', 'Mock interviews', 'Job referrals', 'Salary negotiation']
    },
    {
      id: 6,
      icon: <Award className="w-8 h-8" />,
      title: 'Vira Certification',
      description: 'Globally recognized certifications that validate your skills and boost employability.',
      color: 'from-indigo-500 to-violet-500',
      gradient: 'bg-gradient-to-br from-indigo-50 to-violet-50',
      benefits: ['Industry recognition', 'Digital badges', 'LinkedIn verification', 'Skill validation']
    },
  ];

  const learningMethods = [
    { icon: <Clock className="w-5 h-5" />, text: 'Flexible Learning Schedule' },
    { icon: <Globe className="w-5 h-5" />, text: 'Lifetime Course Access' },
    { icon: <ShieldCheck className="w-5 h-5" />, text: '100% Placement Support' },
    { icon: <Sparkles className="w-5 h-5" />, text: 'Advanced Learning Tools' },
  ];

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-5 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-5 w-48 h-48 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FF7A1E 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="section-padding relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 backdrop-blur-sm px-6 py-3 rounded-2xl border border-orange-200/50 mb-6">
            <Zap className="w-5 h-5 text-[#FF7A1E]" />
            <span className="text-sm font-semibold text-gray-900">Vira Academy Advantage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Transformative
            </span>{' '}
            <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent">
              Learning Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of tech education with our cutting-edge learning platform, 
            designed to accelerate your career growth and skill development.
          </p>
        </div>

        {/* Learning Methods */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {learningMethods.map((method, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                <div className="text-[#FF7A1E]">
                  {method.icon}
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">{method.text}</span>
            </div>
          ))}
        </div>

        {/* Interactive Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`group p-6 rounded-2xl border transition-all duration-300 text-left ${
                  activeFeature === feature.id
                    ? 'border-[#FF7A1E] bg-gradient-to-br from-white to-orange-50/50 shadow-xl'
                    : 'border-gray-200 hover:border-orange-200 hover:bg-white/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors ${
                      activeFeature === feature.id ? 'text-[#FF7A1E]' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Details Panel */}
          <div className="relative">
            <div className="sticky top-24">
              <div className={`${features[activeFeature - 1].gradient} rounded-3xl p-8 border border-gray-200/50 shadow-xl`}>
                {/* Feature Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${features[activeFeature - 1].color} flex items-center justify-center`}>
                    <div className="text-white">
                      {features[activeFeature - 1].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {features[activeFeature - 1].title}
                    </h3>
                    <p className="text-gray-600">
                      {features[activeFeature - 1].description}
                    </p>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {features[activeFeature - 1].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Success Metrics */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FF7A1E]">95%</div>
                      <div className="text-sm text-gray-600">Student Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FF7A1E]">2.5x</div>
                      <div className="text-sm text-gray-600">Faster Learning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-semibold">Vira vs Traditional</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Why Vira Academy Delivers Better Results
                </h3>
                <p className="text-gray-300 mb-6">
                  Compare our approach with traditional learning methods
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-[#FF7A1E]" />
                    <span>Personalized learning vs One-size-fits-all</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#FF7A1E]" />
                    <span>Industry mentorship vs Academic-only teaching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-[#FF7A1E]" />
                    <span>Real projects vs Theoretical assignments</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-bold mb-4">Success Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Placement Success</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Skill Improvement</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] w-4/5"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Course Completion</span>
                      <span className="font-semibold">94%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] w-[94%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
          </div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Limited Time Offer</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Experience Vira Academy Today
                </h3>
                <p className="text-orange-100 mb-6">
                  Join thousands of successful graduates. Get 20% scholarship on early enrollment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white/20 rounded-lg">
                    <div className="text-sm">Next Batch</div>
                    <div className="font-bold">March 15, 2024</div>
                  </div>
                  <div className="px-4 py-2 bg-white/20 rounded-lg">
                    <div className="text-sm">Scholarship</div>
                    <div className="font-bold">20% Off</div>
                  </div>
                  <div className="px-4 py-2 bg-white/20 rounded-lg">
                    <div className="text-sm">Seats Left</div>
                    <div className="font-bold">24/50</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="group relative flex items-center justify-center gap-3 w-full py-4 bg-white text-[#FF7A1E] font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Apply Now for 20% Off</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Video className="w-5 h-5" />
                  Book Free Demo Class
                </Link>
                <div className="text-center text-sm text-orange-100 pt-2">
                  <span className="font-medium">Need guidance?</span>{' '}
                  <a href="tel:+919876543210" className="underline hover:text-white">
                    Call Vira Counselor: +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Recognized & Trusted
            </h4>
            <p className="text-gray-600">
              Vira Academy is recognized by leading organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 9001 Certified', 'Google for Education', 'Microsoft Partner', 'AWS Educate'].map((badge, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-[#FF7A1E]" />
                <span className="text-sm font-medium text-gray-900">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;