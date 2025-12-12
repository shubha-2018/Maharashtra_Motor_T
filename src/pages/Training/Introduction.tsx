import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Menu, X, Phone, Mail, MapPin, Calendar, Users, BookOpen, 
  Award, Trophy, Star, CheckCircle, TrendingUp, Radio, 
  Building, Home, Heart, Activity, GraduationCap 
} from 'lucide-react';

const PoliceTrainingWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomePage />;
      case 'introduction':
        return <IntroductionPage />;
      case 'courses':
        return <CoursesPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Maharashtra Police Communication & IT Training Centre
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Apex Training Institute for Police Communication and IT in Maharashtra
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActiveSection('introduction')}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Learn More
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition border-2 border-white"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">1967</div>
              <div className="text-gray-600 mt-2">Established</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">14,372</div>
              <div className="text-gray-600 mt-2">Trained Personnel</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">150</div>
              <div className="text-gray-600 mt-2">Training Capacity</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Trophy className="w-12 h-12 text-amber-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">National</div>
              <div className="text-gray-600 mt-2">Award Winner</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Apex Institute</h3>
              <p className="text-gray-600">Declared as the Apex Training Institute by Government of Maharashtra in 2023</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Training</h3>
              <p className="text-gray-600">19 technical trainers with modern labs and digital classrooms</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">Training in AI, IoT, Cyber Security, and latest communication systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Award Highlight */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <Trophy className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">National Award Winner</h2>
          <p className="text-xl mb-2">Union Home Minister's Trophy 2020-21</p>
          <p className="text-lg">Best Police Training Institution (Non-Gazetted Officers)</p>
        </div>
      </div>
    </div>
  );

  // Introduction Page Component
  const IntroductionPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Introduction</h1>
          <p className="text-xl text-blue-100">Maharashtra Police Communication and Information Technology Training Centre, Pune</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Main Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About the Centre</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Established in 1967, the Maharashtra Police Communication and Information Technology Training Centre, Pune, stands as the State's premier institution dedicated to enhancing the technical capabilities of the Maharashtra Police Communication and IT Department. As the only specialized training centre for technical cadres within the department, the institute plays a vital role in strengthening the communication and IT infrastructure of the Maharashtra Police.
            </p>
            <p>
              The Training Centre was inaugurated by Shri D. S. Desai, the then Hon'ble Home Minister of Maharashtra, marking the beginning of a legacy focused on excellence, innovation, and professional development. Over the years, the institute has consistently upgraded its facilities, curriculum, and training methodologies to meet the evolving technological needs of modern policing.
            </p>
            <p>
              Today, the Police Communication & I.T. Training Centre offers a wide range of training programmes covering wireless communication, networking, system maintenance, and emerging communication systems. With a team of experienced instructors, modern laboratories, advanced digital classrooms, and hands-on practical modules, the institute ensures that personnel are equipped with the skills required to support efficient, secure, and technology-driven police operations.
            </p>
            <p>
              Committed to fostering continuous learning, technical expertise, and operational readiness, the Maharashtra Police Communication and Information Technology Training Centre remains a cornerstone in building a more responsive, digitally empowered, and future-ready police force.
            </p>
          </div>
        </div>

        {/* Apex Institute Recognition */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start">
            <Award className="w-12 h-12 text-amber-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Apex Training Institute</h3>
              <p className="text-gray-700 leading-relaxed">
                As per Government Resolution No. Police-181/Pra.Kra-54/Pol-5A dated 16th January 2023, the Government of Maharashtra has declared this Centre as the <strong>Apex Training Institute for Police Communication and IT training</strong> in the state.
              </p>
            </div>
          </div>
        </div>

        {/* Training Capacity & Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3" />
            Training Capacity & Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <Users className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">Authorized Capacity</h4>
              <p className="text-3xl font-bold text-blue-600">150</p>
              <p className="text-gray-600 text-sm">trainees</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <Trophy className="w-10 h-10 text-green-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">Maximum at Once</h4>
              <p className="text-3xl font-bold text-green-600">225</p>
              <p className="text-gray-600 text-sm">trainees</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <Award className="w-10 h-10 text-purple-600 mb-3" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">Total Trained</h4>
              <p className="text-3xl font-bold text-purple-600">14,372</p>
              <p className="text-gray-600 text-sm">personnel (1967–2024)</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Training Cadres:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'DySP / ACP (Direct Recruits)',
                'Police Sub-Inspectors',
                'Radio Mechanics (ASI)',
                'Wireless Operators (HC)',
                'Electricians (HC)',
                'Workshop Hands (PC)'
              ].map((cadre, idx) => (
                <div key={idx} className="flex items-center bg-gray-50 rounded p-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{cadre}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Modules */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 mr-3" />
            Training Modules
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Foundation Course</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Police Communication & IT (Theory and Practical)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Physical Training (PT), Drill, Parade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Indoor and Outdoor Training</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Courses</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Digital Mobile Radio (DMR) Tier II & III',
                  'Radio Trunking Systems',
                  'Surveillance Systems',
                  'Cyber Security & Social Media Intelligence',
                  'Artificial Intelligence (AI) & Internet of Things (IoT)',
                  '4G LTE & Software Defined Radio (SDR)',
                  'Office Administration',
                  'Motivational & Stress Management Workshops'
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center bg-blue-50 rounded p-3">
                    <Radio className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">In-Service Training</h3>
              <p className="text-gray-700 mb-3">Tailored training courses for serving officers and staff:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Police Basic Cipher Courses (for Wireless Operators)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Refresher Courses (4-week duration) for Radio Mechanics (ASI), Electricians (HC), and Wireless Operators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <Building className="w-8 h-8 mr-3" />
            Staffing & Infrastructure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Staff</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Technical Trainers</p>
                    <p className="text-2xl font-bold text-blue-600">19</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Plus ministerial staff and support personnel</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hostel Facilities</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Home className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Jijau Hostel</p>
                    <p className="text-sm text-gray-600">12 Rooms, Capacity: 48</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Sayhadri Hostel</p>
                    <p className="text-sm text-gray-600">17 Rooms, Capacity: 136</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Sanchar Guest House</p>
                    <p className="text-sm text-gray-600">27 Suites, Capacity: 60 (For Trainers & Guests)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Projects */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <Phone className="w-8 h-8 mr-3" />
            Major Projects
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Dial 112 Project Training</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Conducted for PSI, API, and PI rank officers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Covered operational procedures and hands-on system usage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Trained personnel from 110 Districts and Commissionerates across Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Community Initiatives */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <Heart className="w-8 h-8 mr-3" />
            Community Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <Heart className="w-10 h-10 text-red-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blood Donation Camps</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Held regularly with government hospitals</li>
                <li>• Notable camps in 2020–21 & 2022–23</li>
                <li>• <strong>65 units collected</strong></li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <Activity className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Hygiene</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Free medical camps for staff, cadets, and families</li>
                <li>• Lectures on personal hygiene</li>
                <li>• Healthy eating awareness programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prestigious Recognitions */}
        <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 rounded-lg shadow-xl p-8 border-2 border-amber-400">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Trophy className="w-10 h-10 mr-3 text-amber-600" />
            Prestigious Recognitions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <Award className="w-12 h-12 text-amber-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">National Level Award (2020-21)</h3>
                  <p className="text-lg font-semibold text-amber-700 mb-3">Union Home Minister's Trophy</p>
                  <p className="text-gray-700 mb-2">
                    Best Police Training Institution (Non-Gazetted Officers) with a cash reward of <strong>₹20,00,000/-</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Award conferred during the 52nd Foundation Day Ceremony of BPR&D on 9th September 2022 at New Delhi. 
                    Received by Addl. DGP, the then Director of the Academy, from Hon. Ajay Kumar Bhalla, Union Home Secretary.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <Star className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Zonal Level Award (2018-19)</h3>
                  <p className="text-lg font-semibold text-blue-700 mb-3">Union Home Minister's Trophy (Western Zone)</p>
                  <p className="text-gray-700">
                    Best Police Training Institution in the same category with a cash prize of <strong>₹2,00,000/-</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-lg p-6 mt-6">
              <p className="text-lg leading-relaxed">
                Since 2016, the centre has successfully trained over <strong className="text-yellow-300">4,000 officers and men</strong> in Communication, IT, and advanced technologies, cementing its position as Maharashtra's premier technical training institution.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Programs */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Recent Programs</h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-600">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cohesion Course for Senior Technical Officers</h3>
            <div className="flex flex-wrap items-center gap-4 text-gray-700">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                <span><strong>Duration:</strong> 20/11/2025 to 03/12/2025</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-600 mr-2" />
                <span><strong>Participants:</strong> 20 Officers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-lg shadow-xl p-8 mt-8">
          <p className="text-xl leading-relaxed text-center">
            The Maharashtra Police Communication and Information Technology Training Centre, Pune, stands as a pillar of technical excellence in police training, evolving with the rapid changes in technology while maintaining high standards of physical and moral discipline. With a focus on capacity building, modernization, and community involvement, the Centre continues to play a critical role in shaping the future of Maharashtra Police's technical force.
          </p>
        </div>
      </div>
    </div>
  );

  // Courses Page Component
  const CoursesPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Courses</h1>
          <p className="text-xl text-blue-100">Comprehensive training programs for technical excellence</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Course Cards */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Foundation Course</h3>
            <p className="text-gray-600 mb-4">Comprehensive basic training covering all fundamental aspects of police communication and IT systems.</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>Theory & Practical Training</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>Physical Training & Drill</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <Radio className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Advanced Technology</h3>
            <p className="text-gray-600 mb-4">Specialized training in cutting-edge communication technologies and systems.</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>AI & IoT</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>Cyber Security</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <Award className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Wireless Systems</h3>
            <p className="text-gray-600 mb-4">Expert training in modern wireless communication systems and radio technologies.</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>DMR Tier II & III</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>Radio Trunking</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <Users className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Refresher Courses</h3>
            <p className="text-gray-600 mb-4">Regular skill updates and enhancement programs for serving personnel.</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>4-Week Programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                <span>All Technical Cadres</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Admissions Page Component
  const AdmissionsPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-green-100">Join India's premier police technical training institute</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
          <div className="space-y-4 text-gray-700">
            <p>The training centre accepts candidates from various technical cadres within the Maharashtra Police:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <span>DySP / ACP (Direct Recruits)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <span>Police Sub-Inspectors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <span>Radio Mechanics (ASI)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <span>Wireless Operators (HC)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <span>Electricians (HC)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <span>Workshop Hands (PC)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
          <div className="space-y-4 text-gray-700">
            <p>Candidates are nominated by their respective departments for training programs at the centre.</p>
            <p>For more information about admissions and upcoming batches, please contact us.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Gallery Page Component
  const GalleryPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-purple-100">Glimpses of training and achievements</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <Award className="w-20 h-20 text-white opacity-50" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">Training Session {item}</h3>
                <p className="text-gray-600 text-sm">Professional development program</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Contact Page Component
  const ContactPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-100">Get in touch with us</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">Maharashtra Police Communication & IT Training Centre<br />Pune, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91-XXX-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@mptraining.gov.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Award className="w-10 h-10" />
              <div>
                <h1 className="text-2xl font-bold">Maharashtra Police</h1>
                <p className="text-sm text-blue-200">Communication & IT Training Centre</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              <button onClick={() => setActiveSection('home')} className={`px-4 py-2 rounded transition ${activeSection === 'home' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Home</button>
              <button onClick={() => setActiveSection('introduction')} className={`px-4 py-2 rounded transition ${activeSection === 'introduction' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Introduction</button>
              <button onClick={() => setActiveSection('courses')} className={`px-4 py-2 rounded transition ${activeSection === 'courses' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Courses</button>
              <button onClick={() => setActiveSection('admissions')} className={`px-4 py-2 rounded transition ${activeSection === 'admissions' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Admissions</button>
              <button onClick={() => setActiveSection('gallery')} className={`px-4 py-2 rounded transition ${activeSection === 'gallery' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Gallery</button>
              <button onClick={() => setActiveSection('contact')} className={`px-4 py-2 rounded transition ${activeSection === 'contact' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2">
              <button onClick={() => { setActiveSection('home'); setMobileMenuOpen(false); }} className={`block w-full text-left px-4 py-2 rounded ${activeSection === 'home' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Home</button>
              <button onClick={() => { setActiveSection('introduction'); setMobileMenuOpen(false); }} className={`block w-full text-left px-4 py-2 rounded ${activeSection === 'introduction' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Introduction</button>
              <button onClick={() => { setActiveSection('courses'); setMobileMenuOpen(false); }} className={`block w-full text-left px-4 py-2 rounded ${activeSection === 'courses' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Courses</button>
              <button onClick={() => { setActiveSection('admissions'); setMobileMenuOpen(false); }} className={`block w-full text-left px-4 py-2 rounded ${activeSection === 'admissions' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Admissions</button>
              <button onClick={() => { setActiveSection('gallery'); setMobileMenuOpen(false); }} className={`block w-full text-left px-4 py-2 rounded ${activeSection === 'gallery' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Gallery</button>
              <button onClick={() => { setActiveSection('contact'); setMobileMenuOpen(false); }} className={`block w-full text-left px-4 py-2 rounded ${activeSection === 'contact' ? 'bg-white text-blue-900' : 'hover:bg-blue-800'}`}>Contact</button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('home')} className="hover:text-blue-400 transition">Home</button></li>
                <li><button onClick={() => setActiveSection('introduction')} className="hover:text-blue-400 transition">Introduction</button></li>
                <li><button onClick={() => setActiveSection('courses')} className="hover:text-blue-400 transition">Courses</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="hover:text-blue-400 transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-start"><MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" /> Pune, Maharashtra</p>
                <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +91-XXX-XXX-XXXX</p>
                <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> info@mptraining.gov.in</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p className="text-gray-300">Apex Training Institute for Police Communication and IT in Maharashtra since 1967.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Maharashtra Police Communication & IT Training Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoliceTrainingWebsite;