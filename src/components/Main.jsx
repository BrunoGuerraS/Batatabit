import React from 'react'
import Batata from '../assets/icons/batata.svg'
// import Girl from '../assets/img/Bitcoinbaby2x.jpg'


const Header = () => {
    return(
        <main>

            <section className="main-exchange-container" >
                
                <div className="backgroundImg" ></div>
                
                <div className="main-exchange-container--title" >
                    <h2>
                        Visibilizamos todas las tasas de cambio.
                    </h2>
                    <p>
                      Traemos informacion en tiempo real de las casas de cambio y las monedas mas importantes del mundo.  
                    </p>
                </div>
                <section className="main-grid-container" >
                    
                        
                        <p className="monedas">Monedas</p>
                        
                        <section className="tabla" >
                            <p className="typeCoin" >
                                Bitcoin
                            </p> 
                            <div className="precio" >
                                <p>$ 1.96</p> 
                                <span className="donw" ></span>
                            </div>
                            
                            <p className="typeCoin" >
                                Ethereum
                            </p> 
                            <div className="precio" >
                                <p>$ 0.07</p> 
                                <span className="up" ></span>
                            </div>
                            
                            <p className="typeCoin" >
                                Ripple
                            </p>
                            <div className="precio" >
                                <p>$ 2.15</p> 
                                <span className="donw" ></span>
                            </div>
                            
                            <p className="typeCoin" >
                                Stellar   
                            </p> 
                            <div className="precio" >
                                <p>$ 4.92</p> 
                                <span className="donw" ></span>
                            </div>
                        </section>
                    
                        <p className="dateActual" > <span>Actualizado:</span> 12 Febrero 23:35</p>

                </section>
            </section>
            <section className="main-product-detail" >
                <span className="logoBatata" ></span>
                <div className="main-product-detail--title">
                    <h2>Creamos un producto <br/> sin comparación</h2>
                    <p>Confiable y diseñado para su uso diario</p>
                </div>



                <section className="main-product-detail--card">
                    <div className="product--card" >
                        <span className="clock"></span>
                        <h2 className="product--card--title" >Tiempo real</h2>                    
                        <p className="product--card--body" >Nuestra API toma informacion minuto a minuto sobre las tasas que más determinan el comportamiento</p>
                    </div>
                    <div className="product--card" >
                        <span className="eye"></span>
                        <h2 className="product--card--title" >No hay tasas escondidas</h2>                    
                        <p className="product--card--body" >Ni en la compra o al momento de exit. Batabit siempre te muestra el costo real de lo que estas adquiriendo</p>
                    </div>
                    <div className="product--card" >
                        <span className="dolar"></span>
                        <h2 className="product--card--title">
                            Compara monedas
                        </h2>                    
                        <p className="product--card--body" >
                            No mas rumores, con Batatabit sabras el valor real de cada moneda en el mercado actual.
                        </p>
                    </div>
                    <div className="product--card" >
                        <span className="check"></span>
                        <h2 className="product--card--title">
                            Información Confiable
                        </h2>                    
                        <p className="product--card--body" >
                            Neuestras fuentes están 100% verificadas y continuamente auditando su contenido mientras se actualizan.
                        </p>
                    </div>                    
                </section>
            </section>
            <section className="bitcoinimg" >
                <h2>Conócelo hoy.</h2>                
            </section>
            <section className="main-plan-container" id="plans" >
                <div className="plans--title">
                    <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                    <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
                </div>    
                <section className="plans-container--slider" >
                    <article className="plans-contanier--card"> 
                        <p>Recomendado</p>
                        <div className="plans--card">
                            <h3 className="card--title">Pago Anual</h3>
                            <p className="card--price"><span>$</span> 99</p>
                            <p className="card--saving">*Ahorra $129 comprando el plan mensual.</p>
                            <button>Escoge este <span></span> </button>
                        </div>
                    </article>
                    <article></article>
                    <article></article>
                </section>
            </section>

        </main>
    )
}

export default Header 