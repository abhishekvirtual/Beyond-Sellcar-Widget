import { NextFunction, Request, Response, Router } from 'express';
import * as request from "request-promise-native";
import * as admin from 'firebase-admin';
import { promises } from 'fs';
export class CarPost {
  public router: Router;
  public databaseRef:any;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
      carColour,customerName,carMake,phoneNumber,carMileage,canDirectSale,carYear,carModel,email
    } = req.body;
    try {
      let datas = {
        "carColour":req.body.carColour,
        "customerName":req.body.customerName,
        "carMake":req.body.carMake,
        "phoneNumber":req.body.phoneNumber,
        "carMileage":req.body.carMileage,
        "canDirectSale":req.body.canDirectSale,
        "carYear":req.body.carYear,
        "carModel":req.body.carModel,
        "email":req.body.email,
        }
      let databaseRef = admin.database().ref();
      let usersRef = databaseRef.child("users");
        const data = usersRef.push(datas).then((snap)=>{

        });
        const options = {
          method: 'POST',
          body: {"text": `<https://alert-system.com/alerts/1234| ${req.body.canDirectSale}: ${req.body.carYear},,${req.body.carModel},${req.body.carYear},${req.body.carColour}(${req.body.carMileage}/${req.body.customerName})>`},
          json: true,
          uri: 'https://hooks.slack.com/services/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',
        };
  //https://hooks.slack.com/services/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 //client chennel
         const result = await request(options).then(data=>{
              console.log(data);
         }).catch(err=>{
              console.log(err);
         });

        res.status(201).json({ data, message: 'success' });
    } catch (error) {
      return next(error.message);
    }
  }


  public async createLead(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const {
      consignPrice,dealerPrice,dealeronly,consignonly,consigndealer
    } = req.body;
    try {
      let db = admin.database().ref();
      let usersRef = db.child("leads");
      let datas = {
        "consignPrice":req.body.consignPrice,
        "dealerPrice":req.body.dealerPrice,
        "dealeronly":req.body.dealeronly,
        "consignonly":req.body.consignonly,
        "consigndealer":req.body.consigndealer,
       }
       const data = usersRef.push(datas);
       res.status(201).json({ data, message: 'success' });
    } catch (error) {
      return next(error.message);
    }
  }


  public routes() {
    this.router.post('/car', this.create);
    this.router.post('/leads', this.createLead);
  }
}
