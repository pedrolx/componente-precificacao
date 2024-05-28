import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default (props) => {
    return(
        <div className="flex flex-col items-center space-y-7 p-2 hover:bg-indigo-700 
        hover:text-white duration-300 hover:-translate-y-2 hover:rounded hover:scale-105
        hover:opacity-90 lg:w-1/3 lg:h-full lg:hover:opacity-100 lg:hover:-translate-y-0
        lg:space-y-0 lg:justify-between">

            <div className="flex flex-col bg-indigo-600 text-white rounded p-5 w-5/6 text-center
            lg:h-1/6">
                <h3 className="uppercase text-white font-black text-1xl">{props.titulo}</h3>
                <h1 className="uppercase font-medium text-1xl">R$ {props.preco} / mês</h1>
            </div>

            <div className="p-2 rounded flex flex-col gap-3 border-t-2 border-b-2 border-solid 
            border-indigo-300 lg:h-4/6 lg:justify-center">
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
            <button className="bg-indigo-600 text-white w-2/3 rounded py-4
            hover:border-2">Escolher Plano</button>

        </div>
    )
}