import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
    	trigger('slideInOut', [
      		state('in', style({transform: 'translate3d(0, 0, 0)'})),
    		state('out', style({transform: 'translate3d(-100%, 0, 0)'})),
    		transition('in => out', animate('500ms ease-in-out')),
    		transition('out => in', animate('200ms ease-in-out'))
		]),
		trigger('swipeInOut', [
			state('on', style({transform: 'translateX(0) scale(1)'})),
			state('off',   style({transform: 'translateX(0) scale(1.1)'})),
			transition('off => on', animate('100ms ease-in')),
			transition('on => off', animate('100ms ease-out')),
			transition('void => off', [
				style({transform: 'translateX(-100%) scale(1)'}), animate(100)
	    	]),
	    	transition('off => void', [
				animate(100, style({transform: 'translateX(100%) scale(1)'}))
	    	]),
	    	transition('void => on', [
				style({transform: 'translateX(0) scale(0)'}), animate(200)
	    	]),
	    	transition('on => void', [
				animate(200, style({transform: 'translateX(0) scale(0)'}))
	    	])
	  	]),
		trigger('fadeInOut', [
      		state('in', style({opacity: 0.7, position: 'fixed'})),
    		state('out', style({opacity: 0, position: 'relative'})),
    		transition('in => out', animate('10ms ease-in-out')),
    		transition('out => in', animate('30ms ease-in-out'))
		])
	]
})
@Injectable()
export class AppComponent {
	title = 'app';
	description = "I hope you're doing well, I feel so satisfy about myself!! It has been such a good test to work on this Offline tasks, it was very challenging and I think I've been able to express my skills and learnt a lot! Looking forward to discuss further about it! Have a good day!! ;) ";

	readonly ROOT_URL = './assets/json/menu.json';
	constructor(private http: HttpClient){}

	items = [];
	filterData = [];
	viewItems = 'off';
	menuState:string = 'out';
	itemDisplayed = [];
	menuTitle = '';

	ngOnInit(): void {
	    this.http.get(this.ROOT_URL).subscribe((data : any) => {
	    	this.items = data.menu;
	    }/*,(err: HttpErrorResponse) => {
			if (err.error instanceof Error) {
				console.log("Client-side error occured.");
        	} else {
        		console.log("Server-side error occured.");
        	}
        }*/);
	}

	onSubSection(event){
		if(event.target.id != "undefined" && event.target.nodeName == "LI"){
			this.items.forEach((value) => {
  				document.getElementById("back-"+value.id).classList.remove("on");
  				document.getElementById("back-"+value.id).classList.add("off");
  			});
			let id_elem = event.target.id.split('-');
			let filterData = this.items.filter((number) => id_elem[2] == number.id);
			this.menuTitle = filterData[0].name;
			this.itemDisplayed = filterData[0].sub;
			this.viewItems = (this.viewItems === 'off' || this.menuTitle != event.target.innerText) ? 'on' : 'off';
			if(this.viewItems === 'on'){
				event.currentTarget.children[0].classList.remove("off");
				event.currentTarget.children[0].classList.add("on");
			}
	  		return true;
	  	}
	}
	closeSubMenu(event){
		event.currentTarget.classList.remove("on");
		event.currentTarget.classList.add("off");
		this.viewItems = 'off';
	}
	
	toggleSlideMenu() {
    	this.menuState = this.menuState === 'out' ? 'in' : 'out';
		this.viewItems = 'off';
    	this.menuTitle = '';
    	this.itemDisplayed = [];
  	}
  	openSlideMenu(event){
  		if(event.target.nodeName == "LI"){
  			this.menuState = 'in';
  			let id_elem = event.target.id;
  			let filter = this.items.filter((number) => id_elem == number.id);
			this.menuTitle = filter[0].name;
			this.itemDisplayed = filter[0].sub;
			this.viewItems = 'on';
			document.getElementById("back-"+id_elem).classList.remove("off");
  			document.getElementById("back-"+id_elem).classList.add("on");
			return true;
  		}
  	}
  	closeSliderMenu(event){
  		if(event.target.nodeName == "LI" && event.target.id == "close-Menu"){
  			this.menuState = 'out';
  			this.menuTitle = '';
  			this.itemDisplayed = [];
  			this.items.forEach((value) => {
  				document.getElementById("back-"+value.id).classList.remove("on");
  				document.getElementById("back-"+value.id).classList.add("off");
  			});

  		}
  	}
}