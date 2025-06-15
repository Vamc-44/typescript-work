
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Backend',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Django', level: 90 },
        { name: 'FastAPI', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'JavaScript', level: 85 },
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Linux', level: 85 },
        { name: 'Redis', level: 75 },
        { name: 'Nginx', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build robust, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.category} className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="portfolio-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
