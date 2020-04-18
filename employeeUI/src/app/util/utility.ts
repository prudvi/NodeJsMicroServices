export class Utility {
    static findIndex(list, code) {
        let x = 0;
        let index = -1;
        for( x = 0 ;x < list.length; x++) {
            if (list[x].employeeCode === code) {
                index = x;
                break;
            }
        }

        return index;
    }
}
