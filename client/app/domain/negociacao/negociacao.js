class Negociacao {
    //	MUDANÇA	NO	NOME	DOS	PARÂMETROS,	AGORA	COM	UNDERLINE
	constructor(_data,	_quantidade,	_valor)	{
        //	USANDO	O	ATALHO	PARA	DECLARAÇÃO	DE	PROPRIEDADES
        Object.assign(this,	{	_quantidade,	_valor	});
        this._data	=	new Date(_data.getTime());
        Object.freeze(this);
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
