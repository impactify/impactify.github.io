import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramFeedService {
  private access_token = 'IGQVJVU2FrcTllaGpsRmswWjIyU2FZARGprOGN5SWM0MTNhWmxad1VrcDhFS1dIb0xuQmxNVmJ3T2U1SzNOMkc5TkwzVWFVTll4NjBEaGVrWHJ5UFkzS3ZAJR21TbjNCbGlxRTV3a3ZAR';
  private media_url = 'https://graph.instagram.com/17841440123434114/media?fields=id,media_type,media_url,caption,username,permalink,timestamp&access_token=' + this.access_token;
  private refresh_access_token_url = 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' + this.access_token;
  public instaFeed = [];

  constructor(private http: HttpClient) {}

  public getInstaFeed() {
    this.http
      .get(this.media_url)
      .toPromise()
      .then((data) => {
        console.log(data);
        const feed = data['data'];
        for (let i = 0; i < 4; i++) {
          if (feed.hasOwnProperty(i)) {
            this.instaFeed[i] = {
              caption: feed[i].caption,
              imageurl: feed[i].media_url,
              permalink: feed[i].permalink
            };
          }
        }
      });
    return this.instaFeed;
  }

  public refresh_access_token() {
    this.access_token = 'IGQVJVU2FrcTllaGpsRmswWjIyU2FZARGprOGN5SWM0MTNhWmxad1VrcDhFS1dIb0xuQmxNVmJ3T2U1SzNOMkc5TkwzVWFVTll4NjBEaGVrWHJ5UFkzS3ZAJR21TbjNCbGlxRTV3a3ZAR';
    setInterval(myTimer, 300000);
    function myTimer() {
      this.http
        .get(this.refresh_access_token_url)
        .toPromise()
        .then((data) => {
          this.access_token = data['access_token'];
        });
    }
  }
}
