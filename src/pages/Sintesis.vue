<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/sintesis/img2.png"
          />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 my-lg-0 my-3">
              <div class="p-3 brad j1 h-100">
                <p>
                  Este componente aborda los fundamentos y técnicas
                  fundamentales para la configuración, implementación y gestión
                  de redes inalámbricas, así como los dispositivos de cómputo
                  que las soportan. Comienza con un análisis de las tecnologías
                  inalámbricas y sus estándares principales, como
                  <i>Wi-Fi, Bluetooth</i>, y redes celulares 3G/4G/5G, además de
                  explorar conceptos de propagación en el espectro
                  electromagnético y arquitecturas que sustentan estas redes.
                </p>
              </div>
            </div>
            <div class="col-lg-5 my-lg-0 my-3 j1">
              <img
                class="img-fluid img-a"
                src="@/assets/curso/temas/sintesis/img1.svg"
              />
            </div>
          </div>
          <div
            class="row justify-content-center align-items-center bg1 br-d p-4 brad"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/sintesis/img3.svg"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Asimismo, se examinan los dispositivos que permiten el
                intercambio de datos de manera inteligente y eficiente en la
                red, considerando no solo los componentes básicos, sino también
                aquellos que habilitan funcionalidades avanzadas, como la
                integración de sensores y controladores. Esta interconectividad
                resulta fundamental en el contexto del Internet de las Cosas
                (IoT), donde los dispositivos deben operar en conjunto para
                lograr una red funcional, autónoma y escalable, capaz de
                sostener múltiples usuarios y aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-5">
        Por último, el componente enfatiza la importancia de la seguridad en
        redes inalámbricas, abordando tanto la protección de la infraestructura
        como la autenticación y control de acceso para los usuarios. Se
        presentan estrategias avanzadas de monitoreo y gestión que permiten
        supervisar y mantener la integridad de la red, asegurando que el acceso
        sea seguro y que el rendimiento se mantenga óptimo en todo momento.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5">
          <figure>
            <img
              class="mx-auto"
              src="@/assets/curso/temas/sintesis/sintesis.svg"
              alt="La imagen muestra la «Síntesis temática del componente», allí se mencionan los principales temas desarrollados sobre el mantenimiento correctivo de equipos de cómputo como sus fundamentos, diagnósticos, técnicas, herramientas prácticas y algunos subtemas que los integran."
              style="max-width: 877px"
            />
            <figcaption class="mt-4">Fuente: OIT, 2024.</figcaption>
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
