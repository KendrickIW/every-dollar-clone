import { IonButtons, IonButton, IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

import { addOutline, chevronDownOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode='md' className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="end" icon={chevronDownOutline}></IonIcon>
            July 2024
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" icon={addOutline}></IonIcon>
          </IonButton>
        </IonButtons>
        </IonToolbar>
        <IonSegment value="planned" mode='ios'>
          <IonSegmentButton value="planned" mode='ios'>
            <IonLabel>Planned</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="spent" mode='ios'>
            <IonLabel>Spent</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="remaining" mode='ios'>
            <IonLabel>Remaining</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
