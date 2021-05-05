import user from './controllers/User';

const routes = (app: any) => {
  app.use('/user', user);
};

export default routes;
