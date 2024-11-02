
// vas al source, te paras en cualquier lado con el debugger que tenga una referencia al juego en el this y tiras esto en la consola. buscar ctrl f de isValid y ahi va a estar el this que sirve
//Se saltea el motor de reglas para decir que todas son validas
this.rules = this.rules.map(it => ({...it, test: ()=>({isValid: true})}))
