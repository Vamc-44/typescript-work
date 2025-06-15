
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Python Full Stack Developer ',
      company: 'Evernorth',
      location: 'Dallas, TX',
      period: 'July 2023 - Present'/* ,
      description: 'Lead development of scalable web applications using Django and FastAPI. Mentor junior developers and architect cloud-native solutions on AWS.',
      achievements: [
        'Improved application performance by 40% through optimization',
        'Led a team of 5 developers on critical projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ] */ 
    },
    {
      title: 'Full-Stack Developer',
      company: 'First Databank, Inc. (FDB)',
      location: 'San Francisco, CA',
      period: 'Feb 2021 - June 2023'/* ,
      location: 'Remote',
      period: '2020 - 2022'/* ,
      description: 'Developed and maintained multiple web applications using Python, Django, and React. Worked closely with product teams to deliver features.',
      achievements: [
        'Built 3 production applications from scratch',
        'Integrated third-party APIs and payment systems',
        'Reduced server costs by 30% through optimization'
      ] */
    },
    {
      title: 'Full Stack Developer',
      company: 'Casey’s General Store',
      location: 'Ankeny, IA',
      period: 'Jan 2020 - Feb 2021'/* ,
      description: 'Designed and implemented backend services for retail applications. Focused on data processing and integration with existing systems.',
      location: 'New York, NY',
      period: '2018 - 2020'/* ,
      description: 'Developed backend services and APIs for various client projects. Focused on data processing and automation solutions.',
      achievements: [
        'Automated manual processes saving 20 hours/week',
        'Developed data processing pipelines handling 1M+ records',
        'Maintained 99.9% uptime for critical applications'
      ] */
    },
    {
      title: 'Python Software Engineer',
      company: 'Equinix',
      location: 'Frisco, TX',
      period: 'July 2018 - Jan 2020'},

    {
      title: 'Software Developer Intern',
      company: 'Gigstar ',
      location: 'Delhi, IN',
      period: 'June 2017 - July 2018'}
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-accent hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={experience.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 md:ml-16">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-portfolio-accent font-medium mb-2">
                            {experience.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {/* {experience.description} */}
                      </p>
                      
                      {/* <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start">
                              <span className="text-portfolio-accent mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div> */}
                    </CardContent>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-background hidden md:block" style={{ top: `${index * 200 + 40}px` }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
