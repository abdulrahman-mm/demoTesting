import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '#courses' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '#contact' },
    
  ];

  const courses = [
    { label: 'Python Development', href: '/courses/python' },
    { label: 'DevOps Engineering', href: '/courses/devops' },
    { label: 'React Development', href: '/courses/react' },
  
  ];

  return (
    <footer id="contact" className="bg-dark text-white pt-12 pb-8">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="font-poppins text-xl font-bold">
                Code<span className="text-primary">Masters</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of tech professionals with industry-relevant skills and practical knowledge.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <Link
                    href={course.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-400">Tech Park, Sector 62, Noida, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">hello@codemasters.institute</span>
              </div>
            </div>

            <div className="mt-8 bg-gray-800 rounded-xl p-4">
              <h4 className="font-bold mb-2">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-3">Get updates on new courses and offers</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                <button className="btn px-4 py-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vira Academy. All rights reserved. | 
            <Link href="/privacy" className="hover:text-primary ml-2">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-primary ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;