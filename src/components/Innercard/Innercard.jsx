import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default (props) => {
    return(
        <div className="flex flex-col items-center space-y-10 p-4 hover:bg-indigo-700 
        hover:text-white duration-300 hover:-translate-y-2 hover:rounded hover:scale-105">
            <div className="flex flex-col gap-1 bg-indigo-600 text-white rounded p-1 w-4/5 text-center">
                <h3 className="uppercase text-white font-black text-1xl">{props.titulo}</h3>
                <h1 className="uppercase font-medium text-1xl">R$ {props.preco} / mês</h1>
            </div>

            <div className="p-2 rounded flex flex-col gap-3 border-t-2 border-b-2 border-solid border-indigo-300">
                <h4>{props.descricao}</h4>
                <div className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="text-indigo-200" />
                    <p>{props.item1}</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="text-indigo-200" />
                    <p>{props.item2}</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="text-indigo-200" />
                    <p>{props.item3}</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="text-indigo-200" />
                    <p>{props.item4}</p>
                </div>

            </div>
            <button className="bg-indigo-600 text-white w-2/3 rounded p-1
            hover:border-2">Escolher Plano</button>
        </div>
    )
}