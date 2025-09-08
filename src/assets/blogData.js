// src/assets/blogData.js
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';
import blog7 from '../assets/blog7.jpg';
import blog8 from '../assets/blog8.jpg';

const data = [
  {
    id: 1,
    titulo: 'Alquiler de Grúas RT: La Solución Perfecta para tus Proyectos',
    resumen: 'Cuándo conviene alquilar una grúa Rough Terrain, qué capacidades ofrecen y cómo elegir el equipo correcto según el terreno y la altura de trabajo.',
    fecha: '13/06/2023',
    imagen: blog1,
    categoria: 'Blog',
    contenido: `
      <p>El <strong>alquiler de grúas RT (Rough Terrain)</strong> es la alternativa más eficiente cuando se requiere movilidad en superficies irregulares, montaje rápido y gran capacidad de elevación sin transportar contrapesos externos.</p>
      <h2>¿Cuándo conviene una RT?</h2>
      <ul>
        <li>Obras con <strong>accesos difíciles</strong> o suelos no pavimentados.</li>
        <li>Montajes que requieren <strong>traslados frecuentes</strong> dentro de la obra.</li>
        <li>Proyectos con <strong>plazos cortos</strong> donde el tiempo de armado es crítico.</li>
      </ul>
      <h2>Capacidades típicas</h2>
      <p>Las RT modernas ofrecen capacidades desde <strong>30 a 130 toneladas</strong>, con plumas hidráulicas de 28–60 m y plumines para alcanzar mayores radios.</p>
      <h2>Cómo elegir la grúa</h2>
      <ol>
        <li>Definir <strong>peso y centro de carga</strong> a elevar.</li>
        <li>Verificar <strong>radio de trabajo</strong> y altura libre.</li>
        <li>Revisar <strong>condición del terreno</strong> y pendientes.</li>
        <li>Confirmar <strong>tablas de carga</strong> y accesorios (eslingas, grilletes, plumín).</li>
      </ol>
      <blockquote>Tip: compartir planos o croquis de la maniobra permite dimensionar el equipo exacto y optimizar el costo.</blockquote>
      <p>En Sánchez Grúas contamos con RTs certificadas, operadores con experiencia y <strong>estudios de izaje</strong> para maniobras seguras.</p>
    `
  },
  {
    id: 2,
    titulo: 'Grúas Telescópicas: Todo lo que Necesitas Saber',
    resumen: 'Cómo funciona la pluma telescópica, ventajas frente a otros equipos y criterios para planificar izajes seguros con radios largos.',
    fecha: '06/06/2023',
    imagen: blog2,
    categoria: 'Blog',
    contenido: `
      <p>Las <strong>grúas telescópicas</strong> utilizan una pluma extensible que permite trabajar con diferentes <em>radios</em> sin desmontajes. Son ideales para montajes industriales, mantenimientos y construcción.</p>
      <h2>Ventajas principales</h2>
      <ul>
        <li><strong>Versatilidad:</strong> cambio rápido de configuración y alcance.</li>
        <li><strong>Montaje ágil:</strong> tiempos de alistamiento reducidos.</li>
        <li><strong>Precisión:</strong> control fino de movimientos y sistemas de seguridad (LMI).</li>
      </ul>
      <h2>¿Pluma, plumín o superlift?</h2>
      <p>Según la altura y el radio, puede añadirse <strong>plumín abatible</strong> o sistemas que incrementan la capacidad útil. La selección depende de la curva de carga indicada por el fabricante.</p>
      <h2>Buenas prácticas</h2>
      <ol>
        <li>Levantar con <strong>ángulos de pluma óptimos</strong> para maximizar capacidad.</li>
        <li>Evitar <strong>vientos superiores</strong> a los permitidos.</li>
        <li>Usar <strong>apoyos y calzos</strong> adecuados; piso nivelado y compactado.</li>
      </ol>
      <p>Brindamos asesoría técnica y <strong>tablas de carga</strong> para cada maniobra, garantizando seguridad y rendimiento.</p>
    `
  },
  {
    id: 3,
    titulo: 'Camiones Grúa en Proyectos Modernos',
    resumen: 'Solución 2 en 1: transporte y elevación en un mismo equipo. Casos de uso, límites de trabajo y recomendaciones clave.',
    fecha: '30/05/2023',
    imagen: blog3,
    categoria: 'Artículos',
    contenido: `
      <p>El <strong>camión grúa</strong> combina plataforma de transporte con una grúa articulada o telescópica. Aporta <strong>productividad</strong> en entregas de materiales, montaje de estructuras y traslado de equipos.</p>
      <h2>Aplicaciones frecuentes</h2>
      <ul>
        <li>Logística de <strong>prefabricados</strong> y estructuras metálicas.</li>
        <li>Montaje de <strong>equipos HVAC</strong> y tableros eléctricos.</li>
        <li>Movimiento de <strong>maquinaria ligera</strong> en planta.</li>
      </ul>
      <h2>Límites y cuidados</h2>
      <p>Su capacidad es menor que la de una grúa dedicada. Es fundamental revisar <strong>alcance vs. carga</strong> y estabilizar correctamente con patas y calzos.</p>
      <h2>Checklist rápido</h2>
      <ol>
        <li>Verificar <strong>peso real</strong> de la pieza.</li>
        <li>Confirmar <strong>acceso y espacio</strong> para estabilizadores.</li>
        <li>Usar <strong>eslingas certificadas</strong> con identificación visible.</li>
      </ol>
      <p>Nuestros camiones grúa cuentan con <strong>inspecciones vigentes</strong> y operadores calificados para maniobras urbanas o industriales.</p>
    `
  },
  {
    id: 4,
    titulo: '¿Qué es la Ingeniería de Izajes?',
    resumen: 'La disciplina que calcula, planifica y controla maniobras de elevación. Conoce los elementos del plan de izaje y cómo reduce riesgos.',
    fecha: '16/05/2023',
    imagen: blog4,
    categoria: 'Artículos',
    contenido: `
      <p>La <strong>ingeniería de izajes</strong> asegura que cada maniobra sea <em>técnicamente viable</em> y <em>operativamente segura</em>. Incluye cálculos, selección de equipos, ruta de izaje y controles previos.</p>
      <h2>Componentes de un plan</h2>
      <ul>
        <li><strong>Datos de carga:</strong> peso, CG, puntos de izaje.</li>
        <li><strong>Equipo propuesto:</strong> grúa, accesorios y configuración.</li>
        <li><strong>Curvas de carga</strong> y márgenes de seguridad.</li>
        <li><strong>Evaluación del suelo</strong> y apoyo.</li>
        <li><strong>Procedimiento paso a paso</strong> y roles del equipo.</li>
      </ul>
      <h2>Beneficios</h2>
      <p>Minimiza riesgos, <strong>evita reprocesos</strong> y permite estimar tiempos reales de operación. Es indispensable para izajes críticos o en entornos con interferencias.</p>
      <p>En proyectos complejos desarrollamos <strong>planos y memorias de cálculo</strong> validados por especialistas.</p>
    `
  },
  {
    id: 5,
    titulo: 'Servicio de Grúas Telescópicas en Lima',
    resumen: 'Cobertura en Lima y Callao con equipos certificados, asistencia 24/7 y soporte para permisos de vía y estudios de izaje.',
    fecha: '09/05/2023',
    imagen: blog5,
    categoria: 'Artículos',
    contenido: `
      <p>Disponemos de una <strong>flota de grúas telescópicas</strong> para obras civiles, montajes industriales y mantenimiento en altura dentro de Lima y Callao.</p>
      <h2>Nuestro alcance</h2>
      <ul>
        <li><strong>Atención 24/7</strong> para emergencias y paradas de planta.</li>
        <li>Equipos entre <strong>30–130 t</strong> con pluma y plumín.</li>
        <li><strong>Operadores certificados</strong> y señalero/rigger.</li>
      </ul>
      <h2>Servicios adicionales</h2>
      <ul>
        <li>Levantamiento en sitio y <strong>rutas de acceso</strong>.</li>
        <li>Gestión de <strong>permisos municipales</strong> y desvíos.</li>
        <li><strong>Plan de izaje</strong> y matrices de riesgo.</li>
      </ul>
      <p>Contáctanos para dimensionar el equipo correcto según <strong>peso, radio y altura</strong> de tu maniobra.</p>
    `
  },
  {
    id: 6,
    titulo: 'Izaje de Cargas: Seguridad y Eficiencia',
    resumen: 'Buenas prácticas para seleccionar eslingas y grilletes, evaluar el viento y coordinar señales para un izaje sin incidentes.',
    fecha: '02/05/2023',
    imagen: blog6,
    categoria: 'Novedades',
    contenido: `
      <p>Una maniobra segura depende de <strong>equipos certificados</strong>, condiciones controladas y una comunicación clara entre operador y señalero.</p>
      <h2>Selección de aparejos</h2>
      <ul>
        <li>Eslingas con <strong>WLL visible</strong> y certificados al día.</li>
        <li>Elegir el <strong>ángulo de eslinga</strong> correcto para no sobrecargar.</li>
        <li>Grilletes del <strong>mismo calibre</strong> que los puntos de izaje.</li>
      </ul>
      <h2>Antes de izar</h2>
      <ol>
        <li>Inspección visual del equipo y <strong>checklist</strong> diario.</li>
        <li>Revisión de <strong>viento</strong> y pronóstico.</li>
        <li>Ensayo en <strong>tensión parcial</strong> y verificación de amarre.</li>
      </ol>
      <p>Implementar estas prácticas reduce tiempos improductivos y maximiza la <strong>eficiencia operativa</strong>.</p>
    `
  },
  {
    id: 7,
    titulo: 'Entrevista con Sánchez Grúas y Maniobras',
    resumen: 'Más de 20 años de experiencia, flota diversa y un enfoque en seguridad que ha permitido ejecutar izajes críticos a nivel nacional.',
    fecha: '08/09/2022',
    imagen: blog7,
    categoria: 'Novedades',
    contenido: `
      <p>Conversamos con el equipo de <strong>Sánchez Grúas</strong> sobre su crecimiento, principales desafíos y aprendizajes en proyectos de alto impacto.</p>
      <h2>Hitos destacados</h2>
      <ul>
        <li>Participación en <strong>montajes industriales</strong> y energía.</li>
        <li>Implementación de un <strong>Sistema de Gestión de Seguridad</strong>.</li>
        <li>Capacitación continua de operadores y riggers.</li>
      </ul>
      <h2>La clave del éxito</h2>
      <p>La combinación de <strong>planificación</strong>, personal calificado y equipos mantenidos garantiza maniobras sin incidentes y clientes satisfechos.</p>
    `
  },
  {
    id: 8,
    titulo: 'Ventajas del Alquiler de Grúas',
    resumen: 'Menor inversión inicial, flexibilidad para cada proyecto y soporte técnico especializado. Conoce cuándo alquilar es la mejor decisión.',
    fecha: '04/11/2022',
    imagen: blog8,
    categoria: 'Novedades',
    contenido: `
      <p>El <strong>alquiler de grúas</strong> permite acceder a equipos modernos sin comprometer capital. Es ideal para proyectos con demandas variables o picos de producción.</p>
      <h2>Beneficios económicos</h2>
      <ul>
        <li><strong>Costos previsibles</strong> y facturación por uso.</li>
        <li>Sin gastos de <strong>mantenimiento ni almacenamiento</strong>.</li>
        <li>Posibilidad de <strong>actualizar</strong> a modelos más capaces cuando se requiera.</li>
      </ul>
      <h2>Cuándo alquilar</h2>
      <ol>
        <li>Proyectos de <strong>duración limitada</strong>.</li>
        <li>Necesidad de <strong>equipos específicos</strong> o configuraciones especiales.</li>
        <li>Cuando se requiere <strong>soporte técnico</strong> y estudios de izaje.</li>
      </ol>
      <p>Evaluamos tu operación y proponemos la solución con la <strong>mejor relación costo–beneficio</strong>.</p>
    `
  }
];

export default data;
