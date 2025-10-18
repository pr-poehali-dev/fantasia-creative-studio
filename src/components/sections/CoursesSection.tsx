import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Гитара',
    icon: 'Music',
    iconImage: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/7e74416f-997f-4467-b6b0-90b16cb58084.jpg',
    emoji: '💜🩷',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/e19f7bb7-f6df-4d4b-8d48-27fbe6d49b93.jpg',
    description: 'Научитесь играть любимые композиции под руководством опытных преподавателей. Освойте аккорды, ритм и технику игры.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Укулеле',
    icon: 'Music2',
    iconImage: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/ad9bff83-866e-4e2b-9a94-b04f2b9c05b2.jpg',
    emoji: '🧡💛',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/7d757fdc-9175-4a8c-b19f-510d6e1a9cad.jpg',
    description: 'Маленький инструмент с большим звучанием! Идеален для начинающих и для создания весёлого настроения.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 3,
    title: 'Электрогитара',
    icon: 'Radio',
    iconImage: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/de92d1e8-f798-4be6-aa6a-f8e434b42019.jpg',
    emoji: '🎸',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/bd5cd844-7f5b-4f36-bfce-7d72f79c2896.jpg',
    description: 'Погрузитесь в мир рока и блюза. Научитесь играть соло и аккомпанемент, изучите чистый и перегруженный звук.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Синтезатор',
    icon: 'Piano',
    iconImage: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/c34bdda9-aeb7-4fab-b32f-342086d44eb2.jpg',
    emoji: '🎹',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/afe7e5b6-3097-4f94-8b33-80e8edd50c13.jpg',
    description: 'Откройте безграничные возможности электроники. Научитесь создавать и комбинировать разные звуки и стили.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Сценическая речь',
    icon: 'Mic',
    iconImage: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/998487d0-ffb3-4e9a-9167-8fa0292e74b1.jpg',
    emoji: '🎙️',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/8ed767ef-9dfd-4919-88a1-f1260858af1e.jpg',
    description: 'Научитесь уверенно говорить на публике, уделяя внимание интонации, тембру и выразительности.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 6,
    title: 'Актерское мастерство',
    icon: 'Drama',
    iconImage: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/7813b849-e3a1-4f2a-b383-3886ba257720.jpg',
    emoji: '🎭',
    image: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/9659286b-b246-4766-8cc8-e464af63770c.jpg',
    description: 'Погрузитесь в мир театра! Освойте современные техники актерского мастерства, развивайте память и креативность.',
    color: 'from-violet-500 to-purple-500'
  }
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Наши направления
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Выберите то, что вам по душе
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  <span>{course.title}</span>
                  {course.iconImage ? (
                    <img 
                      src={course.iconImage} 
                      alt={course.title}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{course.emoji}</span>
                  )}
                </CardTitle>
                <CardDescription className="text-base">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="CalendarCheck" className="mr-2" size={16} />
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