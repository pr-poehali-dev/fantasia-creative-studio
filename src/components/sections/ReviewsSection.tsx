import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const photos = [
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/b4b30750-525c-49d0-aa28-704bfea1208d.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/0ad57f69-c568-48f5-9720-ff4fa8599c48.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/169dc64c-c008-47d8-a79d-d4ccdd7eaa28.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/f7290771-4139-4467-8be9-00f1c0eec1b6.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/a9b16600-a987-4c9a-aebb-8cbcbe0025d8.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/33d42ea6-0575-47c2-b59f-ffe5d4b77382.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/a61f98b8-40b4-4f1e-b90d-bb9e67e502bb.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/c912d307-7b7d-441a-bb87-71ea89f7dd4d.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/1104875e-7af2-46b9-92c7-ac1e11d239db.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/62318c9f-4cf3-4e2c-a485-a225d1877797.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/b3a4f1aa-7e0e-46ce-a3e3-ac6a74391504.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/c722d236-be59-4337-b9e9-d775e2472e10.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/44279ac5-9c10-456b-a240-11b02fc793d8.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/04d18070-7359-4b61-94b0-5caa646c853a.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/331b9482-25e0-4866-a8ad-8fad5158de20.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/09b990fb-e8e5-4f67-bf93-2f5b1258ef60.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/8c72a6a3-fdc4-4c93-b695-ae720e0b8f6c.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/e0e5f14e-a462-45dc-821a-dc51e0ac7703.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/846e5345-13aa-43b6-97e2-aef06d3d9109.jpg',
  'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/31a39df7-caec-4e97-8865-6d252b2508f2.jpg'
];

const reviews = [
  { name: 'Анна Петрова', course: 'Гитара', text: 'Прекрасная студия! За 3 месяца научилась играть свои любимые песни. Преподаватели очень внимательные и терпеливые.', rating: 5, photo: photos[0] },
  { name: 'Дмитрий Смирнов', course: 'Актерское мастерство', text: 'Занятия помогли мне раскрепоститься и обрести уверенность. Отличная атмосфера и профессиональный подход!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/7e34ae6d-7b0c-46b5-adb1-6563e7187dae.jpg' },
  { name: 'Елена Иванова', course: 'Синтезатор', text: 'Дочка в восторге! Занимается уже полгода, прогресс заметен. Спасибо преподавателям за индивидуальный подход!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/5306cce4-9bcc-4992-bdd8-cd72f79708ef.jpg' },
  { name: 'Сергей Волков', course: 'Электрогитара', text: 'Отличная школа! Преподаватели настоящие профессионалы.', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/2263b15d-f039-4c3f-a766-d0e6b079b2a2.jpg' },
  { name: 'Ольга Соколова', course: 'Укулеле', text: 'Всегда мечтала научиться играть. Здесь помогли осуществить мечту!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/df67b8d9-7912-4c88-ad64-10a667a25175.jpg' },
  { name: 'Сергей Кузнецов', course: 'Сценическая речь', text: 'Занятия по сценической речи превзошли все ожидания!', rating: 5, photo: 'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/0b26654a-cc73-416c-971a-028ba10e2fba.jpg' },
  { name: 'Татьяна Морозова', course: 'Гитара', text: 'Замечательные педагоги, уютная атмосфера. Рекомендую!', rating: 5, photo: photos[6] },
  { name: 'Алексей Новиков', course: 'Актерское мастерство', text: 'Сын занимается второй год. Очень доволен результатами!', rating: 5, photo: photos[7] },
  { name: 'Наталья Федорова', course: 'Синтезатор', text: 'Прекрасная студия с душевной атмосферой!', rating: 5, photo: photos[8] },
  { name: 'Игорь Лебедев', course: 'Электрогитара', text: 'За полгода научился играть рок-композиции. Супер!', rating: 5, photo: photos[9] },
  { name: 'Мария Козлова', course: 'Укулеле', text: 'Приятная атмосфера, внимательные преподаватели!', rating: 4, photo: photos[0] },
  { name: 'Виктор Павлов', course: 'Сценическая речь', text: 'Отличный результат за короткое время!', rating: 5, photo: photos[1] },
  { name: 'Екатерина Белова', course: 'Гитара', text: 'Мечтала научиться играть на гитаре. Здесь помогли!', rating: 5, photo: photos[2] },
  { name: 'Андрей Васильев', course: 'Актерское мастерство', text: 'Профессиональные педагоги, современные методики!', rating: 5, photo: photos[3] },
  { name: 'Светлана Орлова', course: 'Синтезатор', text: 'Ребенок с удовольствием ходит на занятия!', rating: 5, photo: photos[4] },
  { name: 'Павел Егоров', course: 'Электрогитара', text: 'Занимаюсь год. Прогресс очевиден!', rating: 5, photo: photos[5] },
  { name: 'Юлия Семенова', course: 'Укулеле', text: 'Лучшая музыкальная школа в городе!', rating: 5, photo: photos[6] },
  { name: 'Владимир Романов', course: 'Сценическая речь', text: 'Помогли поставить голос и дикцию. Благодарен!', rating: 5, photo: photos[7] },
  { name: 'Ирина Григорьева', course: 'Гитара', text: 'Удобное расписание, доступные цены!', rating: 4, photo: photos[8] },
  { name: 'Максим Зайцев', course: 'Актерское мастерство', text: 'Занятия дают много энергии и позитива!', rating: 5, photo: photos[9] },
  { name: 'Валентина Титова', course: 'Синтезатор', text: 'Отзывчивые преподаватели, уютная студия!', rating: 5, photo: photos[0] },
  { name: 'Роман Никитин', course: 'Электрогитара', text: 'Научился играть любимые рок-хиты!', rating: 5, photo: photos[1] },
  { name: 'Людмила Захарова', course: 'Укулеле', text: 'Прекрасное место для творчества!', rating: 5, photo: photos[2] },
  { name: 'Константин Соловьев', course: 'Сценическая речь', text: 'Качественное обучение, индивидуальный подход!', rating: 5, photo: photos[3] },
  { name: 'Вера Медведева', course: 'Гитара', text: 'Дочь занимается с удовольствием!', rating: 5, photo: photos[4] },
  { name: 'Артем Борисов', course: 'Актерское мастерство', text: 'Помогли раскрыть творческий потенциал!', rating: 5, photo: photos[5] },
  { name: 'Галина Комарова', course: 'Синтезатор', text: 'Современное оборудование, опытные педагоги!', rating: 5, photo: photos[6] },
  { name: 'Денис Попов', course: 'Электрогитара', text: 'Всё понятно объясняют, хороший темп обучения!', rating: 4, photo: photos[7] },
  { name: 'Оксана Макарова', course: 'Укулеле', text: 'Идеальное место для начинающих музыкантов!', rating: 5, photo: photos[8] },
  { name: 'Геннадий Филиппов', course: 'Сценическая речь', text: 'Прекрасные результаты за короткий срок!', rating: 5, photo: photos[9] },
  { name: 'Лариса Королева', course: 'Гитара', text: 'Внимательные преподаватели, доброжелательная атмосфера!', rating: 5, photo: photos[0] },
  { name: 'Станислав Ковалев', course: 'Актерское мастерство', text: 'Занятия помогли стать увереннее в себе!', rating: 5, photo: photos[1] },
  { name: 'Тамара Антонова', course: 'Синтезатор', text: 'Ребенок с нетерпением ждет каждого занятия!', rating: 5, photo: photos[2] },
  { name: 'Кирилл Фомин', course: 'Электрогитара', text: 'Отличная школа с профессиональными педагогами!', rating: 5, photo: photos[3] },
  { name: 'Зоя Степанова', course: 'Укулеле', text: 'Приятные цены, качественное обучение!', rating: 5, photo: photos[4] },
  { name: 'Илья Яковлев', course: 'Сценическая речь', text: 'Помогли избавиться от страха публичных выступлений!', rating: 5, photo: photos[5] },
  { name: 'Раиса Крылова', course: 'Гитара', text: 'Удобное расположение, гибкий график!', rating: 4, photo: photos[6] },
  { name: 'Глеб Сидоров', course: 'Актерское мастерство', text: 'Развивающие и интересные занятия!', rating: 5, photo: photos[7] },
  { name: 'Нина Власова', course: 'Синтезатор', text: 'Сын стал более усидчивым и внимательным!', rating: 5, photo: photos[8] },
  { name: 'Антон Богданов', course: 'Электрогитара', text: 'Учат не только технике, но и чувствовать музыку!', rating: 5, photo: photos[9] },
  { name: 'Клавдия Никифорова', course: 'Укулеле', text: 'Замечательная студия! Всем рекомендую!', rating: 5, photo: photos[0] },
  { name: 'Борис Калинин', course: 'Сценическая речь', text: 'Профессионально и эффективно!', rating: 5, photo: photos[1] },
  { name: 'Алла Гусева', course: 'Гитара', text: 'Преподаватели находят подход к каждому ученику!', rating: 5, photo: photos[2] },
  { name: 'Вячеслав Тарасов', course: 'Актерское мастерство', text: 'Хорошая база для будущих артистов!', rating: 5, photo: photos[3] },
  { name: 'Маргарита Воробьева', course: 'Синтезатор', text: 'Дочка в восторге от занятий!', rating: 5, photo: photos[4] },
  { name: 'Евгений Голубев', course: 'Электрогитара', text: 'Быстрый прогресс благодаря опытным педагогам!', rating: 5, photo: photos[5] },
  { name: 'Регина Кириллова', course: 'Укулеле', text: 'Приятная и творческая атмосфера!', rating: 4, photo: photos[6] },
  { name: 'Федор Михайлов', course: 'Сценическая речь', text: 'Отличные результаты, спасибо преподавателям!', rating: 5, photo: photos[7] },
  { name: 'Карина Сергеева', course: 'Гитара', text: 'Лучшее место для обучения музыке!', rating: 5, photo: photos[8] },
  { name: 'Тимофей Данилов', course: 'Актерское мастерство', text: 'Занятия развивают и вдохновляют!', rating: 5, photo: photos[9] },
  { name: 'Эльвира Матвеева', course: 'Синтезатор', text: 'Ребенок получает огромное удовольствие!', rating: 5, photo: photos[0] },
  { name: 'Ярослав Кудрявцев', course: 'Электрогитара', text: 'Профессионалы своего дела!', rating: 5, photo: photos[1] },
  { name: 'Жанна Панова', course: 'Укулеле', text: 'Занятия приносят радость и результат!', rating: 5, photo: photos[2] },
  { name: 'Николай Дмитриев', course: 'Сценическая речь', text: 'Помогли улучшить дикцию и уверенность!', rating: 5, photo: photos[3] },
  { name: 'Дарья Ларина', course: 'Гитара', text: 'Очень довольна выбором этой студии!', rating: 5, photo: photos[4] },
  { name: 'Леонид Киселев', course: 'Актерское мастерство', text: 'Современный подход к обучению!', rating: 5, photo: photos[5] },
  { name: 'Полина Беляева', course: 'Синтезатор', text: 'Сын занимается с большим интересом!', rating: 5, photo: photos[6] },
  { name: 'Руслан Баранов', course: 'Электрогитара', text: 'Отличная школа, рекомендую всем!', rating: 5, photo: photos[7] },
  { name: 'Лидия Назарова', course: 'Укулеле', text: 'Приятная цена и качественные занятия!', rating: 4, photo: photos[8] },
  { name: 'Артур Щербаков', course: 'Сценическая речь', text: 'Преподаватели настоящие мастера!', rating: 5, photo: photos[9] },
  { name: 'Евдокия Виноградова', course: 'Гитара', text: 'Внук доволен, прогресс налицо!', rating: 5, photo: photos[0] },
  { name: 'Матвей Абрамов', course: 'Актерское мастерство', text: 'Занятия развивают креативность!', rating: 5, photo: photos[1] },
  { name: 'Инесса Герасимова', course: 'Синтезатор', text: 'Дочь стала более собранной благодаря занятиям!', rating: 5, photo: photos[2] },
  { name: 'Семен Осипов', course: 'Электрогитара', text: 'Мечта сбылась - научился играть на гитаре!', rating: 5, photo: photos[3] },
  { name: 'Агния Комарова', course: 'Укулеле', text: 'Творческая и дружелюбная атмосфера!', rating: 5, photo: photos[4] },
  { name: 'Захар Громов', course: 'Сценическая речь', text: 'Эффективная программа обучения!', rating: 5, photo: photos[5] },
  { name: 'Марина Давыдова', course: 'Гитара', text: 'Спасибо за терпение и профессионализм!', rating: 5, photo: photos[6] },
  { name: 'Егор Ефимов', course: 'Актерское мастерство', text: 'Занятия помогли раскрыться!', rating: 5, photo: photos[7] },
  { name: 'Таисия Шишкина', course: 'Синтезатор', text: 'Ребенок счастлив, мы довольны!', rating: 5, photo: photos[8] },
  { name: 'Марк Гончаров', course: 'Электрогитара', text: 'Лучшие преподаватели в городе!', rating: 5, photo: photos[9] },
  { name: 'Эмма Золотарева', course: 'Укулеле', text: 'Приятно заниматься в такой студии!', rating: 5, photo: photos[0] },
  { name: 'Георгий Белов', course: 'Сценическая речь', text: 'Прекрасные результаты за 2 месяца!', rating: 5, photo: photos[1] },
  { name: 'Алина Терентьева', course: 'Гитара', text: 'Замечательная школа музыки!', rating: 4, photo: photos[2] },
  { name: 'Гордей Фролов', course: 'Актерское мастерство', text: 'Развивает воображение и память!', rating: 5, photo: photos[3] },
  { name: 'Эвелина Кулешова', course: 'Синтезатор', text: 'Дочка в восторге от преподавателя!', rating: 5, photo: photos[4] },
  { name: 'Макар Шаров', course: 'Электрогитара', text: 'Качественное обучение по доступной цене!', rating: 5, photo: photos[5] },
  { name: 'Снежана Рыбакова', course: 'Укулеле', text: 'Прекрасное место для творчества!', rating: 5, photo: photos[6] },
  { name: 'Лев Корнилов', course: 'Сценическая речь', text: 'Отличные педагоги и методика!', rating: 5, photo: photos[7] },
  { name: 'Ангелина Климова', course: 'Гитара', text: 'Всегда мечтала играть на гитаре!', rating: 5, photo: photos[8] },
  { name: 'Демид Щукин', course: 'Актерское мастерство', text: 'Помогли обрести уверенность на сцене!', rating: 5, photo: photos[9] },
  { name: 'Мирослава Фадеева', course: 'Синтезатор', text: 'Сын стал более музыкальным!', rating: 5, photo: photos[0] },
  { name: 'Савелий Ильин', course: 'Электрогитара', text: 'Профессиональный подход к каждому!', rating: 5, photo: photos[1] },
  { name: 'Ксения Пономарева', course: 'Укулеле', text: 'Приятные преподаватели и атмосфера!', rating: 5, photo: photos[2] },
  { name: 'Платон Блинов', course: 'Сценическая речь', text: 'Занятия дают отличный результат!', rating: 5, photo: photos[3] },
  { name: 'Милана Соболева', course: 'Гитара', text: 'Лучшая музыкальная школа!', rating: 5, photo: photos[4] },
  { name: 'Елисей Горшков', course: 'Актерское мастерство', text: 'Творческий подход к обучению!', rating: 5, photo: photos[5] },
  { name: 'Варвара Ситникова', course: 'Синтезатор', text: 'Дочь занимается с удовольствием!', rating: 5, photo: photos[6] },
  { name: 'Давид Мельников', course: 'Электрогитара', text: 'Быстрый прогресс и отличные педагоги!', rating: 5, photo: photos[7] },
  { name: 'Диана Калашникова', course: 'Укулеле', text: 'Уютная студия, хорошие педагоги!', rating: 4, photo: photos[8] },
  { name: 'Родион Носков', course: 'Сценическая речь', text: 'Помогли поставить красивую речь!', rating: 5, photo: photos[9] },
  { name: 'Ульяна Журавлева', course: 'Гитара', text: 'Превосходная школа музыки!', rating: 5, photo: photos[0] },
  { name: 'Мирон Крюков', course: 'Актерское мастерство', text: 'Занятия развивают личность!', rating: 5, photo: photos[1] },
  { name: 'Стефания Гаврилова', course: 'Синтезатор', text: 'Ребенок научился играть красивые мелодии!', rating: 5, photo: photos[2] },
  { name: 'Арсений Селезнев', course: 'Электрогитара', text: 'Отличная школа, всем советую!', rating: 5, photo: photos[3] },
  { name: 'Злата Пахомова', course: 'Укулеле', text: 'Прекрасные занятия и результаты!', rating: 5, photo: photos[4] },
  { name: 'Богдан Орехов', course: 'Сценическая речь', text: 'Помогли развить ораторские навыки!', rating: 5, photo: photos[5] },
  { name: 'Виктория Панкратова', course: 'Гитара', text: 'Великолепная студия!', rating: 5, photo: photos[6] },
  { name: 'Назар Казаков', course: 'Актерское мастерство', text: 'Современные методики обучения!', rating: 5, photo: photos[7] },
  { name: 'Кристина Третьякова', course: 'Синтезатор', text: 'Сын с радостью ходит на занятия!', rating: 5, photo: photos[8] },
  { name: 'Тихон Лукин', course: 'Электрогитара', text: 'Профессиональные преподаватели!', rating: 5, photo: photos[9] },
  { name: 'Виолетта Логинова', course: 'Укулеле', text: 'Замечательное место для музыки!', rating: 5, photo: photos[0] },
  { name: 'Добрыня Кожевников', course: 'Сценическая речь', text: 'Занятия дают уверенность в себе!', rating: 5, photo: photos[1] },
  { name: 'Софья Никонова', course: 'Гитара', text: 'Спасибо за терпение и профессионализм!', rating: 5, photo: photos[2] },
  { name: 'Владислав Фокин', course: 'Актерское мастерство', text: 'Помогли развить артистизм!', rating: 5, photo: photos[3] },
  { name: 'Есения Миронова', course: 'Синтезатор', text: 'Дочь в восторге от педагогов!', rating: 5, photo: photos[4] },
  { name: 'Ростислав Лазарев', course: 'Электрогитара', text: 'Научился играть за полгода!', rating: 5, photo: photos[5] },
  { name: 'Яна Вишнякова', course: 'Укулеле', text: 'Приятная атмосфера и результат!', rating: 5, photo: photos[6] }
];

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);
  const [formData, setFormData] = useState({ name: '', course: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitSuccess(true);
    setFormData({ name: '', course: '', text: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

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

        <div className="max-w-2xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Оставьте свой отзыв</CardTitle>
              <CardDescription>Поделитесь своими впечатлениями о занятиях</CardDescription>
            </CardHeader>
            <CardContent>
              {submitSuccess ? (
                <div className="text-center py-8">
                  <Icon name="CheckCircle" className="text-green-500 mx-auto mb-4" size={48} />
                  <p className="text-lg font-semibold">Спасибо за ваш отзыв!</p>
                  <p className="text-muted-foreground">Мы ценим ваше мнение</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium mb-2">
                      Курс
                    </label>
                    <Input
                      id="course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      placeholder="Гитара"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="text" className="block text-sm font-medium mb-2">
                      Ваш отзыв
                    </label>
                    <Textarea
                      id="text"
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      placeholder="Расскажите о своих впечатлениях..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить отзыв'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}