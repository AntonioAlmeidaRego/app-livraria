import MaskCep from "./MaskCep";
import MaskPhone from "./MaskPhone";


export default class LivrariaUtil {
    private maskCepAtrr: MaskCep;
    private maskPhoneAtrr: MaskPhone;

    constructor() {
    }

    public maskCep(cep: string) : string{
        this.maskCepAtrr = new MaskCep(cep);
        return this.maskCepAtrr.mask();
    };

    public maskCpf(cpf: string) : string{return};

    public maskPhone(phone: string) : string{
        this.maskPhoneAtrr = new MaskPhone(phone);
        return this.maskPhoneAtrr.mask();
    };

    public maskRg(rg: string) : string{return};

    public checkPasswords(password: string, confirmPassword: string): boolean{return };
}