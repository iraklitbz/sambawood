export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        es: {
            navbar: {
                home: 'Inicio',
                company: 'Empresa',
                service: 'Servicios',
                more: 'y más',
                references: 'Referencias',
                medium: 'Media',
                contact: 'Contacto'
            },
            home: {
               hero: {
                    bigHeadline: 'Montaje de tiendas',
                    smallHeadline: 'coordinación de proyectos',
                    subHeadline: 'y más'
               },
               sectionOne: {
                    headline: '“El servicio significa ver todo el negocio a través de los ojos del cliente.” – Axel Haitzer',
                    text: 'Este es nuestro lema porque siempre nos orientamos por sus planes y deseos para asegurar su satisfacción. Con nuestro equipo tiene un socio fiable y competente que trae conocimientos artesanales por su larga experiencia a nivel internacional. Durante más de 16 años realizamos negocios en el ámbito de gestión de proyectos y construcción retail, especialmente en cooperación con IKEA, y gestionamos tanto grandes proyectos como prequeños proyectos con una gran pasión. Nuestra amplia lista de referencia y el feedback de nuestros clientes lo demuestran.',
                    text2: 'Estamos convencidos de que sus proyectos estarán en buenas manos, si eligen nuestra empresa.',
                    text3: '¿También le hemos convencido a usted?' 
                },
                sectionTwo: {
                    boxOne: {
                        headline: 'Un equipo de montadores con experiencia internacional y una variedad de conocimientos lingüísticas',
                        text: 'Nuestro equipo tiene una larga experiencia a causa de sus trabajos a nivel mundial. Además, se caracteriza por el dominio de al menos tres lenguas diferentes así que también podemos realizar una comunicación fluida en el extranjero.'
                    },
                    boxTwo: {
                        headline: 'Nuestros servicios de un vistazo',
                        text: 'Nuestro equipo experimentado se dedica a diferentes ámbitos de trabajo para transformar ideas en espacios de calidad. Estas son algunas de nuestras actividades profesionales: ',
                        list:  'Diseño de interiores',
                        list2: 'Construcción retail',
                        list3: 'Renovación y saneamiento',
                        list4: 'Montaje y desmontaje profesional',
                        list5: 'Iluminación',
                        list6: 'Decoración',
                        list7: 'Trabajos gráficos',
                        list8 : 'Presentación de mercancía',
                        list9: 'Montaje de paredes',
                        list10: 'Trabajos de pintura',
                        list11: 'Colocación de suelos'
                    },
                    boxThree: {
                        headline: 'Alta resistencia y flexibilidad.',
                        text: 'Estas son dos características que nos distinguen de otras empresas porque siempre nos esforzamos por la satisfacción de nuestros clientes, si bien las condiciones son difíciles. Muchas veces no es fácil. Sin embargo, no es imposible terminar a tiempo un proyecto de acuerdo con los planes y deseos de nuestros clientes en situaciones críticas. Nos adaptamos a las condiciones determinadas en todos los respectos: Puede contar con nosotros a cualquier hora. Además, estamos dispuestos a realizar trabajo adicional, si es necesario. '
                    }
               },
            },
            company: {
                headline: 'La empresa',
                director: {
                    name: 'Jemal Gorgiladze',
                    ocupation: 'Director general'
                },
                text: 'Sambawood tiene su sede en España, pero la oficina se encuentra en Alemania. La empresa se basa en 16 años de experiencia. Comenzó como una empresa alemana. Ahora trabaja principalmente como subcontratista para varios proyectos de IKEA. También nos dedicamos al saneamiento y a la renovación de edificios privados.',
                text2: 'Debido a las actividades multifacéticas en la construcción retail, la compañía aporta experiencia en numerosas áreas. Nuestras habilidades son diversas y van desde trabajos de construcción hasta costura y montaje de muebles.',
                languages: 'Idiomas'
            },
            services: {
                headline: 'Servicios',
                sectionOne: {
                    headline: 'Sambawood: una empresa con una variedad profesional',
                    text: 'Nuestra empresa promueve un asesoramiento profesional para la realización de proyectos en diferentes ámbitos. Colaboramos con nuestros clientes para encontrar las mejores soluciones posibles. Para ello, utilizamos nuestras competencias de planificación y todas nuestras experiencias manuales para asegurar la satisfacción de nuestros clientes.',
                    text2: 'Acompañamos a nuestros clientes desde la planificación hasta la realización y siempre nos esforzamos para realizar los proyectos y planes según las necesidades de nuestros clientes. Siempre ejercemos nuestros trabajos de manera profesional y diligente, incluso si las condiciones son duras. Por ello, nos caracterizamos por una alta flexibilidad y resistencia.',
                    headlineTwo: 'Asesoramiento',
                    list: 'Asesoramiento individual en la planificación',
                    list2: 'Coordinación de subcontratistas',
                    list3: 'Liderazgo y gestión de proyectos'
                },
                sectionTwo: {
                    boxOne: {
                        headline: 'Trabajos de techos',
                        list: 'Modificación y adaptación de paredes',
                        list2: 'Instalación de sistemas de techo diferentes'
                    },
                    boxTwo: {
                        headline: 'Construcción de mercado interior',
                        list: 'Montaje y desmontaje de sistemas de estanterías',
                        list2: 'Colocación de tabiques',
                        list3: 'Presentación de mercancía'
                    },
                    boxThree: {
                        headline: 'Trabajos de pared',
                        list: 'Fabricación y colocación de paredes expositivas',
                        list2: 'Instalación de puertas, ventanas, etc.'
                    },
                    boxFour: {
                        headline: 'Trabajos de pintura',
                        list: 'Lucir',
                        list2: 'Imprimar',
                        list3: 'Empapelar',
                        list4: 'Pintar',
                        list5: 'Barnizar'
                    },
                    boxFive: {
                        headline: 'Alicatado',
                        list: 'Eliminación de viejos azulejos',
                        list2: 'Preparación de paredes para el alicatado',
                        list3: 'Colocación de azulejos'
                    },
                    boxSix: {
                        headline: 'Trabajos de terreno',
                        list: 'Nivelación de suelos irregulares',
                        list2: 'Retirada de pavimento',
                        list3: 'Colocación de lámina, parquet, suelo vinílico y azulejo'
                    },
                    boxSeven: {
                        headline: 'Monataje de cocina',
                        list: 'Modificación de exposiciones de cocinas existentes',
                        list2: 'Adaptación de muebles y encimeras',
                        list3: 'Montaje profesional de muebles',
                        list4: 'Diseño conceptual de estudios de cocina'
                    },
                    boxEight: {
                        headline: 'Montaje de muebles',
                        list: 'Montaje profesional de muebles',
                        list2: 'Modificación de muebles'
                    },
                    boxNine: {
                        headline: 'Trabajos decorativos',
                        list: 'Colocación de etiquetas de precio',
                        list2: 'Instalación de iluminación',
                        list3: 'Colocación de paneles publicitarios'
                    },
                    boxTen: {
                        headline: 'Trabajos gráficos',
                        list: 'Colocación de materiales publicitarios e informativos'
                    },
                    boxEleven: {
                        headline: 'Presentación de mercancía y logística',
                       list: 'Llenar y vaciar áreas de venta',
                       list2: 'Colocación de mercancía'
                    },
                    boxTwelve: {
                        headline: 'Trabajos de costura',
                       list: 'Fabricación de cortinas y textiles',
                       list2: 'Fabricación de diferentes elementos decorativos'
                    }
                }
            },
            more: {
                headline: 'Y más',
                sectionOne: {
                    headline: 'Saneamiento y renovación',
                    text: 'Además de la construcción retail, nos dedicamos con una gran pasión al saneamiento y a la renovación de diferentes espacios. Para ello, acompañamos a nuestros clientes desde la planificación hasta el pulido final. Según el lema “La creatividad no tiene límites”, nuestro equipo creativo transforma sus sueños en espacios únicos. ¡Compruebe usted mismo nuestras creaciones!'
                },
                sectionTwo: {
                    headline: 'Elementos únicos para el interior y el exterior',
                    text: 'Nuestro estilo interior se caracteriza por la revitalización de materiales viejos e inutilizables. Los reciclamos para crear muebles únicos, estéticos y cualitativos. Entonces, i por qué deberíamos tirarlos? Usándolos, se puede crear espacios con un diseño industrial o rustical y natural. Ya sea madera, acero o cristal, transformamos cualquier tipo de material en una joya para su hogar. '
                }
            },
            references: {
                headline: 'Referencias',
                sectionOne: {
                    text: 'Durante les últimas años , Sambawood ha participado como subcontratista en numerosos proyectos nacionales e internacionales de IKEA que aparecen en la siguiente tabla. Además de los grandes proyectos , también se han implementado proyectos pequeños, pero, no obstante , no se mencionan aquí.',
                    table: {
                        year: '2004',
                        list: {
                            city: 'Bilbao',
                            county: 'España',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall'
                        }
                    },
                    table2: {
                        year: '2005',
                        list: {
                            city: 'Osnabrück',
                            county: 'Alemania',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall'
                        }
                    },
                    table3: {
                        year: '2006',
                        list: {
                            city: 'Murcia',
                            county: 'España',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall'
                        }
                    },
                    table4: {
                        year: '2007',
                        list: {
                            city: 'Madrid',
                            county: 'España',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall/Techo'
                        },
                        list2: {
                            city: 'Málaga',
                            county: 'España',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall/Techo'
                        },
                        list3: {
                            city: 'Porto',
                            county: 'Portugal',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall'
                        },
                        list4: {
                            city: 'Barcelona',
                            county: 'España',
                            work: 'Nueva construcción',
                            proyect: 'Área de textiles y alfombras'
                        }
                    },
                    table5: {
                        year: '2008',
                        list: {
                            city: 'Sevilla',
                            county: 'España',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list2: {
                            city: 'Parma',
                            county: 'Italia',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall'
                        },
                        list3: {
                            city: 'Lucerna / Aubonne',
                            county: 'Suiza',
                            work: 'Reconstrucción',
                            proyect: 'Montaje de muebles'
                        },
                        list4: {
                            city: 'Friburgo',
                            county: 'Alemania',
                            work: 'Reconstrucción',
                            proyect: 'Montaje de muebles'
                        }
                    },
                    table6: {
                        year: '2009',
                        list: {
                            city: 'Lisboa',
                            county: 'Portugal',
                            work: 'Reconstrucción',
                            proyect: 'Área de iluminación'
                        },
                        list2: {
                            city: 'Florencia',
                            county: 'Italia',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall'
                        }
                    },
                    table7: {
                        year: '2010',
                        list: {
                            city: 'Lisboa',
                            county: 'Portugal',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall'
                        },
                        list2: {
                            city: 'Ginebra',
                            county: 'Suiza',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        }
                    },
                    table8: {
                        year: '2011',
                        list: {
                            city: 'Bilbao',
                            county: 'España',
                            work: 'Reconstrucción',
                            proyect: 'Área de cocinas'
                        },
                        list2: {
                            city: 'Copenhague',
                            county: 'Dinamarca',
                            work: 'Reconstrucción',
                            proyect: 'Sala de exposición'
                        },
                        list3: {
                            city: 'Lucerna',
                            county: 'Swiza',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list4: {
                            city: 'Copenhague',
                            county: 'Dinamarca',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list5: {
                            city: 'Bruselas',
                            county: 'Bélgica',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list6: {
                            city: 'Lisboa',
                            county: 'Portugal',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list7: {
                            city: 'Lisboa',
                            county: 'Portugal',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        }
                    },
                    table9: {
                        year: '2012',
                        list: {
                            city: 'Bruselas – Anderlecht',
                            county: 'Bélgica',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        }
                    },
                    table10: {
                        year: '2013',
                        list: {
                            city: 'Bruselas – Zaventem',
                            county: 'Bélgica',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list2: {
                            city: 'Lieja',
                            county: 'Bélgica',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list3: {
                            city: 'Graz',
                            county: 'Austria',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        }
                    },
                    table11: {
                        year: '2014',
                        list: {
                            city: 'Arhus',
                            county: 'Dinamarca',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall / Sala de exposición'
                        },
                        list2: {
                            city: 'Gante',
                            county: 'Bélgica',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        }
                    },
                    table12: {
                        year: '2015',
                        list: {
                            city: 'Berlín',
                            county: 'Alemania',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list2: {
                            city: 'Kuwait',
                            county: 'Kuwait',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        }
                    },
                    table13: {
                        year: '2016',
                        list: {
                            city: 'Haaselt',
                            county: 'Bélgica',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall / Restaurante / Oficinas de Servicios'
                        },
                        list2: {
                            city: 'Mons',
                            county: 'Bélgica',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall / Restaurante / Oficinas de Servicios'
                        },
                        list3: {
                            city: 'Haarlem',
                            county: 'Países bajos',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall'
                        },
                        list4: {
                            city: 'Wuppertal',
                            county: 'Alemania',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall / Sala de exposición'
                        },
                        list5: {
                            city: 'Kaarst',
                            county: 'Alemania',
                            work: 'Reconstrucción',
                            proyect: 'Área de iluminación'
                        }
                    },
                    table14: {
                        year: '2017',
                        list: {
                            city: 'Osnabrück',
                            county: 'Alemania',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall / Techo / Swedish Food Market'
                        },
                        list2: {
                            city: 'Kaarst',
                            county: 'Alemania',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall / Techo / Swedish Food Market'
                        },
                        list3: {
                            city: 'Hannover',
                            county: 'Alemania',
                            work: 'Reconstrucción',
                            proyect: 'Restaurante'
                        }
                    },
                    table15: {
                        year: '2018',
                        list: {
                            city: 'Amsterdam',
                            county: 'Países bajos',
                            work: 'Reconstrucción',
                            proyect: 'Market Hall / Techo'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Países bajos',
                            work: 'Reconstrucción',
                            proyect: 'Hall de entrada'
                        }
                    },
                    table16: {
                        year: '2019',
                        list: {
                            city: 'Bielefeld',
                            county: 'Alemania',
                            work: 'Reconstrucción',
                            proyect: 'Sala de exposición / Área de camas y colchones'
                        },
                        list2: {
                            city: 'Kaarst',
                            county: 'Alemania',
                            work: 'Reconstrucción',
                            proyect: 'Sala de exposición / Área de camas y colchones'
                        }
                    },
                    table17: {
                        year: '2020',
                        list: {
                            city: 'Karlsruhe',
                            county: 'Alemania',
                            work: 'Nueva construcción',
                            proyect: 'Market Hall'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Países bajos',
                            work: 'Nueva construcción',
                            proyect: 'Oficina de mercado online'
                        }
                    },
                    table18: {
                        year: '2021',
                        list: {
                            city: 'Berlin',
                            county: 'Alemania',
                            work: 'Nueva construcción',
                            proyect: 'Workspace'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Países bajos',
                            work: 'Nueva construcción',
                            proyect: 'Officinas internas'
                        }
                    },
                    table19: {
                        year: '2022',
                        list: {
                            city: 'Amsterdam',
                            county: 'Países bajos',
                            work: 'Nueva construcción',
                            proyect: 'Cocina/comedor'
                        },
                        list2: {
                            city: 'Brno',
                            county: 'República Checa',
                            work: 'Nueva construcción',
                            proyect: 'Toda la tienda'
                        }
                    },
                    table20: {
                        year: '2023',
                        list: {
                            city: 'Würzburg',
                            county: 'Alemania',
                            work: 'Nueva construcción',
                            proyect: 'Sección de niños'
                        },
                        list2: {
                            city: 'Hamburg',
                            county: 'Alemania',
                            work: 'Nueva construcción',
                            proyect: 'Moorflet - Cocina/comedor'
                        },
                        list3: {
                            city: 'Hamburg',
                            county: 'Alemania',
                            work: 'Nueva construcción',
                            proyect: 'Schnelsen - Cocina/comedor'
                        }
                    }
                }
            },
            media: {
                headline: 'Medios',
            },
            contact: {
                headline: 'Contacto',
                smallheadline: '¿Cómo le podemos ayudar?',
                manager: 'Director',
                company: 'Sede de la empresa:',
                office: 'Sede de la oficina:',
                email: 'Email',
                phone: 'Tel',
                or: 'o a través del formulario de contacto',
                youemail: 'Su Email',
                subject: 'Asunto',
                message: 'Su mensaje',
                send: 'Enviar',
            },
            footer: {
                legal: 'Aviso legal',
                privacy: 'Política de privacidad',
            }
        },
        de: {
            navbar: {
                home: 'Home',
                company: 'Firma',
                service: 'Services',
                more: 'und mehr',
                references: 'Referenzen',
                medium: 'Medien',
                contact: 'Kontakt'
            },
            home: {
                hero: {
                     bigHeadline: 'Ladenbau',
                     smallHeadline: 'Projekkoordination',
                     subHeadline: 'und mehr'
                },
                sectionOne: {
                     headline: '„Service heißt, das ganze Geschäft mit den Augen des Kunden zu sehen“. – Axel Haitzer',
                     text: 'So lautet unser Motto, denn wir richten uns nach Ihren Plänen und Wünschen, um Sie zufrieden zu stellen. Mit unserem Team haben Sie einen zuverlässigen und kompetenten Partner an Ihrer Seite, der durch langjährige Erfahrungen im internationalen Bereich handwerkliches Fachwissen und Expertise mitbringt. Seit über 16 Jahren sind wir im Bereich Projektmanagement und Ladenbau – insbesondere in Kooperation mit IKEA – tätig und führen sowohl große als auch kleine Projekte mit großer Leidenschaft aus.',
                     text2: 'Das zeigen unsere umfangreiche Referenzliste und das Feedback unserer Kunden. Wir sind überzeugt, dass Ihre Projekte bei uns in guten Händen sind.',
                     text3: 'Haben wir auch Sie überzeugt?' 
                 },
                 sectionTwo: {
                     boxOne: {
                         headline: 'Ein Team  mit internationaler Erfahrung und umfangreichen Sprachkenntnissen',
                         text: 'Unser Team verfügt über zahlreiche Erfahrungen durch ihre Tätigkeiten im internationalen Bereich. Sie zeichnet sich weiterhin durch die Beherrschung von mindestens drei verschiedenen Sprachen aus, sodass auch im Ausland eine reibungslose Kommunikation stattfinden kann.'
                     },
                     boxTwo: {
                        headline: 'Unsere Leistungen auf einen Blick',
                        text: 'Unser eingespieltes Team widmet sich unterschiedlichen Arbeitsbereichen, um aus Ideen qualitative Räume zu schaffen. Das sind einige unserer Tätigkeiten: ',
                        list: 'Innnenraumgestaltung',
                        list2: 'Ladenbau',
                        list3: 'Renovierung und Sanierung',
                        list4: 'Professionelle Montage und Demontage',
                        list5: 'Beleuchtung',
                        list6: 'Dekoration',
                        list7: 'Grafische Arbeiten',
                        list8: 'Warenpräsentation',
                        list9: 'Wandmontage',
                        list10: 'Malertätigkeiten',
                        list11: 'Bodenarbeiten'
                     },
                     boxThree: {
                         headline: 'Hohe Belastbarkeit und Flexibilität',
                         text: 'Das sind zwei Eigenschaften, die uns auszeichnen, denn wir sind stets bemüht, unsere Kunden zufriedenzustellen, auch wenn die Bedingungen mal schwierig sind. Es ist oft nicht einfach, aber dennoch nicht unmöglich, ein Projekt in kritischen Situationen entsprechend den Plänen und Wünschen unserer Kunden rechtzeitig zu vollenden. Wir passen uns in jeglicher Hinsicht an die gegebenen Umstände an: Egal zu welcher Arbeitszeit, mit uns können Sie jederzeit rechnen. Auch sind wir – sofern nötig – durchaus bereit, Mehrarbeit zu leisten.'
                     }
                },
             },
             company: {
                headline: 'Die Firma',
                director: {
                    name: 'Jemal Gorgiladze',
                    ocupation: 'Geschäftsführer'
                },
                text: 'Der Sitz der Firma Sambawood ist in Spanien, das Büro sitzt jedoch in Deutschland. Sambawood basiert auf insgesamt 16 Jahren Erfahrung. Angefangen als deutsche Firma ist Sambawood nun hauptsächlich als Subunternehmen in unterschiedlichen IKEA-Projekten tätig. Weitere Tätigkeiten beziehen sich auf Privatbauten und Sanierungsarbeiten.',
                text2: 'Durch die facettenreichen Tätigkeiten im Ladenbau bringt die Firma Expertise in zahlreichen Bereichen mit. Unsere Kompetenzen sind vielseitig und reichen von Bauarbeiten bis hin zu Näharbeiten und Möbelmontage.',
                languages: 'Sprachen'
            },
            services: {
                headline: 'Service',
                sectionOne: {
                    headline: 'Sambawood: eine Firma mit professioneller Vielseitigkeit',
                    text: 'Unsere Firma setzt auf professionelle Beratungen für die Realisierung von Projekten in unterschiedlichen Bereichen. Wir kollaborieren mit unseren Kunden, um bestmögliche Lösungen zu finden. Hierfür setzen wir unsere Planungskompetenz und all unsere handwerklichen Erfahrungen ein. Wir begleiten unsere Kunden von der Planung bis hin zur Umsetzung und wir sind stets darum bemüht, Projekte und Pläne nach den Wünschen unserer Kunden zu richten.',
                    text2: 'Auch bei schwersten Bedingungen führen wir unsere Arbeiten gewissenhaft und professionell aus, sodass wir uns durch eine hohe Flexibilität und Belastbarkeit auszeichnen.',
                    headlineTwo: 'Beratung',
                    list: 'Individuelle Beratung bei der Planung',
                    list2: 'Koordination von Subunternehmern',
                    list3: 'Projektleitung und -management'  
                },
                sectionTwo: {
                    boxOne: {
                        headline: 'Deckenarbeiten',
                     list: 'Änderung und Anpassung bestehender Decken',
                     list2: 'Einbau unterschiedlicher Deckensysteme'
                    },
                    boxTwo: {
                        headline: 'Markthallenbau',
                     list: 'Montage und Demontage von Regalsystemen',
                     list2: 'Aufstellung von Zwischenwänden',
                     list3: 'Warenlegung'
                    },
                    boxThree: {
                        headline: 'Wandarbeiten',
                     list: 'Anfertigung und Aufbau von Ausstellungswänden',
                     list2: 'Einbau von Türen, Fenstern, etc.'
                    },
                    boxFour: {
                        headline: 'Malerarbeiten',
                     list: 'Spachteln',
                     list2: 'Grundieren',
                     list3: 'Tapezieren',
                     list4: 'Streichen',
                     list5: 'Lackieren'
                    },
                    boxFive: {
                        headline: 'Fliesenarbeiten',
                     list: 'Entfernung alter Fliesen',
                     list2: 'Vorbereitungsarbeiten für die Fliesenverlegung',
                     list3: 'Verlegearbeiten'
                    },
                    boxSix: {
                        headline: 'Bodenarbeiten',
                     list: 'Ausgleich von unebenen Böden',
                     list2: 'Entfernung alter Bodenbeläge',
                     list3: 'Verlegen von Laminat, Parkett, Kunststoffbelägen und Fliesen'
                    },
                    boxSeven: {
                        headline: 'Küchenmontage',
                     list: 'Änderungsarbeiten an bestehenden Küchenausstellungen',
                     list2: 'Änderung von Möbeln und Arbeitsplatten',
                     list3: 'Professionelle Möbelmontage',
                     list4: 'Konzeptionelle Erstellung und Gestaltung von Küchenstudios'
                    },
                    boxEight: {
                        headline: 'Möbelmontage',
                     list: 'Professionelle Möbelmontage',
                     list2: 'Änderungsarbeiten an Möbeln'
                    },
                    boxNine: {
                        headline: 'Dekorationsarbeiten',
                     list: 'Anbringen von Preisschildern und -auszeichnungen',
                     list2: 'Anbringen von Beleuchtung',
                     list3: 'Aufstellen von Werbetafeln'
                    },
                    boxTen: {
                        headline: 'Grafische Arbeiten',
                        list: 'Anbringen von Werbe- und Informationsmaterialien'
                    },
                    boxEleven: {
                        headline: 'Warenpräsentation und Logistik',
                     list: 'Warenlegung',
                     list2: 'Ein- und Ausräumen von Verkaufsplätzen'
                    },
                    boxTwelve: {
                        headline: 'Näharbeiten',
                     list: 'Anfertigung von Gardinen und Textilien',
                     list2: 'Anfertigung unterschiedlicher Dekoelemente'
                    }
                }
            },
            more: {
                headline: 'Und Mehr',
                sectionOne: {
                    headline: 'Sanierung und Renovierung',
                    text: 'Neben Ladenbauten widmen wir uns auch mit großer Leidenschaft der Sanierung und Renovierung unterschiedlicher Räumlichkeiten. Dabei begleiten wir unsere Kunden von der Planung bis hin zum Feinschliff. Entsprechend dem Motto „Der Kreativität sind keine Grenzen gesetzt“ verwandelt unser kreatives Team Ihre Träume in einzigartige Räume. Überzeugen Sie sich selbst von den bisher verwirklichten (T)räumen.'
                },
                sectionTwo: {
                    headline: 'Einzigartige Elemente für den Innen- und Außenbereich',
                    text: 'Unser Einrichtungsstil kennzeichnet sich durch die Wiederbelebung von altem und unbrauchbarem Material, indem wir es recyceln, um daraus einzigartige, ästhetische und hochwertige Möbel herzustellen. Warum also wegschmeißen, wenn man damit Räumen einen stilvollen industriellen oder rustikalen Touch verleihen kann? Ob Holz, Stahl oder Glas, wir machen aus jeglichem Material ein Schmuckstück für Ihr Zuhause.'
                }
            },
            references: {
                headline: 'Referenzen',
                sectionOne: {
                    text: 'Sambawood hat über die letzten Jahre an zahlreichen nationalen und internationalen IKEA-Projekten als Subunternehmer mitgewirkt, welche in der untenstehenden Tabelle aufgelistet sind. Neben großen und umfangreichen Projekten sind auch kleinere Projekte realisiert worden, die hier jedoch keine Erwähnung finden.',
                    table: {
                        year: '2004',
                        list: {
                            city: 'Bilbao',
                            county: 'Spanien',
                            work: 'Neubau',
                            proyect: 'Markthalle'
                        }
                    },
                    table2: {
                        year: '2005',
                        list: {
                            city: 'Osnabrück',
                            county: 'Deutschland',
                            work: 'Neubau',
                            proyect: 'Markthalle'
                        }
                    },
                    table3: {
                        year: '2006',
                        list: {
                            city: 'Murcia',
                            county: 'Spanien',
                            work: 'Neubau',
                            proyect: 'Markthalle'
                        }
                    },
                    table4: {
                        year: '2007',
                        list: {
                            city: 'Madrid',
                            county: 'Spanien',
                            work: 'Neubau',
                            proyect: 'Markthalle/Rasterdecke'
                        },
                        list2: {
                            city: 'Málaga',
                            county: 'Spanien',
                            work: 'Neubau',
                            proyect: 'Markthalle/Rasterdecke'
                        },
                        list3: {
                            city: 'Porto',
                            county: 'Portugal',
                            work: 'Neubau',
                            proyect: 'Markthalle'
                        },
                        list4: {
                            city: 'Barcelona',
                            county: 'Spanien',
                            work: 'Neubau',
                            proyect: 'Área de textiles y alfombras'
                        }
                    },
                    table5: {
                        year: '2008',
                        list: {
                            city: 'Sevilla',
                            county: 'Spanien',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list2: {
                            city: 'Parma',
                            county: 'Italien',
                            work: 'Neubau',
                            proyect: 'Markthalle'
                        },
                        list3: {
                            city: 'Lucerna / Aubonne',
                            county: 'Suiza',
                            work: 'Umbau',
                            proyect: 'Montaje de muebles'
                        },
                        list4: {
                            city: 'Friburgo',
                            county: 'Deutschland',
                            work: 'Umbau',
                            proyect: 'Montaje de muebles'
                        }
                    },
                    table6: {
                        year: '2009',
                        list: {
                            city: 'Lissabon',
                            county: 'Portugal',
                            work: 'Umbau',
                            proyect: 'Lampenbereich'
                        },
                        list2: {
                            city: 'Florenz',
                            county: 'Italien',
                            work: 'Neubau',
                            proyect: 'Markthalle'
                        }
                    },
                    table7: {
                        year: '2010',
                        list: {
                            city: 'Lissabon',
                            county: 'Portugal',
                            work: 'Neubau',
                            proyect: 'Markthalle'
                        },
                        list2: {
                            city: 'Ginebra',
                            county: 'Suiza',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        }
                    },
                    table8: {
                        year: '2011',
                        list: {
                            city: 'Bilbao',
                            county: 'Spanien',
                            work: 'Umbau',
                            proyect: 'Küchenabteilung'
                        },
                        list2: {
                            city: 'Koppenhagen',
                            county: 'Dänemark',
                            work: 'Umbau',
                            proyect: 'Showroom'
                        },
                        list3: {
                            city: 'Lucerna',
                            county: 'Swiza',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list4: {
                            city: 'Koppenhagen',
                            county: 'Dänemark',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list5: {
                            city: 'Brüssel',
                            county: 'Belgien',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list6: {
                            city: 'Lissabon',
                            county: 'Portugal',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list7: {
                            city: 'Lissabon',
                            county: 'Portugal',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        }
                    },
                    table9: {
                        year: '2012',
                        list: {
                            city: 'Brüssel – Anderlecht',
                            county: 'Belgien',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        }
                    },
                    table10: {
                        year: '2013',
                        list: {
                            city: 'Brüssel – Zaventem',
                            county: 'Belgien',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list2: {
                            city: 'Lieja',
                            county: 'Belgien',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list3: {
                            city: 'Graz',
                            county: 'Österreich',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        }
                    },
                    table11: {
                        year: '2014',
                        list: {
                            city: 'Arhus',
                            county: 'Dänemark',
                            work: 'Neubau',
                            proyect: 'Markthalle / Showroom'
                        },
                        list2: {
                            city: 'Gante',
                            county: 'Belgien',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        }
                    },
                    table12: {
                        year: '2015',
                        list: {
                            city: 'Berlín',
                            county: 'Deutschland',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list2: {
                            city: 'Kuwait',
                            county: 'Kuwait',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        }
                    },
                    table13: {
                        year: '2016',
                        list: {
                            city: 'Haaselt',
                            county: 'Belgien',
                            work: 'Neubau',
                            proyect: 'Markthalle / Restaurant / offices'
                        },
                        list2: {
                            city: 'Mons',
                            county: 'Belgien',
                            work: 'Neubau',
                            proyect: 'Markthalle / Restaurant / offices'
                        },
                        list3: {
                            city: 'Haarlem',
                            county: 'Niederlande',
                            work: 'Umbau',
                            proyect: 'Markthalle'
                        },
                        list4: {
                            city: 'Wuppertal',
                            county: 'Deutschland',
                            work: 'Umbau',
                            proyect: 'Markthalle / Showroom'
                        },
                        list5: {
                            city: 'Kaarst',
                            county: 'Deutschland',
                            work: 'Umbau',
                            proyect: 'Lampenbereich'
                        }
                    },
                    table14: {
                        year: '2017',
                        list: {
                            city: 'Osnabrück',
                            county: 'Deutschland',
                            work: 'Umbau',
                            proyect: 'Markthalle / Rasterdecke / Swedish Food Market'
                        },
                        list2: {
                            city: 'Kaarst',
                            county: 'Deutschland',
                            work: 'Neubau',
                            proyect: 'Markthalle / Rasterdecke / Swedish Food Market'
                        },
                        list3: {
                            city: 'Hannover',
                            county: 'Deutschland',
                            work: 'Umbau',
                            proyect: 'Restaurant'
                        }
                    },
                    table15: {
                        year: '2018',
                        list: {
                            city: 'Amsterdam',
                            county: 'Niederlande',
                            work: 'Umbau',
                            proyect: 'Markthalle / Rasterdecke'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Niederlande',
                            work: 'Umbau',
                            proyect: 'Eingangshalle'
                        }
                    },
                    table16: {
                        year: '2019',
                        list: {
                            city: 'Bielefeld',
                            county: 'Deutschland',
                            work: 'Umbau',
                            proyect: 'Showroom / Bett und Matrazenbereich'
                        },
                        list2: {
                            city: 'Kaarst',
                            county: 'Deutschland',
                            work: 'Umbau',
                            proyect: 'Showroom / Bett und Matrazenbereich'
                        }
                    },
                    table17: {
                        year: '2020',
                        list: {
                            city: 'Karlsruhe',
                            county: 'Deutschland',
                            work: 'Neubau',
                            proyect: 'Markthalle'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Niederlande',
                            work: 'Neubau',
                            proyect: 'Office für Onlinehandel'
                        }
                    },
                    table18: {
                        year: '2021',
                        list: {
                            city: 'Berlin',
                            county: 'Deutschland',
                            work: 'Neubau',
                            proyect: 'Workspace'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Niederlande',
                            work: 'Neubau',
                            proyect: 'Interne Büros'
                        }
                    },
                    table19: {
                        year: '2022',
                        list: {
                            city: 'Amsterdam',
                            county: 'Niederlande',
                            work: 'Neubau',
                            proyect: 'Küche / Essbereich'
                        },
                        list2: {
                            city: 'Brno',
                            county: 'Tschechische Republik',
                            work: 'Neubau',
                            proyect: 'Gesamte Filiale'
                        }
                    },
                    table20: {
                        year: '2023',
                        list: {
                            city: 'Würzburg',
                            county: 'Deutschland',
                            work: 'Neubau',
                            proyect: 'Kinderbereich'
                        },
                        list2: {
                            city: 'Hamburg',
                            county: 'Deutschland',
                            work: 'Neubau',
                            proyect: 'Moorflet - Küche/Essbereich'
                        },
                        list3: {
                            city: 'Hamburg',
                            county: 'Deutschland',
                            work: 'Neubau',
                            proyect: 'Schnelsen - Küche/Essbereich'
                        }
                    }
                }
            },
            media: {
                headline: 'Medien',
            },
            contact: {
                headline: 'Kontakt',
                smallheadline: 'Wie können wir Ihnen helfen?',
                manager: 'Geschäftsführer',
                company: 'Sitz der Firma:',
                office: 'Sitz des Büros',
                email: 'Email',
                phone: 'Tel',
                or: 'oder über das Kontaktformular',
                youemail: 'Ihre Email',
                subject: 'Betreff',
                message: 'Ihre Nachricht',
                send: 'Senden',
            },
            footer: {
                legal: 'Impressum',
                privacy: 'Datenschutz',
            }
        },
        en: {
            navbar: {
                home: 'Home',
                company: 'Company',
                service: 'Services',
                more: 'and more',
                references: 'References',
                medium: 'Media',
                contact: 'Contact'
            },
            home: {
                hero: {
                     bigHeadline: 'Shopfitting',
                     smallHeadline: 'Project Coordination',
                     subHeadline: 'and more'
                },
                sectionOne: {
                     headline: '„Service means to see the whole business through the eyes of the client.“ – Axel Haitzer',
                     text: 'This is our moto because we comply with your plans and wishes in order to satisfy you. Choosing our team, you have a reliable and competent partner by your side with technical skills and expertise resulting from long-term experiences at an international level. We have been working in the fields of project management and shop fitting for more than 16 years, especially in cooperation with IKEA. We carry out big projects as well as small projects with great passion. Our extensive references and the feedback from our clients are a proof of this.',
                     text2: 'We are convinced that your projects are in good hands if you choose us.',
                     text3: 'Have we also convinced you?' 
                 },
                 sectionTwo: {
                     boxOne: {
                         headline: 'A team with international experience and a variety of language skills',
                         text: 'Our team disposes of a comprehensive experience due to their international works. Furthermore, we have knowledge of at least three different languages so that a smooth communication can take place in foreign countries.'
                     },
                     boxTwo: {
                        headline: 'Our services at a glance',
                        text: 'Our experienced team devotes itself to different working areas to transform ideas into qualitative spaces. These are some of our services:',
                        list: 'Interior design',
                        list2: 'Shop fitting',
                        list3: 'Renovation and restructuring',
                        list4: 'Professional assembly and dismantling',
                        list5: 'Illumination',
                        list6: 'Decoration',
                        list7: 'Graphic works',
                        list8: 'Merchandise presentation',
                        list9: 'Wall assembly',
                        list10: 'Painting',
                        list11: 'Flooring works'
                     },
                     boxThree: {
                         headline: 'High load capacity and flexibility',
                         text: 'These are two qualities that define us because we always strive for customer satisfaction, no matter how difficult the conditions are. It is not always easy but, nevertheless, it is not impossible to complete a project in time in critical situations according to the plans and wishes of our clients. We adapt to the given circumstances in any regard: No matter what time it is; you can always count on us. Furthermore, we are poised to do additional work if necessary.'
                     }
                },
             },
             company: {
                headline: 'The company',
                director: {
                    name: 'Jemal Gorgiladze',
                    ocupation: 'Managing director'
                },
                text: 'Sambawood is based in Spain, but the office is located in Germany. The company Sambawood is based on 16 years of experience. Starting as a German company, Sambawood is now mainly working as a subcontractor for various IKEA projects. Other activities relate to private buildings and renovation works.',
                text2: 'Due to the multifaceted activities in shop fitting, the company brings expertise in numerous areas. Our skills are diverse and range from construction works to sewing and furniture assembly.',
                languages: 'Languages'
            },
            services: {
                headline: 'Services',
                sectionOne: {
                    headline: 'Sambawood: a company with professional versatility',
                    text: 'Our company sets highest priority in professional consulting for the realisation of projects in different areas. We collaborate with our clients to find the best possible solutions. Therefore, we apply all our planning competences and manual experiences. We accompany our clients from the planning to the realisation and we are constantly seeking to implement projects and plans at our costumer’s option. Even in difficult conditions we carry out our works conscientiously and professionally.',
                    text2: 'This is the reason why we are characterized by a high load capacity and flexibility.',
                    headlineTwo: 'Consulting',
                    list: 'Individual consulting in terms of planning',
                    list2: 'Coordination of subcontractors',
                    list3: 'Project leadership and management'
                },
                sectionTwo: {
                    boxOne: {
                        headline: 'Ceiling works',
                      list: 'Modification and adaptation of existing ceilings',
                      list2: 'Installation of different ceiling systems'
                    },
                    boxTwo: {
                        headline: 'Indoor market construction',
                      list: 'Assembly and dismantling of shelving systems',
                      list2: 'Setting up partition walls',
                      list3: 'Positioning merchandise'
                    },
                    boxThree: {
                        headline: 'Wall works',
                      list: 'Setting up and manufacturing exhibition walls',
                      list2: 'Installation of doors, windows, etc.'
                    },
                    boxFour: {
                        headline: 'Painting works',
                        list: 'Levelling',
                        list2: 'Priming',
                        list3: 'Wallpapering',
                        list4: 'Painting',
                        list5: 'Varnishing'
                    },
                    boxFive: {
                        headline: 'Tiling works',
                      list: 'Removal of old tiles',
                      list2: 'Preparation works for tiling',
                      list3: 'Tiling'
                    },
                    boxSix: {
                        headline: 'Flooring works',
                      list: 'Levelling of uneven floors',
                      list2: 'Removal of old floors',
                      list3: 'Laying laminate, parquet, vinyl flooring and tiles'
                    },
                    boxSeven: {
                        headline: 'Kitchen installations',
                      list: 'Modification of existing kitchen exhibitions',
                      list2: 'Modification of furniture and worktops',
                      list3: 'Professional montage of furniture',
                      list4: 'Conceptual construction and design of kitchen studios'
                    },
                    boxEight: {
                        headline: 'Furniture assembly',
                      list: 'Professional assembly of furniture',
                      list2: 'Modification of furniture'
                    },
                    boxNine: {
                        headline: 'Decoration works',
                      list: 'Application of price tags',
                      list2: 'Illumination',
                      list3: 'Setting up billboards'
                    },
                    boxTen: {
                        headline: 'Graphic works',
                        list: 'Application of advertising and information materials'
                    },
                    boxEleven: {
                        headline: 'Presentation of merchandise and logistics',
                      list: 'Positioning merchandise',
                      list2: 'Filling and emptying sales areas'
                    },
                    boxTwelve: {
                        headline: 'Sewing works',
                      list: 'Manufacturing curtains and textiles',
                      list2: 'Manufacturing different decoration elements'
                    }
                }
            },
            more: {
                headline: 'And more',
                sectionOne: {
                    headline: 'Restructuring and renovation',
                    text: 'Apart from shop fittings we also devote ourselves with great passion to the restructuring and renovation of different spaces. Therefore, we accompany our clients from the initial conception through to the final touch. Following the motto “Creativity has no limits”, our creative team transforms your dreams into unique spaces. Don’t just take our word for it – have a look at our creations!'
                },
                sectionTwo: {
                    headline: 'Unique elements for indoor and outdoor areas',
                    text: 'Our style of furnishing is characterized by the revival of old and unusable materials. We recycle them in order to create unique, aesthetic and high-quality furniture. So why throw them away? Using these, you can create spaces in an industrial or a rustic and natural design. Whether if wood, steel or glass, we transform any kind of material in a piece of jewelry for your home.'
                }
            },
            references: {
                headline: 'References',
                sectionOne: {
                    text: 'Over the past few years, Sambawood has participated as subcontractor in numerous national and international projects with IKEA which are listed  in the table below. Apart from big projects we also realised smaller projects which , however are not mentioned in the table.',
                    table: {
                        year: '2004',
                        list: {
                            city: 'Bilbao',
                            county: 'Spain',
                            work: 'New building',
                            proyect: 'Market hall'
                        }
                    },
                    table2: {
                        year: '2005',
                        list: {
                            city: 'Osnabrück',
                            county: 'Gernany',
                            work: 'New building',
                            proyect: 'Market hall'
                        }
                    },
                    table3: {
                        year: '2006',
                        list: {
                            city: 'Murcia',
                            county: 'Spain',
                            work: 'New building',
                            proyect: 'Market hall'
                        }
                    },
                    table4: {
                        year: '2007',
                        list: {
                            city: 'Madrid',
                            county: 'Spain',
                            work: 'New building',
                            proyect: 'Market hall/Ceiling'
                        },
                        list2: {
                            city: 'Málaga',
                            county: 'Spain',
                            work: 'New building',
                            proyect: 'Market hall/Ceiling'
                        },
                        list3: {
                            city: 'Porto',
                            county: 'Portugal',
                            work: 'New building',
                            proyect: 'Market hall'
                        },
                        list4: {
                            city: 'Barcelona',
                            county: 'Spain',
                            work: 'New building',
                            proyect: 'Textile and carpets area'
                        }
                    },
                    table5: {
                        year: '2008',
                        list: {
                            city: 'Sevilla',
                            county: 'Spain',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list2: {
                            city: 'Parma',
                            county: 'Italy',
                            work: 'New building',
                            proyect: 'Market hall'
                        },
                        list3: {
                            city: 'Lucerna / Aubonne',
                            county: 'Suiza',
                            work: 'Rebuild',
                            proyect: 'Furniture assembly'
                        },
                        list4: {
                            city: 'Friburgo',
                            county: 'Germay',
                            work: 'Rebuild',
                            proyect: 'Furniture assembly'
                        }
                    },
                    table6: {
                        year: '2009',
                        list: {
                            city: 'Lisbon',
                            county: 'Portugal',
                            work: 'Rebuild',
                            proyect: 'Lampenbereich'
                        },
                        list2: {
                            city: 'Florence',
                            county: 'Italy',
                            work: 'New building',
                            proyect: 'Market hall'
                        }
                    },
                    table7: {
                        year: '2010',
                        list: {
                            city: 'Lisbon',
                            county: 'Portugal',
                            work: 'New building',
                            proyect: 'Market hall'
                        },
                        list2: {
                            city: 'Ginebra',
                            county: 'Suiza',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        }
                    },
                    table8: {
                        year: '2011',
                        list: {
                            city: 'Bilbao',
                            county: 'Spain',
                            work: 'Rebuild',
                            proyect: 'Küchenabteilung'
                        },
                        list2: {
                            city: 'Copenhagen',
                            county: 'Denmark',
                            work: 'Rebuild',
                            proyect: 'Showroom'
                        },
                        list3: {
                            city: 'Lucerna',
                            county: 'Swiza',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list4: {
                            city: 'Copenhagen',
                            county: 'Denmark',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list5: {
                            city: 'Brussels',
                            county: 'Belgium',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list6: {
                            city: 'Lisbon',
                            county: 'Portugal',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list7: {
                            city: 'Lisbon',
                            county: 'Portugal',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        }
                    },
                    table9: {
                        year: '2012',
                        list: {
                            city: 'Brussels – Anderlecht',
                            county: 'Belgium',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        }
                    },
                    table10: {
                        year: '2013',
                        list: {
                            city: 'Brussels – Zaventem',
                            county: 'Belgium',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list2: {
                            city: 'Lieja',
                            county: 'Belgium',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list3: {
                            city: 'Graz',
                            county: 'Austria',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        }
                    },
                    table11: {
                        year: '2014',
                        list: {
                            city: 'Arhus',
                            county: 'Denmark',
                            work: 'New building',
                            proyect: 'Market hall / Showroom'
                        },
                        list2: {
                            city: 'Gante',
                            county: 'Belgium',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        }
                    },
                    table12: {
                        year: '2015',
                        list: {
                            city: 'Berlin',
                            county: 'Germany',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list2: {
                            city: 'Kuwait',
                            county: 'Kuwait',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        }
                    },
                    table13: {
                        year: '2016',
                        list: {
                            city: 'Haaselt',
                            county: 'Belgium',
                            work: 'New building',
                            proyect: 'Market hall / Restaurant / offices'
                        },
                        list2: {
                            city: 'Mons',
                            county: 'Belgium',
                            work: 'New building',
                            proyect: 'Market hall / Restaurant / offices'
                        },
                        list3: {
                            city: 'Haarlem',
                            county: 'Netherlands',
                            work: 'Rebuild',
                            proyect: 'Market hall'
                        },
                        list4: {
                            city: 'Wuppertal',
                            county: 'Germnay',
                            work: 'Rebuild',
                            proyect: 'Market hall / Showroom'
                        },
                        list5: {
                            city: 'Kaarst',
                            county: 'Germnay',
                            work: 'Rebuild',
                            proyect: 'Lampenbereich'
                        }
                    },
                    table14: {
                        year: '2017',
                        list: {
                            city: 'Osnabrück',
                            county: 'Germay',
                            work: 'Rebuild',
                            proyect: 'Market hall / Ceiling / Swedish Food Market'
                        },
                        list2: {
                            city: 'Kaarst',
                            county: 'Germnay',
                            work: 'New building',
                            proyect: 'Market hall / Ceiling / Swedish Food Market'
                        },
                        list3: {
                            city: 'Hannover',
                            county: 'Germnay',
                            work: 'Rebuild',
                            proyect: 'Restaurant'
                        }
                    },
                    table15: {
                        year: '2018',
                        list: {
                            city: 'Amsterdam',
                            county: 'Netherlands',
                            work: 'Rebuild',
                            proyect: 'Market hall / Ceiling'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Netherlands',
                            work: 'Rebuild',
                            proyect: 'Store entrance'
                        }
                    },
                    table16: {
                        year: '2019',
                        list: {
                            city: 'Bielefeld',
                            county: 'Germany',
                            work: 'Rebuild',
                            proyect: 'Showroom / Beds and mattresses area'
                        },
                        list2: {
                            city: 'Kaarst',
                            county: 'Germany',
                            work: 'Rebuild',
                            proyect: 'Showroom / Beds and mattresses area'
                        }
                    },
                    table17: {
                        year: '2020',
                        list: {
                            city: 'Karlsruhe',
                            county: 'Germany',
                            work: 'New building',
                            proyect: 'Market hall'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Netherlands',
                            work: 'New building',
                            proyect: 'online shop office'
                        }
                    },
                    table18: {
                        year: '2021',
                        list: {
                            city: 'Berlin',
                            county: 'Germay',
                            work: 'New building',
                            proyect: 'Workspace'
                        },
                        list2: {
                            city: 'Amsterdam',
                            county: 'Netherlands',
                            work: 'New building',
                            proyect: 'Internal offices'
                        }
                    },
                    table19: {
                        year: '2022',
                        list: {
                            city: 'Amsterdam',
                            county: 'Netherlands',
                            work: 'New building',
                            proyect: 'Kitchen / Dining area'
                        },
                        list2: {
                            city: 'Brno',
                            county: 'Czech Republic',
                            work: 'New building',
                            proyect: 'Whole store'
                        }
                    },
                    table20: {
                        year: '2023',
                        list: {
                            city: 'Wurzburg',
                            county: 'Germany',
                            work: 'New building',
                            proyect: 'Children area'
                        },
                        list2: {
                            city: 'Hamburg',
                            county: 'Germany',
                            work: 'New building',
                            proyect: 'Moorflet - Kitchen/Dining area'
                        },
                        list3: {
                            city: 'Hamburg',
                            county: 'Germany',
                            work: 'New building',
                            proyect: 'Schnelsen - Kitchen/Dining area'
                        }
                    }
                }
            },
            media: {
                headline: 'Media',
            },
            contact: {
                headline: 'Contact',
                smallheadline: 'How can we help you?',
                manager: 'Manager',
                company: 'Company',
                office: 'Office',
                email: 'Email',
                phone: 'Phone',
                or: 'or via the contact form',
                youemail: 'Your email',
                subject: 'Subject',
                message: 'Your message',
                send: 'Send',
            },
            footer: {
                legal: 'Imprint',
                privacy: 'Privicy policy',
            }
        }
    }
  }))