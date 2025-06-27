<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Diagnóstico de fallas',
          referencia:
            'Leonardo Duarte. (2016, julio 31). <em>Diagnóstico de fallas en computadoras y periféricos.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=bz2J6xILf4Y',
        },
        {
          tema: '<em>Software</em> de diagnóstico',
          referencia:
            'C&G Soporte Técnico. (2022, julio 8). <em>Como reparar problemas de hardware</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=T564hsRwaeU',
        },
        {
          tema: 'Códigos de error y <em>troubleshooting</em>',
          referencia:
            'Microsoft <em>Learn Website. (2023). Windows Update error reference</em>.',
          tipo: 'Web',
          link:
            'https://learn.microsoft.com/es-es/windows/deployment/update/windows-update-error-reference',
        },
        {
          tema: 'Identificación de problemas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 24). Gestión de equipos informáticos.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=dJ0rNne1xuY',
        },
        {
          tema: 'Sistemas operativos y particiones',
          referencia:
            '<em>Sevivon Studio Canal Youtube</em>. (2020, marzo 20). <em>Particiones primarias, lógicas y extendidas</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=CSbUiK2pytE',
        },
        {
          tema: 'Recuperación de datos',
          referencia:
            'Zona <em>Hardware</em>. (2022, noviembre 20). <em>Reparar y recuperar datos de disco duro dañado</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=yguGPx0J7jw',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
