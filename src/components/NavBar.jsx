

const NavBar = () => {
  return (
    <div className="bg-NavBarColor text-white">
        <nav className="flex justify-around gap-40 bg-HomeColor  pt-2 ">
            <img src="/img/LogoTipoT2S.png" alt="Logo da T2S" className="h-10 w-28 mx-5"/>

            <ul className="flex gap-5 cursor-pointer text-BenefitsColor font-medium m-3">
                <a href="#home"><li>Ínicio</li></a>
                <a href="#about"><li>Quem é T2S ?</li></a>
                <a href="#product"><li>O que é Gestão de Projeto ?</li></a>
                <a href="#benefits"><li>Benefícios</li></a>
                <a href="#contact"><li>Contato</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar

