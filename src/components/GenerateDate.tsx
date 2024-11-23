
 import dayjs, {Dayjs} from "dayjs";

 export function GenerateDate(
     month: number = dayjs().month(),
     year: number = dayjs().year(),
 ): Dayjs[]  {
     const arrayOfMonth :Dayjs[] = []

     const firstDayOfMonth :Dayjs = dayjs().year(year).month(month).startOf("month");
     const lastDayOfMonth :Dayjs = dayjs().year(year).month(month).endOf("month");
     for(let i: number= firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i= i+1 ){
         arrayOfMonth.push(firstDayOfMonth.date(i))
      }


     return arrayOfMonth
 }