import { useState } from 'react';

type ButtonProps = {
  texto: string;
  textoAtivo?: string;
  status?: 'tomado' | 'pendente';
  tipo?: 'simples' | 'alterna';
}

export default function Button({ texto, status = 'pendente' , textoAtivo = "Tomado", tipo}: ButtonProps) {
  
  const [isClicked, setIsClicked] = useState(status);

  function toNext(){

    if (tipo === 'simples') {
      return; 
    }

      switch (isClicked){
        case "pendente":
            setIsClicked("tomado");
            break;
        case "tomado":
            setIsClicked("pendente");
            break;
      }
  }

  if (isClicked === 'tomado') {
    return (
      <button onClick={toNext} className="bg-[#12b36d] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#10a564] transition">
        {textoAtivo}
      </button>
    );
  }

  if( isClicked  === 'pendente')
   return (
     <button onClick={toNext} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
       {texto}
     </button>
   );
  
}
