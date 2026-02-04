// // 'use client';

// // import { ArrowRight, Code2, CloudCog, Cpu, Sparkles, Users, Award, Clock } from 'lucide-react';
// // import Link from 'next/link';

// // const Hero = () => {
// //   const floatingElements = [
// //     { icon: <Sparkles className="w-6 h-6" />, color: 'bg-gradient-to-br from-primary to-secondary', animation: 'animate-float', top: '10%', right: '5%' },
// //     { icon: <Users className="w-6 h-6" />, color: 'bg-gradient-to-br from-secondary to-accent', animation: 'animate-float-delay', top: '70%', right: '15%' },
// //     { icon: <Award className="w-6 h-6" />, color: 'bg-gradient-to-br from-accent to-orange-300', animation: 'animate-float-delay-2', top: '30%', right: '90%' },
// //   ];

// //   return (
// //     <section className="relative overflow-hidden gradient-bg pt-20 md:pt-28 pb-16 md:pb-24">
// //       {/* Background Pattern */}
// //       <div className="absolute inset-0 opacity-5">
// //         <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
// //         <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
// //       </div>

// //       <div className="section-padding relative z-10">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Hero Content */}
// //           <div>
// //             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 mb-6">
// //               <Sparkles className="w-4 h-4 text-primary" />
// //               <span className="text-sm font-medium text-dark">Trending Tech Institute 2024</span>
// //             </div>

// //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
// //               Master{' '}
// //               <span className="text-gradient">Python, DevOps</span>{' '}
// //               & React Development
// //             </h1>
            
// //             <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
// //               Launch your tech career with industry-focused training. Learn from experts, 
// //               work on real projects, and get placement assistance in top companies.
// //             </p>
            
// //             <div className="flex flex-col sm:flex-row gap-4 mb-10">
// //               <Link href="#courses" className="btn group flex items-center justify-center gap-3 text-lg">
// //                 Explore Courses 
// //                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //               </Link>
// //               <Link href="#contact" className="btn-secondary flex items-center justify-center gap-2">
// //                 <Clock className="w-5 h-5" />
// //                 Book Free Demo
// //               </Link>
// //             </div>

// //             {/* Stats Preview */}
// //             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-orange-100">
// //               <div className="text-center">
// //                 <div className="text-2xl md:text-3xl font-bold text-primary">5,000+</div>
// //                 <div className="text-gray-600 text-sm">Students Trained</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
// //                 <div className="text-gray-600 text-sm">Placement Rate</div>
// //               </div>
// //               <div className="text-center col-span-2 md:col-span-1">
// //                 <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
// //                 <div className="text-gray-600 text-sm">Expert Trainers</div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Hero Visual */}
// //           <div className="relative">
// //             <div className="relative bg-gradient-to-br from-white to-orange-50 rounded-3xl p-1 shadow-2xl">
// //               <div className="bg-white rounded-2xl p-8">
// //                 <div className="flex items-center gap-3 mb-8">
// //                   <div className="flex gap-2">
// //                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
// //                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
// //                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
// //                   </div>
// //                   <div className="text-sm font-mono text-gray-500 ml-auto">codemasters-terminal</div>
// //                 </div>
                
// //                 <div className="space-y-4">
// //                   <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
// //                     <Code2 className="w-8 h-8 text-primary" />
// //                     <div>
// //                       <div className="font-semibold">Python Development</div>
// //                       <div className="text-sm text-gray-600">Full Stack & AI/ML</div>
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
// //                     <CloudCog className="w-8 h-8 text-primary" />
// //                     <div>
// //                       <div className="font-semibold">DevOps Engineering</div>
// //                       <div className="text-sm text-gray-600">Cloud & Automation</div>
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
// //                     <Cpu className="w-8 h-8 text-primary" />
// //                     <div>
// //                       <div className="font-semibold">React Development</div>
// //                       <div className="text-sm text-gray-600">Modern Frontend</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Floating Elements */}
// //             {floatingElements.map((element, index) => (
// //               <div
// //                 key={index}
// //                 className={`absolute w-14 h-14 ${element.color} rounded-2xl flex items-center justify-center text-white shadow-xl ${element.animation}`}
// //                 style={{ top: element.top, right: element.right }}
// //               >
// //                 {element.icon}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;




// 'use client';

// import { ArrowRight, Sparkles, Users, Award, ChevronRight, PlayCircle, Star, TrendingUp, CheckCircle, Code2, CloudCog, Cpu } from 'lucide-react';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// // Define types for course tabs
// type CourseTab = 'python' | 'devops' | 'react';

// interface CourseStats {
//   students: string;
//   placement: string;
//   projects: string;
// }

// interface CourseStatsMap {
//   python: CourseStats;
//   devops: CourseStats;
//   react: CourseStats;
// }

// interface TabItem {
//   id: CourseTab;
//   label: string;
//   color: string;
//   bgColor: string;
// }

// const Hero = () => {
//   const [activeTab, setActiveTab] = useState<CourseTab>('python');

//   const tabs: TabItem[] = [
//     { id: 'python', label: 'Python', color: 'text-orange-600', bgColor: 'bg-orange-100' },
//     { id: 'devops', label: 'DevOps', color: 'text-blue-600', bgColor: 'bg-blue-100' },
//     { id: 'react', label: 'React', color: 'text-purple-600', bgColor: 'bg-purple-100' },
//   ];

//   const courseStats: CourseStatsMap = {
//     python: { students: '1,200+', placement: '96%', projects: '15+' },
//     devops: { students: '850+', placement: '98%', projects: '12+' },
//     react: { students: '1,500+', placement: '95%', projects: '20+' },
//   };

//   // Get active course stats safely
//   const activeStats = courseStats[activeTab];

//   // Get course title based on active tab
//   const getCourseTitle = () => {
//     switch (activeTab) {
//       case 'python': return 'Python Full Stack';
//       case 'devops': return 'DevOps Engineering';
//       case 'react': return 'React Development';
//       default: return 'Python Full Stack';
//     }
//   };

//   // Get course description based on active tab
//   const getCourseDescription = () => {
//     switch (activeTab) {
//       case 'python': return 'Master Django, FastAPI, AI/ML & real-world projects';
//       case 'devops': return 'Docker, Kubernetes, AWS Cloud & automation';
//       case 'react': return 'Modern React, Next.js, TypeScript & state management';
//       default: return 'Master Django, FastAPI, AI/ML & real-world projects';
//     }
//   };

//   // Get course price based on active tab
//   const getCoursePrice = () => {
//     switch (activeTab) {
//       case 'python': return '₹45,000';
//       case 'devops': return '₹55,000';
//       case 'react': return '₹35,000';
//       default: return '₹45,000';
//     }
//   };

//   // Get course duration based on active tab
//   const getCourseDuration = () => {
//     switch (activeTab) {
//       case 'python': return '12 Weeks';
//       case 'devops': return '16 Weeks';
//       case 'react': return '10 Weeks';
//       default: return '12 Weeks';
//     }
//   };

//   // Get course icon based on active tab
//   const getCourseIcon = () => {
//     switch (activeTab) {
//       case 'python': return <Sparkles className="w-6 h-6 text-white" />;
//       case 'devops': return <TrendingUp className="w-6 h-6 text-white" />;
//       case 'react': return <Star className="w-6 h-6 text-white" />;
//       default: return <Sparkles className="w-6 h-6 text-white" />;
//     }
//   };

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-orange-50/30 pt-32 pb-24 md:pt-40 md:pb-32">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-50/20 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       {/* Animated Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `linear-gradient(to right, #FF7A1E 1px, transparent 1px),
//                            linear-gradient(to bottom, #FF7A1E 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       <div className="section-padding relative z-10">
//         <div className="max-w-7xl mx-auto">
//           {/* Hero Content */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               {/* Badge */}
//               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 backdrop-blur-sm px-5 py-3 rounded-2xl border border-orange-200/50 shadow-sm">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center">
//                   <TrendingUp className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-sm font-semibold text-gray-900">#1 Rated Tech Institute</div>
//                   <div className="text-xs text-gray-600">98% Student Satisfaction</div>
//                 </div>
//               </div>

//               {/* Main Heading */}
//               <div className="space-y-6">
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                   <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                     Launch Your
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-[#FF7A1E] via-[#FF9A3E] to-[#FF7A1E] bg-clip-text text-transparent animate-gradient">
//                     Tech Career
//                   </span>
//                 </h1>
                
//                 <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
//                   Master in-demand skills with industry-led training in Python, DevOps, and React. 
//                   Get job-ready with real projects, expert mentorship, and guaranteed placements.
//                 </p>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Link 
//                   href="/courses" 
//                   className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-1"
//                 >
//                   <span className="relative z-10">Explore Courses</span>
//                   <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A3E] to-[#FF7A1E] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
//                 </Link>
                
//                 <div className="flex items-center gap-4">
//                   <Link 
//                     href="/contact" 
//                     className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-2xl hover:bg-orange-50 transition-all duration-300"
//                   >
//                     <PlayCircle className="w-5 h-5" />
//                     Free Demo
//                   </Link>
//                   <div className="hidden sm:flex items-center gap-2">
//                     <div className="flex -space-x-3">
//                       {[1,2,3,4].map((i) => (
//                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300"></div>
//                       ))}
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       <span className="font-semibold text-gray-900">500+</span> joined this week
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Features */}
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
//                 {[
//                   { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: '100% Placement' },
//                   { icon: <Users className="w-5 h-5 text-blue-500" />, text: '1:1 Mentorship' },
//                   { icon: <Award className="w-5 h-5 text-[#FF7A1E]" />, text: 'Industry Certifications' },
//                 ].map((feature, idx) => (
//                   <div key={idx} className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
//                       {feature.icon}
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">{feature.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Side - Interactive Card */}
//             <div className="relative">
//               {/* Main Card */}
//               <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                 {/* Card Header */}
//                 <div className="px-6 pt-6">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center gap-3">
//                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
//                       <span className="text-sm font-medium text-gray-500 ml-2">Live Dashboard</span>
//                     </div>
                   
//                   </div>

//                   {/* Course Selector */}
//                   <div className="flex gap-2 mb-8">
//                     {tabs.map((tab) => (
//                       <button
//                         key={tab.id}
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
//                           activeTab === tab.id
//                             ? `${tab.bgColor} ${tab.color} shadow-sm`
//                             : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
//                         }`}
//                       >
//                         {tab.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Course Content */}
//                 <div className="px-6 pb-6">
//                   <div className="space-y-4">
//                     {/* Course Card */}
//                     <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/50">
//                       <div className="flex items-start gap-4">
//                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center">
//                           {getCourseIcon()}
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="font-bold text-lg text-gray-900 mb-2">
//                             {getCourseTitle()}
//                           </h3>
//                           <p className="text-gray-600 text-sm mb-4">
//                             {getCourseDescription()}
//                           </p>
//                           <div className="flex items-center justify-between text-sm">
//                             <span className="font-semibold text-gray-900">
//                               {getCoursePrice()}
//                             </span>
//                             <span className="text-gray-500">
//                               {getCourseDuration()}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-3 gap-3">
//                       {Object.entries(activeStats).map(([key, value]) => (
//                         <div key={key} className="text-center p-3 bg-white rounded-xl border border-gray-100">
//                           <div className="text-xl font-bold text-gray-900">{value}</div>
//                           <div className="text-xs text-gray-500 capitalize">{key}</div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Next Batch Info */}
//                     <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <div className="text-sm font-medium text-gray-900">Next Batch Starts</div>
//                           <div className="text-xs text-gray-600">Limited seats available</div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-sm font-bold text-[#FF7A1E]">March 15, 2024</div>
//                           <div className="text-xs text-gray-600">Enroll before Mar 10</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card Footer */}
//                 <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50">
//                   <Link 
//                     href={`/contact?course=${activeTab}`}
//                     className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
//                   >
//                     Enroll Now
//                     <ChevronRight className="w-4 h-4" />
//                   </Link>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-2xl flex items-center justify-center text-white shadow-2xl animate-float">
//                 <div className="text-center p-4">
//                   <div className="text-2xl font-bold">98%</div>
//                   <div className="text-xs font-medium">Placement</div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white shadow-2xl animate-float-delay">
//                 <div className="text-center p-4">
//                   <Users className="w-8 h-8 mx-auto mb-1" />
//                   <div className="text-xs font-medium">5K+ Alumni</div>
//                 </div>
//               </div>

//               {/* Trust Badge */}
//               <div className="absolute -bottom-8 right-8 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-200">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
//                     <CheckCircle className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <div className="text-sm font-semibold text-gray-900">Verified Institute</div>
//                     <div className="text-xs text-gray-600">ISO Certified</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Trusted By */}
//           <div className="mt-24 pt-12 border-t border-gray-200/50">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium">
//                 <span className="w-20 h-px bg-gray-300"></span>
//                 Trusted by students from
//                 <span className="w-20 h-px bg-gray-300"></span>
//               </div>
//             </div>
//             <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-80">
//               {['Google', 'Amazon', 'Microsoft', 'TCS', 'Infosys', 'Wipro'].map((company, idx) => (
//                 <div key={idx} className="text-center group">
//                   <div className="h-14 flex items-center justify-center">
//                     <div className="text-xl font-bold text-gray-800 group-hover:text-[#FF7A1E] transition-colors duration-300">
//                       {company}
//                     </div>
//                   </div>
//                   <div className="text-xs text-gray-500 mt-2">Partner Company</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


'use client';

import { ArrowRight, Sparkles, Users, Award, ChevronRight, PlayCircle, Star, TrendingUp, CheckCircle, Brain, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type CourseTab = 'python' | 'devops' | 'react';

interface CourseStats {
  students: string;
  placement: string;
  projects: string;
}

interface CourseStatsMap {
  python: CourseStats;
  devops: CourseStats;
  react: CourseStats;
}

interface TabItem {
  id: CourseTab;
  label: string;
  color: string;
  bgColor: string;
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState<CourseTab>('python');

  const tabs: TabItem[] = [
    { id: 'python', label: 'Python', color: 'text-orange-600', bgColor: 'bg-orange-100' },
    { id: 'devops', label: 'DevOps', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { id: 'react', label: 'React', color: 'text-purple-600', bgColor: 'bg-purple-100' },
  ];

  const courseStats: CourseStatsMap = {
    python: { students: '1,200+', placement: '96%', projects: '15+' },
    devops: { students: '850+', placement: '98%', projects: '12+' },
    react: { students: '1,500+', placement: '95%', projects: '20+' },
  };

  const activeStats = courseStats[activeTab];

  const getCourseTitle = () => {
    switch (activeTab) {
      case 'python': return 'Python Full Stack Development';
      case 'devops': return 'DevOps Engineering';
      case 'react': return 'React Development';
      default: return 'Python Full Stack Development';
    }
  };

  const getCourseDescription = () => {
    switch (activeTab) {
      case 'python': return 'Master Django, FastAPI, AI/ML & real-world projects';
      case 'devops': return 'Docker, Kubernetes, AWS Cloud & automation';
      case 'react': return 'Modern React, Next.js, TypeScript & state management';
      default: return 'Master Django, FastAPI, AI/ML & real-world projects';
    }
  };

  const getCoursePrice = () => {
    switch (activeTab) {
      case 'python': return '₹45,000';
      case 'devops': return '₹55,000';
      case 'react': return '₹35,000';
      default: return '₹45,000';
    }
  };

  const getCourseDuration = () => {
    switch (activeTab) {
      case 'python': return '12 Weeks';
      case 'devops': return '16 Weeks';
      case 'react': return '10 Weeks';
      default: return '12 Weeks';
    }
  };

  const getCourseIcon = () => {
    switch (activeTab) {
      case 'python': return <Sparkles className="w-6 h-6 text-white" />;
      case 'devops': return <TrendingUp className="w-6 h-6 text-white" />;
      case 'react': return <Star className="w-6 h-6 text-white" />;
      default: return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-orange-50/30 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-50/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 backdrop-blur-sm px-5 py-3 rounded-2xl border border-orange-200/50 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Vira Academy Excellence</div>
                  <div className="text-xs text-gray-600">98% Student Success Rate</div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl  font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Accelerate Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF7A1E] via-[#FF9A3E] to-[#FF7A1E] bg-clip-text text-transparent animate-gradient">
                    Tech Career
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Transform your career with industry-focused training at Vira Academy. 
                  Master Python, DevOps, and React with hands-on projects, expert mentorship, 
                  and guaranteed placement support.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/courses" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="relative z-10">Explore Programs</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A3E] to-[#FF7A1E] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                </Link>
                
                <div className="flex items-center gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-2xl hover:bg-orange-50 transition-all duration-300"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Free Career Session
                  </Link>
                  {/* <div className="max-sm:hidden sm:flex items-center gap-2">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300"></div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">500+</span> joined this week
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                {[
                  { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: '100% Placement Support' },
                  { icon: <Users className="w-5 h-5 text-blue-500" />, text: '1:1 Industry Mentorship' },
                  { icon: <Award className="w-5 h-5 text-[#FF7A1E]" />, text: 'Vira Academy Certification' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Interactive Card */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="px-6 pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="text-sm font-medium text-gray-500 ml-2">Vira Academy Dashboard</span>
                    </div>
                    <div className="text-xs font-semibold px-3 py-1 bg-orange-100 text-[#FF7A1E] rounded-full">
                      Live Programs
                    </div>
                  </div>

                  {/* Course Selector */}
                  <div className="flex gap-2 mb-8">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          activeTab === tab.id
                            ? `${tab.bgColor} ${tab.color} shadow-sm`
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Course Content */}
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {/* Course Card */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center">
                          {getCourseIcon()}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 mb-2">
                            {getCourseTitle()}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {getCourseDescription()}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-gray-900">
                              {getCoursePrice()}
                            </span>
                            <span className="text-gray-500">
                              {getCourseDuration()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-white rounded-xl border border-gray-100">
                        <div className="text-xl font-bold text-gray-900">{activeStats.students}</div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-xl border border-gray-100">
                        <div className="text-xl font-bold text-gray-900">{activeStats.placement}</div>
                        <div className="text-xs text-gray-500">Placement</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-xl border border-gray-100">
                        <div className="text-xl font-bold text-gray-900">{activeStats.projects}</div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                    </div>

                    {/* Next Batch Info */}
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-900">Next Batch Starts</div>
                          <div className="text-xs text-gray-600">Limited seats available</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-[#FF7A1E]">March 15, 2024</div>
                          <div className="text-xs text-gray-600">Enroll before Mar 10</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50">
                  <Link 
                    href={`/contact?course=${activeTab}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Learning at Vira
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-2xl flex items-center justify-center text-white shadow-2xl animate-float">
                <div className="text-center p-4">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs font-medium">Success Rate</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white shadow-2xl animate-float-delay">
                <div className="text-center p-4">
                  <Zap className="w-8 h-8 mx-auto mb-1" />
                  <div className="text-xs font-medium">5K+ Alumni</div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-8 right-8 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Vira Academy</div>
                    <div className="text-xs text-gray-600">ISO 9001 Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="mt-24 pt-12 border-t border-gray-200/50">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium">
                <span className="w-20 h-px bg-gray-300"></span>
                Trusted by students from
                <span className="w-20 h-px bg-gray-300"></span>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-80">
              {['Google', 'Amazon', 'Microsoft', 'TCS', 'Infosys', 'Wipro'].map((company, idx) => (
                <div key={idx} className="text-center group">
                  <div className="h-14 flex items-center justify-center">
                    <div className="text-xl font-bold text-gray-800 group-hover:text-[#FF7A1E] transition-colors duration-300">
                      {company}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Placement Partner</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;