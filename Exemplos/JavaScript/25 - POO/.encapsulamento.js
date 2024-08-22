class tv{
    constructor(){
        this._relacaoCanais = array(2,4,5,7,10)
        this._canalAtivo = 5
        this._volume = 5
    }
    //Encapsulamento é o conceito de getters e setters no código
    //getters setters
    get canalAtivo(){
        return this._canalAtivo;
    }

    set canalAtivo(canal){
        let x = this._relacaoCanais.indexOf(canal)
        if(x === -1){

        }else{
        this._canalAtivo = canal
        }
    }
}

let tv = new tv()
console.log(tv.canalAtivo)