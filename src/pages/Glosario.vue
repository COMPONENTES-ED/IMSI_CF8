<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Actualización de <em>hardware</em>',
          significado:
            'Proceso de mejora de los componentes físicos de un equipo para aumentar su rendimiento o compatibilidad.',
        },
        {
          termino: 'Compatibilidad',
          significado:
            'Capacidad de un componente o <em>software</em> de funcionar adecuadamente con otros elementos del sistema.',
        },
        {
          termino: 'Componentes',
          significado:
            'Partes físicas de un equipo de cómputo, como la memoria RAM, el disco duro, y la tarjeta gráfica.',
        },
        {
          termino: 'Controladores',
          significado:
            'Programas que permiten la comunicación entre el sistema operativo y el <em>hardware</em> del equipo.',
        },
        {
          termino: 'Diagnóstico',
          significado:
            'Evaluación inicial para identificar fallas o problemas en el <em>hardware</em> o <em>software</em> de un equipo de cómputo.',
        },
        {
          termino: 'Documentación técnica',
          significado:
            'Registro detallado de los procedimientos realizados en el equipo, incluyendo reparaciones y actualizaciones.',
        },
        {
          termino: 'Garantía',
          significado:
            'Cobertura que asegura el funcionamiento de los componentes reparados o reemplazados en un período específico.',
        },
        {
          termino: '<em>Hardware</em>',
          significado:
            'Conjunto de componentes físicos de un equipo de cómputo, como la CPU, RAM, y dispositivos de almacenamiento.',
        },
        {
          termino: 'Mantenimiento correctivo',
          significado:
            'Procedimiento para reparar y restaurar el funcionamiento de un equipo en caso de fallos o mal funcionamiento.',
        },
        {
          termino: 'Partición',
          significado:
            'División lógica en el disco duro que permite separar el sistema operativo de los datos del usuario.',
        },
        {
          termino: 'Pruebas de funcionamiento',
          significado:
            'Evaluaciones realizadas después de una reparación para asegurar que el equipo funciona correctamente.',
        },
        {
          termino: 'Recuperación de datos',
          significado:
            'Proceso de restauración de archivos o información perdida debido a fallos, errores o formateos.',
        },
        {
          termino: 'Reemplazo de componentes',
          significado:
            'Sustitución de piezas defectuosas de un equipo para restaurar su funcionamiento.',
        },
        {
          termino: 'Restauración de <em>software</em>',
          significado:
            'Proceso de reinstalación o corrección del <em>software</em> en un equipo, especialmente en el sistema operativo.',
        },
        {
          termino: 'Seguridad',
          significado:
            'Medidas aplicadas para proteger los datos y el equipo de amenazas o pérdidas de información.',
        },
        {
          termino: 'Sistema operativo',
          significado:
            '<em>Software</em> que controla y administra los recursos del equipo y permite la ejecución de aplicaciones.',
        },
        {
          termino: 'Soldadura',
          significado:
            'Técnica de reparación utilizada para restablecer conexiones eléctricas en componentes de <em>hardware</em>.',
        },
        {
          termino: 'Soporte técnico',
          significado:
            'Asistencia que se brinda para resolver problemas relacionados con el equipo, después del mantenimiento.',
        },
        {
          termino: 'Validación',
          significado:
            'Proceso de verificación que confirma el correcto funcionamiento del equipo tras el mantenimiento.',
        },
        {
          termino: 'Virus informático',
          significado:
            'Programa malicioso que puede dañar o comprometer el funcionamiento del equipo y sus datos.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
