const preguntas = [];

function q(id, texto, a, b, c, d, correcta, textoCorrecto) {
    preguntas.push({
        id,
        texto,
        opciones: { a, b, c, d },
        correcta,
        textoCorrecto
    });
}

/* ===== AQUÍ VAN LAS 213 PREGUNTAS ===== */

q(1,"Circuito Integrado Hall en un Sistema de Encendido Hall","Siempre","Nunca","En modelos modernos sí","En modelos modernos no","a","Siempre"),
q(2,"Julio como Unidad de Medida","Resistencia eléctrica","Potencia eléctrica","Intensidad de corriente","Energía eléctrica","d","Energía eléctrica"),
q(3,"Oscilograma de Secundario en Encendido Transistorizado","Tensión de secundario se hace cero","Tensión de 5V","Tensión de 12V","Caída brusca de tensión","a","Tensión de secundario se hace cero"),
q(4,"Número 15 en Circuitos Automotrices","Positivo directo de batería","Masa","Salida de relé","Positivo después de llave de contacto","d","Positivo después de llave de contacto"),
q(5,"Corriente Producida en Devanados del Estator","Corriente alterna monofásica","Corriente alterna trifásica","Corriente continua rectificada","Alterna monofásica o trifásica según alternador","d","Alterna monofásica o trifásica según alternador"),
q(6,"Misión del Circuito de Intermitencias","Indicar a conductores y peatones que se cambiará de dirección","Indicar solo a conductores","Indicar solo a peatones","Indicar que el vehículo frena","a","Indicar a conductores y peatones que se cambiará de dirección"),
q(7,"Reducción entre piñón motor de arranque y corona","1/8 a 1/15","1/4 a 1/15","1/8 a 1/20","1/10 a 1/20","d","1/10 a 1/20"),
q(8,"Resistencia calefactora de sonda Lambda","Variable con tensión","Variable con luz","Coeficiente temperatura negativo","Coeficiente temperatura positivo","d","Coeficiente temperatura positivo"),
q(9,"Verificación de señal de sensor Hall","-y+","-yo","Oy+","Indiferente","b","-yo"),
q(10,"Definición del motor de arranque","Mecánica a eléctrica","Eléctrica a mecánica","Eléctrica a química","Química a mecánica","b","Eléctrica a mecánica"),
q(11,"Conector diagnóstico del vehículo","Conector de masa","Conector positivo","Conector ABC","Conector OBD","d","Conector OBD"),
q(12,"Duración de un ciclo de la red doméstica 50Hz","50 segundos","0,020 s","25 segundos","100 segundos","b","0,020 s"),
q(13,"Grupo del hierro según permeabilidad","Diamagnético","Ferromagnético","No magnético","Paramagnético","b","Ferromagnético"),
q(14,"Dedo pulgar regla mano derecha","Movimiento del conductor","No indica nada","Flujo magnético","Dirección de corriente","a","Movimiento del conductor"),
q(15,"Medición tensión batería indica estado","Sí, tensión correcta indica batería buena","Depende del tipo de batería","Solo indica carga","Depende de temperatura","c","Solo indica carga"),
q(16,"Aumentar longitud del cable sobre resistencia","Disminuye","Aumenta","No se modifica","Depende del material","b","Aumenta"),
q(17,"Inducción corriente bobinas perpendiculares","Siempre","Solo si muchas espiras","No se induce","Depende del voltaje","c","No se induce"),
q(18,"Medición resistencia con ohmímetro","Con corriente","Desconectado de corriente","Depende de la resistencia","Con amperímetro en paralelo","b","Desconectado de corriente"),
q(19,"Escala Voltios/División incorrecta osciloscopio","No apreciar señal","Onda desfilando","Osciloscopio no mide","Imágenes juntas","a","No apreciar señal"),
q(20,"Suma resistencias en paralelo","Inversa de resultante suma inversas","Inversa suma resistencias","Suma resistencias","Producto dividido","a","Inversa de resultante suma inversas"),
q(21,"Emisión de luz diodo LED","Polaridad inversa","Polaridad directa","Ambas ciertas","Ninguna","b","Polaridad directa"),
q(22,"Función tiristor","Resistencia","Amplificador","Interruptor","Fuente","c","Interruptor"),
q(23,"Definición frecuencia","Tiempo ciclo completo","Número de ciclos por segundo","Distancia pico a pico","Tiempo dos ciclos","b","Número de ciclos por segundo"),
q(24,"Período de señal eléctrica","Tiempo ciclo completo","Número ciclos por segundo","Distancia pico a pico","Frecuencia angular","a","Tiempo ciclo completo"),
q(25,"Tensión nominal batería","Bornes sin circuito","Bornes descargada","Bornes conectada","Indicada por fabricante","d","Indicada por fabricante"),
q(26,"Diodo no conduce polarizado","Directamente","Inversamente","Insuficientemente","Al revés","b","Inversamente"),
q(27,"Líneas de fuerza vs intensidad campo magnético","No influye","Más líneas menos intenso","Más líneas más intenso","No tiene relación","c","Más líneas más intenso"),
q(28,"Conexión amperímetro circuito","Depende","En serie","En paralelo","Serie-paralelo","b","En serie"),
q(29,"Tensión ruptura diodo Zener","Disminuye al aumentar corriente","Aproximadamente constante","Destruye diodo","No hay ruptura","b","Aproximadamente constante"),
q(30,"Parte móvil alternador","Inducido","Inductor","Ambos","Ninguno","b","Inductor"),
q(31,"Norma general instalación eléctrica","Desconectar negativo batería","Usar destornillador plano","Unir cables altavoz con RCA","Cable positivo cerca del amplificador","a","Desconectar negativo batería"),
q(32,"Número positivo después llave contacto","30","31","75","15","d","15"),
q(33,"Anchura haz luz halógena","100-150 m","50-150 m","30-50 m","Menos de 30 m","c","30-50 m"),
q(34,"Causa polarización pilas","Exceso temperatura","Exceso corriente","Humedad","Acumulación hidrógeno","d","Acumulación hidrógeno"),
q(35,"Ley fundamental electricidad estática","Ley de Ohm","Ley de Coulomb","Efecto Joule","Ninguna","b","Ley de Coulomb"),
q(36,"Unidad de fuerza","Newton","Amperio","Vatio","Culombio","a","Newton"),
q(37,"Unidad de inducción magnética","Weber","Amperio/m","Newton","Tesla","d","Tesla"),
q(38,"Transistor importante para","Amplificar señales débiles","Rectificar tensión","Regular tensión","Emitir luz","a","Amplificar señales débiles"),
q(39,"Zonas de dopado transistor","1","2","3","4","c","3"),
q(40,"Electrólito batería alcalina","Ácido sulfúrico diluido","Hidróxido níquel","Hidróxido potásico en agua","Hidróxido cadmio","c","Hidróxido potásico en agua"),
q(41,"Placas batería plomo-ácido","Ambas plomo-calcio","Ambas peróxido plomo","Positivas peróxido, negativas plomo-calcio","Negativas peróxido, positivas plomo-calcio","c","Positivas peróxido, negativas plomo-calcio"),
q(42,"Puntos de masa vehículo","Localizados en planos fabricante","Al azar","Con polímetro","Solo borne negativo","a","Localizados en planos fabricante"),
q(43,"Resistencia bobinas inductoras estator","No","Amperímetro entre B+ y borne apagado","Pinza amperimétrica","Polímetro AC","b","Amperímetro entre B+ y borne apagado"),
q(44,"Proceso de trabajo batería","Inducción mutua","Autoinducción","Electrólisis","Ninguna","c","Electrólisis"),
q(45,"Unidad medida resistencia bobina claxon","Voltios","Amperios","Ohmios","Vatios","c","Ohmios"),
q(46,"Unidad resistividad material","Ohmios","Ohmios·m/mm²","Ohmios·mm²/m","Ohmios·mm²","c","Ohmios·mm²/m"),
q(47,"Borne relé corriente directa","86","85","30","87","c","30"),
q(48,"Desconectar batería para alternador","No salvo regulador electrónico","Sí, seguridad","Sí salvo regulador electrónico","","b","Sí, seguridad"),
q(49,"Generar f.e.m. sin cambio de intensidad de campo","Depende material","Si hay suficientes líneas","Sí","No","d","No"),
q(50,"Aparatos para comprobar batería","Densímetro, ohmetro, osciloscopio","Voltímetro, amperímetro, pickup","Densímetro, ohmetro, descargador rápido","Densímetro, voltímetro, descargador rápido","d","Densímetro, voltímetro, descargador rápido"),
q(51,"Elementos comunes emergencias e intermitencias","Ninguno","Todos","Interruptores y fusibles","Todos menos interruptor, propio interruptor","d","Todos menos interruptor, propio interruptor"),
q(52,"Qué regular en alternador","Intensidad","Intensidad y tensión","Corriente retorno y voltaje","Tensión","d","Tensión"),
q(53,"Qué es alternador","Transforma eléctrica a mecánica AC","Eléctrica a mecánica CC","Mecánica a eléctrica AC","Mecánica a eléctrica CC","c","Mecánica a eléctrica AC"),
q(54,"Qué mide luxómetro","Tensión","Intensidad eléctrica","Intensidad lumínica","Potencia faro","c","Intensidad lumínica"),
q(55,"Mediciones osciloscopio","Intensidad","Resistencia","Potencia","Tensión/tiempo","d","Tensión/tiempo"),
q(56,"Qué dice efecto Joule","Resistencia proporcional a resistividad y longitud","Calor proporcional inverso resistencia y corriente al cuadrado","Calor proporcional a resistencia, corriente al cuadrado y tiempo","Calor inverso a resistencia y corriente al cuadrado","c","Calor proporcional a resistencia, corriente al cuadrado y tiempo"),
q(57,"1ª Ley Kirchhoff","Producto corrientes nudo=0","Intensidades no coinciden","Suma intensidades en nudo=0","Suma intensidades=unidad","c","Suma intensidades en nudo=0"),
q(58,"2ª Ley Kirchhoff","Producto corrientes=0","Suma f.e.m.=ΣR·I","Suma intensidades=0","Suma f.e.m.=ΣR·I","d","Suma f.e.m.=ΣR·I"),
q(59,"Ley de Lenz","Corriente inducida opuesta al flujo que la genera","Corriente inversa a resistencia","Corriente inducida se suma al flujo","","a","Corriente inducida opuesta al flujo que la genera"),
q(60,"Dirección líneas de fuerza","Corriente","Campo magnético","Nada","Corriente o campo según material","b","Campo magnético"),
q(61,"Lámparas bilux","Doble filamento","Un filamento","H1","Descarga gas","a","Doble filamento"),
q(62,"Resistencia cables bujías","30 kΩ/m","10 kΩ/m","20 kΩ/m","Sin resistencia","a","30 kΩ/m"),
q(63,"Quién cuantificó fuerza campo magnético","Laplace","Oersted","Fleming","Ampere","a","Laplace"),
q(64,"Silicio según conductibilidad","Aislante","Semiconductor","Conductor","Ninguno","b","Semiconductor"),
q(65,"Motor arranque actúa como generador","No","Depende revoluciones","Sí, fuerza electromotriz suma","Sí, f.e.m. opuesta","d","Sí, f.e.m. opuesta"),
q(66,"Corriente grande en diodo polarización","Directa","Inversa","Escasa","Al revés","a","Directa"),
q(67,"Flancos sensor Hall no vertical","Cambiar amplificador","Cambiar sensor","Cambiar bobina","Puesta a punto","b","Cambiar sensor"),
q(68,"Contacto tipo Reed relé","Dos láminas ferromagnético","Una lámina paramagnético","Dos láminas diamagnético","Una lámina diamagnético","a","Dos láminas ferromagnético"),
q(69,"Espacio acción imán","Permeabilidad magnética","Campo magnético","Intensidad eléctrica","No existe","b","Campo magnético"),
q(70,"Fluido frigorífico peligroso","Congelación","Gases tóxicos","Asfixia","Todas anteriores","d","Todas anteriores"),
q(71,"Flujo solenoide aumenta","Más espiras","Menos espiras","Invertir corriente","No metal","a","Más espiras"),
q(72,"Motor de arranque se basa en","Ley Ohm","Ley Kirchhoff","Ley Maxwell","Ley Fleming","d","Ley Fleming"),
q(73,"Henrio unidad","Frecuencia","Inductancia","Pulsación","Período","b","Inductancia"),
q(74,"Herzio unidad","Frecuencia","Inductancia","Pulsación","Período","a","Frecuencia"),
q(75,"Maxwell unidad","Flujo magnético","Inducción magnética","FEM máx alternador","FEM eficaz alternador","a","Flujo magnético"),
q(76,"El valor de la capacidad equivalente de un agrupamiento en serie de varios condensadores es igual...",
"Al inverso de la suma de los inversos de los valores de las capacidades de los distintos condensadores",
"A la suma de las capacidades de todos ellos",
"Al producto de las capacidades de todos ellos",
"A la capacidad del mayor dividida por la capacidad del menor",
"a",
"Al inverso de la suma de los inversos de los valores de las capacidades de los distintos condensadores");

q(77,"El weber es la unidad de...",
"Potencia eléctrica",
"Permeabilidad magnética",
"Intensidad de campo eléctrico",
"Flujo magnético",
"d",
"Flujo magnético");

q(78,"En las bobinas de encendido, el arrollamiento con mayor resistencia es...",
"El primario",
"El secundario",
"Depende del modelo de bobina",
"Depende de cómo estén conectados interiormente",
"b",
"El secundario");

q(79,"En los circuitos modulados en anchura de impulsos, ¿qué nos indica el ciclo o factor de trabajo?",
"No indica nada, ya que no hay circuitos modulados en anchura de impulsos",
"No indica nada, ya que no hay circuitos modulados",
"El porcentaje de tiempo que permanece activado ese circuito",
"Depende del circuito en anchura de impulsos",
"c",
"El porcentaje de tiempo que permanece activado ese circuito");

q(80,"En los motores de arranque con reductora, ¿cuál es la finalidad de esta?",
"Reducir las revoluciones del inducido para disminuir el par en el arranque",
"Reducir las revoluciones del inducido para aumentar el par en el arranque",
"Aumentar las revoluciones del inducido para disminuir el par en el arranque",
"Aumentar las revoluciones del inducido para aumentar el par en el arranque",
"b",
"Reducir las revoluciones del inducido para aumentar el par en el arranque");

q(81,"En una malla en la que no existan f.e.m., la suma de los productos de cada resistencia por la intensidad que la atraviesa es...",
"Uno",
"Cero",
"Uno o cero dependiendo del valor de la resistencia",
"Uno o cero dependiendo de la intensidad",
"b",
"Cero");

q(82,"Indica bajo qué principio trabaja el transmisor de régimen",
"Magnetismo",
"Fotoelectricidad",
"Piezoelectricidad",
"Conductividad eléctrica",
"a",
"Magnetismo");

q(83,"La capacidad de un condensador se mide en...",
"Culombios",
"Voltios",
"Radianes por segundo",
"Faradios",
"d",
"Faradios");

q(84,"La ganancia de corriente de un transistor se define como la relación entre la corriente de colector y...",
"La corriente de base",
"La corriente de emisor",
"La corriente de la fuente de alimentación",
"La corriente de colector",
"a",
"La corriente de base");

q(85,"La información de salida de un sensor de temperatura es...",
"Una tensión de salida proporcional a la temperatura",
"Una resistencia que varía con la temperatura",
"Una frecuencia cuya periodicidad cambia con la temperatura",
"Una tensión de salida fija independiente de la temperatura",
"b",
"Una resistencia que varía con la temperatura");

q(86,"La red de distribución de aire comprimido en su trazado será...",
"Horizontal",
"Inclinada hacia el acumulador",
"Inclinada hacia el lugar de servicio",
"Es independiente de cualquier posición",
"c",
"Inclinada hacia el lugar de servicio");

q(87,"La resistencia de un conductor se mide en...",
"Amperios",
"Voltios",
"Ohmios",
"2mm2/m",
"c",
"Ohmios");

q(88,"La unidad de mantenimiento general está constituida por...",
"Filtro, válvula de retención y engrasador",
"Filtros, distribuidores y actuadores",
"Filtro, regulador y reductor de presión",
"Filtro, regulador y engrasador",
"d",
"Filtro, regulador y engrasador");

q(89,"Las unidades de control...",
"Soportan cualquier temperatura",
"Se pueden deteriorar si hay temperaturas elevadas",
"Trabajan mejor en frío",
"Son más eficaces si hay temperaturas superiores a 60°C",
"b",
"Se pueden deteriorar si hay temperaturas elevadas");

q(90,"Los elementos de mando son...",
"Válvulas distribuidoras accionadas manualmente",
"Válvulas distribuidoras pilotadas",
"Las válvulas que actúan directamente sobre el elemento de mando",
"Las válvulas que actúan directamente sobre el elemento neumático",
"a",
"Válvulas distribuidoras accionadas manualmente");

q(91,"Los medidores de masa por lámina caliente...",
"Miden la cantidad real del aire aspirado teniendo en cuenta su densidad",
"Miden el volumen de aire aspirado por el motor",
"Miden el volumen de aire aspirado por el motor cuando está caliente",
"Miden el volumen de aire teniendo en cuenta su presión",
"a",
"Miden la cantidad real del aire aspirado teniendo en cuenta su densidad");

q(92,"Se denomina fuerza electrostática...",
"Al trabajo que hay que realizar para desplazar una carga eléctrica",
"A la fuerza que actúa sobre los electrones para mantenerlos en sus órbitas",
"A la trayectoria que siguen las líneas de fuerza",
"A la fuerza que actúa entre cargas eléctricas",
"d",
"A la fuerza que actúa entre cargas eléctricas");

q(93,"Si en un vehículo se quiere visualizar información a tiempo real acerca del estado operativo de los sistemas, ¿qué función debemos activar?",
"La función de osciloscopio",
"La función del multímetro",
"La función de adaptación",
"La función de lectura de bloques de valores",
"d",
"La función de lectura de bloques de valores");

q(94,"Si la tensión del alternador cae por debajo de la tensión de la batería, ¿qué elemento se encarga de evitar la descarga de la batería a través del alternador?",
"Los diodos",
"Un disyuntor",
"Nunca ocurre eso",
"Los diodos y el disyuntor",
"a",
"Los diodos");

q(95,"Si los faros destellan de forma aleatoria...",
"La batería puede estar sulfatada o en corto",
"Los terminales del circuito pueden estar flojos o corroídos",
"No llega voltaje a los faros",
"El conmutador de faros es defectuoso",
"b",
"Los terminales del circuito pueden estar flojos o corroídos");

q(96,"Si queremos ver señales eléctricas complejas que varían muy rápido, ¿qué aparato utilizarías?",
"Un voltímetro",
"Un osciloscopio",
"Un amperímetro",
"Un óhmetro",
"b",
"Un osciloscopio");

q(97,"Si una avería se mantiene por un período de tiempo mayor del definido...",
"Es una avería permanente",
"Es una avería esporádica",
"No existe ninguna avería",
"Es una avería fugaz",
"a",
"Es una avería permanente");

q(98,"¿A partir de qué frecuencia se denomina ultrasonido en el sector automotriz?",
"Inferior a 20.000 Hz",
"Superior a 20.000 Hz",
"Entre 16 y 20.000 Hz",
"Superior a los 100.000 Hz",
"b",
"Superior a 20.000 Hz");

q(99,"¿Cómo se produce el calentamiento de la luneta térmica en vehículos?",
"Con el empleo de un calentador eléctrico",
"Con unos hilos conductores que forman una resistencia",
"Con unos hilos especiales",
"Con el aire del circuito de la calefacción",
"b",
"Con unos hilos conductores que forman una resistencia");

q(100,"¿Cuál de estas mediciones se debe realizar en serie en un circuito eléctrico para verificar el flujo de corriente?",
"Resistencia",
"Intensidad",
"Tensión",
"Potencia",
"b",
"Intensidad"),

q(101,"¿Cuál es el valor de velocidad del sonido que se utiliza en la programación de sistemas de sonido para vehículos?","340 m/s","240 m/s","380 m/s","140 m/s","a","340 m/s"),

q(102,"¿Cuál es el valor del nivel de presión sonora máximo a una distancia de siete metros según normativas de seguridad vehicular?","Superior a 98 dB","Igual o superior a 93 dB","87 dB","83 dB","b","Igual o superior a 93 dB"),

q(103,"¿Cuál es la normativa internacional que regula la red CAN utilizada en vehículos modernos?","ISO 189","ASCII","ISO 11898","SAE J1820","c","ISO 11898"),

q(104,"¿Cuál es la unidad de medida estándar de la eficiencia luminosa de los dispositivos de iluminación vehicular?","Kelvin (K)","Lumen/vatio (lm/W)","Candela (cd)","Lumen (lm)","b","Lumen/vatio (lm/W)"),

q(105,"¿Cuántas escobillas suelen tener los motores de limpiaparabrisas de dos velocidades?","Tres","Dos, una para cada velocidad","Cuatro, dos para cada velocidad","Una sola","a","Tres"),

q(106,"¿Dónde se coloca típicamente el interruptor de marcha atrás en un vehículo?","En el pedal de freno","En la caja de cambios","En la palanca de cambios","En el pedal del embrague","b","En la caja de cambios"),

q(107,"¿Dónde se puede colocar el captador del cuentarrevoluciones en un motor de vehículo?","En el árbol de transmisión","En el cigüeñal del motor","En un semiárbol de transmisión","En el secundario de la caja de cambios","b","En el cigüeñal del motor"),

q(108,"¿Dónde se coloca típicamente el captador Hall del velocímetro?","En el embrague","En el cigüeñal del motor","En el primario de la caja de cambios","En el eje de salida de la caja de cambios","d","En el eje de salida de la caja de cambios"),

q(109,"¿Dónde va colocada la resistencia de compensación en las sondas lambda NTK de 8 vías?","Entre el terminal de la célula de bomba y un terminal libre","Entre el positivo de la resistencia de calefacción y un terminal libre","No llevan resistencia de compensación","","c","No llevan resistencia de compensación"),

q(110,"¿El alternador reversible Stop-Start dispone de captador de posición por fase?","Sí, uno por cada fase U,V,W","Sí, en la fase U","No es necesario","Sí, en la fase W","a","Sí, uno por cada fase U,V,W"),

q(111,"¿El captador de punto muerto lo emplea qué sistema?","Arranque con llave","Sistema Stop-Start","No disponen de captador","Arranque con llave codificado","b","Sistema Stop-Start"),

q(112,"¿Cuándo se deben regular los filtros en un sistema de audio vehicular?","Antes de la instalación","Antes de verificar el volumen máximo","Justo antes de regular la ganancia","Después de regular la ganancia","c","Justo antes de regular la ganancia"),

q(113,"¿Es necesario desconectar la batería para soldar la carrocería?","No","Solo soldadura blanda","Sí, siempre","Solo en refrigeración","c","Sí, siempre"),

q(114,"¿Es posible diagnosticar un vehículo sin clavija OBDII?","No","Sí, con líneas K y L","Sí, por red CAN","No se puede diagnosticar","b","Sí, con líneas K y L"),

q(115,"¿Es posible medir la corriente de excitación del alternador?","No","Con amperímetro en B+","Con pinza amperimétrica en el cable","Con polímetro AC","c","Con pinza amperimétrica en el cable"),

q(116,"¿Es posible montar una bocina sin relé?","No se puede","Sí, conexión directa a positivo","Siempre con relé","Ninguna es correcta","b","Sí, conexión directa a positivo"),

q(117,"¿Qué elemento se usa para disminuir la corriente en el mando de la bocina?","Fusible","Relé","Diodo","Llave de contacto","b","Relé"),

q(118,"¿Qué tipo de altavoces reproducen una amplia gama de frecuencias?","Woofers","Subwoofers","De cono","Tweeters","c","De cono"),

q(119,"¿Qué cualidad distingue entre sonido grave y agudo?","Timbre","Tono","Intensidad","Resistencia","b","Tono"),

q(120,"¿Qué diferencia existe entre pila y batería?","No hay diferencia","La pila es reversible","La batería no es reversible","La pila no es reversible y la batería sí","d","La pila no es reversible y la batería sí"),

q(121,"¿Cuál es la vida útil aproximada de una lámpara LED vehicular?","10.000 horas","500 horas","100.000 horas","2.000 horas","a","10.000 horas"),

q(122,"¿Qué contiene la caja eléctrica central de un vehículo?","Relés y fusibles","Interruptores","Interruptores y fusibles","Ninguna","a","Relés y fusibles"),

q(123,"¿Qué es la pérdida de carga en sistemas de fluidos?","Pérdida de fluido","Pérdida de peso","Pérdida de presión","Ninguna","c","Pérdida de presión"),

q(124,"¿Qué fabricante emplea ISO 14230?","Renault","Audi","Volvo","Ford","a","Renault"),

q(125,"¿Qué frecuencia tienen los intermitentes?","30 impulsos/min","90±30 impulsos/min","30±30 impulsos/min","La que quiera el fabricante","b","90±30 impulsos/min"),

q(126,"¿Qué indica 10A en un fusible?","Tipo de fusible","Amperios máximos","Tensión","Potencia","b","Amperios máximos"),

q(127,"¿Qué metal tiene mejor conductividad eléctrica?","Hierro","Plomo","Cobre","Aluminio","c","Cobre"),

q(128,"¿Cuál es la misión del cuadro de instrumentos?","Mostrar velocidad","Parámetros del motor","Informar parámetros del vehículo","Velocidad y RPM","c","Informar parámetros del vehículo"),

q(129,"¿Qué misión tienen las luces de pare?","Indicar frenado","Alumbrar marcha atrás","Indicar freno de mano","Indicar posición","a","Indicar frenado"),

q(130,"¿Qué misión tienen las luces de marcha atrás?","Avisar maniobra","Avisar detención","Avisar que no tiene reversa","Cambio de dirección","a","Avisar maniobra"),

q(131,"¿Qué misión tienen los fusibles?","Limitar tensión","Limitar intensidad","Evitar caída de tensión","Evitar fugas","b","Limitar intensidad"),

q(132,"¿Qué potencia tienen las luces de freno a 12V?","5W","50W","21W","Igual a posición","c","21W"),

q(133,"¿Qué principio emplean los relojes del tablero?","Conservación energía","Continuidad eléctrica","Electrónico","Electromagnético","d","Electromagnético"),

q(134,"¿Qué puerta lógica cumple X=A+B?","NOR","NAND","AND","NOT","a","NOR"),

q(135,"¿Qué tensión emplean las baterías NiMH?","12V","24V","48V","200 a 300V","d","200 a 300V"),

q(136,"¿Qué tensión emplea el motor-alternador Mercedes S400?","Continua 126V","Alterna 12V","Alterna 126V","Continua 12V","c","Alterna 126V"),

q(137,"¿Qué lámpara produce 3200 lm con 35W?","Xenón","LED","Halógena","Convencional","a","Xenón"),

q(138,"¿Qué flujo luminoso emite una lámpara H7 55W?","2100 lm","400 lm","1500 lm","3200 lm","c","1500 lm"),

q(139,"¿Qué es un torquímetro?","Herramienta de ajuste","Instrumento de tensión","Todas las anteriores","","c","Todas las anteriores"),

q(140,"¿Qué test se realizan en un banco de pruebas?","Fuga, abanico, electricidad, caudal y resistividad","Fuga, abanico, electricidad y caudal","Fuga, abanico, presión, caudal y resistividad","Ninguna","b","Fuga, abanico, electricidad y caudal"),

q(141,"¿Para qué sirve la malla de apantallamiento en encendidos?","Absorber interferencias","Mantener separación","Medir señal","Evitar variación de encendido","a","Absorber interferencias"),

q(142,"¿Qué se observa en un motor paso a paso con osciloscopio?","Señal DC","Señal senoidal","Nada","Impulsos cuadrados","d","Impulsos cuadrados"),

q(143,"¿Cuál es la utilidad de un osciloscopio?","Distinguir DC y AC","Analizar ruido","Medir periodo y voltaje","Todas","d","Todas"),

q(144,"¿Ventajas de limpiar inyectores por canister?","Regular presión","Simular RPM","Todas","Ninguna","c","Todas"),

q(145,"¿Qué factores usa el programa de estabilidad?","Coeficiente de deriva","Aceleración transversal","Radio de giro","Ninguna","a","Coeficiente de deriva"),

q(146,"¿Símbolo de resistencia en diagnóstico?","A","B","Ω","Rs","c","Ω"),

q(147,"¿Rango de resistencia en captadores ABS?","800–950 Ω","1000–1500 Ω","340–550 Ω","","b","1000–1500 Ω"),

q(148,"¿Cuándo lavar inyectores?","Alto consumo","Pérdida de potencia","Emisiones altas","Todas","d","Todas"),

q(149,"¿Diferencia entre osciloscopio analógico y digital?","Continuo vs discreto","Ambos iguales","Depende señal","Ninguna","a","Continuo vs discreto"),

q(150,"¿Cómo actúa el sistema TCS?","Encendido y freno","Inyección y freno","Equilibra RPM","Ninguna","b","Inyección y freno"),
q(151,"El sistema ABS trabaja conjuntamente con el programa electrónico de estabilidad ESP, ¿qué componente no es parte de este programa?","El transmisor de dirección geométrico","El transmisor de aceleración transversal","Interruptor de pedal de freno","El transmisor que mide la altura","d","El transmisor que mide la altura"),

q(152,"El sistema de comunicación por radiofrecuencia desarrollado por la casa Ericsson se denomina","Bluetooth","MOST-BUS","CAN-BUS","LIN-BUS","a","Bluetooth"),

q(153,"¿El sistema del ABS trabaja conjuntamente con el programa electrónico de estabilidad con qué otro nombre se le conoce a este programa ESP?","ESC (Electronic Stability Control)","DSC (Dynamic Stability Control)","ESC y PSM","Todas las anteriores","d","Todas las anteriores"),

q(154,"¿Qué función cumple la válvula de final de carrera en algunos circuitos automáticos?","Secuencia","Final de carrera con rodillo abatible","Limitadora de presión","Reguladora de presión","a","Secuencia"),

q(155,"¿Cuáles son los componentes incluidos en el bloque hidráulico adicional del sistema de frenos?","Bomba de barrido, válvulas de aspiración y presión, acumulador de baja presión, electroválvulas de entrada y salida","Bomba de barrido, válvulas, cilindro maestro y freno de rueda","Freno, acumulador de baja presión y electroválvulas","Ninguna","a","Bomba de barrido, válvulas de aspiración y presión, acumulador de baja presión, electroválvulas de entrada y salida"),

q(156,"¿Qué borne recibe corriente desde la llave de contacto en un sistema eléctrico del vehículo?","Borne 86","Borne 85","Borne 30","Borne 87","a","Borne 86"),

q(157,"En el sistema ABS, ¿quién mide las revoluciones por minuto de giro de las ruedas?","La centralita","El sensor de régimen","La línea CAN","Ninguna","b","El sensor de régimen"),

q(158,"En un conductor optoeléctrico, ¿a partir de qué radio de curvatura se produce reflexión total?","Superior a 10 mm","Superior a 100 mm","Superior a 25 mm","Inferior a 25 mm","c","Superior a 25 mm"),

q(159,"En un mensaje CAN, ¿cuántos bits tiene el campo de confirmación?","11 bits","2 bits","16 bits","56 bits","b","2 bits"),

q(160,"En un montaje Darlington, ¿cuál es la mínima tensión entre emisor y base para que conduzca?","5 V","0,7 V","1,4 V","Depende del transistor","c","1,4 V"),

q(161,"¿Es posible codificar una unidad de control a través de internet?","Sí, mediante codificado online","No es posible","Depende de la caracterización","Depende de dimensiones","a","Sí, mediante codificado online"),

q(162,"¿Bajo qué principio trabaja el sensor de picado?","Magnetismo","Fotoelectricidad","Piezoelectricidad","Piezorresistivo","c","Piezoelectricidad"),

q(163,"La UEC analógica calcula el tiempo básico de inyección a partir de","Revoluciones y temperatura","Aire aspirado y temperatura","Aire aspirado y revoluciones","Densidad del aire","c","Aire aspirado y revoluciones"),

q(164,"¿Sobre qué actuaciones actúa la reducción del par motor en el control de tracción?","Encendido, combustible y mariposa electrónica","Encendido y corte de inyectores","Combustible, mariposa y transmisión","Ninguna","a","Encendido, combustible y mariposa electrónica"),

q(165,"¿Qué parte del vehículo actúa como cable del negativo masa?","Partes de cristal","Plásticos de la carrocería","No existe masa","La carrocería y sus piezas metálicas","d","La carrocería y sus piezas metálicas"),

q(166,"¿Qué sistema evita que un compresor supere la presión de trabajo?","Válvula de seguridad","Válvula de timbrado","Válvula de purga","Válvula presostática","d","Válvula presostática"),

q(167,"Los elementos de gobierno son...","Válvulas que actúan directamente sobre el elemento neumático","Válvulas manuales","Válvulas automáticas","Válvulas pilotadas","a","Válvulas que actúan directamente sobre el elemento neumático"),

q(168,"Los esquemas eléctricos de los vehículos se representan en versión...","Bipolar","Monopolar","Bipolar y monopolar","Bipolar gasolina y monopolar diésel","b","Monopolar"),

q(169,"Para calcular la sección de un cable necesitamos conocer...","Intensidad, longitud, material y caída de tensión","Longitud y tensión","Longitud e intensidad","Material y tensión","a","Intensidad, longitud, material y caída de tensión"),

q(170,"¿Cómo se mide el amperaje con un multímetro?","En paralelo","En serie y en escala alta","En serie sin importar escala","En paralelo y escala baja","b","En serie y en escala alta"),

q(171,"¿Cómo se mide la caída de tensión con un multímetro?","Puntas en los puntos de lectura con el vehículo en contacto","Una punta a masa","Vehículo apagado","No se puede medir","a","Puntas en los puntos de lectura con el vehículo en contacto"),

q(172,"¿Cómo se mide la intensidad con un multímetro?","Abriendo el circuito y conectando correctamente","En paralelo","Sin abrir el circuito","Con el vehículo apagado","a","Abriendo el circuito y conectando correctamente"),

q(173,"¿Cómo se mide la resistencia con un multímetro?","En escala de ohmios sin voltaje en el circuito","Con voltaje aplicado","Siempre en escala máxima","Con corriente circulando","a","En escala de ohmios sin voltaje en el circuito"),

q(174,"¿Cómo se mide el voltaje absoluto con un multímetro?","Entre dos puntos cualquiera","Una punta a masa y otra al punto a medir","Vehículo apagado","No se puede medir","b","Una punta a masa y otra al punto a medir"),

q(175,"¿Qué componentes conforman el sistema electrónico del ABS?","Módulo ABS, sensores de rueda, batería, testigo, cuerpo de válvulas y diagnóstico","Módulo ABS y pastillas","Sensores y zapatas","Todas","a","Módulo ABS, sensores de rueda, batería, testigo, cuerpo de válvulas y diagnóstico"),

q(176,"¿Cuál es la distancia recomendada del entrehierro del sensor captador?","0.5 a 2 mm","1 a 3 mm","0.4 a 0.9 mm","Mayor a 1 mm","c","0.4 a 0.9 mm"),

q(177,"¿Qué tipo de ondas se pueden ver en un osciloscopio?","Senoidales y cuadradas","Triangulares","Pulsos","Todas","d","Todas"),

q(178,"¿Qué válvula se emplea en mecanismos de seguridad?","Simultaneidad","Selectora","Estrangulación","Limitadora","a","Simultaneidad"),

q(179,"¿Cuál es la resistencia de los inyectores de alta y baja impedancia?","Baja 2.5–4.5 Ω","Baja 1.7–3 Ω y alta 14–16 Ω","Baja 1.7–3 Ω y alta 10–16 Ω","Ninguna","c","Baja 1.7–3 Ω y alta 10–16 Ω"),

q(180,"Si un cilindro tiene 80 PSI y los otros 130 PSI, ¿cuál es el problema?","Falla en altas RPM","Falla en bajas RPM","Válvulas torcidas","No genera correcta compresión","d","No genera correcta compresión"),

q(181,"¿Qué función permite modificar parámetros mediante valores de corrección?","Osciloscopio","Multímetro","Adaptación","Lectura de valores","c","Adaptación"),

q(182,"¿Cuántos bits componen un byte?","1024 bits","8 bits","24 bits","16 bits","b","8 bits"),

q(183,"Un circuito neumático o hidráulico está formado por...","Circuito de mando y trabajo","Solo mando","Elementos indistintos","Solo trabajo","a","Circuito de mando y trabajo"),

q(184,"¿Entre qué temperaturas funciona un conductor optoeléctrico?","-40°C a 85°C","0°C a 85°C","-4°C a 70°C","10°C a -85°C","a","-40°C a 85°C"),

q(185,"¿De qué material están hechos los filamentos de lámparas convencionales?","Cobre","Tungsteno","Kriptón","Fósforo","b","Tungsteno"),

q(186,"¿A qué altura del suelo deben estar los centros de los faros?","0.5 a 1.2 m","0.5 a 1.5 m","1.2 a 1.5 m","0.25 a 0.5 m","a","0.5 a 1.2 m"),

q(187,"¿A través de qué cable se excita la unidad de control para diagnóstico?","Cable H","Cable J","Cable X","Cable K","d","Cable K"),

q(188,"¿Cómo se encuentra la electroválvula del regulador de rigidez en posición firme?","Activada","Reposo","Elástica","Rígida","b","Reposo"),

q(189,"¿Con qué función del equipo de diagnosis se ajustan ciclos de regulación?","Diagnóstico de actuadores","Codificado","Ajuste básico","Borrado de averías","c","Ajuste básico"),

q(190,"¿Cuál es la frecuencia de trabajo de las bobinas electromagnéticas?","300 a 500 Hz","100 a 200 Hz","700 a 1000 Hz","500 a 700 Hz","a","300 a 500 Hz"),

q(191,"¿Dónde se emplean motores paso a paso en un automóvil?","Movimientos precisos","Dirección","Alto par","Movimiento lento","a","Movimientos precisos"),

q(192,"¿De qué material son los casquillos de lámparas halógenas?","Fundición","Cobre","Plomo","Latón","d","Latón"),

q(193,"¿Para qué se realiza la adaptación del cuadro de instrumentos?","Ajustar intervalos","Reconocer el cuadro sustituido","Detectar averías","Ninguna","b","Reconocer el cuadro sustituido"),

q(194,"¿Cuál es la duración aproximada de una lámpara de xenón?","250 h","500 h","2500 h","1000 h","c","2500 h"),

q(195,"¿Qué elementos controlan la dirección del fluido neumático?","Reguladores","Limitadores","Distribuidores","Ninguno","c","Distribuidores"),

q(196,"¿Qué misión tiene la red CAN BUS?","Compartir señales entre módulos","Estabilizar tensión","Leer averías","Detectar lámparas","a","Compartir señales entre módulos"),

q(197,"¿Cuál es la misión principal de la red CAN?","Alimentar módulos","Conectar a masa","Comunicar módulos","Conectar sensores","c","Comunicar módulos"),

q(198,"¿Qué misión tienen las luces de gálibo?","Alumbrar calzada","Marcha atrás","Anchura","Anchura y altura","d","Anchura y altura"),

q(199,"¿Qué números señalan presión y escape en esquemas?","4; 8","2; 3; 5","1; 3; 5","1; 2; 3","c","1; 3; 5"),

q(200,"¿Qué ocurre si CAN-High se deriva a masa?","No hay comunicación","Comunica por CAN-Low","CAN-Low se deriva","Señal analógica","b","Comunica por CAN-Low"),

q(201,"¿Qué significa la numeración 1.2 en un circuito?","Mando salida del vástago","Mando entrada del vástago","Elemento de trabajo","Tratamiento de señal","a","Mando salida del vástago"),

q(202,"¿Qué sistema de seguridad emplean los vehículos híbridos y eléctricos?","Desconectador extraíble de alta tensión","Regulador","Ninguno","Tierra especial","a","Desconectador extraíble de alta tensión"),

q(203,"¿Qué temperatura alcanza una bombilla incandescente cálida?","600 K","150 K","2700 K","8000 K","c","2700 K"),

q(204,"¿Qué tipo de compresor aspira por válvula y envía a alta presión?","De tornillo","Roots","Paletas","Pistón","a","De tornillo"),

q(205,"¿Qué válvula regula la cantidad de aire en el fuelle?","Alivio","Limitadora presión","Válvula de nivel","Limitadora altura","c","Válvula de nivel"),

q(206,"La unidad electrónica ROM es la unidad donde se recibe la información procedente de los sensores del sistema, mientras que la unidad electrónica RAM es la unidad que tiene almacenados los mapas característicos de control.",
"Verdadero","Falso","","",
"b","Falso");

q(207,"La función de programación y adaptación en los escáneres es de mucha importancia ya que en todos los vehículos con sistemas de unidades de control, bolsas de aire, alarmas, inmovilizadores y otros, se requiere la reposición de los procedimientos de programación después de algunas reparaciones electrónicas o tras sustituir la Unidad de Control Electrónico.",
"Verdadero","Falso","","",
"a","Verdadero");

q(208,"El escáner tiene la opción de prueba de actuadores como bloquear o desbloquear puertas, encender la bomba de combustible, corte de combustible o bloqueo y desbloqueo de TPMS, dependiendo de las opciones del vehículo y del escáner automotriz.",
"Verdadero","Falso","","",
"a","Verdadero");

q(209,"Los escáneres tienen la función de detectar todas las unidades de control electrónico instaladas en el vehículo y pueden leer los códigos de error cuando existen fallas.",
"Verdadero","Falso","","",
"a","Verdadero");

q(210,"En determinados sensores se utilizan etapas intermedias no eléctricas. En los sistemas de freno antibloqueo se emplean sensores pasivos inductivos y sensores activos magnetorresistivos.",
"Verdadero","Falso","","",
"a","Verdadero");

q(211,"En determinados sensores se utilizan etapas intermedias no eléctricas. En los sistemas de freno antibloqueo se emplean sensores pasivos inductivos y sensores activos magnetorresistivos.",
"Verdadero","Falso","","",
"a","Verdadero");

q(212,"La rueda mueve el anillo dentado ferromagnético generando líneas de fuerza magnética del imán permanente e induciendo en el bobinado del sensor de régimen una tensión alterna cuadrada.",
"Verdadero","Falso","","",
"b","Falso");

q(213,"Algunos escáner solo pueden realizar la lectura de códigos con fallas, por lo que para interpretar correctamente la información es necesario consultar el manual correspondiente del código.",
"Verdadero","Falso","","",
"a","Verdadero")
;

/* ===== NO PONGAS NADA DEBAJO ===== */
