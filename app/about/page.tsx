import { Users, Target, Award, Globe, Clock, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission',
      description: 'To empower individuals with practical tech skills that transform careers and drive innovation.',
      color: 'bg-orange-100 text-[#FF7A1E]'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Commitment to delivering industry-leading education with the highest quality standards.',
      color: 'bg-orange-100 text-[#FF7A1E]'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building a supportive network of learners, mentors, and industry professionals.',
      color: 'bg-orange-100 text-[#FF7A1E]'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Continuously updating curriculum to match evolving industry trends and technologies.',
      color: 'bg-orange-100 text-[#FF7A1E]'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Started with Python programming courses' },
    { year: '2021', title: 'Expansion', description: 'Added DevOps and React development programs' },
    { year: '2022', title: 'Growth', description: 'Trained 1000+ students across India' },
    { year: '2023', title: 'Recognition', description: 'Awarded "Best Tech Institute 2023"' },
    { year: '2024', title: 'Global Reach', description: 'Started online international batches' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[#FF7A1E]">CodeMasters</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We are a premier software training institute dedicated to bridging the gap between 
              academic knowledge and industry requirements through practical, hands-on learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn">
                Join Our Community
              </Link>
              <Link href="#courses" className="btn-secondary">
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-[#FF7A1E]">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020 by a group of industry professionals, CodeMasters Institute was born 
                  from a simple observation: there's a significant gap between what traditional education 
                  provides and what the tech industry actually needs.
                </p>
                <p>
                  We started with just one Python programming course, taught in a small classroom with 
                  12 students. Today, we've grown into a comprehensive training institute offering 
                  specialized programs in Python, DevOps, and React development.
                </p>
                <p>
                  Our success lies in our commitment to practical, project-based learning. Every course 
                  is designed with input from industry experts, ensuring our graduates are job-ready 
                  from day one.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <div className="text-3xl font-bold text-[#FF7A1E] mb-2">5000+</div>
                      <div className="text-gray-700">Students Trained</div>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <div className="text-3xl font-bold text-[#FF7A1E] mb-2">50+</div>
                      <div className="text-gray-700">Expert Trainers</div>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <div className="text-3xl font-bold text-[#FF7A1E] mb-2">98%</div>
                      <div className="text-gray-700">Placement Rate</div>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <div className="text-3xl font-bold text-[#FF7A1E] mb-2">1200+</div>
                      <div className="text-gray-700">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-orange-50/30">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#FF7A1E]">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at CodeMasters Institute
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-orange-100">
                <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#FF7A1E]">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FF7A1E] to-[#FF9A3E] hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF7A1E] rounded-full border-4 border-white hidden md:block"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                    <div className="text-2xl font-bold text-[#FF7A1E] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-[#FF7A1E]">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry veterans with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                AK
              </div>
              <h3 className="text-xl font-bold mb-2">Arjun Kapoor</h3>
              <p className="text-[#FF7A1E] font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">Ex-Google, 15+ years in software development</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                PS
              </div>
              <h3 className="text-xl font-bold mb-2">Priya Sharma</h3>
              <p className="text-[#FF7A1E] font-medium mb-2">Head of Training</p>
              <p className="text-gray-600 text-sm">Ex-Amazon, DevOps Specialist</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                RV
              </div>
              <h3 className="text-xl font-bold mb-2">Rahul Verma</h3>
              <p className="text-[#FF7A1E] font-medium mb-2">Lead Instructor</p>
              <p className="text-gray-600 text-sm">Full Stack Developer, React Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white">
        <div className="section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who chose CodeMasters for their tech education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#FF7A1E] btn hover:bg-orange-50">
              Enroll Now
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Book Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}