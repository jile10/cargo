import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css']
})
export class OfferingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$( document ).ready(function() {
	    $(".setsize").each(function() {
	        $(this).height($(this).width());
	    });
	});
	$(window).on('resize', function(){
	    $(".setsize").each(function() {
	        $(this).height($(this).width());
	    });
	});
  }

}
