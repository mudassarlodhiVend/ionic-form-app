import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

type MainPageProps = {
  heading: string;
  children: React.ReactNode;
};
  
const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
  const { heading, children } = props;
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{ heading }</IonTitle>
          <IonButtons slot="start" >
            <IonBackButton/>
            <IonMenuButton /> 
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ heading }</IonTitle>
            <IonButtons slot="start">
              <IonBackButton />
              <IonMenuButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        { children }
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
