const seccionGrid = document.getElementById("seccion-principal");
const seccionDetalle = document.getElementById("seccion-detalle");
const btnDetalle = document.querySelectorAll(".btn-detail");
const imgDetalle = document.getElementById("imagen-detalle");
const tituloDetalle = document.getElementById("titulo-detalle");
const infoDetalle = document.getElementById("info-detalle");
const indice = document.getElementById("indice");


/* Array que contiene las diferentes informaciones de cada seccion */
const detalles = [
    {
        "imagen": "./assets/3dsmax.png",
        "titulo": "3DSMax",
        "descripcion": "3DS Max es un programa de gráficos por ordenador utilizado para crear modelos 3D, animaciones e imágenes digitales. Es un software de modelado, animación y renderizado en 3D construido y desarrollado para la visualización de juegos y diseños. Es uno de los programas más populares en la industria de gráficos por ordenador y es bien conocido por tener un robusto conjunto de herramientas para artistas 3D."
    },
    {
        "imagen": "./assets/blender.png",
        "titulo": "Blender",
        "descripcion": "Blender es una aplicación multiplataforma que se ejecuta en sistemas Linux, macOS y Windows. Blender también tiene requisitos de memoria y almacenamiento relativamente pequeños en comparación con otras suites de creación 3D. Su interfaz utiliza OpenGL y proporciona una experiencia consistente en todos los equipos y plataformas compatibles."
    },
    {
        "imagen": "./assets/CInema4d.png",
        "titulo": "Cinema 4D",
        "descripcion": "Cinema4d es un software de creacion de modelos y animaciones 3d originalmente diseñado para Commodore Amiga, y disponible actualmente en dud versiones más modernas para Windows y Macintosh. Su principal ventaja es una alta velocidad de Renderizado, lo cual lo posiciona de manera muy positiva en su mercado objetivo, el del marketing."
    },
    {
        "imagen": "./assets/houdini.png",
        "titulo": "Houdini",
        "descripcion": "Houdini es un software de desarrollo y animacion 3D procedural desarrollado por SideFX. Es empleado tanto en la industria del cine como de los videojuegos. Ofrece una robusta suite de herramientas enfocadas en la programacion basada en nodos y diseño 3d tradicional que lo distinguen del resto de programas de diseño 3d tradicionales. Es utilizado por importantes empresas de la industria tales cómo Disney Pixar, Dreamworks o Sony Pictures."
    },
    {
        "imagen": "./assets/maya.png",
        "titulo": "Maya",
        "descripcion": "Maya es el resultado de la union de Power Animator y Wavefront tras ser adquiridos por autodesk. Es un software ampliamente polivalente con una fuerte presencia en la industria cinematográfica. Uno de sus puntos fuertes reside en MEL, lenguaje de scrpting que conforma el nucleo del programa y que ofrece a diseñadores cin cinicimientos de programación una pitente herramienta para optimizar el flujo de trabajo."
    },
    {
        "imagen": "./assets/fusion.png",
        "titulo": "Fusion",
        "descripcion": "Fusion 360 destaca por ser un programa de modelado mixto, es decir, permite al diseñador trabajar con geometrías CAD, polígonales e incluso NURBs, lo cual lo convierte en una herramientra estraordinaria tanto para diseñadores CAD tradicionales cómo para otros ámbitos como el de los videojuegos, donde se realizan modelos poligonales con carácterídticas tradicionalmente propias del diseño CAD, como automóviles o armas."
    },
    {
        "imagen": "./assets/Rhino.png",
        "titulo": "Rhino",
        "descripcion": "Rhino es un programa de diseño NURBs, cuya principal característica es la creación de complejas formas geométricas, dificilmente realizables mediante el uso de geometría poligonal, en base al uso de splines. Una de sus características más importantes es la implementación de componentes cómo grasshoper sque permiten generacion de modelos paramétricos."
    },
    {
        "imagen": "./assets/zbrush.png",
        "titulo": "Zbrush",
        "descripcion": "ZBrush es un programa de modelado 3D, escultura y pintura digital. Zbrush inició como un programa que permitía crear pinturas digitales e insertar en ellas objetos 3D. Esta herramienta es similar al uso de arcilla de esculpido, pero digital, la cual permite sacar tus ideas de tu cabeza y materializarlas. Este programa ha influido en el cine y los videojuegos al facilitar la creación de personajes. Sirve para esculpir formas en arcilla digital y crear personas, orcos, dragones, animales, monstruos y más criaturas u objetos."
    },
    {
        "imagen": "./assets/DAz3d.png",
        "titulo": "Daz 3d",
        "descripcion": "Software de modelado y renderizado 3D cuya característica principal es la inclusión, por defecto, de una gran biblioteca de contenido 3D, la cual permite al diseñador crear personajes y escenas de gran realidmo en periodos de tiempo muy cortos. Tambien cabe destacar la enorme comunidad que se dedica a incrementar dicha biblioteca de manera voluntaria y gratuita."
    },
    {
        "imagen": "./assets/sketchup.png",
        "titulo": "Sketchup",
        "descripcion": "Software de diselo 3D enfocado principalmente a la conceptualiazión y previdualización.  Su principal caracterñistica es la sencillez de uso. Incluye una librería con multitud de assets listos para su uso, y existe una comunidad enorme en internet que distribuye tanto gratuitamente como mediante pago, multitud de assets facilmente en diseños de Sketchup. Tiene una fuerte presencia en el mercado inmobiliario."
    },
    {
        "imagen": "./assets/3dcoat.png",
        "titulo": "3Dcoat",
        "descripcion": "3dCoat es una suite de diseño 3D con una enorme polivalencia. Permite al usuario modelar, esculpir, texturizar, animar y renderizar, cubriendo todo el proceso de diseño de modelos 3D dentro de la industria del videojuego, el cual es su sector principal. Tambien incluye una sección de impresión 3D, la cual nos permite seccionar y preparar el modelo para que se adapte a las necesidades de cada impresora."
    },
    {
        "imagen": "./assets/modo.png",
        "titulo": "Modo",
        "descripcion": "Es un software de modelado 3D desarrollado por Foundry, creadores del famoso software de edición de video Foundry Nuke, ampliamente empleado en la industria cinematográfica.  Modo destaca por sus herramientas de modelado procedural, muy proximas a las del software CAD, pero integramente geométrico. Abarca un amplio rango de mercados, desde el sector del videojuego hasta el sector cinematográfico."
    },
];

/* Funcion que permite al boton inicio mostrar de nuevo el grid */
indice.addEventListener('click', function (e) {
    e.preventDefault();
    seccionGrid.style.display = 'grid';
    seccionGrid.style.visibility = 'visible';
    seccionDetalle.style.display = 'none';
    seccionDetalle.style.visibility = 'hidden';
})

/* Añadimos a cada boton del grid una función para mostrar las diferentes páginas de detalle*/
btnDetalle.forEach(function (btn, index) {
    /* Funcion que oculta el section con el grid y muestra una section diferente en funcion del boton pulsado */
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        seccionGrid.style.display = 'none';
        seccionGrid.style.visibility = 'hidden';
        seccionDetalle.style.display = 'block';
        seccionDetalle.style.visibility = 'visible';
        /* Aprovechamos el index de cada boton para que coincida con la posición del array donde tiene su información */
        imgDetalle.src = detalles[index].imagen;
        tituloDetalle.innerText = detalles[index].titulo;
        infoDetalle.innerText = detalles[index].descripcion;
    })

})


