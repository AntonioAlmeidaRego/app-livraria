import MaskCep from "./MaskCep";


export default class LivrariaUtil {
    private maskCepAtrr: MaskCep;

    constructor() {
    }

    public maskCep(cep: string) : string{
        this.maskCepAtrr = new MaskCep(cep);
        return this.maskCepAtrr.mask();
    };


    public maskCpf(cpf: string) : string{return};
    public maskPhone(phone: string) : string{return };
    public maskRg(rg: string) : string{return};
    public checkPasswords(password: string, confirmPassword: string): boolean{return };
}