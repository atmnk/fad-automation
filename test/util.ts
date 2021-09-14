var last:string;
export function random_mobile():string{
    const d =  new Date();
    last = '9'+two_pad(d.getMonth())+two_pad(d.getDay())+two_pad(d.getHours())+two_pad(d.getMinutes())+Math.floor(d.getSeconds()/6)
    return last
}
export function random_email():string{
    return `naik_atmaram+${last}@yahoo.com`
}
function two_pad(num:Number){
    return num.toString().padStart(2,'0')
}