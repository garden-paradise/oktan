const initialState = {
  language:
    localStorage.getItem('language') === null
      ? 'RU'
      : localStorage.getItem('language'),
  HEADER: {
    about: { RU: 'О компании', EN: 'About company' },
    advantages: { RU: 'Преимущества', EN: 'Advantages' },
    products: { RU: 'Продукция', EN: 'Products' },
    news: { RU: 'Новости', EN: 'News' },
    contacts: { RU: 'Контакты', EN: 'Contacts' },
    interrogatory: { RU: 'Опросный лист', EN: 'Interrogatory' },
  },
  HOME: {
    aboutTitle: { RU: 'О компании', EN: 'About company' },
    aboutText1: {
      RU: 'Первоначально созданная как нефтетрейдерская компания «Октан» с 2018 года серьезно занимается разработкой, проектированием и выпуском уникального оборудования для подготовки нефти и газа в области фильтрации, сепарации и очистки нефти и нефтепродуктов путём организации собственного производства, отвечающего всем современным требованиям и стандартам в области качества.',
      EN: 'Initially established in 2018 as an oil trading company, Oktan LLC has engaged in the development, design and production of unique equipment for oil and gas treatment. It specializes  in the fields of filtration, separation and purification of oil and petroleum products by organizing its own production to meet all modern requirements and quality standards.',
    },
    aboutText2: {
      RU: 'Некоторые виды нефтегазового оборудования, созданные нами для топливно-энергетической отрасли, являются эксклюзивными и не имеют аналогов в мире.',
      EN: 'Some types of oil and gas equipment created by us for the fuel and energy industry are exclusive and have     no analogues in the world.',
    },
    aboutText3: {
      RU: 'В настоящее время в компании сформирована профессиональная команда сотрудников и управленцев, отработана техническая документация, имеются все необходимые разрешительные документы для производства, создана производственная база для изготовления качественного нефтегазового оборудования – установок обессеривания , установок по утилизации нефтешламов, установок по первичной переработке нефти в блочно-модульном и контейнерном исполнении.',
      EN: 'We have formed a professional team of managers and employees to build the company and have our technical documentation worked out. All the necessary permits for production are available. The production base has been created for the manufacture of high-quality oil and gas equipment, including desulfurization units, oil sludge disposal units, primary oil refining units in block-modular and container design.',
    },
    aboutText4: {
      RU: 'Компания "Октан" предлагает комплексные решения для предприятий нефтегазовой отрасли.',
      EN: 'Oktan offers comprehensive solutions for oil and gas industry enterprises.',
    },
    aboutText5: {
      RU: 'Мы занимаемся проектированием, производством и поставкой материально-технических ресурсов, монтажом и пусконаладочными работами, сервисным, гарантийным и постгарантийным обслуживанием.',
      EN: 'We are engaged in the design, production and supply of material and technical resources, installation and commissioning, service, warranty and post-warranty service.',
    },
    aboutText6: {
      RU: 'Кроме того, компания «Октан» осуществляет:',
      EN: 'In addition, the Oktan carries out:',
    },
    aboutText7: {
      RU: [
        'Консультации по подбору нефтегазового оборудования для Вашего проекта;',
        'Подбор нефтегазового оборудования по размерам при реконструкции Вашего объекта;',
        'Производство и изготовление нефтегазового оборудования по Вашим эскизам;',
        'Сравнительный анализ нефтегазового оборудования по Вашему заданию;',
        'Поставка для Вас эксклюзивного нефтегазового оборудования и материалов к ним.',
      ],
      EN: [
        'Consultations on the selection of oil and gas equipment for your project;',
        'Selection of oil and gas equipment by size during the reconstruction of your facility;',
        'Production and manufacture of oil and gas equipment according to your sketches;',
        'Comparative analysis of oil and gas equipment according to your assignment;',
        'Delivery of exclusive oil and gas equipment and materials for you.',
      ],
    },
    productCardTitle: {
      RU: 'Продукция',
      EN: 'Products',
    },
    productCardBtn: {
      RU: 'Остальное',
      EN: 'Show all',
    },
    imagesCarousel: {
      RU: 'Документация',
      EN: 'Documentation',
    },
    benefitsTitle: {
      RU: 'Преимущества',
      EN: 'Advantages',
    },
    benefitsCard1: {
      RU: {
        title: 'Безопасность',
        subtitle:
          'Обеспечение безопасности на всех этапах разработки, производства, монтажа и обслуживания нашего оборудования является важнейшим приоритетом в работе со всеми клиентами.',
      },
      EN: {
        title: 'Safety',
        subtitle:
          'Ensuring safety at all stages of development, production, installation and maintenance of our equipment is a top priority in working with all our customers.',
      },
    },
    benefitsCard2: {
      RU: {
        title: 'Качество',
        subtitle:
          'Мы стремимся к наивысшему качеству на всех этапах разработки, изготовления, хранения, доставки, монтажа, наладки и обслуживания за счёт индивидуального подхода к потребностям клиента и бескомпромиссного отношения наших сотрудников к соблюдению законодательных, нормативных и других применимы требований. ',
      },
      EN: {
        title: 'Quality',
        subtitle:
          'We strive for the highest quality at all stages of development, manufacture, storage, delivery, installation, commissioning and maintenance due to an individual approach to customers needs and the uncompromising attitude of our employees to comply with legislative, regulatory and other applicable requirements.',
      },
    },
    benefitsCard3: {
      RU: {
        title: 'Постоянное улучшение',
        subtitle:
          'Мы не переставая упорно работаем над совершенствованием наших предложений путём улучшения наших продуктов, процессов, развивая культуру бережливости и экологической безопасности, поощряя и поддерживая инициативы и усилия сотрудников.',
      },
      EN: {
        title: 'Continuous improvement',
        subtitle:
          'We constantly work hard on improving our products, processes, developing a culture of thrift and environmental safety, encouraging and supporting the initiatives and efforts of our employees.',
      },
    },
    benefitsCard4: {
      RU: {
        title: 'Ориентация на потребителя',
        subtitle:
          'Все решения, принимаемые нами, исходят, прежде всего, из потребностей клиента и направлены на их максимальное удовлетворение.',
      },
      EN: {
        title: 'Customer orientation',
        subtitle:
          'All decisions we make are primarily based on the clients needs and are oriented at their maximum satisfaction.',
      },
    },
    benefitsCard5: {
      RU: {
        title: 'Мотивация',
        subtitle:
          'Мы вовлекаем, развиваем и мотивируем сотрудников для наиболее лучшего применения их компетенций и навыков в обеспечении удовлетворённости наших клиентов и достижении целей компании.',
      },
      EN: {
        title: 'Motivation',
        subtitle:
          'To ensure our customers satisfaction and achievement of our companys goals, we involve, develop and motivate our employees to make the best use of their competencies and skills.',
      },
    },
  },
  PRODUCTCARD: {
    productCard1: {
      RU: {
        title: 'Снижение содержания серы',
        subtitle: 'Снижение содержания серы в нефти и нефтепродуктов...',
      },
      EN: {
        title: 'Reduction of sulfur content',
        subtitle: 'Reduction of sulfur content in oil and petroleum...',
      },
    },
    productCard2: {
      RU: {
        title: 'Водородная энергетика',
        subtitle: 'Разрабатываем методы получения атомарного...',
      },
      EN: {
        title: 'Hydrogen energy',
        subtitle: 'We develop methods for obtaining atomic hydro...',
      },
    },
    productCard3: {
      RU: {
        title: 'Опреснение морской воды',
        subtitle: 'Опреснение воды путем испарения на индукционном...',
      },
      EN: {
        title: 'Desalination of seawater',
        subtitle: 'Desalination of water by evaporation on an induc...',
      },
    },
    productCard4: {
      RU: {
        title: 'Разделение нефти',
        subtitle: 'Разрабатываем методы получения атомарного...',
      },
      EN: {
        title: 'Separation of oil',
        subtitle:
          'The plant performs a full cycle of processing of raw mater...',
      },
    },
    productCard5: {
      RU: {
        title: 'Утилизация масла',
        subtitle: 'Установка по утилизации и регенерации моторных...',
      },
      EN: {
        title: 'Disposal oil',
        subtitle: 'Installations for the utilization and regeneration of mo...',
      },
    },
    productCard6: {
      RU: {
        title: 'Утилизация нефтешламов',
        subtitle: 'Установка производит очистку земли и воды...',
      },
      EN: {
        title: 'Disposal of oil sludge',
        subtitle: 'The installation cleans the land and...',
      },
    },
  },
  FORMSECTION: {
    title: { RU: 'Оставить заявку', EN: 'Submit your application' },
    organization: {
      RU: 'Название организации *',
      EN: 'Name of the organization *',
    },
    name: { RU: 'ФИО *', EN: 'Name *' },
    phone: { RU: 'Телефон *', EN: 'Phone *' },
    email: { RU: 'E-mail *', EN: 'E-mail *' },
    comments: { RU: 'Комментарий', EN: 'A comment' },
    btn: { RU: 'Отправить заявку', EN: 'Submit an application' },
  },
  NEWS: {
    title: { RU: 'Новости', EN: 'News' },
  },
  CONTACTS: {
    title: { RU: 'Контакты', EN: 'Contacts' },
    contacts1: {
      RU: {
        address: 'Адрес в Москве:',
        home: 'г. Москва, ул. Сибирский проезд, дом № 2, строение 2, комната 6',
        tel: ['+ 7 (495) 664-67-32', '+ 7 (495) 676-91-02'],
        time: 'Время работы: 09:00-18:00',
        mail: 'info@oktan.tech',
      },
      EN: {
        address: 'Address in Moscow:',
        home: 'Moscow, st. Siberian passage, house number 2, building 2, room 6',
        tel: ['+ 7 (495) 664-67-32', '+ 7 (495) 676-91-02'],
        time: 'Working hours: 09:00-18:00',
        mail: 'info@oktan.tech',
      },
    },
    contacts2: {
      RU: {
        address: 'Address in Estonia:',
        home: 'Harju maakond, Tallinn, Kesklinna linnaosa, Estonia pst 5',
        tel: ['+3 725 882 02 26'],
        time: 'Время работы: 09:00-18:00',
        mail: 'info@oktan.tech',
      },
      EN: {
        address: 'Address in Moscow:',
        home: 'Harju maakond, Tallinn, Kesklinna linnaosa, Estonia pst 5',
        tel: ['+3 725 882 02 26'],
        time: 'Working hours: 09:00-18:00',
        mail: 'info@oktan.tech',
      },
    },
  },
  FOOTER: {
    home: { RU: 'Главная', EN: 'Home' },
    about: { RU: 'О компании', EN: 'About company' },
    products: { RU: 'Продукция', EN: 'Products' },
    documentation: { RU: 'Документация', EN: 'Documentation' },
    news: { RU: 'Новости', EN: 'News' },
    contacts: { RU: 'Контакты', EN: 'Contacts' },
    advantages: { RU: 'Преимущества', EN: 'Advantages' },
    interrogatory: { RU: 'Опросный лист', EN: 'Interrogatory' },
    moscow: { RU: 'Телефон в Москве:', EN: 'Phone in Moscow:' },
    estonia: { RU: 'Телефон в Эстонии:', EN: 'Phone in Estonia:' },
    rights: {
      RU: 'Все права защищены',
      EN: 'All rights reserved',
    },
  },
  QUESTIONARY: {
    title: { RU: 'Опросный лист', EN: 'Questionnaire' },
    text: {
      RU: ' Заполните форму опросного листа для того, чтобы наши специалисты определили возможности изготовить оборудование и определить его примерную стоимость.',
      EN: 'Fill out the questionnaire form in order for our specialists to determine the possibilities of manufacturing equipment and determine its approximate cost.',
    },
    formTitle: { RU: 'Форма качества нефти', EN: 'Form of oil quality' },
    formName: {
      RU: 'Наименование организации *',
      EN: 'Name of the organization *',
    },
    formContact: {
      RU: 'Контактное лицо *',
      EN: 'Contact person *',
    },
    formAddress: {
      RU: 'Юридический адрес компании *',
      EN: 'Legal address *',
    },
    formPhone: {
      RU: 'Телефон *',
      EN: 'Phone *',
    },
    formEmail: {
      RU: 'E-mail *',
      EN: 'E-mail *',
    },
    formLaboratory: {
      RU: 'Лаборатория организации *',
      EN: 'Organizations Laboratory *',
    },
    formDate: {
      RU: 'Дата отбора пробы нефти *',
      EN: 'Date of oil sampling *',
    },
    formBtn: {
      RU: 'Отправить',
      EN: 'Send',
    },
  },
  FORMSECTIONBIG: {
    formIndicator: {
      RU: 'Наименование показателя',
      EN: 'The name of the indicator',
    },
    formTesting: {
      RU: 'Метод испытаний',
      EN: 'Testing method',
    },
    formResult: {
      RU: 'Результат испытаний',
      EN: 'Test result',
    },
    formBtn: {
      RU: ' Отправить заявку',
      EN: 'Submit an application',
    },
    formInfo1: {
      RU: 'Температура нефти при условиях измерения объема (°C)',
      EN: 'Oil temperature under volume measurement conditions (°C)',
    },
    formInfo2: {
      RU: 'Давление нефти при условиях измерения объема (МПа)',
      EN: 'Oil pressure under volume measurement conditions (MPa)',
    },
    formInfo3: {
      RU: 'Плотность нефти при температуре и давлении в условиях измерений объема (кг/куб. м)',
      EN: 'Oil density at temperature and pressure under volume measurement conditions (kg/m3)',
    },
    formInfo4: {
      RU: 'Плотность нефти при 20 °C (кг/куб. м)',
      EN: 'Oil density at 20 ° C (kg/m3)',
    },
    formInfo5: {
      RU: 'Плотность нефти при 15 °C (кг/куб. м)',
      EN: 'Oil density at 15 ° C (kg/m3)',
    },
    formInfo6: {
      RU: 'Массовая доля воды (%)',
      EN: 'Weight fraction of water (%)',
    },
    formInfo7: {
      RU: 'Массовая концентрация хлористых солей (мг/куб. дм)',
      EN: 'Mass concentration of chloride salts (mg/dm3)',
    },
    formInfo8: {
      RU: 'Массовая доля механических примесей (%)',
      EN: 'Mass fraction of mechanical impurities (%)',
    },
    formInfo9: {
      RU: 'Массовая доля серы (%)',
      EN: 'Sulphur mass fraction (%)',
    },
    formInfo10: {
      RU: 'Давление насыщенных паров (кПа)',
      EN: 'Saturated vapour pressure (kPa)',
    },
  },
  PLUG: {
    text: { RU: 'Раздел в разработке', EN: 'Chapter in developing' },
  },
  CAROUSEL: {
    title: { RU: 'Галерея', EN: 'Gallery' },
  },
  PRODUCT2: {
    title: { RU: 'Водородная энергетика', EN: 'Hydrogen energy' },
    subtitle: {
      RU: 'Перспективные разработки в области водородной энергетики:',
      EN: 'Promising developments in the field of hydrogen energy:',
    },
    text1: {
      RU: ' 1 Разрабатываем методы получения водорода на плазменном излучателе в малом вакууме в индукционном поле. Производим деление на атомарный водород и кислород.',
      EN: '1  We develop methods for obtaining atomic hydrogen by special preparation of water to the desired consistency in an installation with a high-frequency emitter using a coronary discharge. This manipulation allows obtaining a large yield of atomic hydrogen and oxygen separately.',
    },
    text2: {
      RU: '2 Разрабатываем методы получения атомарного водорода путем специальной подготовки воды до нужной консистенции. На установке с высокочастотным излучателем при помощи коронарного разряда. Данная манипуляция позволяет получить большой выход атомарного водорода и отдельно кислорода.',
      EN: '2  We are developing methods for producing hydrogen on a plasma radiator in a small vacuum in an induction field. We divide atomic hydrogen and oxygen.',
    },
  },
  PRODUCT6: {
    title: { RU: 'Утилизация нефтешламов', EN: 'Disposal of oil sludge' },
    subtitle: {
      RU: 'Утилизация различных видов нефтешламов',
      EN: 'Disposal of various types of oil sludge',
    },
    text: {
      RU: 'Установка производит очистку земли и воды от нефтезагрязнений и дальнейшей его утилизации или переработки',
      EN: 'The installation cleans the land and water from oil pollution and its further disposal or processing.',
    },
  },
  PRODUCT5: {
    title: { RU: 'Утилизация масла', EN: 'Disposal oil' },
    subtitle: {
      RU: 'Утилизация масла',
      EN: 'Disposal oil',
    },
    text: {
      RU: 'Установка по утилизации и регенерации моторных масел: возможность получения печного топлива, основу для дальнейшего производства моторных масел или получение светлых нефтепродуктов.',
      EN: 'Installations for the utilization and regeneration of motor oils. For the purposes of obtaining furnace fuel, for further production of motor oils or for the production of light petroleum products.',
    },
  },
  PRODUCT4: {
    title: { RU: 'Разделение нефти', EN: 'Disposal oil' },
    subtitle: {
      RU: 'Разделение на фракции на базе мобильной установки с высоким процентом выхода светлых нефтепродуктов.',
      EN: 'Disposal oil',
    },
    text1: {
      RU: 'Установка производит полный цикл переработки сырья: очистку от мех примесей, обессоливание и обезвоживание. В дальнейшем подготовленное сырье проходит дополнительную ступень обработки насыщения газами и реактивами. Дальше насыщенное сырье поступает на первый испаритель, где происходит отделение лёгкой фракции. Остатки тяжёлого сырья с первого испарителя поступает на стадию насыщения, где вновь происходит газирование и добавление реактивов. В последствии поступает на второй испаритель, где происходит глубокое разделение на фракции.',
      EN: 'The plant performs a full cycle of processing of raw materials: cleaning from mechanical impurities, desalination and dehydration. After this, the prepared raw materials undergo an additional stage of saturation processing with gases and reagents. Then the saturated raw material enters the first evaporator, where the light fraction is separated. The remains of heavy raw materials from the first evaporator enter the saturation stage, where carbonation and addition of reagents take place again. Subsequently, it enters the second evaporator, where there is a deep separation into fractions.',
    },
    text2: {
      RU: ' Компания Октан использует только современные технологии для производства технологических установок. Мы индивидуально рассмотрим вашу заявку на изготовление нефтеперерабатывающего оборудования и найдем наилучший способ для ее реализации.',
      EN: 'Oktan LLC uses only modern technologies for the technological installations production. We will individually consider your application for the oil refining equipment manufacture and find the best way to implement it.',
    },
    text3: {
      RU: 'Технологические установки по переработке нефти, предназначенные для эксплуатации на заводах, должны быть оборудованы системами противоаварийной автоматической защиты, служащей для предупреждения аварийных ситуаций, а также системами регулирования параметров процесса нефтепереработки, автоматического контроля и освобождения установки от нефтепродуктов в аварийный резервуар в случае возникновения аварии.',
      EN: 'Please, make sure that technological installations for oil refining intended for operation at plants must be equipped with automatic emergency protection systems. In addition, there should be systems for regulating the parameters of the refining process, automatic control and release of the installation from petroleum products into an emergency tank in the event of an accident.',
    },
    text4: {
      RU: 'Изготовление нефтеперерабатывающего оборудования, используемого при низких температурах, предусматривает оснащение установки системами обогрева трубопроводной арматуры и непосредственно трубопроводов вкупе с остальным технологическим оборудованием и помещениями для работников.',
      EN: 'The manufacture of oil refining equipment used at low temperatures provides for equipping the installation with heating systems for pipeline fittings and pipelines directly, together with the rest of the technological equipment and premises for employees.',
    },
    text5: {
      RU: 'Кроме того, изготовление нефтеперерабатывающего оборудования предполагает проектирование и производство устройств и механизмов, способных противостоять коррозии.',
      EN: 'In addition, the production of oil refining equipment involves the design and production of devices and mechanisms that can withstand corrosion. ',
    },
    text6: {
      RU: 'Добиться этого можно при соблюдении двух условий: технологические установки должны быть выполнены из высоколегированной стали, а качество сырья, используемого в процессе переработки, должно быть действительно высоким. Стоит учитывать, что в зависимости от комплектации технологической установки переработки нефти цены будут меняться!',
      EN: 'You can achieve this if you meet two conditions: process units must be made of high alloy steel, and the quality of the raw materials used during processing must be high. Prices can differ depending on the configuration of the technological oil refining unit.',
    },
    text7: {
      RU: 'Предприятия, осуществляющие изготовление установок по переработке, поставляют на рынок такие технические устройства, как теплообменники, печи подогрева нефти и ресиверы, газовые и нефтегазовые сепараторы, используемые для дегазации нефти и обеспечивающие на выходе минимальное содержание жидкости.',
      EN: ' Enterprises engaged in the manufacture of processing plants supply to the market such technical devices as heat exchangers, oil heating furnaces and receivers, as well as gas and oil separators used for oil degassing and providing a minimum liquid content at the outlet.',
    },
    text8: {
      RU: 'Цена на изготовление установок первичной переработки нефти в бензин (технологические установки переработки нефти) включает в себя также производство различных фильтров, трубных пучков и ёмкостей, выдерживающих высокие температуры.',
      EN: 'The price for the production of primary oil-to-gasoline processing units (technologic oil refining units) also includes the manufacture of various filters, pipe bundles and containers that withstand high temperatures.',
    },
    text9: {
      RU: 'Завод по переработке нефти применяет данные конструкции для слива масел и конденсата.',
      EN: 'The oil refining plant uses these structures to drain oil and condensate.',
    },
    text10: {
      RU: ' Сегодня мы выполняем проектирование и изготовление нефтеперерабатывающего оборудования, позволяющее увеличивать глубину переработки нефти до 95%.',
      EN: 'Today we carry out the design and manufacture of oil refining equipment, which allows us to increase the depth of oil refining to 95%.',
    },
    text11: {
      RU: 'Помимо этого компании, специализирующиеся на изготовлении нефтеперерабатывающего оборудования, выпускают разнообразные автоматические и полуавтоматические дозиметры и определители.',
      EN: 'In addition, companies specializing in the manufacture of oil refining equipment, produce a variety of automatic and semi-automatic dosimeters and determinants.',
    },
    text12: {
      RU: ' Если вам необходимы услуги компании, для которой технологические установки переработки нефти в бензин — не только вид деятельности, а образ жизни, обращайтесь и убеждайтесь: работа с профессионалами — это грамотный подход к решению любой задачи и гарантия эффективного результата.',
      EN: ' We are professionals for whom technological installations for refining oil into gasoline are not only a type of activity but a way of life. Contact us and make sure that working with us includes a competent approach to solving any task and a guarantee of efficient results.  ',
    },
    text13: {
      RU: 'К тому же цена на наше оборудование Вас приятно удивит!',
      EN: 'We will happily discuss our price ranges which may pleasantly surprise you.',
    },
  },
  PRODUCT1: {
    title: {
      RU: 'Снижение содержания серы',
      EN: 'Reduction of sulfur content',
    },
    subtitle: {
      RU: 'Снижение содержания серы в нефти и нефтепродуктов',
      EN: 'Reduction of sulfur content in oil and petroleum products',
    },
    text1: {
      RU: '1 Снижение содержания серы в нефти и нефтепродуктах происходит путем добавления реактивов на установке компаундирования и дальнейшей очистки сырья от реактивов с серой.',
      EN: '1 Reduction of sulfur content in oil and petroleum products occurs by adding reagents at the compounding plant and then further purification of raw materials from reagents with sulfur.',
    },
    text2: {
      RU: ' 2 Снижение содержания серы в нефти и нефтепродуктов происходит путем насыщения нефти оксидами металлов. Насыщенная нефть поступает в реактор, после реакции оксидов в реакторе сырье поступает в ловушку, где металлы с серой выводятся',
      EN: '2 The reduction of sulfur content in oil and petroleum products occurs by passing oil through the reactor, in which sulfur reacts in a plasma installation and is mixed with resinous and bitumen fractions, which then falls to the bottom of the reactor, leaving light and purified of resin and sulfur oil rise.',
    },
    text3: {
      RU: '3 Снижение содержания серы в нефти и нефтепродуктах происходит путем прохождения нефти через реактор, в котором сера вступает в реакцию на плазменной установке и происходит её смешивание со смолистыми и битумными фракциями, и выпадают в низ реактора, а легкая и отчищенная от серы и смолы нефть поднимается вверх.',
      EN: '3 Reduction of sulfur content in oil and petroleum products occurs by saturation of oil with metal oxides. When saturated oil enters the reactor, after the oxides reaction, the raw material enters the trap, where metals with sulfur are removed.',
    },
    text4: {
      RU: ' На сегодняшний день, обессеривание нефти и нефтепродуктов, а также квалифицированное использование выделенных сернистых соединений является одной из важнейших задач комплексной очистки нефти и ее переработки. Формы сернистых нефтяных соединений представлены в виде активной (сера элементарная, сероводород, еркаптаны) и пассивной (сульфиды, дисульфиды, тиофен и др.) серы.',
      EN: 'One of the most important tasks of complex oil treatment and processing today is the desulfurization of oil and oil products, as well as the qualified use of isolated sulfur compounds. Sulfurous petroleum compounds forms are available in the active (elemental sulfur, hydrogen sulfide, mercaptans) and passive (sulfides, disulfides, thiophene, etc.) forms of sulfur. ',
    },
    text5: {
      RU: 'Ее содержание варьируется от сотых долей до 8%, в редких случаях концентрация серы превышает 10% по массе. Технологии сероочистки сложны и капиталоемки, поэтому высокосернистая нефть продается со скидкой по отношению к малосернистым сортам.',
      EN: 'Ее Its content varies from hundredths to 8%, but in rare cases, the concentration of sulfur exceeds 10% in weight. Sulfur cleaning technologies are complex and capital intensive, so high-sulfur oil is sold at a discount versus low-sulfur varieties.',
    },
    text6: {
      RU: 'Соответственно, от содержания серы в нефти зависят цены на нефтепродукты и с каждым годом требования к ее количеству в топливе ужесточаются. Например, принятый в Европе стандарт Евро-5 ограничивает содержание серы в дизельном топливе уровнем 0,001%.',
      EN: 'Accordingly, the prices of oil products depend on the sulfurs content in oil and the requirements for its quantity in fuel are tightened every year. For example, the Euro-5 standard adopted in Europe limits the sulphur content of diesel fuel to 0.001%.',
    },
    title1: {
      RU: 'Коррозия',
      EN: 'Corrosion',
    },
    text7: {
      RU: ' Наличие серы в нефтяных фракциях, особенно в активной форме, негативно сказывается на их эксплуатационных свойствах, что в дальнейшем приводит к следующим последствиям: повышенное смолообразование, снижение уровня стабильности, ухудшение детонационной стойкости топлив, интенсивное, образование нагаров, значительное увеличение коррозии двигателей и др.',
      EN: 'The presence of sulfur in oil fractions, especially in the active form, negatively affects their operating properties, which further leads to the following consequences: increased tar formation, a decrease in the level of stability, deterioration of the detonation resistance of fuels, intensive, formation of carbon deposits, a significant increase in engine corrosion, etc.',
    },
    text8: {
      RU: ' Серосодержащие соединения неравномерно распределяются по фракциям нефти, и, как правило, их концентрация увеличивается с повышением температуры кипения. Наиболее часто сера в нефтепродуктах встречается в следующих формах:',
      EN: 'Sulfur-containing compounds are unevenly distributed among oil fractions, and, as a rule, their concentration increases with an increase in boiling point. The most common sulfur in petroleum products occurs in the following forms:',
    },
    UlLiTitle: {
      RU: 'Активная сера (наиболее агрессивная):',
      EN: 'Active sulfur (the most aggressive):',
    },
    UlLi: {
      RU: [
        'Сера элементарная (до 0,1% мас. от массы всей нефти);',
        'H2S – сероводород (нефти, содержащие в своем составе сероводород, могут вызвать сильное коррозионное разрушение резервуаров, судов, цистерн и трубопроводов);',
        'R-SH – меркаптановые соединения (15% от всех сернистых соединений нефти, одна из самых неблагоприятных примесей нефтепродуктов, так как способствует коррозии, смолообразованию в крекинг-бензинах, а также придает неприятный запах. Содержание меркаптановой серы ограничивается: в дизельных топливах – до 0,01 %, в реактивных – до 0,005 %);',
      ],
      EN: [
        'Elemental sulfur (up to 0.1% by weight. from all oil mass);',
        'H2S - hydrogen sulfide (oils containing hydrogen sulfide in their composition can cause severe corrosion destruction of tanks, ships, cisterns and pipelines);',
        'R-SH - mercaptan compounds (15% of all sulfur compounds of oil, one of the most unfavorable impurities of petroleum products, as it promotes corrosion, tar formation in cracking gasoline, and also gives an unpleasant odor. The content of mercaptan sulfur is limited: in diesel fuels – up to 0.01%, in jet fuels - up to 0.005%);',
      ],
    },
    UlLiTitle1: {
      RU: 'Остаточная сера:',
      EN: 'Residual sulfur:',
    },
    UlLi1: {
      RU: [
        'R-S-R – сульфиды, R-S-S-R – дисульфиды (50–80% от всех сернистых соединений нефти);',
        'C4H4S – тиофен и его гомологи (наиболее химически стабильные неуглеводородные соединения, входящие в состав нефтепродуктов.);',
        'Карбонилсульфид.',
      ],
      EN: [
        'R-S-R - sulfides, R-S-S-R - disulfides (50-80% of all sulfur oil compounds);',
        'C4H4S - thiophene and its homologues (the most chemically stable non-hydrocarbon compounds that are part of petroleum products.)',
        'carbonyl sulfide.',
      ],
    },
    text9: {
      RU: ' Выбор метода удаления сернистых соединений из нефти и ее фракций в основном определяется технологической и экономической эффективностью, а также отсутствием нежелательных побочных процессов и доступностью реагентов.',
      EN: 'The choice of a method for removing sulfur compounds from oil and its fractions is mainly determined by technological and economic efficiency. ',
    },
    text10: {
      RU: ' Существующие технологии обессеривания принципиально можно разделить на два направления: очистка сырой нефти (зона первичных процессов) и очистка нефтяных фракций (зона переработки). Отсутствие универсальной технологии обессеривания говорит о недостатках и разобщенности современных методов.',
      EN: 'As well as the absence of undesirable side processes along with the availability of reagents. Existing desulfurization technologies can be fundamentally divided into two directions. One of them is crude oil purification (primary processes zone), and another is the purification of oil fractions (refining zone). The absence of a universal desulfurization technology indicates the shortcomings and disunity of modern methods.',
    },
    text11: {
      RU: 'Хотя ниже будут подробнее рассмотрены технологии, основанные на адсорбции, которые можно считать наиболее универсальными для применения в случае как сырой нефти, так и ее фракций и нефтепродуктов.',
      EN: 'However, we will discuss the technologies based on adsorption in more detail below, as we consider them to be the most versatile for crude oil and its fractions and petroleum products.',
    },
    text12: {
      RU: 'На сегодняшний день одной из наиболее освоенных технологий сероочистки нефтяных фракций является гидроочистка, но перспектива дальнейшего развития данного метода находится под сомнением, так как имеет ряд недостатков. Это сложность реализации процесса, недостаточная глубина очистки, использование дорогих катализаторов и большого количество водорода. Данная проблема дала импульс развитию альтернативных направлений сероочистки, среди которых выделяют окисление, экстракцию, осаждение, алкилирование и адсорбцию',
      EN: 'To date, one of the most mastered technologies for desulfurization of oil fractions is hydrotreating, but the prospect of further development of this method is in doubt, as it has many disadvantages. Those are the complexity of the process, insufficient depth of purification, the expensive catalysts usage and a large amount of hydrogen. This problem gave impetus to the development of alternative desulfurization methods, among which oxidation, extraction, precipitation, alkylation and adsorption are distinguished',
    },
    text13: {
      RU: ' Технологии зоны первичных процессов применяются в основном для очистки и подготовки к транспорту сырой нефти и газоконденсатов.',
      EN: 'Primary application rpocess area technologies mainly for cleaning and preparation for transport of crude oil and gas condensates.',
    },
    text14: {
      RU: 'Для безопасного хранения и транспортировки высокосернистой нефти достаточным условием является удаление из нее сероводорода и меркаптановых соединений С1–С2. Данная проблема может быть решена благодаря селективному извлечению сернистых соединений щелочным раствором или окислением меркаптанов молекулярным кислородом. Но, к сожалению, такой подход применим исключительно к очистке легких нефтей и газоконденсатов и нецелесообразен в демеркаптанизации тяжелых нефтей (например, нефти Татарстана).',
      EN: 'A sufficient condition for safe storage and transportation of high–sulfur oil is the removal of hydrogen sulfide along with mercaptan compounds C1-C2. This problem can be solved by selective extraction of sulfur compounds with an alkaline solution or oxidation of mercaptans with molecular oxygen [4]. Yet, unfortunately, this approach applies exclusively to the purification of light oils and gas condensates and is impractical in the demercaptanization of heavy oils (for example, Tatarstan oil).',
    },
    text15: {
      RU: 'С целью дезодорирующей очистки тяжелой нефти могут найти применение нейтрализаторы, которые в небольших количествах добавляются в сырье (сырую нефть) и селективно реагируют с сероводородом и меркаптанами. При добавлении нейтрализаторов начинается интенсивное взаимодействие с меркаптанами, в результате чего образуются нетоксичные инертные соединения (недостаток: активная нефть переходит в пассивную, но не извлекается, следовательно, нужна дополнительная стадия извлечения).',
      EN: 'For deodorized purification of heavy oil, one can use neutralizers. They are added in small quantities to raw materials (e.g. crude oil) and selectively react with hydrogen sulfide and mercaptans. After neutralizers are added, intensive interaction with mercaptans begins. As a result, non-toxic inert compounds are formed. Yet, the disadvantage to this would be that active oil becomes a passive oil, but is not extracted and therefore, an additional extraction stage is needed.  ',
    },
    text16: {
      RU: 'Существуют методы сероочистки нефти и нефтяных фракций путем экстракции растворителями. Явным недостатком подобных процессов выступают ограниченная селективность указанных растворителей на ряду с высокой растворимостью экстрагентов, что является сдерживающим фактором для практической реализации подобных разработок. ',
      EN: 'There are methods of desulfurization of oil and oil fractions by solvent extraction. Yet, there are obvious disadvantages of such processes like the limited selectivity of these solvents along with the high solubility of extractants. These are the limiting factors for the practical implementation of such developments.',
    },
    text17: {
      RU: 'Наиболее эффективной и промышленно освоенной технологией удаления сероводорода и низкомолекулярных меркаптанов, главным образом, из сырой нефти и газоконденсатов признаны процессы жидкофазной окислительной демеркаптанизации.',
      EN: 'There are methods of desulfurization of oil and oil fractions by solvent extraction. Yet, there are obvious disadvantages of such processes like the limited selectivity of these solvents along with the high solubility of extractants. These are the limiting factors for the practical implementation of such developments.',
    },
    UlLiTitle2: {
      RU: 'Таблица иллюстрирует ряд технологий, которые имеют на наш общие недостатки:',
      EN: 'The table illustrates several technologies that have common disadvantages in our opinion:',
    },
    UlLi2: {
      RU: [
        'необходимость отделения очищенного топлива от фазы окислителя;',
        'очистка нефти до определенного значения ppm.',
      ],
      EN: [
        'the need to separate the purified fuel from the oxidizer phase',
        'the purification of oil to a specific ppm value.',
      ],
    },
    text18: {
      RU: 'Логичным будет предположение о возможности успешного комбинирования двух технологий (окисление + адсорбция) или же проектирование самостоятельной технологии очистки сырой нефти и ее фракций, основанной на адсорбции.',
      EN: 'It would be logical to assume the possibility of a successful combination of the two technologies (oxidation with adsorption) or the design of an independent technology for the purification of crude oil and its fractions based on adsorption.',
    },
    text19: {
      RU: ' Возможность использования адсорбции как самостоятельного метода очистки или в качестве заключительной стадии сероочистки нефти или ее фракций является весьма привлекательной, так как данная технология позволяет удалить даже остаточное содержание (следы) сернистых соединений.',
      EN: 'The possibility of using adsorption as an independent purification method or as the final stage of desulfurization of oil or its fractions is quite attractive since this technology allows you to remove even the residual content (traces) of sulfur compounds.',
    },
    UlLiTitle3: {
      RU: 'Помимо этого, к достоинствам данного метода можно отнести следующие:',
      EN: 'In addition, the advantages of this method include the following:',
    },
    UlLi3: {
      RU: [
        'низкий уровень капитальных затрат;',
        'простота аппаратуры;',
        'возможность организовывать процесс при значительно более мягких условиях;',
        'безопасность производства (отсутствие высокого давления и температуры).',
      ],
      EN: [
        'low level of capital expenditures;',
        'simplicity of the equipment;',
        'the ability to organize the process under much milder conditions;',
        'production safety (absence of high pressure and temperature).',
      ],
    },
    text20: {
      RU: 'Очевидно, как и любой процесс, данный метод очистки имеет ряд своих недостатков: ограниченная сорбционная емкость, периодичность процесса в связи с регенерацией или выделением адсорбента и непосредственно сам процесс регенерации.',
      EN: ' Obviously, like any process, this purification method has several disadvantages: limited sorption capacity, the frequency of the process due to regeneration or release of adsorbent and the regeneration process itself.',
    },
    text21: {
      RU: 'Оптимальным вариантом реализации процесса является селективная адсорбционная очистка на цеолитах, силикагеле, оксиде алюминия или оксиде цинка, проводимая при атмосферном давлении и умеренной температуре.',
      EN: 'The best way to implement the process is selective adsorption purification on zeolites, silica gel, aluminum oxide or zinc oxide, carried out at atmospheric pressure and moderate temperature.',
    },
    text22: {
      RU: 'Так, авторы патента проводили очистку дизельной фракции адсорбцией на чистом силикагеле и окиси алюминия в центробежном поле на роторном аппарате. Но главным недостатком описанного метода является периодичность процесса за счет выгрузки адсорбента.',
      EN: 'Thus, the authors of the patent carried out the purification of the diesel fraction by adsorption on pure silica gel and aluminum oxide in a centrifugal field on a rotary apparatus. However, the periodicity of the process due to the discharge of the adsorbent remains the main disadvantage of the described method.  ',
    },
    text23: {
      RU: ' Примером адсорбционной сероочистки может служить процесс IRVAD, разработанный инжиниринговой компанией Blackand Veatch Pritchard',
      EN: ' An example of adsorption desulfurization is the IRVAD process developed by the engineering company Black and Veatch Pritchard.',
    },
    text24: {
      RU: ' В технологии IRVAD используется сорбент на основе оксида алюминия. Для увеличения емкости адсорбента его обрабатывают неорганическими промотерами, тем самым увеличивая его селективность. Процесс проводится при низком давлении, но температуре порядка 240°С. По завершении процесса регенерация сорбента осуществляется гидрированием.',
      EN: 'IRVAD technology uses a sorbent based on aluminum oxide. To increase the capacity of the adsorbent, it is treated with inorganic promoters, thereby increasing its selectivity. The process is carried out at low pressure but at a temperature of around 240 ° C. At the end of the process, the sorbent is regenerated by hydrogenation.',
    },
    text25: {
      RU: 'Наиболее известным примером адсорбционной сероочистки моторных топлив является технология удаления серы «Phillips S-Zorb» (ConocoPhillips Company, США).Процесс осуществляется в кипящем слое по схеме, сходной с процессом IRVAD, но при более жестких условиях (температура 340–410°C, давление 2–20 бар), что является существенным недостатком технологии, так как процесс адсорбции предпочтительней проводить в более мягких условиях.',
      EN: 'The most famous example of adsorption desulfurization of motor fuels is the Phillips S-Zorb sulfur removal technology (ConocoPhillips Company, USA). The process is carried out in a fluidized bed according to a scheme similar to the IRVAD process, but under more stringent conditions (temperature 340-410 ° C, pressure 2-20 bar), which is a significant disadvantage of the technology since the adsorption process is preferable to be carried out in milder conditions.',
    },
    text26: {
      RU: 'Согласно нашим расчетам и результатам проведенных испытаний с использованием различного исходного продукта, включая сланцевое масло и мазут, идея комплексной сероочистки нефти и ее фракций при помощи установки EDDX является весьма перспективным направлением в мире нефтепереработки, которое обладает несомненными, на наш взгляд, достоинствами.',
      EN: 'According to our calculations and the results of the tests carried out using various starting products, including shale oil and fuel oil, the idea of complex desulfurization of oil and its fractions using the EDDX unit is a very promising direction in the world of oil refining. This, in our opinion, has undoubted advantages.',
    },
    UlLiTitle4: {
      RU: 'Достоинства:',
      EN: 'Advantages:',
    },
    UlLi4: {
      RU: [
        'высокая эффективность и производительность;',
        'простота конструкции и масштабируемость на разные объемы;',
        'гибкость технологии – возможность одновременного использования разных катализаторов, температурных режимов и низкотеипературной плазмы;',
        'возможность комплексного использования для очистки нефти и нефтепродуктов от нежелательных примесей с последующим их извлечением, а также в цепочке с другими технологиями;',
        'низкая энергоемкость и безопасность – за счет работы при мягких условиях протекания процесса;',
        'экономичность – низкий уровень капитальных и эксплуатационных затрат;',
        'инновационность;',
        'импортонезависимость.;',
      ],
      EN: [
        'high efficiency and productivity;',
        'simplicity of design and scalability for different volumes;',
        'flexibility of the technology – the possibility of simultaneous use of different catalysts, temperature regimes and low-temperature plasma;',
        'the possibility of complex use for the oil purification and petroleum products from undesirable impurities with their subsequent extraction, as well as in a chain with other technologies;',
        'low energy consumption and safety - due to operation under mild process conditions;',
        'cost-effectiveness – low level of capital and operating costs;',
        'innovation;',
        'import-independence.',
      ],
    },
    text27: {
      RU: ' Таким образом, данная технология представляет собой весьма эффективную альтернативу существующим способам сероочистки нефти и нефтяных фракций.',
      EN: 'Thus, this technology is a very effective alternative to existing methods of desulfurization of oil and oil fractions.',
    },
  },
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE': {
      return {
        ...state,
        language: action.language,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setLanguage: (language) => ({
    type: 'SET_LANGUAGE',
    language,
  }),
};

export const getLanguage = (language) => (dispatch) => {
  localStorage.setItem('language', language);
  dispatch(actions.setLanguage(language));
};

export default languageReducer;
