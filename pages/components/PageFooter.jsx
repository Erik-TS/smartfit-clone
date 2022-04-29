import Image from "next/image"

function PageFooter(props){
    return(
        <div className="page-footer bg-dark text-white pt-5 pb-5">
            <div className="page-footer-container mx-auto">
                <div className="text-center pb-2">
                    <Image src={'https://www.smartfit.com.br/packs/media/logo-slogan-pt-60a6beb3.svg'} width={'180px'} height={'66px'}/>
                </div>
                <hr className="mx-auto" />
                <div className="row ipcs mx-auto">
                    <div className="col">
                        <h3>INSTITUCIONAL</h3>
                        <ul>
                            <li>Sobre</li>
                            <li>Conceito</li>
                            <li>Investidores</li>
                            <li>Central de Ajuda</li>
                            <li>Fale Conosco</li>
                            <li>Edital Smart Fit</li>
                            <li>Portal de Privacidade</li>
                            <li>Canal Pandemia</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>PLANOS</h3>
                        <ul>
                            <li>Planos</li>
                            <li>Contratos</li>
                            <li>Planos corporativos</li>
                            <li>Smart Fit Supps</li>
                            <li>Smart Fit Plus</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>CORPORATIVO</h3>
                        <ul>
                            <li>Imprensa</li>
                            <li>Quero ser um franqueado</li>
                            <li>Divulgue sua marca</li>
                            <li>Indique um ponto</li>
                            <li>Trabalhe Conosco</li>
                            <li>Graduação Ed. Física EAD</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>SIGA A SMART FIT</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                            <li>TikTok</li>
                            <li>Spotify</li>
                            <li>Twitter</li>
                            <li>Smart Fit News</li>
                        </ul>
                    </div>
                </div>
                <hr className="mx-auto" />
                <div className="PageFooter-info">
                    <h3>INFORMAÇÕES E CONDIÇÕES</h3>
                    <p>- O preço da mensalidade não inclui taxas de adesão e manutenção anual. Pagamento mensal por débito automático em conta-corrente ou cartão de crédito. O preço mínimo pode variar entre os planos e as unidades. Consulte a relação de unidades em smartfit.com.br. Sujeito a alterações sem aviso prévio. Não aceitamos cheques. Pagamento em dinheiro deve ser feito à vista, direto na unidade, incluindo mensalidade do período de 12 meses, taxas de adesão e manutenções anuais vigentes. Imagens meramente ilustrativas. </p>
                    <p> - Condições promocionais não são válidas para pagamentos à vista. </p>
                    <p> - O Plano Black garante acesso ilimitado para todas as unidades da América Latina. </p>
                    <p> - O Plano Black garante acesso limitado de 5 convidados por mês em qualquer unidade da rede. </p>
                    <p> Abril 2022 | 1º mês por R$9,90!!: Ao aderir a promoção, você está contratando um plano Smart ou Black conforme condições previstas em contrato. Em razão da promoção, você irá pagar no primeiro mês o valor de R$9,90, passando a pagar o valor integral a partir da segunda mensalidade. Condição válida apenas para novas vendas que fizerem adesão no plano Smart ou Black, no período compreendido do dia 14/04/2022 a 19/04/2022. As demais cobranças previstas em contrato (manutenção anual e antecedência de cancelamento, multa, etc.) serão integralmente mantidas. Promoção não cumulativa e vinculada a permanência mínima de três meses. Caso haja cancelamento durante o período de permanência mínima o valor do benefício será cobrado juntamente com quaisquer outros valores devidos no momento do cancelamento. Não é válido para clientes com débito anterior em aberto ou que tiveram seu plano cancelado por violação das normas de utilização.Ao aderir a promoção, você está contratando um plano Black conforme condições previstas em contrato. Consulte unidades não participantes e regulamento completo aqui </p>
                    <p> Abril 2022 | 1º mês você não paga a primeira mensalidade apenas nas 27 unidades da cidade de Fortaleza , passando a pagar o valor integral a partir da segunda mensalidade em diante. Condição válida apenas para novas vendas que fizerem adesão no plano Black, por período indeterminado. As demais cobranças previstas em contrato (manutenção anual e antecedência de cancelamento, multa, etc.) serão integralmente mantidas. Promoção não cumulativa e vinculada a permanência mínima de três meses. Caso haja cancelamento durante o período de permanência mínima o valor do benefício será cobrado juntamente com quaisquer outros valores devidos no momento do cancelamento. Não é válido para clientes com débito anterior em aberto ou que tiveram seu plano cancelado por violação das normas de utilização. " </p>
                </div>
            </div>
        </div>
    )
}

export default PageFooter