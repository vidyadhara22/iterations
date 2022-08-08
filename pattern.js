const Print_pattern = (N) => 
{
 let num = ""
 for(let i=1; i<=N; i++)
 {
   for(let j=1; j<=i; j++)
   {
     num = num + "*";
   }
    num = num + "\n";
 }
 console.log(num);
};