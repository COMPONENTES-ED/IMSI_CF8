<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p En el mundo actual, donde la tecnología se encuentra en el núcleo de la productividad y la comunicación, el mantenimiento correcto y continuo de los equipos de cómputo es fundamental. La creciente dependencia de los sistemas informáticos en todos los sectores, desde la industria hasta el hogar, exige la capacidad de diagnosticar, reparar y optimizar estos dispositivos con eficacia. Este componente formativo profundiza en los principios y prácticas del mantenimiento correctivo, cubriendo los procesos necesarios para asegurar el funcionamiento óptimo y prolongado de los equipos.
        .row.justify-content-center.align-items-center
          .col-lg-12.bg1.p-4 
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-fluid.img-a(src='@/assets/curso/temas/intro/img1.svg')
              .col-lg-10
                p El contenido se enfoca en técnicas precisas para la identificación de fallas y el reemplazo de componentes fundamentales en equipos de cómputo, abordando desde los problemas de #[i hardware] hasta las soluciones en #[i software]. En el diagnóstico de fallas, se aprenderá a emplear herramientas avanzadas que permiten evaluar cada componente del equipo, incluyendo memoria RAM, discos duros y tarjetas gráficas. Estas habilidades resultan decisivas para detectar problemas subyacentes y resolverlos de manera eficaz, reduciendo así el tiempo de inactividad y optimizando la inversión en tecnología.
      .col-lg-4
        img.img-fluid.img-a(src='@/assets/curso/temas/intro/img2.png')
    p Además, el componente explora procedimientos detallados para la actualización de #[i software], controladores y el uso de técnicas de recuperación de datos en caso de pérdida de información crítica. La gestión de particiones y la restauración de sistemas operativos son áreas clave de estudio, ya que permiten devolver los equipos a un estado de funcionamiento confiable sin comprometer los datos del usuario. A través de estas prácticas, se desarrollará una comprensión integral de cómo los diferentes elementos del sistema interactúan y cómo pueden ser restaurados para satisfacer las demandas actuales de rendimiento.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-2
        img.img-fluid.img-a(src='@/assets/curso/temas/intro/img3.svg')
      .col-lg-10.bg2.p-4
        p Por último, el componente aborda los pasos finales en el proceso de mantenimiento, tales como la validación del funcionamiento, la documentación técnica y las garantías de soporte. Estas etapas son fundamentales para proporcionar un servicio de calidad y asegurar la satisfacción del usuario. La documentación adecuada permite un seguimiento detallado del estado del equipo y facilita futuras intervenciones, mientras que las garantías y el soporte técnico aseguran la protección continua del equipo. Con esta formación, los aprendices estarán capacitados para realizar un mantenimiento correctivo completo, contribuyendo a la durabilidad y eficiencia de los sistemas informáticos en diversos entornos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.bg3.p-3
        p.text-center 
          b ¡Bienvenido a este viaje que te preparará para aprender sobre el mantenimiento correctivo de equipos de cómputo!
    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="1236" height="695" src="https://www.youtube.com/embed/RvFGTWnB7e4?si=Cd-dW693_riUgWsU" title="Fuentes y técnicas de recolección de datos para análisis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
