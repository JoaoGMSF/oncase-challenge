export  default class ErrorHandling{
    static getErrorMessage(errorData) {
        let array_errors = []
        for (var chave in errorData) {
            if (errorData.hasOwnProperty(chave)) {
              array_errors.push(errorData[chave]);
            }
          }
        return array_errors[0]; 
    }
}