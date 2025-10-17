import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const courses = [
  {
    id: 1,
    title: 'Гитара',
    icon: 'Music',
    emoji: '🎸',
    description: 'Научитесь играть любимые композиции под руководством опытных преподавателей. Освойте аккорды, ритм и технику игры.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Укулеле',
    icon: 'Music2',
    emoji: '🎶',
    description: 'Маленький инструмент с большим звучанием! Идеален для начинающих и для создания весёлого настроения.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 3,
    title: 'Электрогитара',
    icon: 'Radio',
    emoji: '🎹',
    description: 'Погрузитесь в мир рока и блюза. Научитесь играть соло и аккомпанемент, изучите чистый и перегруженный звук.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Синтезатор',
    icon: 'Piano',
    emoji: '🎹',
    description: 'Откройте безграничные возможности электроники. Научитесь создавать и комбинировать разные звуки и стили.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Сценическая речь',
    icon: 'Mic',
    emoji: '🎤',
    description: 'Научитесь уверенно говорить на публике, уделяя внимание интонации, тембру и выразительности.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 6,
    title: 'Актерское мастерство',
    icon: 'Drama',
    emoji: '🎭',
    description: 'Погрузитесь в мир театра! Освойте современные техники актерского мастерства, развивайте память и креативность.',
    color: 'from-violet-500 to-purple-500'
  }
];

const schedule = [
  { day: 'Понедельник', time: '16:00 - 20:00', courses: 'Гитара, Синтезатор' },
  { day: 'Вторник', time: '16:00 - 20:00', courses: 'Укулеле, Актерское мастерство' },
  { day: 'Среда', time: '16:00 - 20:00', courses: 'Электрогитара, Сценическая речь' },
  { day: 'Четверг', time: '16:00 - 20:00', courses: 'Гитара, Синтезатор' },
  { day: 'Пятница', time: '16:00 - 20:00', courses: 'Все направления' },
  { day: 'Суббота', time: '10:00 - 18:00', courses: 'Все направления' }
];

const prices = [
  { title: 'Пробное занятие', price: 'Бесплатно', description: 'Познакомьтесь со студией и выберите направление' },
  { title: 'Разовое занятие', price: '800 ₽', description: '60 минут индивидуального занятия' },
  { title: 'Абонемент 4 занятия', price: '2800 ₽', description: 'Выгода 400 ₽ • Срок действия 1 месяц' },
  { title: 'Абонемент 8 занятий', price: '5200 ₽', description: 'Выгода 1200 ₽ • Срок действия 2 месяца' }
];

const reviews = [
  {
    name: 'Анна Петрова',
    course: 'Гитара',
    text: 'Прекрасная студия! За 3 месяца научилась играть свои любимые песни. Преподаватели очень внимательные и терпеливые.',
    rating: 5
  },
  {
    name: 'Дмитрий Смирнов',
    course: 'Актерское мастерство',
    text: 'Занятия помогли мне раскрепоститься и обрести уверенность. Отличная атмосфера и профессиональный подход!',
    rating: 5
  },
  {
    name: 'Елена Иванова',
    course: 'Синтезатор',
    text: 'Дочка в восторге! Занимается уже полгода, прогресс заметен. Спасибо преподавателям за индивидуальный подход!',
    rating: 5
  }
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎨</span>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Фантазия
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#courses" className="hover:text-primary transition-colors">Направления</a>
              <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Откройте мир музыки <br />и искусства! 🎶
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Студия творчества для всех возрастов. Развивайте свои таланты с профессиональными преподавателями
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Пробное занятие бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 918 035 21 39
              </Button>
            </div>
          </div>
          <div className="mt-16 flex justify-center gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary">6</div>
              <div className="text-muted-foreground">Направлений</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-secondary">200+</div>
              <div className="text-muted-foreground">Учеников</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent">5</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши направления 🎭
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите то, что вам по душе
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl mb-4 animate-float`}>
                    {course.emoji}
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Расписание занятий 📅
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Мы работаем для вас каждый день
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {schedule.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.day.slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.day}</h3>
                      <p className="text-primary font-semibold mb-2">{item.time}</p>
                      <p className="text-sm text-muted-foreground">{item.courses}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Цены на занятия 💎
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выгодные абонементы для постоянных учеников
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${index === 2 ? 'border-primary border-2' : ''}`}
              >
                <CardHeader>
                  {index === 2 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                      Популярно
                    </div>
                  )}
                  <CardTitle className="text-xl mb-2">{price.title}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {price.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{price.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Отзывы учеников ⭐
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят наши студенты
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.course}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь с нами 📞
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Запишитесь на пробное занятие
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">ул. Душистая 43</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 918 035 21 39</p>
                    <p className="text-sm text-muted-foreground">Сергей</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Сайт</h3>
                    <a href="http://fantaziastudio.ru" className="text-primary hover:underline">
                      fantaziastudio.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Форма записи</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Ваш телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение (направление, удобное время)" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🎨</span>
            <h3 className="text-3xl font-bold">Фантазия</h3>
          </div>
          <p className="text-purple-200 mb-6">
            Студия творчества для всех возрастов
          </p>
          <p className="text-purple-300 text-sm">
            © 2024 Студия творчества "Фантазия". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
