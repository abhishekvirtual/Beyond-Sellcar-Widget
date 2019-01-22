import { NextFunction, Request, Response, Router } from 'express';
import * as admin from 'firebase-admin';


export class CarPost {
  public router: Router;

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
      var db = admin.database().ref();
      var usersRef = db.child("users");
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

  public routes() {
    this.router.post('/car', this.create);
  }
}
