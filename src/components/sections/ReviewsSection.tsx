import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Отзывы наших учеников
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Нам доверяют сотни учеников
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="GraduationCap" size={14} />
                  <span>{review.course}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
