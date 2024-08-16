import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, IonSlides } from '@ionic/angular';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ThanksPage } from '../thanks/thanks.page';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.page.html',
    styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

    @ViewChild(IonContent, { static: true }) ionContent: IonContent;
    @ViewChild(IonSlides, { static: false }) ionSlides: IonSlides;
    @ViewChild('billingFormRef', { static: false }) billingFormRef: NgForm;

    public billingForm: FormGroup;
    public checkboxForm: FormGroup;
    private nbTrl1 = 0;
    private nbTrl2 = 0;
    private nbTrl3 = 0;
    private nbTrl4 = 0;
    private nbTrl5 = 0;
    private nbTrl6 = 0;
    private nbTrl7 = 0;
    private nbTrl8 = 0;
    private nbTrl9 = 0;
    public tituloProjeto: string;
    public instituicaoProjeto: string;
    public pesquisadorProjeto: string;
    public observacao: string = '';

    public slidesOpts = {
        allowTouchMove: false,
        autoHeight: true,
    };

    public slides: string[];
    public currentSlide: string;
    public isBeginning: boolean = true;
    public isEnd: boolean = false;

    get billingTitulo(): AbstractControl {
        return this.billingForm.get('titulo');
    }

    get billingInstituicao(): AbstractControl {
        return this.billingForm.get('instituicao');
    }

    get billingResponsavel(): AbstractControl {
        return this.billingForm.get('responsavel');
    }

    get billingPreencheu(): AbstractControl {
        return this.billingForm.get('preencheu');
    }

    get billingDescricao(): AbstractControl {
        return this.billingForm.get('descricao');
    }

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        this.setupForm();
        this.buildSlides();
    }

    ionViewDidEnter() {
        this.ionSlides.updateAutoHeight();
    }

    buildSlides() {
        const slides = ['Projeto', 'TRL1', 'TRL2', 'TRL3', 'TRL4', 'TRL5', 'TRL6', 'TRL7', 'TRL8', 'TRL9', ''];
        this.currentSlide = slides[0];
        this.slides = slides;
    }

    async next() {
        const modal = await this.modalCtrl.create({
            component: ThanksPage,
            componentProps: {
                trl1: this.nbTrl1,
                trl2: this.nbTrl2,
                trl3: this.nbTrl3,
                trl4: this.nbTrl4,
                trl5: this.nbTrl5,
                trl6: this.nbTrl6,
                trl7: this.nbTrl7,
                trl8: this.nbTrl8,
                trl9: this.nbTrl9,
                tituloProjeto: this.tituloProjeto,
                instituicaoProjeto: this.instituicaoProjeto,
                pesquisadorProjeto: this.pesquisadorProjeto
            }
        });
        await modal.present();
    }

    setupForm() {
        this.billingForm = new FormGroup({
            titulo: new FormControl('', Validators.required),
            instituicao: new FormControl('', Validators.required),
            responsavel: new FormControl('', Validators.required),
            preencheu: new FormControl('', Validators.required),
            descricao: new FormControl('', Validators.required),
        });
    }

    async onSlidesChanged() {
        const index = await this.ionSlides.getActiveIndex();
        this.currentSlide = this.slides[index];
        this.isBeginning = await this.ionSlides.isBeginning();
        this.isEnd = await this.ionSlides.isEnd();
    }

    onSlidesDidChange() {
        this.ionContent.scrollToTop();
    }

    onBackButtonTouched() {
        this.ionSlides.slidePrev();
        this.ionContent.scrollToTop();
    }

    async onNextButtonTouched() {
        if (this.currentSlide === 'Projeto') {
            this.billingFormRef.onSubmit(undefined);
            if (this.billingForm.valid) {
                this.ionSlides.slideNext();
                this.ionContent.scrollToTop();
            }
        } else {
            this.ionSlides.slideNext();
            this.ionContent.scrollToTop();
        }
    }

    public ck(item: string, chk: string) {
        if (chk === 'ck1' && item === 'SIM') {
            this.nbTrl1 = 11.11;
        } else if (chk === 'ck1' && item === 'NAO') {
            this.nbTrl1 = 0;
        }

        if (chk === 'ck16' && item === 'SIM') {
            this.nbTrl2 = 11.11 * 2;
        } else if (chk === 'ck16' && item === 'NAO') {
            this.nbTrl2 = 0;
        }

        if (chk === 'ck30' && item === 'SIM') {
            this.nbTrl3 = 11.11 * 3;
        } else if (chk === 'ck30' && item === 'NAO') {
            this.nbTrl3 = 0;
        }

        if (chk === 'ck40' && item === 'SIM') {
            this.nbTrl4 = 11.11 * 4;
        } else if (chk === 'ck40' && item === 'NAO') {
            this.nbTrl4 = 0;
        }

        if (chk === 'ck51' && item === 'SIM') {
            this.nbTrl5 = 11.11 * 5;
        } else if (chk === 'ck51' && item === 'NAO') {
            this.nbTrl5 = 0;
        }

        if (chk === 'ck59' && item === 'SIM') {
            this.nbTrl6 = 11.11 * 6;
        } else if (chk === 'ck59' && item === 'NAO') {
            this.nbTrl6 = 0;
        }

        if (chk === 'ck66' && item === 'SIM') {
            this.nbTrl7 = 11.11 * 7;
        } else if (chk === 'ck66' && item === 'NAO') {
            this.nbTrl7 = 0;
        }

        if (chk === 'ck75' && item === 'SIM') {
            this.nbTrl8 = 11.11 * 8;
        } else if (chk === 'ck75' && item === 'NAO') {
            this.nbTrl8 = 0;
        }

        if (chk === 'ck81' && item === 'SIM') {
            this.nbTrl9 = 11.11 * 9;
        } else if (chk === 'ck81' && item === 'NAO') {
            this.nbTrl9 = 0;
        }
    }

    public tamanhoMaximoTexto(value: string) {
        this.observacao = value;
    }
}
