import Rx from 'rx-lite';

import {auth, database} from "./firebase_app";

export const USERSTATE_SIGNEDOUT = 0;
export const USERSTATE_SIGNEDIN = 1;
export const USERSTATE_LOADING = 2;

class ProductinstanceService {
  user = new Rx.ReplaySubject(1);
  userState = Rx.Observable.merge(
    new Rx.BehaviorSubject(USERSTATE_LOADING),
    this.user.select((user, idx, obs) => {
      // console.log("ProductinstanceService.js/", "this.user.select((user, idx, obs) => ", "user=", user);
      if (user) {
        return USERSTATE_SIGNEDIN;
      } else {
        return USERSTATE_SIGNEDOUT;
      }})
  );

  productInstances = new Rx.Subject();
  loading = new Rx.BehaviorSubject(false);
  _userRef = null;

  constructor() {
    auth.onAuthStateChanged(user => {
      // console.log("ProductinstanceService.js/", "constructor/", "onAuthStateChanged", user ? user.uid : 'logged out');
      this.user.onNext(user);
    });

    this.user.subscribe(
      (user) => {
        // console.log("ProductinstanceService.js/", "constructor/", "this.user.subscribe/", "user=", user);
        if (user) {
          this._userRef = database().ref().child("product_instances").child(user.uid);
          this._userRef.on('value', (snapshot) => {
            this.updateProductInstances(snapshot.val());
          });
        } else {
          if (this._userRef) {
            this._userRef.off();
            this._userRef = null;
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
