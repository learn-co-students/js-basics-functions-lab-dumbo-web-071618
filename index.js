const hq = 42

function distanceFromHqInBlocks(beginning)   {
    return Math.abs(hq - beginning)
}

function distanceFromHqInFeet(beginning)     {
    return distanceFromHqInBlocks(beginning) * 264
}

function distanceTravelledInFeet(start, destination)  {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination)    {
    distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400)    {
        return 0
    } else if (distance > 400 && distance < 2000)   {
        dollars = Math.floor(((distance - 400) * 2) / 100)
        cents = (((distance * 2) - 400) % 100) * .01
        return dollars + cents
    } else if (distance > 2000 && distance < 2500)  {
        return 25
    } else {
        return 'cannot travel that far'
    }
}