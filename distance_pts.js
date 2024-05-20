function distance_pts(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}
 
console.log("Distance between the points (1,2) and (3,4) is " + distance_pts(1,2,3,4));