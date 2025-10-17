import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Анна Петрова',
    course: 'Гитара',
    text: 'Прекрасная студия! За 3 месяца научилась играть свои любимые песни. Преподаватели очень внимательные и терпеливые.',
    rating: 5,
    photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg'
  },
  {
    name: 'Дмитрий Смирнов',
    course: 'Актерское мастерство',
    text: 'Занятия помогли мне раскрепоститься и обрести уверенность. Отличная атмосфера и профессиональный подход!',
    rating: 5,
    photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg'
  },
  {
    name: 'Елена Иванова',
    course: 'Синтезатор',
    text: 'Дочка в восторге! Занимается уже полгода, прогресс заметен. Спасибо преподавателям за индивидуальный подход!',
    rating: 5,
    photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg'
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
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={review.photo} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{review.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Icon name="GraduationCap" size={14} />
                      <span>{review.course}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                      ))}
                    </div>
                  </div>
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