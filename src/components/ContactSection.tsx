
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/xovwweoq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === "success") {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error("Failed to submit message", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 portfolio-gradient rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">vamshidharr2457.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 portfolio-gradient rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (832) 859-2356</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 portfolio-gradient rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">United States</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Input
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full"
    />
    <Input
      name="email"
      type="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full"
    />
  </div>

  <Input
    name="subject"
    placeholder="Subject"
    value={formData.subject}
    onChange={handleChange}
    required
    className="w-full"
  />

  <Textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
    rows={6}
    className="w-full resize-none"
  />

  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full portfolio-gradient text-white hover:opacity-90 transition-opacity"
    size="lg"
  >
    <Send className="w-4 h-4 mr-2" />
    {isSubmitting ? "Sending..." : "Send Message"}
  </Button>

  {success && <p className="text-green-600 text-center pt-2">Message sent successfully!</p>}
</form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
