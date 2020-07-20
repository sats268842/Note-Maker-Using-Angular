import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker'
import { PushNotificationService } from './shared/push-notification.service';

const VAPID_PUBLIC = 'BAdnh6Fd3yHF0HQucQgo1qm9A9flPT_XurCGiByJoTvdQes76IXZK4IVOSgdwDTJnIvKFIsGJ02FBA672Bq1Wz0';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noteapp';


  // constructor(swPush: SwPush, pushService: PushNotificationService) {
  //   if (swPush.isEnabled) {
  //     swPush
  //       .requestSubscription({
  //         serverPublicKey: VAPID_PUBLIC,
  //       })
  //       .then(subscription => {
  //         pushService.sendSubscriptionToTheServer(subscription).subscribe()
  //       })
  //       .catch(console.error)
  //   }
  // }

}
