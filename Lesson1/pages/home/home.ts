import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 list: Array<dougItems>=[
 	{img: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fspf.fotolog.com%2Fphoto%2F15%2F55%2F79%2Fli73suck_xxx%2F1250062739629_f.jpg&f=1',
 	 name: "Tito"},
 	{img: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.elmeme.me%2Fstatic%2Fuploads%2Fimages%2F2015%2F01%2F74560%2F74630_subitem_full.jpg&f=1',
 	 name: "Patty"},
 	{img: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-tmm0t0Gb4bQ%2FTwuz6tUuz7I%2FAAAAAAAAFa8%2FBpAyzcsznOE%2Fs320%2Fchuleta-doug-01.jpg&f=1',
 	 name: "Chuletas"}
 ];

}

interface dougItems{
	img: string;
	name: string;
}
