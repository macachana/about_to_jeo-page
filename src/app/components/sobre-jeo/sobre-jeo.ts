import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Start } from '../../features/start/start';
import { TargetAudience } from '../../features/target-audience/target-audience';
import { Diversity } from '../../features/diversity/diversity';
import { Vision } from '../../features/vision/vision';
import { OurPrinciples } from '../../features/our-principles/our-principles';
import { OurImpact } from '../../features/our-impact/our-impact';
import { FindUs } from '../../features/find-us/find-us';


@Component({
  imports: [Nav,Start, TargetAudience, Diversity, Vision, OurPrinciples,  OurImpact, FindUs],
  selector: 'app-sobre-jeo',
  styleUrl: './sobre-jeo.css',
  templateUrl: './sobre-jeo.html',
})
export class SobreJeo {}
