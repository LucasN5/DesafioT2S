import {BanknotesIcon} from '@heroicons/react/24/solid'
import {UserGroupIcon} from '@heroicons/react/24/solid'
import {ChatBubbleLeftRightIcon} from '@heroicons/react/24/solid'
import {PresentationChartLineIcon} from '@heroicons/react/24/solid'
import {StarIcon} from '@heroicons/react/24/solid'
import {PuzzlePieceIcon} from '@heroicons/react/24/solid'

const Benefits = () => {
  return (
    <div className="bg-BenefitsColor h-auto w-auto m-24 " id="benefits">
        <h1 className="text-ProdutsColor text-center text-2xl font-bold tracking-wide py-7" >Benefícios de usar gestão de <br/>projeto na sua empresa</h1>

        <div className="grid grid-cols-3 gap-10 ">
          <div className='flex flex-col items-center text-sm gap-1'>
              
              <UserGroupIcon className='h-6 w-6 text-BgDarkBlue'/>
              <h3 className='text-lg  text-BgDarkBlue'>Organização Eficiente</h3>
              <p className='text-center text-BgGrayText'>Oferecemos uma estrutura organizacional sólida, assegurando projetos ordenados, com objetivos claros, prazos definidos e execução suave.</p>
          </div>

          <div className='flex flex-col items-center text-sm gap-1'>
              <BanknotesIcon className='h-6 w-6 text-BgDarkBlue'/>
              <h3 className='text-lg text-BgDarkBlue'>Controle de Custos</h3>
              <p className='text-center text-BgGrayText '>Com o uso de gestão de projetos controle seus custos rigorosamente em todas as etapas, garantindo eficiência e evitando estouros de orçamento através de monitorização constante.</p>
          </div>

          <div className='flex flex-col items-center text-sm gap-1'>
              <ChatBubbleLeftRightIcon className='h-6 w-6 text-BgDarkBlue'/>
              <h3 className='text-lg text-BgDarkBlue'>Comunicação Aprimorada</h3>
              <p className='text-center text-BgGrayText'>Mantenha todas as partes interessadas alinhadas e informadas com os canais de comunicação de forma clara e eficaz, garantindo transparência e evitando mal-entendidos entre equipe interna, clientes e fornecedores.</p>
          </div>

          <div className='flex flex-col items-center text-sm gap-1'>
              <PresentationChartLineIcon className='h-6 w-6 text-BgDarkBlue'/>
              <h3 className='text-lg text-BgDarkBlue'>Aumento da Produtividade</h3>
              <p className='text-center text-BgGrayText'>Utilize a gestão de projetos para eliminar confusões e direcione a sua equipe para o foco principal, que irá resultar em maior produtividade e entregas pontuais.</p>
          </div>

          <div className='flex flex-col items-center text-sm gap-1'>
              < StarIcon className='h-6 w-6 text-BgDarkBlue'/>
              <h3 className='text-lg text-BgDarkBlue'>Excelência em Qualidade</h3>
              <p className='text-center text-BgGrayText'>Use essa abordagem focada na qualidade que garante padrões elevados em todos os aspectos do seu projeto, com revisões regulares e controle de qualidade em cada etapa para resultados excepcionais.</p>
          </div>

          <div className='flex flex-col items-center text-sm gap-1'>
              < PuzzlePieceIcon className='h-6 w-6 text-BgDarkBlue'/>
              <h3 className='text-lg text-BgDarkBlue'>Flexibilidade Adaptativa</h3>
              <p className='text-center text-BgGrayText'>O uso desse serviço de gestão de projetos é altamente flexível e adaptável às necessidades do seu negócio, garantindo controle e eficácia em todas as circunstâncias, mesmo diante de mudanças de cenário ou requisitos.</p>
          </div>

          
        </div>
    </div>
  )
}

export default Benefits



