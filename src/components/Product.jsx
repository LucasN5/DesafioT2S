/*
const Product = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-36  bg-ProdutsColor">
      
      <div className="relative">
        
        <div className="absolute top-4 -left-4 bg-BenefitsColor w-3/5 h-3/5 z-0"></div>
        <img src="./src/assets/ProdutoEx.jpg" alt="Pessoas analisando quadro de gestão organizacional de projetos" className="relative z-10 w-full" />
      </div>

      
      <div className=" ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">O que é gestão de projeto ?</h1>
        <p className="text-gray-700">A gestão de projetos é a arte de transformar ideias em realidade tangível, garantindo que projetos sejam concluídos no prazo e dentro do orçamento.</p>
        <p className="text-gray-700 mt-4">A adoção de gestão de projetos em empresas permite que seja alcançada uma abordagem estruturada e eficiente para concluir objetivos e projetos na melhor qualidade de tempo e entrega, isso significa maior eficiência operacional, controle financeiro aprimorado e cumprimento consistente de prazos.</p>
        <p className="text-gray-700 mt-4">Segundo a instituição internacional de gestão de projetos, Project Management Institute <strong className="font-bold">“Organizações que usam práticas de gerenciamento de projetos de forma consistente têm uma taxa de sucesso de 92% no cumprimento dos objetivos do projeto”</strong>, isso demonstra como o uso da gestão de projeto é algo essencial nas empresas atuais para o sucesso de seus projetos.</p>
      </div>
    </div>
  )
}

export default Product
*/




const Product = () => {
  return (
    <div className=" grid grid-cols-2 p-32 py-20 h-screen w-screen bg-BgDarkBlue " id="product">
        <div className="relative flex flex-row ">
            <div className="absolute -top-9 -left-9 bg-BenefitsColor drop-shadow-right-bottom w-3/5 h-3/5 z-0"></div>
            <img src="/img/ProdutoEx.jpg" alt="Pessoas analisando quadro de gestão organizacional de projetos" className="h-3/5 relative z-10 drop-shadow-right-bottom"/>
        </div>

        <div className=" flex flex-col gap-3">
            <h1 className="text-center text-BenefitsColor text-2xl font-bold">O que é gestão de projeto ?</h1>
            <p className="text-BenefitsColor font-normal">A gestão de projetos é a arte de transformar ideias em realidade tangível, garantindo que projetos sejam concluídos no prazo e dentro do orçamento. <br/> <br/>

A adoção de gestão de projetos em empresas permite que seja alcançada uma abordagem estruturada e eficiente para concluir objetivos e projetos na melhor qualidade de tempo e entrega, isso significa maior eficiência operacional, controle financeiro aprimorado e cumprimento consistente de prazos. <br/> <br/>

Segundo a instituição internacional de gestão de projetos, Project Management Institute <strong className="font-bold">“Organizações que usam práticas de gerenciamento de projetos de forma consistente têm uma taxa de sucesso de 92% no cumprimento dos objetivos do projeto”</strong>, isso demonstra como o uso da gestão de projeto é algo essencial nas empresas atuais para o sucesso de seus projetos.
</p>
        </div>
        
    </div>
  )
}

export default Product

