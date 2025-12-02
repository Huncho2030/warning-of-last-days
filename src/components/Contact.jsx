import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to plan
            your visit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={5} />
                  </div>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644221967423-151b418d9659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2glMjBidWlsZGluZ3xlbnwxfHx8fDE3NjIwMjA0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Church building"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-blue-900" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    P.O. Box 12345-00100
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-900" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900">Phone</h3>
                  <p className="text-gray-600">+254 705 982 280</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-900" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900">Email</h3>
                  <p className="text-gray-600">info@warningoflastdays.org</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-blue-900" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Thursday: 8:00 AM - 5:00 PM
                    <br />
                    Friday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
