import React, { Component } from "react"
import '../../App'
import '../../css/buttons.css'

class DesignEditorial extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <section className="row col-10 destaques justify-content-center pr-0 pl-0">
                    <div className="titulo_dest rounded col-10">
                        <h2>Design Editorial</h2>
                    </div>

                    {/* Projetos */}
                    <article className="row projeto col-12 p-0 justify-content-center" id="projeto_1">
                        <div className="projeto_imagens col-12 p-0">
                            <button type="button" className="button btn-spec"><span>Ver Especificações</span></button>
                            <div className="projeto_img m-0 col-md-7 p-0" id="img1"></div>
                            <div className="col-md-5 p-0">
                                <div className="projeto_img p-0" id="img2"></div>
                                <div className="projeto_img p-0" id="img3"></div>
                            </div>
                        </div>
                    </article>

                    <article className="projeto col-12 p-0">
                        <div className="projeto_nome"></div>
                        <div className="projeto_imagens">
                            <button type="button" className="button btn-spec"><span>Ver Especificações</span></button>
                            <div className="projeto_img col-6 p-0" id="img4"></div>

                            <div className="projeto_img col-6 p-0" id="img5"></div>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}

export default DesignEditorial