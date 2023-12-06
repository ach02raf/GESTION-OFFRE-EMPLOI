import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class GetAllOffreService {
  constructor(public firestore: Firestore, private storage: Storage) {}
  async getAllOffre(nameWebSite: string) {
    return (
      await getDocs(query(collection(this.firestore, nameWebSite)))
    ).docs.map((robots) => robots.data());
  }
  async downloadFile(fileName: string) {
    const storageRef = ref(this.storage, `${fileName}`);
    return await getDownloadURL(storageRef)
      .then((downloadURL) => {
        return downloadURL;
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  }
}
