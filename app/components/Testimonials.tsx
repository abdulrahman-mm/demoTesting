'use client';

import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Python Developer at Google',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      content: 'The Python course transformed my career. From basics to advanced topics, everything was covered with real-world projects.',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      role: 'DevOps Engineer at Amazon',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
      content: 'Excellent DevOps training! The hands-on labs with AWS and Kubernetes prepared me perfectly for my current role.',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      role: 'Frontend Lead at Microsoft',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
      content: 'React course was comprehensive. Learned modern hooks, state management, and Next.js which I use daily at work.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 gradient-bg">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Student <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni who transformed their careers with our programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-orange-100" />
            
            <div className="flex flex-col items-center text-center mb-8">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full border-4 border-orange-100 mb-4"
              />
              <div className="flex mb-3">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <h3 className="text-xl font-bold mb-1">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-primary font-medium">
                {testimonials[activeIndex].role}
              </p>
            </div>
            
            <p className="text-lg text-gray-700 text-center italic">
              "{testimonials[activeIndex].content}"
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl transition-all ${
                index === activeIndex
                  ? 'bg-white shadow-xl border-2 border-primary'
                  : 'bg-orange-50 border border-orange-100'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;