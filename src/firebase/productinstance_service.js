import Rx from 'rx-lite';

import {auth, database} from "./firebase_app";


class ProductinstanceService {
  user = new Rx.BehaviorSubject(null);
  productInstances = new Rx.Subject();
  loading = new Rx.BehaviorSubject(false);
  userRef = null;

  constructor() {
    auth.onAuthStateChanged(user => {
      console.log("onAuthStateChanged", user ? user.uid : 'logged out');
      this.user.onNext(user);
    });

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userRef = database().ref().child("product_instances").child(user.uid);
          this.userRef.on('value', (snapshot) => {
            this.updateProductInstances(snapshot.val());
          });
        } else {
          if (this.userRef) {
            this.userRef.off();
            this.userRef = null;
          }
        }
      }
    )
  }

  updateProductInstances(values) {
    this.productInstances.onNext(values);
  }
}

const productinstance_service = new ProductinstanceService();

export default productinstance_service;
