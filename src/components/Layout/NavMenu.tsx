import { 
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const NavMenu = () => {
  return (
    <>
     <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
              <IonItem routerLink='/user-form'>
                <IonLabel>User Form</IonLabel>
              </IonItem>
              <IonItem routerLink='/animals'>
                <IonLabel>Animals</IonLabel>
              </IonItem>
              <IonItem routerLink='/tab3'>
                <IonLabel>Tab 3</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
    </>
  );
}
export default NavMenu;