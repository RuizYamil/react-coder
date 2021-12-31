const products = [
    {id: 1, productImg: require('./img/carbon_resistors.png').default, alt: "carbon resistors", title: "Resistencias", discountPrice: 1000, price: 750},
    {id: 2, productImg: require('./img/transistors.png').default, alt: "transistors", title: "Transistores", discountPrice: 1500, price: 1100},
    {id: 3, productImg: require('./img/diode.png').default, alt: "diode", title: "Diodos", discountPrice: 2000, price: 1300},
    {id: 4, productImg: require('./img/tools.png').default, alt: "tools", title: "Herramientas", discountPrice: 1700, price: 1500},
    {id: 5, productImg: require('./img/integrated_circuits.png').default, alt: "integrated circuits", title: "Integrados", discountPrice: 1000, price: 750},
    {id: 6, productImg: require('./img/smd_components.png').default, alt: "smd components", title: "Componentes SMD", discountPrice: 1500, price: 1100},
    {id: 7, productImg: require('./img/cables.png').default, alt: "cables", title: "Cables", discountPrice: 2000, price: 1300},
    {id: 8, productImg: require('./img/arduino.png').default, alt: "arduino", title: "Arduino", discountPrice: 1700, price: 1500}
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