<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Diagnóstico de fallas</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-8">
          <p>
            El diagnóstico de fallas es una etapa fundamental en el
            mantenimiento correctivo de equipos de cómputo, ya que permite
            identificar de manera precisa los problemas que afectan el
            funcionamiento de un sistema. Este proceso incluye una serie de
            pasos y técnicas que facilitan la detección de fallas tanto en el
            <i>hardware</i> como en el <i>software</i>, permitiendo una
            intervención adecuada y efectiva. El diagnóstico de fallas es
            especialmente importante en el ámbito empresarial, donde la
            productividad depende en gran medida del rendimiento continuo de los
            equipos de cómputo. Un diagnóstico bien ejecutado ayuda a reducir
            tiempos de inactividad, minimiza los costos de reparación y optimiza
            el uso de los recursos tecnológicos.
          </p>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12 bg1 p-4">
              <div class="row justify-content-center align-items-center">
                <div class="col-lg-2">
                  <img
                    class="img-fluid img-a"
                    src="@/assets/curso/temas/tema1/img1.svg"
                  />
                </div>
                <div class="col-lg-10">
                  <p>
                    Para llevar a cabo un diagnóstico de fallas efectivo, es
                    importante realizar una inspección detallada del equipo.
                    Esta inspección comienza con la identificación de signos
                    visibles de problemas, tales como sobrecalentamiento, ruidos
                    inusuales o apagados inesperados. Asimismo, es fundamental
                    recopilar información detallada sobre el historial de uso
                    del equipo y los síntomas experimentados antes de la falla,
                    ya que estos datos pueden ofrecer pistas sobre el origen del
                    problema. Frecuentemente, se utilizan herramientas de
                    diagnóstico, como multímetros y
                    <i>software</i> especializado, que permiten evaluar el
                    rendimiento de los distintos componentes del equipo,
                    facilitando la localización precisa de la avería.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema1/img2.png"
          />
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-lg-4">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema1/img3.png"
          />
        </div>
        <div class="col-lg-8">
          <p>
            Las herramientas de diagnóstico juegan un papel importante en esta
            etapa, ya que permiten realizar pruebas específicas en componentes
            como la memoria RAM, el disco duro y la fuente de alimentación. Los
            programas de diagnóstico, como HWMonitor o CPU-Z, ofrecen
            información detallada sobre la temperatura, el voltaje y el
            rendimiento general del equipo. Estos programas son especialmente
            útiles para detectar problemas de <i>hardware</i> que no siempre son
            visibles a simple vista, como sobrecalentamiento interno o fallos en
            componentes eléctricos. El uso de estas herramientas facilita un
            diagnóstico preciso y ayuda a determinar si el problema puede
            resolverse mediante ajustes de configuración o si es necesario
            reemplazar componentes.
          </p>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12 bg4 p-4">
              <p>
                Un diagnóstico adecuado también incluye la identificación de
                códigos de error generados por el sistema operativo o el BIOS
                del equipo. Estos códigos ofrecen información sobre la
                naturaleza de la falla y son una referencia invaluable para los
                técnicos, ya que permiten acotar las posibles causas del
                problema. Las técnicas de <I>troubleshooting</I>, que implican
                la revisión sistemática de cada componente y la comprobación de
                su funcionamiento, son indispensables para verificar que todos
                los elementos del equipo operan de manera adecuada. Este enfoque
                metódico permite a los técnicos seguir un proceso ordenado,
                desde la identificación inicial del problema hasta su resolución
                final.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-lg-12">
          <div class="titulo-sexto color-acento-contenido aos-init mt-5">
            <h5>Tabla 1. |</h5>
            <span>Diagnóstico de fallas</span>
          </div>
        </div>
      </div>
      <div class="tabla-a color-acento-contenido mb-3">
        <table>
          <caption>
            Fuente: OIT, 2024.
          </caption>
          <thead>
            <tr>
              <th>Componente</th>
              <th>Síntoma de falla</th>
              <th>Herramienta de diagnóstico</th>
              <th>Posible solución</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bg1">Memoria RAM</td>
              <td>Pantalla azul, reinicios</td>
              <td>MemTest86</td>
              <td>Reemplazo de módulo defectuoso</td>
            </tr>
            <tr>
              <td class="bg1">Disco duro</td>
              <td>Lentitud, ruido, errores</td>
              <td>CrystalDiskInfo</td>
              <td>Sustitución o recuperación de datos</td>
            </tr>
            <tr>
              <td class="bg1">Fuente de alimentación</td>
              <td>Apagado repentino</td>
              <td>Multímetro</td>
              <td>Reemplazo del componente</td>
            </tr>
            <tr>
              <td class="bg1">Tarjeta gráfica</td>
              <td>Gráficos distorsionados</td>
              <td>GPU-Z</td>
              <td>Actualización o cambio de tarjeta</td>
            </tr>
            <tr>
              <td class="bg1">Sistema operativo</td>
              <td>Lento, errores al iniciar</td>
              <td>Administrador de dispositivos</td>
              <td>Reparación o reinstalación</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Separador></Separador>
      <div id="t_1_1" class="titulo-segundo color-acento-botones mt-5">
        <h2>1.1 Identificación de problemas</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-8">
          <p>
            La identificación de problemas es el primer paso en el diagnóstico
            de fallas en equipos de cómputo y consiste en reconocer los síntomas
            o signos que indican un funcionamiento anómalo. Este proceso implica
            una evaluación detallada del equipo para registrar cualquier
            comportamiento inusual, como fallos de arranque, sobrecalentamiento,
            lentitud en el sistema, o bloqueos frecuentes. Estos síntomas pueden
            ser indicativos de problemas tanto en el <i>hardware</i> como en el
            <i>software</i> del equipo, y es importante reconocerlos para
            establecer una ruta efectiva de resolución. La observación precisa
            de estos signos permite al técnico determinar la naturaleza y el
            alcance de la falla, lo que es fundamental para evitar diagnósticos
            erróneos que puedan llevar a reparaciones innecesarias.
          </p>
        </div>
        <div class="col-lg-4">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema1/img4.png"
          />
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4">
          <div class="tarjeta bg4 p-4 h-100">
            <p>
              Durante la identificación de problemas, el técnico también
              consulta el historial de uso y mantenimiento del equipo, ya que
              ciertos patrones de uso pueden influir en el desgaste de
              componentes o en la aparición de problemas específicos. Por
              ejemplo, equipos sometidos a un uso intensivo suelen presentar
              fallos en el sistema de refrigeración o en la unidad de
              almacenamiento. La recopilación de esta información permite al
              técnico contar con un contexto más amplio sobre las posibles
              causas del problema, lo que facilita una intervención más precisa.
              De la misma forma, el registro de síntomas previos puede ayudar a
              identificar si el problema es recurrente y si está relacionado con
              fallas anteriores en el mismo equipo.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="tarjeta h-100">
            <img
              class="img-fluid img-a"
              src="@/assets/curso/temas/tema1/img5.png"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="tarjeta bg5 p-4 h-100">
            <p>
              En muchos casos, el proceso de identificación de problemas
              requiere el uso de herramientas y pruebas preliminares. Por
              ejemplo, herramientas de diagnóstico de <i>hardware</i> permiten
              evaluar el rendimiento de componentes específicos, como la memoria
              RAM, la tarjeta gráfica o el disco duro, ayudando a localizar el
              origen de la falla. También se utilizan pruebas de software para
              detectar conflictos de compatibilidad, problemas de controladores
              o errores en el sistema operativo. Estas pruebas iniciales
              permiten al técnico establecer un punto de partida para el
              diagnóstico completo y garantizan que la intervención sea lo más
              precisa posible.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center bg1 mb-4 p-4">
        <div class="col-lg-1">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema1/img6.svg"
          />
        </div>
        <div class="col-lg-11">
          <p>
            La habilidad para identificar problemas de manera rápida y eficaz es
            primordial en el mantenimiento de equipos de cómputo, especialmente
            en entornos corporativos donde el tiempo de inactividad puede
            afectar la productividad. Una correcta identificación del problema
            reduce el tiempo necesario para la reparación, ya que permite al
            técnico enfocar sus esfuerzos en las áreas específicas que requieren
            atención. Igualmente, al identificar con precisión el origen de la
            falla, se minimiza el riesgo de dañar otros componentes durante la
            reparación, lo cual contribuye a mantener la integridad del equipo y
            a reducir los costos asociados al mantenimiento correctivo.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div id="t_1_2" class="titulo-segundo color-acento-botones mt-5">
        <h2>1.2 <i>Software</i> de diagnóstico</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-8">
          <p>
            El <i>software</i> de diagnóstico es una herramienta indispensable
            en el mantenimiento correctivo de equipos de cómputo, ya que permite
            evaluar el estado y rendimiento de los diferentes componentes del
            sistema de manera rápida y precisa. Este tipo de
            <i>software</i> facilita la identificación de problemas en el
            <i>hardware</i>, tales como la memoria RAM, la unidad de
            almacenamiento, la tarjeta gráfica y otros componentes
            indispensables. Al ejecutar pruebas específicas, el
            <i>software</i> de diagnóstico ofrece datos precisos sobre el estado
            de cada componente, lo cual permite al técnico determinar si algún
            elemento requiere reparación o reemplazo.
          </p>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12 bg2 p-4">
              <div class="row justify-content-center align-items-center">
                <div class="col-lg-2">
                  <img
                    class="img-fluid img-a"
                    src="@/assets/curso/temas/tema1/img7.svg"
                  />
                </div>
                <div class="col-lg-10">
                  <p>
                    Entre las herramientas de <i>software</i> de diagnóstico más
                    comunes se encuentran programas como MemTest86 para la
                    evaluación de la memoria RAM, CrystalDiskInfo para
                    monitorear el estado del disco duro, y CPU-Z para analizar
                    el rendimiento del procesador. Estas herramientas suelen ser
                    de fácil acceso y ofrecen una interfaz intuitiva que
                    facilita su uso tanto para técnicos expertos como para
                    usuarios que buscan una evaluación básica de sus equipos.
                    Además, muchas de estas herramientas están disponibles en
                    versiones gratuitas, lo que hace que el diagnóstico sea
                    accesible y económico en una amplia variedad de contextos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema1/img8.png"
          />
        </div>
      </div>
      <p>
        El uso de <i>software</i> de diagnóstico permite también detectar
        problemas de <i>software</i> que pueden afectar el rendimiento general
        del sistema. Programas como Malwarebytes y CCleaner ayudan a identificar
        y eliminar archivos no deseados o amenazas de <i>malware</i> que puedan
        estar ralentizando el equipo. Estas aplicaciones complementan el
        diagnóstico del <i>hardware</i> al asegurar que no existan conflictos en
        el sistema operativo o en el <i>software</i> de terceros que puedan
        estar impactando negativamente en el rendimiento del equipo. De esta
        forma, el <i>software</i> de diagnóstico ofrece un enfoque integral que
        considera tanto problemas de <i>hardware</i> como de <i>software</i>.
      </p>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-4">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema1/img9.png"
          />
        </div>
        <div class="col-lg-8 bg5 p-4">
          <p>
            Finalmente, el uso de <i>software</i> de diagnóstico no solo
            facilita la detección de problemas, sino que también permite
            realizar un seguimiento de la salud del equipo a lo largo del
            tiempo. Muchas herramientas de diagnóstico permiten almacenar
            registros históricos de las pruebas realizadas, lo que facilita la
            comparación y el análisis de los cambios en el rendimiento del
            equipo. Este seguimiento es especialmente útil en entornos
            corporativos, donde el monitoreo continuo del estado de los equipos
            permite planificar un mantenimiento preventivo y reducir el riesgo
            de fallos imprevistos.
          </p>
        </div>
      </div>
      <div
        class="titulo-sexto color-acento-contenido offset-0"
        data-aos="zoom-in"
      >
        <h5>Figura 1.</h5>
        <span>
          Proceso de diagnóstico y solución de fallas en equipos de
          cómputo</span
        >
      </div>
      <div class="row justify-content-center align-items-center mb-3">
        <div class="col-lg-12">
          <figure>
            <img
              src="@/assets/curso/temas/tema1/img10.svg"
              alt="La Figura 1 se denomina «Proceso de diagnóstico y solución de fallas en equipos de cómputo» y consiste en mostrar visualmente el proceso de diagnóstico y reparación de fallas en equipos de cómputo, mostrando el paso a paso desde la identificación de problemas hasta la validación final."
            />
            <figcaption>Fuente: OIT, 2024.</figcaption>
          </figure>
        </div>
      </div>
      <Separador></Separador>
      <div id="t_1_1" class="titulo-segundo color-acento-botones mt-5">
        <h2>1.3 Códigos de error y <i>troubleshooting</i></h2>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-8">
          <p>
            Los códigos de error son mensajes generados por el sistema o por los
            componentes de <i>hardware</i> cuando se detecta un fallo o anomalía
            en el funcionamiento del equipo. Estos códigos son una guía
            invaluable para los técnicos, ya que ofrecen información detallada
            sobre la naturaleza y localización del problema, permitiendo una
            identificación más rápida de la falla. Los códigos de error pueden
            aparecer en la pantalla en forma de mensajes alfanuméricos, en el
            BIOS del sistema, o incluso como códigos de parpadeo en luces
            indicadoras del equipo. Interpretar estos códigos correctamente es
            un paso fundamental en el diagnóstico, ya que ayuda a reducir el
            tiempo de búsqueda de la causa del fallo.
          </p>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12 bg1 p-4">
              <div class="row justify-content-center align-items-center">
                <div class="col-lg-2">
                  <img
                    class="img-fluid img-a"
                    src="@/assets/curso/temas/tema1/img13.svg"
                  />
                </div>
                <div class="col-lg-10">
                  <p>
                    El <i>troubleshooting</i>, o resolución de problemas, es el
                    proceso sistemático que los técnicos utilizan para
                    identificar y corregir los fallos detectados en el equipo.
                    Este proceso comienza con la interpretación de los códigos
                    de error y continúa con una serie de pruebas y
                    verificaciones para confirmar la causa exacta del problema.
                    Por ejemplo, un código de error relacionado con la memoria
                    RAM podría implicar realizar pruebas de diagnóstico
                    específicas en ese componente, como el uso de MemTest86,
                    para determinar si existe un módulo defectuoso. El enfoque
                    ordenado de <i>troubleshooting</i> permite evitar
                    diagnósticos erróneos y maximizar la eficiencia en la
                    reparación del equipo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema1/img12.png"
          />
        </div>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-4">
          <img
            class="img-fluid img-a"
            src="@/assets/curso/temas/tema1/img14.png"
          />
        </div>
        <div class="col-lg-8">
          <p>
            Existen herramientas de <i>software</i> especializadas en
            <i>troubleshooting</i> que ayudan a los técnicos a identificar
            problemas de manera más precisa. Muchas de estas herramientas están
            diseñadas para detectar errores en el sistema operativo, en el
            <i>hardware</i>, o en el software de controladores. Programas como
            Windows Event Viewer, que registra todos los errores y eventos del
            sistema, o BlueScreenView, que permite analizar fallos de pantalla
            azul, son ejemplos de herramientas de
            <i>troubleshooting</i> ampliamente utilizadas. Estas aplicaciones
            proporcionan detalles técnicos sobre cada error, facilitando el
            proceso de reparación y minimizando la posibilidad de recurrencia de
            la falla.
          </p>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-12 bg4 p-4">
              <p>
                El conocimiento de los códigos de error y la capacidad de
                aplicar técnicas de <i>troubleshooting</i> son habilidades
                primordiales para cualquier técnico en mantenimiento de equipos
                de cómputo. La resolución efectiva de problemas no solo mejora
                el rendimiento y la durabilidad del equipo, sino que también
                reduce los tiempos de inactividad, especialmente en entornos
                donde los equipos son críticos para las operaciones diarias. Un
                enfoque metódico y bien informado en el
                <i>troubleshooting</i> garantiza una solución precisa y rápida,
                minimizando los costos y evitando la sustitución innecesaria de
                componentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
