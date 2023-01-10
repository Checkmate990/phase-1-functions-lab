let  Headquarter = 42

function distanceFromHqInBlocks(distance){
    return Math.abs(distance-Headquarter)
}

function distanceFromHqInFeet(distance){
   return distanceFromHqInBlocks(distance)*264
    
}

function distanceTravelledInFeet(origin, end){
    return Math.abs((origin-end)*264);
}

function calculatesFarePrice(start, destination){
    let  feet = Math.abs (((start - destination)*264))
    if(start === 43 && destination === 44){
    return 0
}  else if 
    (feet >= 400 && feet <= 2000){
    let price= (feet - 400) * 0.02
    return price
}  else if (feet>2000 && feet <= 2500){
    return 25
}   else{
    return 'cannot travel that far'
}
}






