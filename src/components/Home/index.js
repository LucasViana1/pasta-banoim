import './home.css'
import Header from '../Header'
import Footer from '../Footer'
import banana from '../../assets/bananas.png'
import sustentabilidade from '../../assets/sustentabilidade.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return(
        <>
            <Header />
            <main>
                <div className='home-content'>
                    <h2>
                        VAMOS FALAR SOBRE SUSTENTABILIDADE?
                    </h2>

                    <Container>
                        <Row className="d-flex justify-content-md-center">
                            <Col xs={6} className="d-flex justify-content-md-center">
                                <img src={sustentabilidade} alt="sustentabilidade" />
                            </Col>
                            <Col xs={6}>
                                <p>
                                    Nós nos esforçamos continuamente para melhorar o fornecimento responsável de nossas matérias-primas ao longo de nossa jornada.
                                    O índice de desperdício de alimentos é cada vez crescente ao longo dos últimos anos em nosso planeta. As perdas ocorrem porque os produtos estão fora do prazo de validade, ou por serem identificados como malformados. Para agravar, o desperdício alimentar está agregado à cultura brasileira: restos alimentares geralmente não são aproveitados para a produção de novos produtos.
                                    A banana é um dos frutos mais produzidos e consumidos pela população, porém também é o que mais é desperdiçado nas feiras e supermercados.
                                </p>
                            </Col>
                        </Row>
                        <br />
                        <Row className="mt-5 d-flex justify-content-md-center">
                            <Col xs={6}>
                                <p>
                                    Ainda de acordo com a autora esses frutos poderiam ser aproveitados em salada de frutas, sucos, doces, bolos entre outros. O aproveitamento integral de alimentos consiste em utilizar partes dos alimentos que normalmente são descartadas, como cascas, folhas e talos.
                                    O processo de educação alimentar possibilita a conscientização de que as partes de frutas e vegetais desprezados, também contém sais minerais, vitaminas, fibras entre outros, e favorece a diminuição do desperdício de alimentos e consequentemente haverá uma maior economia doméstica. Desta forma, o aproveitamento passa a ser uma prática de consumo consciente, promove a cidadania e permite que a população tenha uma relação harmoniosa com o nosso meio ambiente.
                                    A educação é o caminho mais adequado para este processo. Por conta disso, nossa empresa criou um projeto de um alimento feito a partir dos descartes das cascas de banana, afim de inovar um novo produto para o mercado.  
                                </p>
                            </Col>
                            <Col xs={6} className="d-flex justify-content-md-center">
                                <img src={banana} alt="bananas" />
                            </Col>
                        </Row>
                    </Container>

                    {/* <section className='section section-main'>
                    </section> */}

                    {/* <section className='section section-secondary'>
                    </section>                */}
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Home