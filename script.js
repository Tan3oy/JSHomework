
const typed={
    i: 0,
write: (text) => {
    
    let p=document.querySelector('#ans').querySelector('p#clicked');
    if(!p){
        let p=document.createElement('p'); 
        p.id='clicked'; 
        document.querySelector("#ans").appendChild(p);
    }
    if (typed.i < text.length) {
        document.querySelector('#clicked').textContent += text[typed.i];
        typed.i++;
        setTimeout(() => typed.write(text), 50);
    }
    else{
        let btnReset=document.querySelector('.reset'); 
        if(!btnReset){
            let btnReset=document.createElement('button');
            let btnText=document.createElement('span');    
            btnReset.classList.add('reset');
            console.log(typed.i);
            
            document.querySelector(".buttons").appendChild(btnReset);
            document.querySelector('.reset').appendChild(btnText);
            document.querySelector('.reset span').textContent='Reset';
            console.log(typed.i);
            console.log(`true`);
            document.querySelector('.reset').addEventListener('click',typed.reset);
        }
    }
    

},
reset: ()=>{
    typed.i=0;
    document.querySelector('p#clicked').textContent='';
    document.querySelector('p#clicked').remove();  
    document.querySelector('#ans').classList.remove('stretched'); 
    document.querySelector('#ans').classList.add('unstretched');   
    document.querySelector('.reset').remove();
    document.querySelector('#inactive').removeAttribute('disabled');
    document.querySelector('#inactive').setAttribute('id','submit');
},

start: (text) => {
    p=document.querySelector('p#clicked');
    if(!p){
        document.querySelector('#submit').setAttribute('id','inactive','disabled',true);
    let pClass= document.querySelector('#ans');
    if(pClass.classList.contains('unstretched')){
        pClass.classList.remove('unstretched');
        }
    pClass.classList.add('stretched');
    setTimeout(() => typed.write(text), 800);
    }    
}
}
const areaRec=()=>{
    let l=parseFloat(document.querySelector("#length").value);
    let b=parseFloat(document.querySelector("#breadth").value); 
    let area=(l*b);
    let text=`The Area is = ${area}cm²`;
    typed.start(text);
    // addClass();
}
const squareArea=()=>{
    let a=parseFloat(document.querySelector("#side").value);
    let area=a*a;
    let text=`The Area is = ${area} cm²`;
    typed.start(text);
}
const userInfo=()=>{
    let name=document.querySelector("#name").value;
    let roll=document.querySelector("#roll").value;
    let interest=document.querySelector("#interest").value;
    let text=`Hey my name is ${name}, my roll number is ${roll} and I love ${interest}`;
    typed.start(text);
}
const tempCalc=()=>{
    let c=parseInt(document.querySelector("#temp").value);
    let f=(c*(9/5)+32.2);
    let k=c + 273.15;  
    let text=`The eqivalent temperature in Degree Fahrenheit is = ${f}°F & in kelvin =${k}K`;
    typed.start(text);
}
const oddEven=()=>{
    let n=document.querySelector("#num").value;
    if(n%2==0){
        let text=`${n} is a Even Number`;
        typed.start(text);
    }
    else{
        let text=`${n} is a Odd Number`;
        typed.start(text);
    }

}
const areaCircle=()=>{
    let r=parseFloat(document.querySelector("#radius").value);
    const pi=3.14;
    let area= pi*r**2;
    let text=`Area of the Circle is ${area} cm²`;
    typed.start(text);
}
const squareCheck=()=>{
    let a=parseFloat(document.querySelector("#length").value);
    let b=parseFloat(document.querySelector("#breadth").value);
    if(a===b){
        let text=`This is a Square`;
        typed.start(text);
    }
    else{
        let text=`This is not a Square`;
        typed.start(text);
    }
}
const largeNum=()=>{
    let num1=parseInt(document.querySelector("#number1").value);
    let num2=parseInt(document.querySelector("#number2").value);
    let num3=parseInt(document.querySelector("#number3").value);
    let largest;
    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }
    let text=`The largest number is ${largest}`
    typed.start(text);
}
const netAmount=()=>{
    let sal=parseFloat(document.querySelector("#salary").value);
    let year=parseFloat(document.querySelector("#year").value);
    if(year>5){
        sal+=sal*0.05;
        let text=`Your net amount is = ₹${sal} [With 5% Bonus]`;
        typed.start(text);
    }
    else{
        let text=`Your net amount is = ₹${sal} [No Bonus]`; 
        typed.start(text);      
    }
}
const leapYear=()=>{
    let y=document.querySelector("#year").value;
    if((y%100==0)&&(y%400==0)){
        let text=`The Year ${y} is a Leap year`;
        typed.start(text);
    }
    else if ((y%4==0)&&(y%100!==0)){
    let text=`The Year ${y} is a Leap year`;
    typed.start(text);
    }
    else{
    let text=`The Year ${y} is not a Leap year`;
    typed.start(text);
    }
}
const gradeCal=()=>{
    let num=parseFloat(document.querySelector("#marks").value);
    if(num>80){
        let text=`Grade of the student is='A'`;
        typed.start(text);
    }
    else if(num>60 && num<=80){
        let text=`Grade of the student is='B'`;
        typed.start(text);
    }
    else if(num>50 && num<=60){
        let text=`Grade of the student is='C'`;
        typed.start(text);
    }
    else if(num>45 && num<=50){
        let text=`Grade of the student is='D'`;
        typed.start(text);
    }
    else if(num>=25 && num<=45){
        let text=`Grade of the student is='E'`;
        typed.start(text);
    }
    else{
        let text=`Grade of the student is='F'`;
        typed.start(text);
    }

}
const totalCost=()=>{
    q=parseFloat(document.querySelector("#quantity").value);
    let cost=100*q;
    if(q>1000){
        cost-=cost*0.1;
    let text=`Your Total Cost is = ₹${cost} [You got a 10% discount on your purchase]`;
    typed.start(text);
    }
    else{
        let text=`Your Total Cost is = ₹${cost}`;
        typed.start(text);
    }
}
const ageCompare=()=>{
    let p1=parseInt(document.querySelector("#age1").value);
    let p2=parseInt(document.querySelector("#age2").value);
    let p3=parseInt(document.querySelector("#age3").value);
    let oldest , youngest;
    if(p1==p2 || p2==p3 || p3==p1){
        let text=` No Result!! You have entered at least two values equal`;
        typed.start(text);
    }
    else{        
        if(p1>p2 && p1>p3) {
            oldest = "First Person";
            if(p2>p3){
                youngest="Third Person";
            }
            else{
                youngest="Second person";
            }
        }
        else if (p2>p1 && p2>p3) {
            oldest = "Second person";
            if(p1>p3){
                youngest="Third Person";
            }
            else{
                youngest="First Person"
            }
        }
        else if (p3>p1 && p3>p2){
            oldest = "Third Person";
            if(p1>p2){
                youngest="Second person";
            }
            else{
                youngest="First Person";
            }
        }
        let text=`${oldest} is the Oldest  & ${youngest} is The Youngest `;
        typed.start(text);
    }
    
}
const attendance=()=>{
    let cT=document.querySelector("#held").value;
    let cP=document.querySelector("#attended").value;
    let attendanceRate=parseInt(cT*0.75);
    if(cP<attendanceRate){
        let text=`The student is not allowed to sit in exam.`
        typed.start(text);
    }
    else{
        let text=`The student is allowed to sit in exam.`
        typed.start(text);
    }
}

const summation=()=>{
    let n=Number(document.querySelector('#n').value);
    let sum=(n*(n+1))/2;
    console.log(`${n}`);
    let text=`The Sum of N natural numbers is = ${sum}`;
    typed.start(text);
}

const fac=()=>{
    let n=parseInt(document.querySelector('#num').value);
    let sum=1;
    console.log(`${n}`);
    for(let i=n;i>1;i--){
        sum=sum*i;
    }
    let text=`The Factorial of the Given Number is = ${sum} `;
    typed.start(text);

}

//active nav link indicator

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#quesNo');

    navLinks.forEach(link => {
        // Set the active link based on the current URL
        if (link.href === window.location.href) {
            link.classList.add('active');
        }

        // Add click event listener to each link
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


