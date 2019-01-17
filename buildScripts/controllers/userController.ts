import { Request, Response, Router } from 'express';
import { User } from '../models/user';

export class UserController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public all(req: Request, res: Response): void {
    User.find()
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
        return error;
      });
  }

  public one(req: Request, res: Response): void {
    const { username } = req.params;

    User.findOne({ username })
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }

  public create(req: Request, res: Response): void {
    const { firstName, lastName, username, email, password } = req.body;

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    user
      .save()
      .then((data) => {
        res.status(201).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }

  public update(req: Request, res: Response): void {
    const { username } = req.params;

    User.findOneAndUpdate({ username }, req.body)
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }

  public delete(req: Request, res: Response): void {
    const { username } = req.params;

    User.findOneAndRemove({ username })
      .then(() => {
        res.status(204).end();
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }

  // set up our routes
  public routes() {
    this.router.get('/', this.all);
    this.router.get('/:username', this.one);
    this.router.post('/', this.create);
    this.router.put('/:username', this.update);
    this.router.delete('/:username', this.delete);
  }
}
