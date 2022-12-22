import { useEffect } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonText, IonButton, IonIcon, IonThumbnail } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoCamera';
import './UserForm.css';

type UserInputs = {
    firstName: string,
    lastName: string,
    country: string,
    userImage: UserPhoto | null | undefined
};

const UserForm: React.FC = () => {

    const { control, handleSubmit, setValue, formState: { errors }, } = useForm<UserInputs>();
    const onSubmit: SubmitHandler<UserInputs> = (data: UserInputs) => console.log(data);
    const { photo, takePhoto } = usePhotoGallery();

    useEffect(() => {
        if (photo) setValue('userImage', photo, { shouldValidate: true });
    }, [photo, setValue]);

    return (
        <form className="container ion-padding" onSubmit={handleSubmit(onSubmit)}>
            <IonText color="primary" >
                <h1>User Form</h1>
            </IonText>

            <div className='ion-margin-top' style={{ display: 'flex', flexDirection: 'column' }}>
                <IonLabel>Choose Image:</IonLabel>
                <Controller
                    render={({ field: { value } }) => (
                        <>
                            <IonButton style={{ margin: '15px auto' }} shape="round" size="large" onClick={takePhoto}>
                                <IonIcon icon={camera}></IonIcon>
                            </IonButton>
                            {value && <IonThumbnail>
                                <img alt='user' src={value.webviewPath} />
                            </IonThumbnail>}
                            {errors.userImage && <IonText color="danger"><sub>Image is required.</sub></IonText>}
                        </>
                    )}
                    control={control}
                    name='userImage'
                    rules={{ required: true }}
                />
            </div>

            <IonItem className="ion-margin-bottom">
                <IonLabel position="floating">First Name:</IonLabel>
                <Controller
                    render={({ field: { onChange } }) => (
                        <IonInput onIonChange={onChange} />
                    )}
                    control={control}
                    name="firstName"
                    rules={{ required: true }}
                />
                {errors.firstName && <IonText color="danger"><sub>First name is required.</sub></IonText>}
            </IonItem>

            <IonItem className="ion-margin-bottom">
                <IonLabel position="floating">Last Name:</IonLabel>
                <Controller
                    render={({ field: { onChange } }) => (
                        <IonInput onIonChange={onChange} />
                    )}
                    control={control}
                    name="lastName"
                    rules={{ required: true }}
                />
                {errors.lastName && <IonText color="danger"><sub>Last name is required.</sub></IonText>}
            </IonItem>

            <IonItem className="ion-margin-bottom">
                <IonLabel position="floating">Country:</IonLabel>
                <Controller
                    render={({ field: { onChange } }) => (
                        <IonSelect onIonChange={onChange}>
                            <IonSelectOption value="UAE">UAE</IonSelectOption>
                            <IonSelectOption value="Pakistan">Pakistan</IonSelectOption>
                            <IonSelectOption value="India">India</IonSelectOption>
                            <IonSelectOption value="Afghanistan">Afghanistan</IonSelectOption>
                        </IonSelect>
                    )}
                    control={control}
                    name="country"
                    rules={{ required: true }}
                />
                {errors.country && <IonText color="danger"><sub>Country is required.</sub></IonText>}
            </IonItem>
            <IonButton type='submit'>Submit</IonButton>
        </form>
    );
};

export default UserForm;
