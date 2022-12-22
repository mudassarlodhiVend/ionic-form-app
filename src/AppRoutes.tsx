import { Redirect, Route } from 'react-router-dom';
import FormTab from './pages/FormTab';
import AnimalsTab from './pages/AnimalsTab';
import Tab3 from './pages/Tab3';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Route path="/user-form">
        <FormTab />
      </Route>
      <Route path="/animals">
        <AnimalsTab />
      </Route>
      <Route path="/tab3">
        <Tab3 />
      </Route>
      <Route exact path="/">
        <Redirect to="/user-form" />
      </Route>
    </>
  );
}

export default AppRoutes;
