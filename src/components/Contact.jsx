

const Contact = () => {
  return (
    <div>
        

        <div>
            <form>
                    <section className="w-full py-12 md:py-16 lg:py-24 bg-BgDarkBlue" id="contact">
                          <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
                            <div className="flex flex-col justify-center space-y-2">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-BenefitsColor">Entre em contato conosco</h2>
                              <p className="max-w-prose text-BenefitsColor font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                              Preencha este formulário e nós entraremos em contato assim que possível.
                              </p>
                            </div>


                            <div className="flex flex-col gap-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label
                                    className="text-sm font-medium  text-BenefitsColor leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="first-name"
                                  >
                                    Nome
                                  </label>
                                  <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="first-name"
                                    placeholder="Insira seu nome"
                                  />
                                </div>


                                <div className="space-y-2">
                                  <label
                                    className="text-sm text-BenefitsColor font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="last-name"
                                  >
                                    Sobrenome
                                  </label>
                                  <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="last-name"
                                    placeholder="Insira seu sobrenome"
                                  />
                                </div>
                              </div>


                              <div className="space-y-2">
                                <label
                                  className="text-sm text-BenefitsColor font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  htmlFor="email"
                                >
                                  Email
                                </label>
                                <input
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  id="email"
                                  placeholder="Insira seu Email"
                                  type="email"
                                />
                              </div>


                              <div className="space-y-2">
                                <label
                                  className="text-sm text-BenefitsColor font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  htmlFor="message"
                                >
                                  Mensagem
                                </label>
                                <textarea
                                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                                  id="message"
                                  placeholder="Insira sua mensagem"
                                ></textarea>
                              </div>


                              <button className="inline-flex items-center text-BenefitsColor bg-ButtonContactColor justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                Enviar mensagem
                              </button>

                              
                            </div>
                          </div>
                  </section>
            </form>
        </div>
    </div>
  )
}

export default Contact