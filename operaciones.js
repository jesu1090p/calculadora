let n1 = document.getElementById("n1");
        let n2 = document.getElementById("n2");
        let operacion = document.getElementById("operacion");
        let resultado = document.getElementById("res");

        const calcular = () => {
            if (operacion.value == "1"){
                resultado.innerHTML = "La suma de "+ n1.value +" + " +n2.value + " es: " + "<br><span>"+(parseInt(n1.value)+parseInt(n2.value))+"</span>";
            }
            else if (operacion.value == "2"){
                resultado.innerHTML = "La resta de "+ n1.value +" - " +n2.value + " es: " + "<br><span>"+(parseInt(n1.value)-parseInt(n2.value))+"</span>";
            }
            else if (operacion.value == "3"){
                resultado.innerHTML = "La multiplicación de "+ n1.value +" x " +n2.value + " es: " + "<br><span>"+(parseInt(n1.value)*parseInt(n2.value))+"</span>";
                }
            else if (operacion.value == "4"){
                resultado.innerHTML = "La división de "+ n1.value +" / " +n2.value + " es: " + "<br><span>"+(parseInt(n1.value)/parseInt(n2.value))+"</span>";
            }
        }