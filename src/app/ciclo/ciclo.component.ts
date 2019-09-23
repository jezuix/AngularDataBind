import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial:number = 10;

  constructor() {
    this.log('construtor');
  }

  ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngDoCheck() {
    this.log('ngOnChanges')
  }

  ngAfterContentInit() {
    this.log('ngAfeterContentChecked')
  }

  ngAfterContentChecked() {
    this.log('ngAfeterContentChecked')
  }

  ngAfterViewInit() {
    this.log('ngAfeterViewInit')
  }
  
  ngAfterViewChecked() {
    this.log('ngAfeterViewChecked')
  }
  
  ngAfterDoChecked() {
    this.log('ngAfeterDoChecked')
  }
  
  ngOnDestroy(){
    this.log('ngOnDestroy')
  }
  
  log(hook: string) {
    console.log(hook);
  }

}
