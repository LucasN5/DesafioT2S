

const About = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 p-32 gap-6 " id="about">
        <div className="py-10 flex flex-col gap-3">
            <h1 className="text-center text-2xl font-bold ">Quem é a T2S ?</h1>
            <p className="text-BgGrayText font-normal">Na T2S, estamos comprometidos em criar equipes de alta performance que entregam soluções tecnológicas com excelência e simplicidade. Nosso foco não é apenas gerenciar projetos, mas também inspirar, inovar e educar. <br/> <br/>

Nós acreditamos que o sucesso de um projeto está enraizado na qualidade de sua equipe e na abordagem simplificada para alcançar resultados excepcionais. Estamos aqui para transformar suas ideias em realidade, elevando sua empresa ao próximo nível.</p>
        </div>

        <div className="relative">
            <img src="./src/assets/img/GlassdoorT2S.png" alt="Estatisticas da empresa T2S no site Glassdoor" className="relative z-10 drop-shadow-right-bottom"/>
            <div className="absolute -top-10 right-1 bg-AboutColor drop-shadow-right-bottom  w-96 h-96 z-0"></div>
        </div>
    </div>
  )
}

export default About
