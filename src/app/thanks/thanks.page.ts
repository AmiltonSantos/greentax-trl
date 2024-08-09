import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
    selector: "app-thanks.page",
    templateUrl: "./thanks.page.html",
    styleUrls: ["./thanks.page.scss"],
})
export class ThanksPage implements AfterViewInit {
    @ViewChild('barCanvas', { static: false }) barCanvas: ElementRef;
    dataTrl1 = Math.floor(Math.random() * 101);
    dataTrl2 = Math.floor(Math.random() * 101);
    dataTrl3 = Math.floor(Math.random() * 101);
    dataTrl4 = Math.floor(Math.random() * 101);
    dataTrl5 = Math.floor(Math.random() * 101);
    dataTrl6 = Math.floor(Math.random() * 101);
    dataTrl7 = Math.floor(Math.random() * 101);
    dataTrl8 = Math.floor(Math.random() * 101);
    dataTrl9 = Math.floor(Math.random() * 101);

    trl: string;
    trls: string[] = [
        `TRL1: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 1”, em “NÍVEL 1” para Vale S.A com conceito de “PESQUISA BÁSICA”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            Os princípios básicos da tecnologia foram formulados, e potenciais aplicações foram identificadas. Embora ainda não existam definições conceituais detalhadas ou requisitos de desempenho, a pesquisa acadêmica já aponta para a relevância do desenvolvimento.
            A tecnologia está em um nível embrionário, onde as ideias estão sendo exploradas e os conceitos fundamentais estão sendo estudados. Potenciais impactos sociais e ambientais são considerados, mas não há provas práticas ou conceitos definidos.`,

        `TRL2: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 2”, em “NÍVEL 1” para Vale S.A com conceito de “PESQUISA BÁSICA”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            A tecnologia avançou para o desenvolvimento de conceitos iniciais, com foco em viabilidade preliminar. Conceitos de sustentabilidade foram considerados, e uma análise preliminar de viabilidade econômica e identificação de stakeholders foram realizadas.
            Os conceitos básicos foram estabelecidos, com menções consistentes de aplicações conceituais. A tecnologia ainda requer provas adicionais e uma análise detalhada para apoio das aplicações, mas os fundamentos estão sendo construídos.`,

        `TRL3: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 3”, em “NÍVEL 2” para Vale S.A com conceito de “PROVA DE CONCEITO”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            Em TRL 3, protótipos são construídos e testados em ambientes controlados. O desempenho funcional da tecnologia é avaliado através de modelagem, simulação e experimentação. Os impactos socioambientais são analisados, e stakeholders são envolvidos no processo.
            Os requisitos de desempenho estão definidos, e estudos laboratoriais são cruciais para a validação do conceito. Esta fase estabelece as bases para futuros testes em ambientes mais realistas.`,

        `TRL4: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 4”, em “NÍVEL 2” para Vale S.A com conceito de “PROVA DE CONCEITO”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            Está em estágio que foca em testes em escala piloto, onde o desempenho funcional da tecnologia é avaliado em ambientes simulados. Métricas de desempenho são estabelecidas, e programas de gestão de riscos são iniciados para monitorar impactos socioambientais.
            A validação funcional é comprovada por meio de experimentos laboratoriais e simulações, indicando que a tecnologia pode operar em ambientes controlados, mas ainda precisa de ajustes antes de ser escalada.`,

        `TRL5: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 5”, em “NÍVEL 3” para Vale S.A com conceito de “PROTOTIPAÇÃO”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            A tecnologia é demonstrada em ambientes que simulam condições reais de operação. Testes em escala piloto são realizados, e uma avaliação abrangente de sustentabilidade é conduzida para garantir a adequação da tecnologia às exigências do setor.
            A tecnologia é validada em um ambiente relevante, mas nem todas as funções estão integradas. Este estágio é crucial para identificar funções críticas e ajustar componentes para futuras fases.`,

        `TRL6: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 6”, em “NÍVEL 3” para Vale S.A com conceito de “PROTOTIPAÇÃO”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            Em TRL 6, componentes e sistemas são integrados e testados em ambientes operacionais controlados. Avaliações de desempenho e segurança são realizadas, e processos são otimizados com base nos resultados dos testes.
            A tecnologia mostra-se pronta para demonstração em ambientes operacionais, com integração funcional comprovada. Os protótipos estão próximos de condições reais de operação, exigindo melhorias para escalar.`,

        `TRL7: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 7”, em “NÍVEL 4” para Vale S.A com conceito de “TESTES INDUSTRIAIS/ESCALONAMENTO”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            Testes são conduzidos em ambientes que replicam condições operacionais reais. A tecnologia é submetida a estresse para validar o desempenho, e os impactos socioambientais são monitorados.
            O desempenho é analisado em condições operacionais reais, garantindo que a tecnologia atende às expectativas. As melhorias contínuas são implementadas para solucionar problemas identificados.`,

        `TRL8: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 8”, em “NÍVEL 4” para Vale S.A com conceito de “TESTES INDUSTRIAIS/ESCALONAMENTO”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            A tecnologia é totalmente integrada ao sistema final, e seu desempenho é verificado em condições operacionais reais. Aceitação por parte de stakeholders e documentação completa são essenciais nesta fase.
            A tecnologia está pronta para implantação em larga escala, com todos os componentes integrados e aceitos. As mudanças necessárias são mínimas, indicando maturidade tecnológica.`,

        `TRL9: Com base nos cálculos elaborados pela calculadora de maturidade tecnológica Greentax, a tecnologia analisada (SE FOR POSSÍVEL LINKAR O NOME DA TECNOLOGIA PRA APRECER), proposta pela instituição (SE FOR POSSÍVEL LINKAR O NOME DA INSTIUIÇÃO PROPONETE), que tem como pesquisador responsável (SE FOR POSSÍVEL LINKAR O NOME DO PESQUISADOR RESPONSÁVEL), se encontra em “TRL 9”, em “NÍVEL 5” para Vale S.A com conceito de “FASE COMERCIAL”. O resultado da análise é narrado a seguir, detalhando o status atual da tecnologia:
            Este é o nível mais alto de maturidade, onde a tecnologia está em operação comercial e atende às necessidades do setor de mineração. O desempenho é continuamente monitorado, e melhorias são implementadas conforme necessário.
            A tecnologia está madura e totalmente comissionada, pronta para comercialização e operação sustentável no ambiente real. O modelo de negócio é estabelecido, e a tecnologia cumpre sua missão designada. A tecnologia é segura e pronta para Transferência em caso de interesse da instituição proponente.`
    ];

    constructor(private modalCtrl: ModalController) { }

    ngAfterViewInit() {
        const modalElement = this.barCanvas.nativeElement.closest('.modal-wrapper');
        modalElement.style.setProperty('--width', '95%');
        modalElement.style.setProperty('--height', '95%');
        this.trl = this.getRandomTrl();
        this.getBarChart();
    }

    getRandomTrl(): string {
        const randomIndex = Math.floor(Math.random() * this.trls.length);
        return this.trls[randomIndex];
    }

    getBarChart() {
        if (this.barCanvas) {
            const canvasElement = this.barCanvas.nativeElement as HTMLCanvasElement;
            const ctx = canvasElement.getContext('2d');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['TRL1', 'TRL2', 'TRL3', 'TRL4', 'TRL5', 'TRL6', 'TRL7', 'TRL8', 'TRL9'],
                    datasets: [{
                        label: 'Percentual',
                        data: [this.dataTrl1, this.dataTrl2, this.dataTrl3, this.dataTrl4, this.dataTrl5, this.dataTrl6, this.dataTrl7, this.dataTrl8, this.dataTrl9],
                        backgroundColor: [
                            '#21273D', '#FF5733', '#2A6EDA', '#FFC300', '#8C80A5', '#FF5733', '#C6C0B8', '#FFC300', '#AF0F6C'
                        ]
                    }]
                },
                options: {
                    responsive: true, // Definindo a responsividade do gráfico
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontColor: 'blue' // Cor do texto da legenda
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: 'blue' // Cor do texto das labels no eixo X
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                fontColor: 'green', // Cor do texto das labels no eixo Y
                                callback: (value: number) => {
                                    return value + '%'; // Adiciona o símbolo de porcentagem
                                }
                            }
                        }]
                    }
                }
            });
        }
    }

    async touchVoltarModal() {
        this.modalCtrl.dismiss();
    }
}
