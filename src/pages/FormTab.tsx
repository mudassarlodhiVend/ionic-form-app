import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import UserForm from '../components/UserForm';

const FormTab: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Form</IonTitle>
          </IonToolbar>
        </IonHeader>
        <UserForm />
      </IonContent>
    </IonPage>
  );
};

export default FormTab;
