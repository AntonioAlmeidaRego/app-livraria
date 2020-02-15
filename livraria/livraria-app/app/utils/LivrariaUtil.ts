import MaskCep from "./MaskCep";
import MaskPhone from "./MaskPhone";
import ConversorUtil from "./ConversorUtil";

export default class LivrariaUtil {
    private maskCepAtrr: MaskCep;
    private maskPhoneAtrr: MaskPhone;

    constructor() {

    }

    public maskCep(cep: string) : string{
        this.maskCepAtrr = new MaskCep(cep);
        return this.maskCepAtrr.mask();
    };

    public calPMT(pv: number, n: number, i: string): number{
        const porcent = i.split('%');
        const taxa = (ConversorUtil.convertsCommaToPoint(porcent[0]) / 100);
        const resultOne = (Math.pow((1 + taxa), n) - 1);
        const resultTwo = ((Math.pow((1 + taxa), n) * taxa));
        const resultThree = resultOne / resultTwo;
        return pv / resultThree;
    }

    public maskCpf(cpf: string) : string{return};

    public maskPhone(phone: string) : string{
        this.maskPhoneAtrr = new MaskPhone(phone);
        return this.maskPhoneAtrr.mask();
    };

    public maskRg(rg: string) : string{return};

    public checkPasswords(password: string, confirmPassword: string): boolean{return };
}