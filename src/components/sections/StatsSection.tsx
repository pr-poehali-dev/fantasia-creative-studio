import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

const stats = [
  { icon: 'Users', label: 'Учеников', value: 500, suffix: '+' },
  { icon: 'Award', label: 'Лет опыта', value: 10, suffix: '' },
  { icon: 'Music', label: 'Курсов', value: 6, suffix: '' },
  { icon: 'Star', label: 'Средний рейтинг', value: 4.9, suffix: '/5' }
];

export default function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = current;
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats-section" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Наши достижения
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Цифры, которыми мы гордимся
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={stat.icon} className="text-primary" size={32} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value === 4.9 
                    ? counters[index].toFixed(1) 
                    : Math.floor(counters[index])}
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
