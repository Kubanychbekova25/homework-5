import { ChartBar } from "./ChartBar";
import "../Chart/chart.css"


 export const Chart =({items})=>{
    const months =[
    {
        label:'January',
currentPrice:0,

    },
    {
        label:'February',
currentPrice:0,

    },
    {
        label:'March',
currentPrice:0,

    },
    {
        label:'April',
currentPrice:0,

    },
    {
        label:'May',
currentPrice:0,

    },
    {
        label:'June',
currentPrice:0,

    },
    {
        label:' July',
currentPrice:0,

    },
    {
        label:'August',
currentPrice:0,

    },
    {
        label:'September',
currentPrice:0,

    },
    {
        label:'October',
currentPrice:0,

    },
    {
        label:'November',
currentPrice:0,

    },
    {
        label:'December',
currentPrice:0,

    },
    

    ];


 

    
items.forEach((item) => {
    
 const mounthNumber = new Date(item.date).getMonth()
 months[mounthNumber].currentPrice += item.price
});


console.log(months);


const maximumPrice = 2000;
return (
    <div className="chart">
        {months.map((item)=>{
                return(
                    <ChartBar 
                    key={item.label}
                    label={item.label}
                    currentPrice={item.currentPrice}
                    maximumPrice={maximumPrice}/>
                )

            })
        }
       
    </div>
)

}