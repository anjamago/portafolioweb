
export default interface IDataInfo{
    titulo:string,
    entidad:string
    fechaInicio?:Date,
    fechaFin:Date,
    estudio:boolean,
    description:string|Array<string>    
}