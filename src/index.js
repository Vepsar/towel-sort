// You should implement your task here.

module.exports = function towelSort(matrix) {
    var mass = [];
    var i, j = 0;
    if (matrix != null) {
        matrix.forEach(function(array, index) {
            if (index % 2 == 0) {
                for (i = 0; i < array.length; i++) {
                    mass[j] = array[i];
                    j++;
                }
            } else {
                for (i = array.length - 1; i > -1; i--) {
                    mass[j] = array[i];
                    j++
                }
            }
        })
    }
    return mass;
}