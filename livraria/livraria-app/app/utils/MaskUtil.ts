export default class MaskUtil {
    public isDeleting(array, auxArray) : boolean{
        return array.length < auxArray.length ? true : false;
    }

    public isInserting(array, auxArray) : boolean{
        return array.length >= auxArray.length ? true : false;
    }
}