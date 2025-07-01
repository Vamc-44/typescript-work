
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Newspaper , Mail, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Half */}
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-portfolio-text-light text-lg">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Vamshidhar Reddy Ankenapalle
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold portfolio-text-gradient">
                  Full-Stack Python Developer
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Seasoned Full Stack Developer with 8+ years of experience designing, developing, and maintaining scalable web applications and secure backend systems across diverse domains including healthcare, retail, and enterprise platforms. Proficient in Python (Django, Flask) ecosystems, with hands-on expertise in building RESTful APIs, cloud-native platforms, and dynamic frontends using React, Angular, and Redux.
             </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="mailto:vamshidharr2457@gmail.com">
                <Button size="lg" className="portfolio-gradient text-white hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
                </Button>
                </a>

                <a href="/VamshidharReddy.docx" download>
                <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download CV
                </Button>
                </a>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/vamshidhar44"
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:vamshidharr2457@gmail.com"
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://medium.com/@vamshidharr2457"
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Newspaper  className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Half */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 portfolio-gradient rounded-2xl transform rotate-6"></div>
              <div className="relative bg-background rounded-2xl p-2 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/Me.jpeg"
                  alt="Vamshidhar Reddy Ankenapalle - Full-Stack Python Developer"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
