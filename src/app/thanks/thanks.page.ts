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

    constructor(private modalCtrl: ModalController) { }

    ngAfterViewInit() {
        this.getBarChart();
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
                        label: 'Resultado Calculadora TRL',
                        data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        backgroundColor: [
                            '#21273D', '#FF5733', '#2A6EDA', '#FFC300', '#8C80A5', '#FF5733', '#C6C0B8', '#FFC300', '#F3F0EB'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }
    }

    async touchVoltarModal() {
        this.modalCtrl.dismiss();
    }
}
