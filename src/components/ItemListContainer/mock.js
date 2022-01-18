const products = [
    {id: '1', img: require('./img/carbon_resistors.png').default, alt: "carbon resistors", title: "Resistencias", discountPrice: 1000, price: 750, description: "Se denomina resistencia o resistor al componente electrónico diseñado para introducir una resistencia eléctrica determinada entre dos puntos de un circuito eléctrico.", category: "component", stock: 1},
    {id: '2', img: require('./img/transistors.png').default, alt: "transistors", title: "Transistores", discountPrice: 1500, price: 1100, description: "Un transistor es un dispositivo activo con tres terminales, y estos tres terminales se conocen como Emisor, Base y Colector.", category: "component", stock: 3},
    {id: '3', img: require('./img/diode.png').default, alt: "diode", title: "Diodos", discountPrice: 2000, price: 1300, description:"El diodo es un semiconductor cuya principal función es dejar pasar la corriente solo en una dirección, es decir, en un solo sentido y bloquear la corriente en el otro sentido.", category: "component", stock: 10},
    {id: '4', img: require('./img/tools.png').default, alt: "tools", title: "Herramientas", discountPrice: 1700, price: 1500, description:"Una herramienta es un objeto elaborado que sirve como extensión del cuerpo de quien lo usa, para permitir o facilitar una tarea mecánica que sin ella no se podría realizar, o sería muy difícil, por falta de fuerza, movilidad, dimensiones, etc.", category: "other", stock: 7},
    {id: '5', img: require('./img/integrated_circuits.png').default, alt: "integrated circuits", title: "Integrados", discountPrice: 1000, price: 750, description:"Un circuito integrado esta construido principalmente con transistores cuyas interconexiones forman circuitos de propósito especifico. Por ejemplo, cuando estas capas se ordenan y crean con determinadas conexiones, se crean circuitos digitales básicos como las compuertas lógicas.", category: "component", stock: 4},
    {id: '6', img: require('./img/smd_components.png').default, alt: "smd components", title: "Componentes SMD", discountPrice: 1500, price: 1100, description:"Un componente SMD (Surface Mounting Device) es un componente electrónico que se suelda diréctamente en la superficie de la PCB. Tradicionalmente, los componentes se montaban introduciendo sus patas por un agujero y sodándolas al otro lado de la placa.", category: "component", stock: 14},
    {id: '7', img: require('./img/cables.png').default, alt: "cables", title: "Cables", discountPrice: 2000, price: 1300, description:"Es un cordón que sirve de conductor, más o menos grueso, el cual está creado por varios hilos, cubierto por algún material que sirve de protector y aislante, el cual se divide en varios tipos, los cuales tienen diferentes usos, que a su vez, le otorgan varios significados al término “cable”.", category: "other", stock: 2},
    {id: '8', img: require('./img/arduino.png').default, alt: "arduino", title: "Arduino", discountPrice: 1700, price: 1500, description:"Arduino es una plataforma de creación de electrónica de código abierto, la cual está basada en hardware y software libre, flexible y fácil de utilizar para los creadores y desarrolladores.", category: "other", stock: 6},
];

export const getFetch = new Promise((resolve, reject)=>{
    let condicion = true;
    if(condicion){
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    }else{
        reject('Error')
    }
})