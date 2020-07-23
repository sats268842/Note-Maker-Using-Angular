import { Component, Inject, PLATFORM_ID, inject} from '@angular/core';
import { SwPush } from '@angular/service-worker'
import { PushNotificationService } from './shared/push-notification.service';
import { isPlatformBrowser } from '@angular/common';
const VAPID_PUBLIC = 'BAdnh6Fd3yHF0HQucQgo1qm9A9flPT_XurCGiByJoTvdQes76IXZK4IVOSgdwDTJnIvKFIsGJ02FBA672Bq1Wz0';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ScrapBook';


  constructor(
    @Inject(PLATFORM_ID) private platformId ) {
    }
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
ngOnInit(){
  if(isPlatformBrowser(this.platformId)){
    console.log("hello in local server");
  }

}
}
