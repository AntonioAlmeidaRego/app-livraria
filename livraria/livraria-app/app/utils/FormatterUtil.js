export default class FormatterUtil {
    formatterDatePtBr(date){

        const mes = date.getMonth() + 1;
        const data = date.getDate();
        let dataConvert = "";
        let mesConvert = "";
        if(data > 0  && data < 10) {
            dataConvert = "0"+data.toString();
        }else {
            dataConvert = data.toString();
        }
        if(mes > 0 && mes < 10) {
            mesConvert = "0"+mes.toString();
        }else {
            mesConvert = mes.toString();
        }
        return dataConvert+"/"+mesConvert+"/"+ date.getFullYear();
    }
}