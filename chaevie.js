const calculateTips = bill =>{
   if(bill<=20){
      const x=bill/100*20
      return x;
      console.log(x);
   }else{
      const y=bill/100*15
      return y;
      console.log(y);
   }
}



 
// const calculateTips = bill => bill<20 ? bill*0.2 : bill*0.15;

const bill=[15, 56, 70];



const tips=[calculateTips(bill[0]), calculateTips(bill[1]), calculateTips(bill[2])];

const total=[(tips[0])+(bill[0]),(tips[1])+(bill[1]),(tips[2])+(bill[2])];

console.log(bill);
console.log(tips);
console.log(total);