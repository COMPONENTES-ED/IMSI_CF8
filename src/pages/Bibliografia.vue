<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Andrews, J. (2019). A+ Guide to IT Technical Support (Hardware and Software) (10.ª ed.). Cengage Learning.',
        link: '',
      },
      {
        referencia:
          'Beisse, F. (2014). A Guide to Computer User Support for Help Desk and Support Specialists (6.ª ed.). Cengage Learning.Adafruit Industries. (s.f.). Adafruit guide to excellent soldering. ',
        link: 'https://learn.adafruit.com/adafruit-guide-excellent-soldering',
      },
      {
        referencia:
          'Adafruit Industries. (s.f.). Adafruit guide to excellent soldering.',
        link: 'https://learn.adafruit.com/adafruit-guide-excellent-soldering',
      },
      {
        referencia:
          'Battle.net. (2023). Updating your drivers and operating system.',
        link: 'https://us.battle.net/support/en/article/31024',
      },
      {
        referencia:
          'Bosch Security and Safety Systems. (2023). Documentación técnica de Video Analytics. Bosch Security and Safety Systems',
        link:
          'https://www.boschsecurity.com/xl/es/soluciones/sistemas-de-video/video-analytics/documentacion-tecnica-de-video-analytics',
      },
      {
        referencia:
          'Colegio Nacional de Educación Profesional Técnica. (2023). Diagnóstico de fallas en equipos de cómputo. Colegio Nacional de Educación Profesional Técnica.',
        link:
          'https://iztav211.webcindario.com/programasyguias/cuarto_semestre/ManttoEquipoComputo/GP_DFAC_03.pdf',
      },
      {
        referencia:
          'Crucial website. (2023). How to upgrade desktop memory. Crucial.',
        link:
          'https://www.crucial.com/articles/about-memory/how-to-upgrade-desktop-memory',
      },
      {
        referencia:
          'EaseUS. (2023). Can I recover deleted files from hard disks. EaseUS.',
        link:
          'https://www.easeus.com/resource/recover-deleted-files-hard-drive.html',
      },
      {
        referencia:
          'Lifewire website. (2021, 22 de junio). How to run diagnostics on Windows. Lifewire.',
        link: 'https://www.lifewire.com/run-diagnostics-on-windows-5214801',
      },
      {
        referencia:
          'MakeUseOf. (2017, 27 de marzo). How to test your PC for failing hardware: Tips and tools. MakeUseOf.',
        link:
          'https://www.makeuseof.com/tag/how-to-test-your-pc-for-failing-hardware/',
      },
      {
        referencia:
          'Meyers, M. (2021). CompTIA A+ Certification All-in-One Exam Guide (10.ª ed.). McGraw-Hill Education.',
        link: '',
      },
      {
        referencia:
          'Microsoft Support Website. (2023, 31 de julio). Create and format a hard disk partition. Microsoft.',
        link:
          'https://support.microsoft.com/en-us/windows/create-and-format-a-hard-disk-partition-bbb8e185-1bda-ecd1-3465-c9728f7d7d2e',
      },
      {
        referencia:
          'Microsoft Support Website. (2023, 31 de julio). Manage disk partitions in Windows. Microsoft.',
        link:
          'https://support.microsoft.com/en-us/help/17418/windows-10-create-partition',
      },
      {
        referencia:
          'Microsoft. (2023, 31 de julio). Update drivers manually in Windows. Microsoft.',
        link:
          'https://support.microsoft.com/en-us/windows/update-drivers-manually-in-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6',
      },
      {
        referencia:
          'Odom, W. (2018). CompTIA IT Fundamentals (ITF+) Study Guide (2.ª ed.). Pearson IT Certification.',
        link: '',
      },
      {
        referencia:
          'PCMag. (2022, 17 de marzo). Fix buggy hardware: How to manually update your drivers in Windows. PCMag. ',
        link: 'https://www.pcmag.com/how-to/update-drivers-in-windows',
      },
      {
        referencia:
          'Pyles, M., & McRee, D. (2016). CompTIA A+ Complete Deluxe Study Guide: Exams 220-901 and 220-902. Sybex.',
        link: '',
      },
      {
        referencia:
          'SparkFun Electronics. (2013, 4 de octubre). How to solder - Through-hole soldering. SparkFun Electronics.',
        link:
          'https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-solderin',
      },
      {
        referencia:
          'TechRepublic. (2021, 2 de agosto). How to test your computer hardware and software. TechRepublic. ',
        link: '',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
