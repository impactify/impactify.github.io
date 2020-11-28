import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramFeedService {
  private access_token = 'IGQVJXVlphX29lWFFVM094TkFDQ3FjV3lnM1VxWExqMnl6blFZAY2x1RkZALandvRnkxazF4b1pjS3hXZAUZALalJXOTMwSk0xbE1ZAVkRlNHFtdFl1N3E3QXNTdkJhTVVlWHVLdV9IRlRB';
  private media_url = 'https://graph.instagram.com/17841440123434114/media?fields=id,media_type,media_url,caption,username,permalink,timestamp&access_token=' + this.access_token;
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
}
