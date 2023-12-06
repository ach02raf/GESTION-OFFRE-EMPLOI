import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
} from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetAllOffreService {
  constructor(
    public firestore: Firestore,
    private storage: Storage,
    private http: HttpClient
  ) {}
  async getAllOffre(nameWebSite: string) {
    return (
      await getDocs(query(collection(this.firestore, nameWebSite)))
    ).docs.map((robots) => robots.data());
  }
  downloadFile(fileName: string) {
    const storageRef = ref(this.storage, `CVSpacy/${fileName}`);

    getDownloadURL(storageRef)
      .then((downloadURL) => {
        console.log(downloadURL);
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  }
}
