import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 px-6 py-12 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-40 w-96 h-96 bg-violet-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-40 w-[32rem] h-[32rem] bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back to Home Button */}
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="flex items-center text-gray-900 hover:bg-gray-200 transition-all duration-300 rounded-xl px-4 py-2 shadow-md hover:shadow-gray-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          Contact Us
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 text-center mb-10">
          Reach us via phone, email, or visit our office
        </h2>

        {/* Contact Details Card */}
        <Card className="bg-white/30 border border-gray-200 backdrop-blur-md shadow-lg rounded-3xl hover:shadow-blue-400/20 transition-all duration-500">
          <CardContent className="p-10 space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-blue-500">Office Address</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Police Communication and Information Technology Department <br />
                  Maharashtra State Pune <br />
                  Dr. Homi Bhabha Road, Chavannagar <br />
                  Pune – 411008, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Telephone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-green-500">Telephone</h3>
                <p className="text-gray-800 text-lg leading-relaxed">020-25652505</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-purple-500">Email</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  dir.polwireless.pune@mahapolice.gov.in
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Section Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Find Us on Map
        </h2>

        {/* Embedded Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Maharashtra Police IT Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.251042550248!2d73.84777751507805!3d18.520430683199236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0921aeb4c7f%3A0x6f203f27b4c8b5f!2sMaharashtra%20Police%20Headquarters%2C%20Pune!5e0!3m2!1sen!2sin!4v1694999999999!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
