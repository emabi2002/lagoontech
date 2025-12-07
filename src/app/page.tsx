"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import homeContent from "../../content/home.json";
import servicesData from "../../content/services.json";
import aboutData from "../../content/about.json";
import settingsData from "../../content/settings.json";

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Destructure content from JSON files
  const { heroTitle, heroSubtitle, heroButtonText, heroButtonLink } = homeContent;
  const services = servicesData.items || [];
  const { headline, body } = aboutData;
  const { email, phone, address } = settingsData;

  return (
    <div className="min-h-screen bg-gray-50" onClick={closeDropdown}>
      {/* Navigation */}
      <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* Replaced placeholder with real logo */}
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Lagoon Technologies PNG Logo"
                  width={50}
                  height={50}
                  priority
                  className="rounded-full border border-green-200 shadow-sm"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">LAGOON</div>
                <div className="text-sm text-green-600 font-semibold">TECHNOLOGIES PNG</div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                onClick={closeDropdown}
              >
                Home
              </a>

              {/* About Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => handleDropdownToggle('about')}
                  className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1 font-medium"
                >
                  About
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2">
                    <a href="/about#company" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Our Company</a>
                    <a href="/about#team" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Our Team</a>
                    <a href="/about#mission" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Mission & Vision</a>
                    <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Company Overview</a>
                    <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Industry Coverage</a>
                    <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Global Network</a>
                    <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Our Specialization</a>
                    <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Why Choose Us</a>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => handleDropdownToggle('services')}
                  className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1 font-medium"
                >
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2">
                    <a href="#web-design" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Website Design and Development</a>
                    <a href="#mobile-dev" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Mobile Application Development</a>
                    <a href="#hosting" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Web Hosting Services</a>
                    <a href="#marketing" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Digital Marketing Services</a>
                    <a href="#cloud-computing" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Cloud Computing Solutions</a>
                    <a href="#cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Cybersecurity Solutions</a>
                    <a href="#ai-ml" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">AI/ML Development</a>
                    <a href="#data-analytics" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Data Analytics</a>
                    <a href="#system-integration" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">System Integration</a>
                    <a href="#it-consulting" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">IT Consulting</a>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => handleDropdownToggle('products')}
                  className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1 font-medium"
                >
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white border rounded-lg shadow-lg py-2">
                    <a
                      href="https://rpngc.netlify.app/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      RPNGC - Digital Policing Operations System
                    </a>
                    <a
                      href="https://pngcybercime.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      ALEMS - Advanced Law Enforcement Cybercrime Management System
                    </a>
                    <a
                      href="https://pngdigital.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      National Goverrnment Portal System
                    </a>
                    <a
                      href="https://pngcsc.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      PNG Cybersecurity Resource Hub
                    </a>
                    <a
                      href="https://immunization.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      PNG Child Immunization System
                    </a>
                    <a
                      href="https://connectpng.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      PNG Connect Road Management System
                    </a>
                    <a
                      href="https://studentservices-seven.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      University Student Services System
                    </a>
                    <a
                      href="https://dashing-cendol-75e0c0.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      PNG Electoral Voting System
                    </a>
                    <hr className="my-2 border-gray-200" />
                    <a href="#erp" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Enterprise ERP Solutions</a>
                    <a href="#crm" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Custom CRM Systems</a>
                    <a href="#bi" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Business Intelligence Tools</a>
                    <a href="#lms" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Learning Management Systems</a>
                    <a href="#inventory" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Inventory Management Systems</a>
                    <a href="#financial" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">Financial Management Software</a>
                  </div>
                )}
              </div>

              {/* Blog */}
              <a
                href="#blog"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                onClick={closeDropdown}
              >
                Blog
              </a>

              {/* Contact Us */}
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                onClick={closeDropdown}
              >
                Contact Us
              </a>

              {/* CTA Button */}
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold">
                Schedule A Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-10 right-10 w-96 h-96 bg-green-200 rounded-full opacity-20"></div>
          <div className="absolute top-32 right-32 w-64 h-64 bg-green-300 rounded-full opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-500 text-white mb-4">AI Platform Development Company</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {heroTitle}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold">
                  <a href={heroButtonLink}>{heroButtonText}</a>
                </Button>
                <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Technology Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">System Performance</span>
                    <span className="text-green-600 font-semibold">98.9%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Active Projects</span>
                    <span className="text-blue-600 font-semibold">24</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">AI Models Deployed</span>
                    <span className="text-purple-600 font-semibold">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Our Company</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {headline}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {body}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission is to empower Papua New Guinean businesses and institutions to achieve operational excellence, digital resilience, and sustainable growth through world-class technology solutions. We are committed to local capacity building, knowledge transfer, and fostering the next generation of ICT professionals in PNG.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">100% locally owned and operated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Access to world-class expertise and advanced technology stacks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Proven track record across multiple sectors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Dedicated to long-term partnerships and measurable value</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Specialization</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-gray-900">Cloud Computing & Infrastructure</h5>
                  <p className="text-sm text-gray-600">Robust cloud environments for efficient, secure, flexible operations</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-gray-900">IT Consulting & Digital Strategy</h5>
                  <p className="text-sm text-gray-600">End-to-end digital transformation guidance and implementation</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-gray-900">Custom Software Development</h5>
                  <p className="text-sm text-gray-600">Tailored ERP systems, mobile apps, and integrated solutions</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-semibold text-gray-900">Business Process Automation</h5>
                  <p className="text-sm text-gray-600">Streamlined operations through intelligent automation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Coverage */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Industry Coverage</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Mining, Oil & Gas", icon: "⛏️" },
                { name: "Construction & Engineering", icon: "🏗️" },
                { name: "Agriculture & Agribusiness", icon: "🌾" },
                { name: "Banking & Financial Services", icon: "🏦" },
                { name: "Automotive & Manufacturing", icon: "🏭" },
                { name: "Educational Institutions & Public Sector", icon: "🎓" }
              ].map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h4 className="font-semibold text-gray-900">{industry.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Global Expertise */}
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Expertise, Local Ownership</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                While our roots are firmly embedded in Papua New Guinea, Lagoon Technologies is supported by an international network of highly skilled developers and technical specialists based in the UAE, India, and Sri Lanka.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">PNG</span>
                </div>
                <p className="font-semibold text-gray-900">Port Moresby</p>
                <p className="text-sm text-gray-600">Headquarters</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">UAE</span>
                </div>
                <p className="font-semibold text-gray-900">Dubai</p>
                <p className="text-sm text-gray-600">Technical Hub</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">IND</span>
                </div>
                <p className="font-semibold text-gray-900">India</p>
                <p className="text-sm text-gray-600">Development Center</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">LKA</span>
                </div>
                <p className="font-semibold text-gray-900">Sri Lanka</p>
                <p className="text-sm text-gray-600">Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cloud computing and IT consulting to custom software development and business process automation,
              we deliver cutting-edge solutions that drive digital transformation across Papua New Guinea.
            </p>
          </div>

          {/* CMS-Managed Services */}
          {services.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Featured Services</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-green-500">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌐",
                title: "Website Design & Development",
                description: "Modern, responsive websites built with cutting-edge technologies",
                color: "green"
              },
              {
                icon: "📱",
                title: "Mobile Application Development",
                description: "Native and cross-platform mobile apps for iOS and Android",
                color: "blue"
              },
              {
                icon: "☁️",
                title: "Web Hosting Services",
                description: "Reliable, scalable cloud hosting solutions with 99.9% uptime",
                color: "purple"
              },
              {
                icon: "📈",
                title: "Digital Marketing Services",
                description: "Data-driven marketing strategies to grow your online presence",
                color: "orange"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{service.description}</CardDescription>
                  <Button
                    className={`w-full mt-4 bg-${service.color}-500 hover:bg-${service.color}-600 text-white`}
                    size="sm"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Our Products</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Live Government & Enterprise Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly serving Papua New Guinea with robust, scalable digital platforms
              that streamline operations and improve citizen services.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: "RPNGC Digital Policing System",
                description: "Comprehensive law enforcement management platform",
                url: "https://policemanagementsystem.vercel.app/",
                category: "Law Enforcement",
                status: "Live"
              },
              {
                name: "ALEMS - Advanced Law Enforcement",
                description: "Cybercrime investigation and management system",
                url: "https://cybercrime-3h6o.vercel.app/dashboard",
                category: "Cybersecurity",
                status: "Live"
              },
              {
                name: "PNG Child Immunization System",
                description: "National health tracking and vaccination management",
                url: "https://immunization.vercel.app/",
                category: "Healthcare",
                status: "Live"
              },
              {
                name: "PNG Connect Program",
                description: "Infrastructure and connectivity management platform",
                url: "https://connectpng.netlify.app/",
                category: "Infrastructure",
                status: "Live"
              },
              {
                name: "University Student Services",
                description: "Academic management and student portal system",
                url: "https://studentservices-seven.vercel.app/",
                category: "Education",
                status: "Live"
              },
              {
                name: "PNG Electoral Voting System",
                description: "Democratic election management platform",
                url: "https://dashing-cendol-75e0c0.netlify.app/",
                category: "Government",
                status: "Live"
              },
              {
                name: "Corex Enterprise Resource Planning (ERP) System",
                description: "Comprehensive business management and resource planning platform",
                url: "#contact",
                category: "Enterprise",
                status: "Live"
              },
              {
                name: "Trackoon GPS Fleet Management System",
                description: "Real-time vehicle tracking and fleet optimization solution",
                url: "#contact",
                category: "Transportation",
                status: "Live"
              },
              {
                name: "Maze Human Resources System",
                description: "Complete HR management and employee portal system",
                url: "#contact",
                category: "Human Resources",
                status: "Live"
              },
              {
                name: "Document Management System",
                description: "Digital document storage and workflow management platform",
                url: "#contact",
                category: "Enterprise",
                status: "Live"
              }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-100 text-green-700">{product.category}</Badge>
                    <Badge className="bg-green-500 text-white">{product.status}</Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => window.open(product.url, '_blank')}
                  >
                    View System
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Technology Stack</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Modern Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, secure, and efficient solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Node.js", icon: "🟢" },
              { name: "Python", icon: "🐍" },
              { name: "AI/ML", icon: "🤖" },
              { name: "Cloud", icon: "☁️" },
              { name: "Docker", icon: "🐳" },
              { name: "Database", icon: "🗄️" },
              { name: "Security", icon: "🔐" },
              { name: "Analytics", icon: "📊" },
              { name: "Mobile", icon: "📱" },
              { name: "Blockchain", icon: "⛓️" }
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 hover:bg-green-50 rounded-lg transition-colors">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium text-gray-700">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join leading organizations across Papua New Guinea who trust Lagoon Technologies
            to deliver innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Our Blog</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Insights & Digital Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, digital transformation insights, and innovation stories from Papua New Guinea's leading tech company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation in PNG Government: A Case Study",
                excerpt: "How LAGOON Technologies PNG is revolutionizing public service delivery through innovative digital solutions and AI-powered systems.",
                category: "Government Tech",
                date: "December 15, 2024",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
                author: "Emanuel Mabi"
              },
              {
                title: "The Future of Healthcare Technology in the Pacific Region",
                excerpt: "Exploring how modern healthcare systems and digital health platforms are transforming patient care across Papua New Guinea.",
                category: "Healthcare Tech",
                date: "December 10, 2024",
                readTime: "7 min read",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
                author: "LAGOON Tech Team"
              },
              {
                title: "AI and Machine Learning: Opportunities for PNG Businesses",
                excerpt: "Understanding how artificial intelligence and machine learning can drive business growth and operational efficiency in Papua New Guinea.",
                category: "AI & Innovation",
                date: "December 5, 2024",
                readTime: "6 min read",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
                author: "Emanuel Mabi"
              },
              {
                title: "Cybersecurity Best Practices for PNG Organizations",
                excerpt: "Essential cybersecurity strategies and practices that every organization in Papua New Guinea should implement to protect their digital assets.",
                category: "Cybersecurity",
                date: "November 28, 2024",
                readTime: "8 min read",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
                author: "LAGOON Security Team"
              },
              {
                title: "Cloud Computing Solutions for Pacific Island Nations",
                excerpt: "How cloud technology is enabling scalable, efficient, and cost-effective IT infrastructure for businesses across the Pacific region.",
                category: "Cloud Technology",
                date: "November 20, 2024",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
                author: "LAGOON Tech Team"
              },
              {
                title: "Building Papua New Guinea's Digital Economy",
                excerpt: "Insights into how technology infrastructure and digital innovation are shaping PNG's economic future and creating new opportunities.",
                category: "Digital Economy",
                date: "November 15, 2024",
                readTime: "9 min read",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
                author: "Emanuel Mabi"
              }
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{post.author.charAt(0)}</span>
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {/* Replaced footer placeholder with real logo */}
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Lagoon Technologies PNG Logo"
                    width={40}
                    height={40}
                    className="rounded-full border border-green-500/40"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold">LAGOON</div>
                  <div className="text-sm text-green-400">TECHNOLOGIES PNG</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                A 100% Papua New Guinean-owned technology company empowering businesses with world-class software engineering and IT solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Web Development</a></li>
                <li><a href="#" className="hover:text-green-400">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-green-400">AI Solutions</a></li>
                <li><a href="#" className="hover:text-green-400">Cloud Hosting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Government Systems</a></li>
                <li><a href="#" className="hover:text-green-400">Healthcare Platforms</a></li>
                <li><a href="#" className="hover:text-green-400">Education Tools</a></li>
                <li><a href="#" className="hover:text-green-400">Enterprise Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{address}</li>
                <li>{email}</li>
                <li>{phone}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lagoon Technologies (PNG) Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
