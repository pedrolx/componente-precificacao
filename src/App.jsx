import Innercard from "./components/Innercard/Innercard"

function App(props) {

  return (
    <div className="w-5/6 h-screen flex flex-col rounded-lg border-x-slate-100 
    hover:translate-y-7 duration-700 lg:w-4/6 lg:h-4/6 lg:flex-row lg:items-center 
    lg:justify-center lg:shadow-[0px_0px_18px_2px_rgba(0,0,0,0.53)] lg:hover:hover:translate-y-0">

      <Innercard titulo="Básico" preco="19,90" descricao="Nosso plano básico"
        item1="Lorem ipsum" item2="Nullam quis" item3="Quisque ac leo"
        item4="Mauris at nisl" />
      <Innercard titulo="Intermediário" preco="39,90" descricao="+Economia +Vantagens"
        item1="Mauris at nisl" item2="Nullam quis" item3="Quisque ac leo" item4="+ Básico" />
      <Innercard titulo="Profissional" preco="59,90" descricao="Para você que sabe escolher"
        item1="Nullam quis" item2="Lorem ipsum" item3="+ Básico" item4="+ Intermediário" />

    </div>
  )
}

export default App
