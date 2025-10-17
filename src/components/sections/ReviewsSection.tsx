import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const reviews = [
  { name: 'Анна Петрова', course: 'Гитара', text: 'Прекрасная студия! За 3 месяца научилась играть свои любимые песни. Преподаватели очень внимательные и терпеливые.', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Дмитрий Смирнов', course: 'Актерское мастерство', text: 'Занятия помогли мне раскрепоститься и обрести уверенность. Отличная атмосфера и профессиональный подход!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Елена Иванова', course: 'Синтезатор', text: 'Дочка в восторге! Занимается уже полгода, прогресс заметен. Спасибо преподавателям за индивидуальный подход!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Сергей Волков', course: 'Электрогитара', text: 'Отличная школа! Преподаватели настоящие профессионалы.', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Ольга Соколова', course: 'Укулеле', text: 'Всегда мечтала научиться играть. Здесь помогли осуществить мечту!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Михаил Кузнецов', course: 'Сценическая речь', text: 'Занятия по сценической речи превзошли все ожидания!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Татьяна Морозова', course: 'Гитара', text: 'Замечательные педагоги, уютная атмосфера. Рекомендую!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Алексей Новиков', course: 'Актерское мастерство', text: 'Сын занимается второй год. Очень доволен результатами!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Наталья Федорова', course: 'Синтезатор', text: 'Прекрасная студия с душевной атмосферой!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Игорь Лебедев', course: 'Электрогитара', text: 'За полгода научился играть рок-композиции. Супер!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Мария Козлова', course: 'Укулеле', text: 'Приятная атмосфера, внимательные преподаватели!', rating: 4, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Виктор Павлов', course: 'Сценическая речь', text: 'Отличный результат за короткое время!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Екатерина Белова', course: 'Гитара', text: 'Мечтала научиться играть на гитаре. Здесь помогли!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Андрей Васильев', course: 'Актерское мастерство', text: 'Профессиональные педагоги, современные методики!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Светлана Орлова', course: 'Синтезатор', text: 'Ребенок с удовольствием ходит на занятия!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Павел Егоров', course: 'Электрогитара', text: 'Занимаюсь год. Прогресс очевиден!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Юлия Семенова', course: 'Укулеле', text: 'Лучшая музыкальная школа в городе!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Владимир Романов', course: 'Сценическая речь', text: 'Помогли поставить голос и дикцию. Благодарен!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Ирина Григорьева', course: 'Гитара', text: 'Удобное расписание, доступные цены!', rating: 4, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Максим Зайцев', course: 'Актерское мастерство', text: 'Занятия дают много энергии и позитива!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Валентина Титова', course: 'Синтезатор', text: 'Отзывчивые преподаватели, уютная студия!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Роман Никитин', course: 'Электрогитара', text: 'Научился играть любимые рок-хиты!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Людмила Захарова', course: 'Укулеле', text: 'Прекрасное место для творчества!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Константин Соловьев', course: 'Сценическая речь', text: 'Качественное обучение, индивидуальный подход!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Вера Медведева', course: 'Гитара', text: 'Дочь занимается с удовольствием!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Артем Борисов', course: 'Актерское мастерство', text: 'Помогли раскрыть творческий потенциал!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Галина Комарова', course: 'Синтезатор', text: 'Современное оборудование, опытные педагоги!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Денис Попов', course: 'Электрогитара', text: 'Всё понятно объясняют, хороший темп обучения!', rating: 4, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Оксана Макарова', course: 'Укулеле', text: 'Идеальное место для начинающих музыкантов!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Геннадий Филиппов', course: 'Сценическая речь', text: 'Прекрасные результаты за короткий срок!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Лариса Королева', course: 'Гитара', text: 'Внимательные преподаватели, доброжелательная атмосфера!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Станислав Ковалев', course: 'Актерское мастерство', text: 'Занятия помогли стать увереннее в себе!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Тамара Антонова', course: 'Синтезатор', text: 'Ребенок с нетерпением ждет каждого занятия!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Кирилл Фомин', course: 'Электрогитара', text: 'Отличная школа с профессиональными педагогами!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Зоя Степанова', course: 'Укулеле', text: 'Приятные цены, качественное обучение!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Илья Яковлев', course: 'Сценическая речь', text: 'Помогли избавиться от страха публичных выступлений!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Раиса Крылова', course: 'Гитара', text: 'Удобное расположение, гибкий график!', rating: 4, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Глеб Сидоров', course: 'Актерское мастерство', text: 'Развивающие и интересные занятия!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Нина Власова', course: 'Синтезатор', text: 'Сын стал более усидчивым и внимательным!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Антон Богданов', course: 'Электрогитара', text: 'Учат не только технике, но и чувствовать музыку!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Клавдия Никифорова', course: 'Укулеле', text: 'Замечательная студия! Всем рекомендую!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Борис Калинин', course: 'Сценическая речь', text: 'Профессионально и эффективно!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Алла Гусева', course: 'Гитара', text: 'Преподаватели находят подход к каждому ученику!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Вячеслав Тарасов', course: 'Актерское мастерство', text: 'Хорошая база для будущих артистов!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Маргарита Воробьева', course: 'Синтезатор', text: 'Дочка в восторге от занятий!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Евгений Голубев', course: 'Электрогитара', text: 'Быстрый прогресс благодаря опытным педагогам!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Регина Кириллова', course: 'Укулеле', text: 'Приятная и творческая атмосфера!', rating: 4, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Федор Михайлов', course: 'Сценическая речь', text: 'Отличные результаты, спасибо преподавателям!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Карина Сергеева', course: 'Гитара', text: 'Лучшее место для обучения музыке!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Тимофей Данилов', course: 'Актерское мастерство', text: 'Занятия развивают и вдохновляют!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Эльвира Матвеева', course: 'Синтезатор', text: 'Ребенок получает огромное удовольствие!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Ярослав Кудрявцев', course: 'Электрогитара', text: 'Профессионалы своего дела!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Жанна Панова', course: 'Укулеле', text: 'Занятия приносят радость и результат!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Николай Дмитриев', course: 'Сценическая речь', text: 'Помогли улучшить дикцию и уверенность!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Дарья Ларина', course: 'Гитара', text: 'Очень довольна выбором этой студии!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Леонид Киселев', course: 'Актерское мастерство', text: 'Современный подход к обучению!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Полина Беляева', course: 'Синтезатор', text: 'Сын занимается с большим интересом!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Руслан Баранов', course: 'Электрогитара', text: 'Отличная школа, рекомендую всем!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Лидия Назарова', course: 'Укулеле', text: 'Приятная цена и качественные занятия!', rating: 4, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Артур Щербаков', course: 'Сценическая речь', text: 'Преподаватели настоящие мастера!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Евдокия Виноградова', course: 'Гитара', text: 'Внук доволен, прогресс налицо!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Матвей Абрамов', course: 'Актерское мастерство', text: 'Занятия развивают креативность!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Инесса Герасимова', course: 'Синтезатор', text: 'Дочь стала более собранной благодаря занятиям!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Семен Осипов', course: 'Электрогитара', text: 'Мечта сбылась - научился играть на гитаре!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Агния Комарова', course: 'Укулеле', text: 'Творческая и дружелюбная атмосфера!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Захар Громов', course: 'Сценическая речь', text: 'Эффективная программа обучения!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Марина Давыдова', course: 'Гитара', text: 'Спасибо за терпение и профессионализм!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Егор Ефимов', course: 'Актерское мастерство', text: 'Занятия помогли раскрыться!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Таисия Шишкина', course: 'Синтезатор', text: 'Ребенок счастлив, мы довольны!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Марк Гончаров', course: 'Электрогитара', text: 'Лучшие преподаватели в городе!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Эмма Золотарева', course: 'Укулеле', text: 'Приятно заниматься в такой студии!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Георгий Белов', course: 'Сценическая речь', text: 'Прекрасные результаты за 2 месяца!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Алина Терентьева', course: 'Гитара', text: 'Замечательная школа музыки!', rating: 4, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Гордей Фролов', course: 'Актерское мастерство', text: 'Развивает воображение и память!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Эвелина Кулешова', course: 'Синтезатор', text: 'Дочка в восторге от преподавателя!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Макар Шаров', course: 'Электрогитара', text: 'Качественное обучение по доступной цене!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Снежана Рыбакова', course: 'Укулеле', text: 'Прекрасное место для творчества!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Лев Корнилов', course: 'Сценическая речь', text: 'Отличные педагоги и методика!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Ангелина Климова', course: 'Гитара', text: 'Всегда мечтала играть на гитаре!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Демид Щукин', course: 'Актерское мастерство', text: 'Помогли обрести уверенность на сцене!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Мирослава Фадеева', course: 'Синтезатор', text: 'Сын стал более музыкальным!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Савелий Ильин', course: 'Электрогитара', text: 'Профессиональный подход к каждому!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Ксения Пономарева', course: 'Укулеле', text: 'Приятные преподаватели и атмосфера!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Платон Блинов', course: 'Сценическая речь', text: 'Занятия дают отличный результат!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Милана Соболева', course: 'Гитара', text: 'Лучшая музыкальная школа!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Елисей Горшков', course: 'Актерское мастерство', text: 'Творческий подход к обучению!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Варвара Ситникова', course: 'Синтезатор', text: 'Дочь занимается с удовольствием!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Давид Мельников', course: 'Электрогитара', text: 'Быстрый прогресс и отличные педагоги!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Диана Калашникова', course: 'Укулеле', text: 'Уютная студия, хорошие педагоги!', rating: 4, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Родион Носков', course: 'Сценическая речь', text: 'Помогли поставить красивую речь!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Ульяна Журавлева', course: 'Гитара', text: 'Превосходная школа музыки!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Мирон Крюков', course: 'Актерское мастерство', text: 'Занятия развивают личность!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Стефания Гаврилова', course: 'Синтезатор', text: 'Ребенок научился играть красивые мелодии!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Арсений Селезнев', course: 'Электрогитара', text: 'Отличная школа, всем советую!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Злата Пахомова', course: 'Укулеле', text: 'Прекрасные занятия и результаты!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Богдан Орехов', course: 'Сценическая речь', text: 'Помогли развить ораторские навыки!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Виктория Панкратова', course: 'Гитара', text: 'Великолепная студия!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Назар Казаков', course: 'Актерское мастерство', text: 'Современные методики обучения!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Кристина Третьякова', course: 'Синтезатор', text: 'Сын с радостью ходит на занятия!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Тихон Лукин', course: 'Электрогитара', text: 'Профессиональные преподаватели!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Виолетта Логинова', course: 'Укулеле', text: 'Замечательное место для музыки!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Добрыня Кожевников', course: 'Сценическая речь', text: 'Занятия дают уверенность в себе!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Софья Никонова', course: 'Гитара', text: 'Спасибо за терпение и профессионализм!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Владислав Фокин', course: 'Актерское мастерство', text: 'Помогли развить артистизм!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' },
  { name: 'Есения Миронова', course: 'Синтезатор', text: 'Дочь в восторге от педагогов!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44b7db8a-90f2-4bbf-8e80-1e2fb59dde3b.jpg' },
  { name: 'Ростислав Лазарев', course: 'Электрогитара', text: 'Научился играть за полгода!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/290fa682-32fa-4ac0-b583-57efd0ad51ab.jpg' },
  { name: 'Яна Вишнякова', course: 'Укулеле', text: 'Приятная атмосфера и результат!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5b9423e0-2f43-4cd0-a162-56bd4307e849.jpg' }
];

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

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
          {displayedReviews.map((review, index) => (
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
        {!showAll && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(true)} 
              size="lg"
              className="px-8"
            >
              Показать больше отзывов
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}