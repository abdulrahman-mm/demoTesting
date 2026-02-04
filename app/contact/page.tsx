'use client';

import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    'Python Development',
    'DevOps Engineering', 
    'React Development',
    'Data Science',
    'Full Stack Development',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: 'Phone', details: ['+91 98765 43210', '+91 12345 67890'], color: 'bg-blue-50 text-blue-600' },
    { icon: <Mail className="w-6 h-6" />, title: 'Email', details: ['hello@codemasters.institute', 'admissions@codemasters.institute'], color: 'bg-orange-50 text-[#FF7A1E]' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Address', details: ['Tech Park, Sector 62', 'Noida, Uttar Pradesh 201309', 'India'], color: 'bg-green-50 text-green-600' },
    { icon: <Clock className="w-6 h-6" />, title: 'Office Hours', details: ['Monday - Friday: 9 AM - 7 PM', 'Saturday: 10 AM - 4 PM', 'Sunday: Closed'], color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-[#FF7A1E]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Have questions about our courses? Ready to start your tech journey? 
              Our admissions team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-[#FF7A1E]" />
                  <h2 className="text-2xl md:text-3xl font-bold">Send us a message</h2>
                </div>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-600">
                      Thank you for contacting us. Our admissions team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A1E] focus:border-transparent"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A1E] focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A1E] focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Course Interest</label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A1E] focus:border-transparent"
                        >
                          <option value="">Select a course</option>
                          {courses.map((course) => (
                            <option key={course} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A1E] focus:border-transparent"
                        placeholder="Tell us about your goals and questions..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                    
                    <p className="text-gray-500 text-sm text-center">
                      We'll respond within 24 hours. For immediate assistance, call us at +91 98765 43210
                    </p>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quick Links */}
              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/courses" className="text-[#FF7A1E] hover:text-[#E06A1A] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF7A1E]"></span>
                      View All Courses
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-[#FF7A1E] hover:text-[#E06A1A] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF7A1E]"></span>
                      About Our Institute
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-[#FF7A1E] hover:text-[#E06A1A] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF7A1E]"></span>
                      FAQ & Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/admissions" className="text-[#FF7A1E] hover:text-[#E06A1A] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF7A1E]"></span>
                      Admission Process
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 gradient-bg">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-[#FF7A1E]">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about admissions, courses, and more
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What are the prerequisites for your courses?',
                answer: 'Most courses require basic computer knowledge. For advanced courses, we recommend some programming experience. Check individual course pages for specific prerequisites.'
              },
              {
                question: 'Do you offer placement assistance?',
                answer: 'Yes, we provide 100% placement assistance with resume building, mock interviews, and direct connections to our hiring partners.'
              },
              {
                question: 'Can I pay in installments?',
                answer: 'Yes, we offer flexible payment options including EMI and installment plans. Contact our admissions team for details.'
              },
              {
                question: 'Are your certificates recognized?',
                answer: 'Yes, our certificates are industry-recognized and accepted by top companies worldwide.'
              },
              {
                question: 'Do you offer online classes?',
                answer: 'We offer both online and offline classes with flexible schedules to accommodate working professionals.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Still have questions? <a href="mailto:support@codemasters.institute" className="text-[#FF7A1E] font-medium">Email our support team</a>
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Visit Our <span className="text-[#FF7A1E]">Campus</span>
          </h2>
          
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="h-64 md:h-96 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#FF7A1E] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">CodeMasters Institute</h3>
                <p className="text-gray-600">Tech Park, Sector 62, Noida</p>
                <p className="text-gray-600">Uttar Pradesh 201309, India</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF7A1E]">Parking</div>
                <p className="text-gray-600">Ample parking available</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF7A1E]">Metro</div>
                <p className="text-gray-600">5 mins from Sector 62 Metro Station</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF7A1E]">Accessibility</div>
                <p className="text-gray-600">Wheelchair accessible campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}