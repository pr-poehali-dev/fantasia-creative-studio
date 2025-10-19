import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const prices = [
  { title: 'Первое занятие', price: 'Бесплатно', description: 'Познакомьтесь со студией и выберите направление', icon: 'Gift' },
  { title: 'Занятие 45 минут', price: '600 ₽', description: 'Индивидуальное занятие', icon: 'Clock' },
  { title: 'Занятие 1 час', price: '700 ₽', description: 'Индивидуальное занятие', icon: 'Clock3' },
  { title: 'Занятие 1 час 30 минут', price: '800 ₽', description: 'Индивидуальное занятие', icon: 'Clock4' },
  { title: 'Абонемент на 8 занятий по 45 минут', price: '3800 ₽', description: 'Выгода 1000 ₽', icon: 'Ticket', savings: 1000, oldPrice: 4800 },
  { title: 'Абонемент на 8 занятий по часу', price: '4600 ₽', description: 'Выгода 1000 ₽', icon: 'Ticket', savings: 1000, oldPrice: 5600 },
  { title: 'Абонемент на 8 занятий по полтора часа', price: '5400 ₽', description: 'Выгода 1000 ₽', icon: 'Ticket', savings: 1000, oldPrice: 6400 }
];

export default function PricesSection() {
  return (
    <section id="prices" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Цены на занятия
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Выберите подходящий для вас вариант
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {prices.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  <span>{item.title}</span>
                  <Icon name={item.icon} className="text-primary" size={20} />
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {item.oldPrice && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg text-muted-foreground line-through">{item.oldPrice} ₽</span>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                      Экономия {item.savings} ₽
                    </span>
                  </div>
                )}
                <div className="text-3xl font-bold text-primary mb-4">{item.price}</div>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  onClick={() => {
                    const contact = document.getElementById('contact');
                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}