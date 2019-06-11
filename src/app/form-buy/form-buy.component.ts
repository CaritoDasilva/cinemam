import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-form-buy',
  templateUrl: './form-buy.component.html',
  styleUrls: ['./form-buy.component.css']
})
export class FormBuyComponent implements OnInit {
  public clients = [];
  // email = new FormControl('', [Validators.required, Validators.email]);
  rewards = [
    { name: '25 reais - "Agradecimento público no dia da Abertura do CineMAM"', abbrev: '25reais' },
    { name: '40 reais - "Caneca CineMAM + agradecimento no dia da Abertura do CineMAM"', abbrev: '40reais' },
    { name: '50 reais - "Copão de pipoca CineMAM + agradecimento no dia da Abertura do CineMAM"', abbrev: '50reais' },
    { name: '70 reais - "Ecobag CineMAM" ou "Caneca CineMAM" ou "Copão de pipoca CineMAM"', abbrev: '70reais' },
    { name: '90 reais - "Ecobag CineMAM" + 02 ingressos CineMAM"', abbrev: '90reais' },
    { name: '140 reais - "10 ingressos para qualquer sessão CineMAM"', abbrev: '140 reais' },
    { name: '150 reais - "Kit Caneca, Copão de Pipoca e Ecobag CineMAM"', abbrev: '150reais' },
    { name: '250 reais - "20 ingressos para qualquer sessão CineMAM"', abbrev: '250reais' },
    { name: '400 reais - "01 ingresso CineMAM por semana (por um ano)¹" ou "“Exiba seu Curta”', abbrev: '400 reais' },
    { name: '800 reais - "Faça sua festa no CineMAM²"', abbrev: '800reais' },
    { name: '1200 reais - “Exiba sua curadoria” - 01 cinemana, 01 sessão por dia no CineMAM', abbrev: '1200reais' },
    { name: '2000 reais - "Ingresso livre¹ + nome na “Calçada da Fama”', abbrev: '2000reais' },
  ];

  public documentId = null;
  public currentStatus = 1;
  public newClientForm = new FormGroup({
    nameClient: new FormControl(''),
    emailClient: new FormControl(''),
    cellphoneClient: new FormControl(''),
    rewardClient: new FormControl(this.rewards),
  });


  constructor(private firestoreService: FirebaseService) {
    this.newClientForm.setValue({
      nameClient: '',
      emailClient: '',
      cellphoneClient: '',
      rewardClient: ''
    });
  }
  // getErrorMessage() {
  //   return this.emailClient.hasError('required') ? 'You must enter a value' :
  //     this.emailClient.hasError('email') ? 'Not a valid email' :
  //       '';
  // }

  ngOnInit() {
  }

  public newClient(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus === 1) {
      let data = {
        nameClient: form.nameClient,
        emailClient: form.emailClient,
        cellphoneClient: form.cellphoneClient,
        rewardClient: form.rewardClient
      }
      console.log(data)
      this.firestoreService.createClient(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.newClientForm.setValue({
          nameClient: '',
          emailClient: '',
          cellphoneClient: '',
          rewardClient: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        nameClient: form.nameClient,
        emailClient: form.emailClient,
        cellphoneClient: form.cellphoneClient,
        rewardClient: form.rewardClient
      }
      this.firestoreService.updateClient(documentId, data).then(() => {
        this.currentStatus = 1;
        this.newClientForm.setValue({
          nombre: '',
          url: '',
          id: ''
        });
        console.log('Documento editado exitósamente');
      }, (error) => {
        console.log(error);
      });
    }
  }

}
