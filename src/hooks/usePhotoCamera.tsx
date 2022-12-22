import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}

export function usePhotoGallery() {
    const [photo, setPhotos] = useState<UserPhoto | null>();
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });

        const fileName = new Date().getTime() + '.jpeg';
        setPhotos({
            filepath: fileName,
            webviewPath: photo.webPath,
        });
    };

    return {
        photo,
        takePhoto,
    };
}