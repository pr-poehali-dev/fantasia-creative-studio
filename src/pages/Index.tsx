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
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/e19f7bb7-f6df-4d4b-8d48-27fbe6d49b93.jpg',
    description: 'Научитесь играть любимые композиции под руководством опытных преподавателей. Освойте аккорды, ритм и технику игры.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Укулеле',
    icon: 'Music2',
    emoji: '🎶',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/7d757fdc-9175-4a8c-b19f-510d6e1a9cad.jpg',
    description: 'Маленький инструмент с большим звучанием! Идеален для начинающих и для создания весёлого настроения.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 3,
    title: 'Электрогитара',
    icon: 'Radio',
    emoji: '🎹',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/bd5cd844-7f5b-4f36-bfce-7d72f79c2896.jpg',
    description: 'Погрузитесь в мир рока и блюза. Научитесь играть соло и аккомпанемент, изучите чистый и перегруженный звук.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Синтезатор',
    icon: 'Piano',
    emoji: '🎹',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/afe7e5b6-3097-4f94-8b33-80e8edd50c13.jpg',
    description: 'Откройте безграничные возможности электроники. Научитесь создавать и комбинировать разные звуки и стили.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Сценическая речь',
    icon: 'Mic',
    emoji: '🎤',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/8ed767ef-9dfd-4919-88a1-f1260858af1e.jpg',
    description: 'Научитесь уверенно говорить на публике, уделяя внимание интонации, тембру и выразительности.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 6,
    title: 'Актерское мастерство',
    icon: 'Drama',
    emoji: '🎭',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/9659286b-b246-4766-8cc8-e464af63770c.jpg',
    description: 'Погрузитесь в мир театра! Освойте современные техники актерского мастерства, развивайте память и креативность.',
    color: 'from-violet-500 to-purple-500'
  }
];

const schedule = [
  { day: 'Понедельник', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Вторник', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Среда', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Четверг', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Пятница', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Суббота', time: '9:00 - 20:00', courses: 'Все направления' },
  { day: 'Воскресенье', time: '9:00 - 20:00', courses: 'Все направления' }
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Фантазия
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#courses" className="hover:text-primary transition-colors">Направления</a>
              <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
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
              <div className="text-4xl font-bold text-secondary">800+</div>
              <div className="text-muted-foreground">Учеников</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent">20+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши направления
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите то, что вам по душе
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-xl flex-shrink-0`}>
                          {course.emoji}
                        </div>
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <CardDescription className="text-base mb-4">
                        {course.description}
                      </CardDescription>
                      <Button className={`bg-gradient-to-r ${course.color} hover:opacity-90 w-full sm:w-auto`}>
                        <Icon name="Calendar" className="mr-2" size={18} />
                        Записаться
                      </Button>
                    </CardContent>
                  </div>
                </div>
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наша студия 📸
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Посмотрите, где проходят занятия
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/3c98c03e-2aa6-4e71-a6db-d0639e31312f.jpg"
                alt="Интерьер студии"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Интерьер студии</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/706addf8-d6a4-4d44-b31f-cd91bb145800.jpg"
                alt="Урок гитары"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Урок гитары</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/65828b31-fe1c-4fe2-a2e4-468c39adecea.jpg"
                alt="Актёрское мастерство"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Актёрское мастерство</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/adcfe097-6632-4217-a3ca-7a3a68c6e704.jpg"
                alt="Занятия на синтезаторе"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Занятия на синтезаторе</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/535d8b83-2f33-48ed-876d-b501f17aa613.jpg"
                alt="Вокальная студия"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Вокальная студия</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square group">
              <img 
                src="https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/ff294951-2b36-42ef-9ad2-77b0a3d5876e.jpg"
                alt="Музыкальные инструменты"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Музыкальные инструменты</p>
              </div>
            </div>
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

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/79180352139"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Написать в WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Напишите нам!
        </span>
      </a>

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