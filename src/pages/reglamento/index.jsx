import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Reglamento = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Reglamento IML Tenis</h1>
        <h2 className='font-bold text-primary'>Apertura 2024</h2>
        🤝
      </div>
      <p className='md:columns-2 gap-8 text-sm'>
        La presente liga de clubes se desarrolla desde el mes de Marzo hasta el mes de Diciembre en 2 torneos a jugarse
        los días Sábados y Domingos, según corresponda. Disputando en cada fecha 3 encuentros entre 2 equipos
        representantes de un club de tenis.
        <br />
        <br />
        <strong className='text-primary'>Modalidad de juego: </strong> En la categoría Primera Libre se jugarán 2
        singles y 1 doble. En el resto de las categorías se jugarán 1 single y 2 dobles. <br />
        Todos los partidos se disputarán al mejor de 3 sets, con tie break. El tercer set será Super Tie break a 10
        puntos con diferencia de dos.
        <br />
        <br />
        <strong className='text-primary'>Puntuación: </strong> Cada encuentro ganado sumará un punto, es decir, ganando
        los 3 encuentros de la serie se sumarán 3 puntos al equipo vencedor, ganando 2 a 1 se sumarán 2 puntos al equipo
        vencedor y 1 punto al equipo rival, por lo que ahora todos los encuentros ganados suman puntos. <br />
        En caso de empate por puntos en las fases de grupo, se desempatará por mayor cantidad de series ganadas, de
        persistir el empate, por diferencia de sets y en el ultimo caso diferencia de games. <br />
        Todos los resultados podrán ser vistos en este sitio web.
        <br />
        <br />
        <strong className='text-primary'>Formación: </strong>
        En las categorías en las cuales se disputen <strong>1 partido de singles y 2 partidos de dobles</strong>, de los
        cinco jugadores convocados para la serie, cualquiera podrá ser designado para jugar el partido de singles. De
        los cuatro jugadores restantes, el de mejor ranking deberá ser asignado obligatoriamente para jugar el doble 1.
        <br /> <br />
        En las categorías en las cuales se disputen <strong>1 partido de dobles y 2 partidos de singles</strong>, el
        jugador que participe en el single 1 deberá estar por encima en la lista de buena fe del jugador que participe
        en el single 2.
        <br />
        <br />
        <strong className='text-primary'>Formación Incompleta: </strong> Si el equipo completo o algún jugador no se
        presentara a jugar la fecha correspondiente (WO) deberá avisar con un mínimo de 48hs al capitán rival por
        escrito al chat de capitanes de WhatsApp, de lo contrario deberá correr con los gastos que correspondan al
        equipo local, como ser alquiler de canchas. <br /> De tener que disputarse solo 2 encuentros, estos serán el
        single y doble 1
        <br />
        <br />
        <strong className='text-primary'>Mala formación: </strong> El equipo que incurra en ella, perderá la fecha por
        6-0 6-0 en todos los parciales.
        <br />
        <br />
        <strong className='text-primary'>Pelotas: </strong> El equipo local será el encargado de proveer las pelotas
        para el encuentro. Se podrán usar tubos o pelotas sueltas hasta con un uso, de lo contrario el equipo rival
        podrá pedir W.O. <br />
        Las pelotas "con un uso" deben tener presión de pelota nueva y en cuanto a la felpa debe verse la marca de la
        pelota completa.
        <br />
        <br />
        <strong className='text-primary'>Días y Horarios: </strong> Las categorías de damas jugarán los días sábados y
        domingos en un horario a determinar por el equipo local en cada oportunidad, que deberá ser los sábados entre
        las 13 y las 17hs y los domingos entre las 9 y las 17hs. <br />
        La categoría tercera +45 jugarán los días sábados en un horario a determinar por el equipo local en cada
        oportunidad, que deberá ser entre las 13 y las 17hs.
        <br />
        El resto de las categorías jugarán los días domingos en un horario a determinar por el equipo local en cada
        oportunidad, que deberá ser entre las 9 y las 17hs.
        <br />
        Los horarios deben informarse por el capitan del equipo local en el grupo de capitanes de WhatsApp ANTES DE LAS
        12:00 DEL JUEVES de la semana correspondiente, de lo contrario se procedera a la quita de 1 punto de la serie al
        equipo local, sumandose 1 punto por cada día de atraso.
        <br />
        <br />
        <strong className='text-primary'>Resultados y Formación: </strong> Es obligatorio el envío de la planilla de
        resultados o los resultados y formaciones al chat de capitanes de WhatsApp por parte del capitan del equipo
        ganador en el transcurso de las 48 hs. del horario en que se haya disputado la serie, de lo contrario se
        procedera a anular la serie.
        <br />
        <a
          href='https://imltenis.com.ar/assets/docs/planilla_de_carga_iml_tenis.pdf'
          className='link link-error'
          target='_blank'
          rel='noopener noreferrer'
        >
          Descargar la planilla
        </a>
        <br />
        <br />
        <strong className='text-primary'>Tercer tiempo: </strong> Queda a voluntad del equipo local. Por parte de la
        organización recomendamos en lo posible llevarlo a cabo compartiendo los gastos del mismo, de esta manera
        fomentando la camaraderia entre los jugadores y equipos.
        <br />
        <br />
        <strong className='text-primary'>Coaching: </strong> Los capitanes pueden intercambiar pareceres, comentarios
        y/o efectuar directivas a sus jugadores, sobre el partido o cualquier otro tema que tenga interés. Si el Capitán
        no estuviere dentro de la Cancha acompañando a sus jugadores podrá ingresar en el momento de algún cambio de
        lado. Todos los comentarios deberán ser efectuados en un nivel de tono, forma y contenido que no moleste a
        ningún jugador rival. Cuando el Capitán fuera jugador y se encontrará disputando un partido, podrá delegar esta
        función de Coaching en otra persona. Y responderá en todo por ella.
        <br />
        <br />
        <strong className='text-primary'>Feriados largos: </strong> Queda a criterio de la organización la programación
        de partidos en dichos días.
        <br />
        <br />
        <strong className='text-primary'>En caso de lluvia: </strong> El equipo local deberá avisar como mínimo dos
        horas antes del horario del partido al chat de capitanes de WhatsApp que sus canchas están en condiciones para
        jugar. Pasado este límite, el equipo visitante no está en la obligación de aceptar ir a jugar.
        <br />
        La reprogramación se pasará para el final del torneo, salvo que los equipos involucrados se pongan de acuerdo y
        decidan jugar antes, informando previamente a esta organización.
        <br />
        <br />
        <strong className='text-primary'>Reinicio de la Serie Reprogramada: </strong>
        Al reprogramarse una serie que no ha comenzado, por razones climáticas, y/o algún otro motivo, esta se
        considerará como una serie nueva en todos los aspectos. Esto incluye la anulación de cualquier configuración
        previa, tales como formaciones de equipos, selección de jugadores, y el orden de los partidos.
        <br />
        Todas las partidas dentro de la serie reprogramada comenzarán con un conteo de puntos nuevo, sin tener en cuenta
        cualquier configuración o acuerdo previo establecido antes de la interrupción.
        <br />
        <br />
        <strong className='text-primary'>Suspensión de un partido por falta de tiempo: </strong> En el caso de que el
        equipo local tenga que suspender el partido por compromisos de alquiler de canchas o similares, se considerará
        ese partido como abandono del equipo local. Se computará el resultado hasta ese momento y abandono local.
        <br />
        <br />
        <strong className='text-primary'>Suspensión de partidos comenzados: </strong> Los partidos suspendidos por
        razones climáticas, y/o algún otro motivo, ya iniciados, serán reprogramados por esta asociación, con los
        parciales y los jugadores participantes. En caso de no presentase alguno de los jugadores en la fecha
        reprogramada, el parcial en disputa será considerado perdido por abandono, debiendo continuar los demás que
        faltaren terminar.
        <br />
        <br />
        <strong className='text-primary'>Inpuntualidad de jugadores: </strong> El máximo de tolerenacia será de 15
        minutos, pasados los cuales se considerará como abandono del partido. El equipo que abandone un partido, deberá
        avisar a la organización por escrito al chat de capitanes de WhatsApp, y deberá correr con los gastos que
        correspondan al equipo rival, como ser alquiler de canchas.
        <br />
        <br />
        <strong className='text-primary'>Alquiler de canchas: </strong>
        La presente es una liga de Interclubes que reúne a la mayoría de clubes deportivos cuyos ingresos provienen del
        cobro por el uso de dichos espacios. Cada jugador debe abonar cuando le toca jugar ya sea de local o de
        visitante una suma fijada por la organización. Ese dinero se abona en el club donde se desarrolla la serie.
        Aquel equipo que presente formación incompleta sin haber avisado con el mínimo de 48hs en el chat de capitanes,
        deberá abonar igualmente el costo completo en concepto de alquiler de cancha. Aquellos emprendimientos
        urbanísticos que no acostumbran a cobrar el alquiler por el uso de las canchas en razón que los propietarios la
        sostienen mediante el pago de las expensas, tienen el mismo derecho a cobrarlas y utilizar el dinero recaudado
        en las localias para afrontar el costo de su participación cuando jueguen de visitantes. Queda igualmente a
        criterio de los mismos el cobro a los equipos visitantes. La única manera de evitar el pago del alquiler de las
        canchas es avisando 48hs antes de la ausencia, en cuyo caso el club que será local tiene el tiempo suficiente de
        disponer de la misma para alquilarla a terceros.
        <br />
        El costo fijado en concepto de alquiler de cancha será actualizado periódicamente por esta organización con el
        fin de mantenerlo acorde a la necesidad de los clubes.
        <br />
        <br />
        <strong className='text-primary'>Lista de buena fe: </strong> Deben ser enviadas por el capitán de cada equipo a
        la organización antes de la fecha informada de su cierre. Pasada dicha fecha, no se podrá realizar incorporación
        o cambio alguno.
        <br />
        El mejor jugador del equipo deberá ir primero en la lista, siguiendo este criterio para el resto de la lista,
        siendo el ultimo jugador el de más bajo nivel.
        <br />
        Es responsabilidad de los capitanes chequear que estén todos sus jugadores y colocados en la posición que
        consideren correcta antes del comienzo del torneo.
        <br />
        En la categoría con límite de edad, tercera +45, se considerará que el jugador está dentro de la categoría, al
        cumplir años dentro del año calendario de inicio del torneo.
        <br />
        <br />
        <strong className='text-primary'>El límite de integrantes de la lista de buena fe </strong> es de 20 jugadores.
        <br />
        <br />
        <strong className='text-primary'>Auditoria de lista de buena fe rivales: </strong> Cada capitán podrá objetar la
        ubicación de algún jugador rival en la lista de algún equipo rival. Para tal fin deberá informarlo por mail a
        hola@imltenis.com.ar, mencionando equipo, ubicación objetada, motivos y ubicación que considera correcta. No se
        tomarán reclamos por teléfono o WhatsApp. Tal objeción, será tomada de forma anónima.
        <br />
        <br />
        <strong className='text-primary'>Suplentes naturales: </strong> Cuando un equipo quede incompleto debido a
        ausencia de algún o algunos jugadores, podrá auxiliarlo, mediante el reemplazo por otros jugadores de sus
        divisiones inferiores. Dicho jugador si ganará 1 partido en la categoría superior pasará a integrar la lista de
        buena fe del equipo de la categoría superior, no pudiendo jugar en la categoría inferior en la que fue inscripto
        en un principio. <br />
        Esta regla se aplica a todo jugador independientemente del club al que forme parte.
        <br />
        <br />
        <strong className='text-primary'>Dos o más equipos por división: </strong> Cuando un club tenga dos o más
        equipos en la misma categoría, éstos se considerarán como equipos distintos, los jugadores de estos equipos no
        podrán jugar en ningún otro equipo de la misma categoría a la que pertenezcan.
        <br />
        <br />
        <strong className='text-primary'>Excepciones a la programación: </strong> Cuando por coincidencia de fechas con
        la realización del circuito de tenis algún club tenga compromisos asumidos con anterioridad, podrá solicitar a
        esta asociación, a considerar, la no programación de partidos, la misma deberá ser presentada con anterioridad a
        la realización de la programación oficial e indicará fechas ciertas de los compromisos asumidos.
        <br />
        Esta posibilidad solo podrá ser concedida por una vez, por torneo, y de manera excepcional. Se hace saber que NO
        es obligatorio para IML el otorgar dicha excepción pudiendo siempre la organización no hacer lugar al pedido. En
        caso que algún club no haya hecho uso de dicha posibilidad dentro de un campeonato, pero que la organización IML
        encuentre dificultades para otorgarles dicha excepción habida cuenta de retrasos que complican el normal
        desarrollo del torneo, la organización podrá negar dicha posibilidad mediante una simple notificación por
        razones organizativas, la cual será inapelable.
        <br /> <br />
        <strong className='text-primary'>Instalaciones necesarias: </strong> El Club deberá poder ofrecer para jugar un
        partido completo un mínimo de 2 canchas reglamentarias de tenis, vestuarios con comodidades suficientes. Dichas
        canchas deberán ser de un mismo tipo de superficie, las que serán previamente aprobadas por esta asociación.{' '}
        <br />
        Los 3 encuentros deberán disputarse en el mismo horario, con excepción de clubes con 2 canchas, ver apartado
        para clubes con 2 canchas.
        <br />
        <br />
        <strong className='text-primary'>Clubes con 2 canchas: </strong> En caso de disputarse una serie en un club con
        dos canchas, cada jugador solo podrá disputar un encuentro en una misma serie. La serie se desarrollará en dos
        tandas que deben jugarse una a continuación de la otra, sin excepcion. La segunda tanda deberá comenzar no
        despues de las 17hs.
        <br />
        Siempre debe programarse el comienzo de la serie con la disputa del doble 1 o el single en caso que la primer
        tanda de partidos implique solo uno, o bien en caso de disputarse la primer tanda de partidos incluyendo dos
        encuentros podrán ser con la disputa del doble 1 y el doble 2 o bien con la disputa del doble 1 y el single.
        Jamás debe comenzar a disputarse el doble 2 a la par del single, postergando el inicio del doble 1. La misma
        regla rige para clubes que cuentan con tres canchas, quienes deben hacer comenzar los tres partidos de manera
        contemporánea. Si por cuestión de buena fe algún club accede a comenzar el doble 2 por llegada tardía de algún
        integrante del doble 1 del equipo rival, en caso que este último (sea local o visitante) no presente el doble 1,
        el mismo habrá perdido ambos dobles.
        <br /> <br />
        <strong className='text-primary'>Ascenso de equipos: </strong>
        El sistema de ascenso será personalizado para cada categoría, adaptándose a la cantidad de equipos y al formato
        de competencia específico. Este enfoque garantiza una experiencia de torneo más justa y equitativa, reflejando
        las necesidades únicas de cada categoría y promoviendo un ambiente competitivo saludable para todos.
        <br />
        Para los equipos ascendidos se requerirá la participación obligatoría de los jugadores que hayan terminado el
        torneo correspondiente con una diferencia de +3 o superior en encuentros disputados, para el resto de los
        jugadores será optativo el ascenso.
        <br />
        <br />
        <strong className='text-primary'>Ascensos de jugadores: </strong> la liga IML tenis ostenta el legítimo derecho
        de ascender a cualquier jugador cuyo nivel sobrepase ampliamente la categoría correspondiente, así como a
        aquellos que posean registros de haber participado y/o ganado torneos en categorías considerablemente superiores
        en el tiempo reciente, hasta dos años, con la quita de puntos de la serie en reclamo.
        <br />
        <br />
        <strong className='text-primary'>Niveles orientativos para la formación de equipos: </strong>
        Quinta: Jugadores categoría 125, C. Cuarta: Jugadores categoría 250 a 500, B2, B-. Tercera: Jugadores categoría
        500 a 750, B1 Segunda: Jugadores categoría 750 a 1000, A1, A2 Primera: Jugadores categoría 1000, Super A.
        <br />
        <br />
        <strong className='text-primary'>Playoffs: </strong> En estas estapas solo podrán participar los jugadores que
        hayan disputado al menos una serie en instancias previas en la categoría corresponiente en el actual torneo, a
        excepción de la categoría Primera Libre, donde esta regla no se aplicará.
        <br />
        <br />
        <strong className='text-primary'>Penalizaciones: </strong> A. IML Tenis se reserva el derecho de sancionar y/o
        advertir a cualquier jugador que agreda física o verbalmente a cualquier miembro de la liga. B. Cualquier
        inconveniente surgido durante el partido deberá ser resuelto por los participantes del mismo, y en caso de no
        lograr una solución, se permitirá la intervención de terceros, siempre y cuando exista un acuerdo previo entre
        los participante involucrados.
        <br />
        <br />
        <strong className='text-primary'>Capitanía: </strong>
        La organización se reserva el derecho a solicitar cambio de capitanía en caso de considerarlo necesario o bien
        de solicitar la incorporación de un subcapitan al chat de capitanes en reemplazo del capitán, a efectos de
        facilitar la comunicación y gestionar de manera más diligente las cuestiones administrativas referentes a la
        organización de cada serie a desarrollarse. Este sub capitán/a deberá ser un jugador/a integrante del plantel.
        <br />
        <br />
        <strong className='text-primary'>Los equipos que participen por primera</strong> vez podrán anotarse en la
        categoría que crean que es la adecuada a su nivel de juego. Esta asociación podrá descalificar o cambiar de
        categoría al equipo y/o jugador si considera que no es la correcta para su nivel de juego. No es requisito para
        participar por primera vez anotarse en la categoría más baja.
        <br />
        <br />
        <strong className='text-primary'>Límite temporal de reclamos: </strong>
        Cualquier reclamo que verse sobre cualquier situación que pueda darse desde el comienzo de la competición y
        hasta su finalización, y que a criterio de alguna de las partes considerase que infringe este reglamento, dicho
        reclamo deberá ser expresado a la organización dentro de las 48horas de haberse jugado la serie en cuestión.
        Luego de ese tiempo y sin excepción, cualquier reclamo quedará sin efecto.
        <br />
        <br />
        <strong className='text-primary'>Otras cuestiones: </strong>
        La organización se reserva el derecho a modificar el presente reglamento cuando sea imperioso establecer,
        regular o fijar conductas o acciones que puedan generar conflictos o diversas interpretaciones con el objeto de
        conducir a un mejor desenvolvimiento de las diversas competiciones.
        <br />
        <br />
        Para el supuesto caso que pudiera darse una laguna en la normativa o posible doble interpretación, esta
        organización resolverá puntualmente la cuestión en conflicto de acuerdo a su leal saber y entender, notificando
        a las partes que pudieran estar involucradas. La decisión será inapelable por las partes que pudieran estar
        involucradas y generará un precedente que será utilizado para aclaración de las posibles normas en conflicto.
        <br />
        <br />
        <span className='block opacity-70'>Ultima actualización el 8 de Mayo 2024.</span>
      </p>

      <Helmet>
        <title>IML Tenis Reglamento</title>
      </Helmet>
    </section>
  )
}

export default Reglamento
