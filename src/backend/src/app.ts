import express, { Router } from 'express';
import connectToDataBase from './database/connection';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.get('/', (req, res) => res.send('olaa'));
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDataBase();
    this.app.listen(
      PORT,
      () => console.log(`Server running on port: ${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
