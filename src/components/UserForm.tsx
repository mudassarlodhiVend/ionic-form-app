import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonText, IonButton } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './UserForm.css';

type UserInputs = {
    firstName: string,
    lastName: string,
    country: string,
};

const UserForm: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<UserInputs>();
    const onSubmit: SubmitHandler<UserInputs> = (data: UserInputs) => console.log(data);

    return (
        <form className="container ion-padding" onSubmit={handleSubmit(onSubmit)}>
            <IonText color="primary">
                <h1>User Form</h1>
            </IonText>

            <IonItem className="ion-margin-bottom">
                <IonLabel position="floating">First Name:</IonLabel>
                <IonInput {...register("firstName", { required: true })} />
                {errors.firstName && <IonText color="danger"><sub>First name is required.</sub></IonText>}
            </IonItem>

            <IonItem className="ion-margin-bottom">
                <IonLabel position="floating">Last Name:</IonLabel>
                <IonInput {...register("lastName", { required: true })} />
                {errors.lastName && <IonText color="danger"><sub>Last name is required.</sub></IonText>}
            </IonItem>

            <IonItem className="ion-margin-bottom">
                <IonLabel position="floating">Country:</IonLabel>
                <IonSelect {...register("country", { required: true })}>
                    <IonSelectOption value="UAE">UAE</IonSelectOption>
                    <IonSelectOption value="Pakistan">Pakistan</IonSelectOption>
                    <IonSelectOption value="India">India</IonSelectOption>
                    <IonSelectOption value="Afghanistan">Afghanistan</IonSelectOption>
                </IonSelect>
                {errors.country && <IonText color="danger"><sub>Country is required.</sub></IonText>}
            </IonItem>
            <IonButton type='submit'>Submit</IonButton>
        </form>
    );
};

export default UserForm;
