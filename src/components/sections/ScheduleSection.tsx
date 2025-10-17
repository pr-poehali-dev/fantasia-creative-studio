import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const schedule = [
  { day: 'Понедельник', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Вторник', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Среда', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Четверг', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Пятница', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Суббота', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Воскресенье', time: '9:00 - 20:00', courses: 'Все направления' }
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Расписание занятий
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Мы работаем каждый день для вашего удобства
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {schedule.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Calendar" className="text-primary" size={20} />
                  <h3 className="font-semibold text-lg">{item.day}</h3>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground mb-1">
                  <Icon name="Clock" size={16} />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon name="Music" size={16} />
                  <span>{item.courses}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
