export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diagnóstico de fallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación de problemas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '<em>Software</em> de diagnóstico',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Códigos de error y <em>troubleshooting</em>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de reparación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Reemplazo de componentes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de soldadura',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Actualización de <em>hardware</em>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Restauración de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistemas operativos y particiones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Controladores y actualizaciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Recuperación de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Validación y entrega',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pruebas de funcionamiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Documentación técnica',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Garantías y soporte',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF08_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Mantenimiento correctivo de equipos de cómputo: técnicas y procedimientos',
    Description:
      'El presente componente abarca técnicas de diagnóstico, reparación y restauración necesarias para el mantenimiento correctivo de equipos de cómputo. Incluye identificación de fallas, reemplazo de componentes, recuperación de datos y actualización de software. También abarca la validación, documentación técnica y garantías para asegurar el óptimo funcionamiento del equipo y prolongar la vida útil del mismo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
}
