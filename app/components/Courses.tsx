"use client";

import {
  Code2,
  CloudCog,
  Cpu,
  ChevronRight,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Award,
  Briefcase,
  Brain,
} from "lucide-react";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  students: string;
  placementRate: string;
  price: string;
  color: string;
  bgGradient: string;
  features: string[];
  badge?: string;
}

const Courses = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Python Development",
      description:
        "Master Python, Django, FastAPI, and build real-world applications with AI/ML integration.",
      icon: <Code2 className="w-7 h-7" />,
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      students: "1,200+",
      placementRate: "96%",
      price: "₹45,000",
      color: "from-orange-500 to-amber-500",
      bgGradient: "bg-gradient-to-br from-orange-50 to-amber-50",
      features: [
        "Django & FastAPI Framework",
        "REST APIs & Microservices",
        "Database Design & Optimization",
        "AI/ML Fundamentals",
        "Real-time Applications",
        "DevOps Deployment",
      ],
      badge: "Most Popular",
    },
    {
      id: 2,
      title: "DevOps Engineering",
      description:
        "Master CI/CD pipelines, Docker, Kubernetes, AWS Cloud, and infrastructure automation.",
      icon: <CloudCog className="w-7 h-7" />,
      duration: "16 Weeks",
      level: "Intermediate to Advanced",
      students: "850+",
      placementRate: "98%",
      price: "₹55,000",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
      features: [
        "Docker & Containerization",
        "Kubernetes Orchestration",
        "AWS/Azure Cloud Services",
        "CI/CD with Jenkins/GitLab",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
      badge: "High Demand",
    },
    {
      id: 3,
      title: "React & Modern Frontend",
      description:
        "Build interactive UIs with React, Next.js 14, TypeScript, and modern state management.",
      icon: <Cpu className="w-7 h-7" />,
      duration: "10 Weeks",
      level: "Beginner to Advanced",
      students: "1,500+",
      placementRate: "95%",
      price: "₹35,000",
      color: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      features: [
        "React 18 & Next.js 14",
        "TypeScript & Modern JavaScript",
        "State Management",
        "Performance Optimization",
        "Testing & Deployment",
        "UI/UX Best Practices",
      ],
      badge: "Trending",
    },
  ];


  return (
    <section
      id="courses"
      className="relative py-24 bg-gradient-to-b from-white to-gray-50/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF7A1E] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 left-5 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl animate-float"></div>
      <div className="absolute bottom-40 right-5 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl animate-float-delay"></div>

      <div className="section-padding relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-3 rounded-2xl border border-orange-200/50 mb-6">
            <Brain className="w-5 h-5 text-[#FF7A1E]" />
            <span className="text-sm font-semibold text-gray-900">
              Vira Academy Programs
            </span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-[#FF7A1E] text-[#FF7A1E]"
                />
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Industry-Focused
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent">
              Tech Programs
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Accelerate your tech career with Vira Academy's hands-on training
            programs. Learn from industry experts, work on real projects, and
            get guaranteed placement support.
          </p>
        </div>

       

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Badge */}
              {course.badge && (
                <div className="absolute -top-3 right-6 z-10">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white text-sm font-semibold rounded-full shadow-lg">
                    {course.badge}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                {/* Icon & Title */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-6`}
                >
                  {course.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF7A1E] transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {course.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Course Details */}
                <div
                  className={`${course.bgGradient} rounded-2xl p-5 mb-8 border border-gray-100`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4" />
                        Duration
                      </div>
                      <div className="font-bold text-gray-900">
                        {course.duration}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Users className="w-4 h-4" />
                        Students
                      </div>
                      <div className="font-bold text-gray-900">
                        {course.students}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">
                        Placement Rate
                      </div>
                      <div className="font-bold text-green-600">
                        {course.placementRate}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">
                        Program Fee
                      </div>
                      <div className="font-bold text-gray-900">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/courses/${course.id === 1 ? "python" : course.id === 2 ? "devops" : "react"}`}
                  className="group/btn w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-gray-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#FF7A1E]/20 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  Vira Academy Advantage
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Tech Journey at Vira
              </h3>
              <p className="text-orange-100 mb-6">
                Join thousands of successful graduates. Get 20% scholarship on
                early enrollment.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white/20 rounded-lg">
                  <div className="text-sm">Next Batch</div>
                  <div className="font-bold">March 15, 2024</div>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-lg">
                  <div className="text-sm">Seats Available</div>
                  <div className="font-bold">24/50</div>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-lg">
                  <div className="text-sm">Scholarship</div>
                  <div className="font-bold">20% Off</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="/courses"
                className="block w-full py-4 bg-white text-[#FF7A1E] font-semibold rounded-xl text-center hover:bg-orange-50 transition-colors"
              >
                View All Programs
              </Link>
              <Link
                href="/contact"
                className="block w-full py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-center hover:bg-white/10 transition-colors"
              >
                Book Free Career Consultation
              </Link>
              <div className="text-center text-sm text-orange-100 pt-2">
                <span className="font-medium">Need guidance?</span>{" "}
                <a
                  href="tel:+919876543210"
                  className="underline hover:text-white"
                >
                  Call Vira Counselor: +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Vira Academy Students Work At
            </h4>
           
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {["Google", "Amazon", "Microsoft", "TCS", "Infosys", "Wipro"].map(
              (company, idx) => (
                <div
                  key={idx}
                  className="h-16 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:border-[#FF7A1E] transition-colors group"
                >
                  <div className="text-xl font-bold text-gray-700 group-hover:text-[#FF7A1E] transition-colors">
                    {company}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
