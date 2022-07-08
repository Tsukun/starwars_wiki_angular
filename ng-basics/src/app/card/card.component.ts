import { HttpClient } from '@angular/common/http'
import {Component, DoCheck, OnInit} from '@angular/core'
import { PlanetService } from './card.service'
import { IPlanet } from './planet'


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    providers: [PlanetService]
})



export class CardComponent implements OnInit, DoCheck{
    
    title: string = 'My Card Title'
    text: string =  'Lorem ipsum'
    imgUrl: string = 'https://riotpixels.net/wp/wp-content/uploads/2022/01/Star-Wars.png'
    planetArr: IPlanet[] = []
    i: number = 0
    constructor(private planets: PlanetService){}
    ngOnInit(){
        
        if(!this.planets.isLoading){
            this.planets.getPlanets()
            
            
        }
        console.log(this.planetArr)
    }
    ngDoCheck(){
        if(this.planets.planets.length != 0){
            this.planetArr = this.planets.planets
        }
    }
    
    showSlide() {
        let slide = "No name"
        if(this.planetArr.length != 0){
            if(this.i<0){
                this.i = this.planetArr.length - 1
            }
            else if(this.i > this.planetArr.length - 1){
                this.i = 0
            }
            slide = this.planetArr[this.i].name;
            
        }
        return slide;
    }
    
    getPrev() {
        this.i = this.i - 1;
        this.showSlide()
    }
    
    getNext() {
        this.i = this.i + 1;
        this.showSlide()
    }
    
}