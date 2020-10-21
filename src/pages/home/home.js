import React, { Component } from 'react';

class Home extends Component {
  render () {
      return (
        <div className="row justify-content-center">
            <section className="row header col-10 pr-0 pl-0">
                <article className="text_sobre rounded d-flex flex-wrap-reverse flex-md-nowrap justify-content-center align-items-center p-0">
                    <div className="p-2">
                        <p className="m-15">Sou Sâmela Coutinho, uma jovem de 20 anos formada em Design Gráfico.
                            O design e a arte fazem parte da minha vida desde muito cedo, sempre procurei sobre e sempre amei esse universo.</p>
                            <a href="/about">Ver mais...</a>
                    </div>
                    
                    <div className="bloco_img p-2">
                        <div className="image_samy">
                        </div>
                    </div>
                </article>
            </section>

            {/* Destaques */}
            <section className="row destaques col-10 rounded text-white justify-content-center">
                <div className="titulo_dest rounded col-10">
                    <h2>Destaques</h2>
                </div>

                {/* Carrossel */}
                <div className="row centraliza_destaques col-12 justify-content-center p-0">
                    <div className="carousel-destaques col-12 m-0 p-0 justify-content-center">
                        {/* Imagem 1 */}
                        <article>
                            <div className="destaque_img1 destaque_img">
                                <div className="desc">
                                    <div className="nome_dest">
                                        <h3 className="h1">Revista Superego</h3>
                                    </div>

                                    <div className="data_dest">
                                        <h4>Data de criação</h4>
                                        <p>Outubro/2018</p>
                                    </div>

                                    <div className="tec_dest">
                                        <h4>Descrições Técnicas</h4>
                                        <p>Projeto de Editoração Gráfica fictício realizado na universidade.</p>
                                        <p>Produzido com Adobe Photoshop CS6, Adobe InDesign e Adobe Illustrator.</p>
                                    </div>

                                    <div className="ver_mais">
                                        <p><a href="/design-editorial">Ver mais sobre Design Editorial</a></p>
                                    </div>
                                </div>
                            </div>   
                        </article>  
                        {/* Imagem 2 */}
                        <article className="destaque">
                            <div className="destaque_img2 destaque_img">
                                <div className="desc">
                                    <div className="nome_dest">
                                        <h3>Petit Bonbon</h3>
                                    </div>
                
                                    <div className="data_dest">
                                        <h3>Data de criação</h3>
                                        <p>Setembro/2018</p>
                                    </div>
                
                                    <div className="tec_dest">
                                        <h3>Descrições Técnicas</h3>
                                        <p>Projeto de Embalagem fictício realizado na universidade.</p>
                                        <p>Produzido com Adobe Photoshop CS6 e Adobe Illustrator.</p>
                                    </div>
                
                                    <div className="ver_mais">
                                        <p><a href="/design-embalagens">Ver mais sobre Design de Embalagens</a></p>
                                    </div>
                                </div>
                            </div>             
                        </article>
                        {/* Imagem 3 */}
                        <article className="destaque">
                            <div className="destaque_img3 destaque_img">
                                
                                <div className="desc">
                                    <div className="nome_dest">
                                        <h3>Agência Ponto de Vista</h3>
                                    </div>
                
                                    <div className="data_dest">
                                        <h3>Data de criação</h3>
                                        <p>Abril/2019</p>
                                    </div>
                
                                    <div className="tec_dest">
                                        <h3>Descrições Técnicas</h3>
                                        <p>Projeto de Identidade Visual para agência fictícia realizado na universidade.</p>
                                        <p>Produzido com Adobe Photoshop CS6 e Adobe Illustrator.</p>
                                    </div>
                
                                    <div className="ver_mais">
                                        <p><a href="/identidade-visual">Ver mais sobre Identidade Visual</a></p>
                                    </div>
                                </div>
                            </div>             
                        </article>
                        {/* Imagem 4 */}
                        <article className="destaque">
                            <div className="destaque_img4 destaque_img">
                                
                                <div className="desc">
                                    <div className="nome_dest">
                                        <h3>Ilustração</h3>
                                    </div>
                
                                    <div className="data_dest">
                                        <h3>Data de criação</h3>
                                        <p>Setembro/2019</p>
                                    </div>
                
                                    <div className="tec_dest">
                                        <h3>Descrições Técnicas</h3>
                                        <p>Ilustração feita sob encomenda.</p>
                                        <p>Produzido com Wacom Intus Pen Small e Photoshop CS6.</p>
                                    </div>
                
                                    <div className="ver_mais">
                                        <p><a href="/ilustracoes">Ver mais Ilustrações</a></p>
                                    </div>
                                    </div>
                                </div>             
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default Home;
