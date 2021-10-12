
function Cars(comp,modl,col,Img,regNum,pr){
    return {  
    company:comp,
    model:modl,
    colour:col,
    image :Img,
    showMore: function(){
        return {
            registrationNumber:regNum,
            price:pr
        }
    }
    }

}

const car1 = new Cars("FORD","2020","red","https://toppng.com/uploads/preview/ford-mustang-red-car-png-image-pngpix-ford-mustang-red-car-11563009063nekpqaib6t.png","2341534","100,000 $")
const Info1 = document.querySelector("#info1")
Info1.innerHTML = "Company of the car: "+car1.company+" Model of the car: "+car1.model+"  Colour of the car: "+ car1.colour
const Img1 = document.querySelector("#redCar")
const Info12 = document.querySelector("#info1-2")
Img1.addEventListener("click",function(){ Info12.innerHTML = "The Registration Number of the car is: "+car1.showMore().registrationNumber
+" and the price is "+car1.showMore().price
})
Img1.src = car1.image


const car2 = new Cars("BMW","2021","yellow","https://image.similarpng.com/very-thumbnail/2020/12/Yellow-car-design-illustration-on-transparent-background-PNG.png","340928676","200,000 $")
const Info2 = document.querySelector("#info2")
Info2.innerHTML = "Company of the car: "+car2.company+" Model of the car: "+car2.model+"  Colour of the car: "+ car2.colour
const Img2 = document.querySelector("#yeloowCar")
const Info22 = document.querySelector("#info2-2")
Img2.addEventListener("click",function(){Info22.innerHTML = "The Registration Number of the car is: "+car2.showMore().registrationNumber
+" and the price is "+car2.showMore().price
})
Img2.src = car2.image


const car3 = new Cars("Ferrari","2019","Green","https://i.pinimg.com/originals/f7/32/3a/f7323a08cfbb93b139f8a4584e1c2e81.png","39485376205","350,000 $")
const Info3 = document.querySelector("#info3")
Info3.innerHTML = "Company of the car: "+car3.company+" Model of the car: "+car3.model+"  Colour of the car: "+ car3.colour
const Img3 = document.querySelector("#greenCar")
const Info32 = document.querySelector("#info3-2")
Img3.addEventListener("click",function(){Info32.innerHTML = "The Registration Number of the car is: "+car3.showMore().registrationNumber
+" and the price is "+car3.showMore().price
})
Img3.src = car3.image

const array = [car1, car2 ,car3]

function check(){
    let x = parseInt(array[0].showMore().price)
    let y = array[0]
    for(i=0;i<array.length;i++){
        if (parseInt(array[i].showMore().price) < x){

        
        x = parseIntarray([i].showMore().price)
        y = array[i]
        }
    }
    alert("The cheapest car is "+y.company) 
}