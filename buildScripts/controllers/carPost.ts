import { NextFunction, Request, Response, Router } from 'express';
import * as admin from 'firebase-admin';
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
      let databaseRef = admin.database().ref();
      let usersRef = databaseRef.child("users");
        const data = usersRef.push({
        "carColour":req.body.carColour,
        "customerName":req.body.customerName,
        "carMake":req.body.carMake,
        "phoneNumber":req.body.phoneNumber,
        "carMileage":req.body.carMileage,
        "canDirectSale":req.body.canDirectSale,
        "carYear":req.body.carYear,
        "carModel":req.body.carModel,
        "email":req.body.email,
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
      const data = usersRef.push({
       "consignPrice":req.body.consignPrice,
       "dealerPrice":req.body.dealerPrice,
       "dealeronly":req.body.dealeronly,
       "consignonly":req.body.consignonly,
       "consigndealer":req.body.consigndealer,
      });
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
