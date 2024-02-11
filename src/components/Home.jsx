const Home = () => {
  return (
    <div className="text-center p-10 bg-cover bg-fixed bg-center items-center" style={{ backgroundImage: 'url(/img/BgHome.png)' }} id="home">
      
        <h1 className="text-4xl font-bold  py-1 text-BenefitsColor">Tudo começa com <br/>planejamento e organização</h1>

        <h3 className="py-5 tracking-widest  text-BenefitsColor">A T2S tem o sistema de organização <br/>que seu time precisa</h3>

        <a href="https://www.t2s.com.br/home" target="_blank" rel="noreferrer">
          <button className="rounded-full bg-ProdutsColor text-BenefitsColor font-medium p-1 px-4">
            Visite nosso site
          </button>
        </a>
        <div className="flex justify-center items-center">
          <img src="/img/TabelaHome.png" alt="Exemplo de uma tabela de gestão de projetos" className="pt-5" style={{ width: '650px' }}></img>
        </div>
    
    </div>
  )
}

export default Home

/* ADICIONAR FOOTER E ADICIONAR RESPONSIVIDADE NAS PAGINAS*/