function distanceFromHqInBlocks(st) {
    return Math.abs(st - 42)
}

function distanceFromHqInFeet(st) {
    return 264 * distanceFromHqInBlocks(st)
}

function distanceTravelledInFeet(st1, st2) {
    return Math.abs((st2 - st1) * 264)
}

function calculatesFarePrice(start, dest) {
    distance = distanceTravelledInFeet(start, dest)
    
    if (distance > 2500) {
        return 'cannot travel that far'
    } else if (distance > 2000) {
        return 25
    } else if (distance > 400) {
        return (distance - 400) * 2 / 100
    } else {
        return 0
    }
}