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
    public trl1Checked1: string = '';

    public slidesOpts = {
        allowTouchMove: false,
        autoHeight: true,
    };

    public slides: string[];
    public currentSlide: string;
    public isBeginning: boolean = true;
    public isEnd: boolean = false;

    get billingFirstName(): AbstractControl {
        return this.billingForm.get('first_name');
    }

    get billingLastName(): AbstractControl {
        return this.billingForm.get('last_name');
    }

    get billingEmail(): AbstractControl {
        return this.billingForm.get('email');
    }

    get billingAddress(): AbstractControl {
        return this.billingForm.get('address');
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
            component: ThanksPage
        });
        await modal.present();
    }

    setupForm() {

        this.billingForm = new FormGroup({
            first_name: new FormControl('', Validators.required),
            last_name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
        });
    }

    customValidator(control: AbstractControl): { [key: string]: any } | null {
        const sCheck1 = control.get('sCheck1');
        const nCheck1 = control.get('nCheck1');

        if (!sCheck1.value && !nCheck1.value) {
            return { required: true };
        }

        return null; // Caso contrário, não há erro
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

    ck(item: string, chk: string) {
        if (chk === 'chck1') {
            this.trl1Checked1 = item;
        }
    }
}
