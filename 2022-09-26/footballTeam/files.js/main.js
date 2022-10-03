"use strict";
exports.__esModule = true;
var footballTeam_1 = require("./footballTeam");
var dtClass_1 = require("./dtClass");
var footballerClass_1 = require("./footballerClass");
var massagistClass_1 = require("./massagistClass");
var footballer1 = new footballerClass_1.Footballer('Hernan', 'Rodriguez', 27, 'Hombre', 1.78, 'Arquero', 1, true);
var footballer2 = new footballerClass_1.Footballer('Miguel', 'Alcaraz', 30, 'Hombre', 1.72, 'Defensor', 5, true);
var footballer3 = new footballerClass_1.Footballer('Leo', 'Blanco', 28, 'Hombre', 1.75, 'Defensor', 4, false);
var footballer4 = new footballerClass_1.Footballer('Martin', 'Cantos', 24, 'Hombre', 1.75, 'Defensor', 3, true);
var footballer5 = new footballerClass_1.Footballer('Ivan', 'Acosta', 22, 'Hombre', 1.76, 'Defensor', 12, true);
var footballer6 = new footballerClass_1.Footballer('Franco', 'Gutierrez', 25, 'Hombre', 1.70, 'Mediocentro', 7, false);
var footballer7 = new footballerClass_1.Footballer('Luis', 'Hernandez', 26, 'Hombre', 1.68, 'Lateral Izquierdo', 6, false);
var footballer8 = new footballerClass_1.Footballer('Nicolas', 'Cortez', 32, 'Hombre', 1.72, 'Lateral derecho', 8, true);
var footballer9 = new footballerClass_1.Footballer('Sebastian', 'Messi', 28, 'Hombre', 1.70, 'Delantero', 10, false);
var footballer10 = new footballerClass_1.Footballer('Cristian', 'Fernandez', 25, 'Hombre', 1.72, 'Delantero', 17, true);
var footballer11 = new footballerClass_1.Footballer('Fabio', 'Perez', 32, 'Hombre', 1.68, 'Delantero', 15, true);
var footballPlayers = [footballer1, footballer2, footballer3, footballer4, footballer5, footballer6, footballer7, footballer8, footballer9, footballer10, footballer11];
var technicalDirector1 = new dtClass_1.TechnicalDirector('Juan', 'Rodriguez', 45, 'Hombre', 1.75, true);
var massagist1 = new massagistClass_1.Massagist('Pedro', 'Benitez', 40, 'Hombre', 1.65, 'Masajes descontracturantes');
var Team1 = new footballTeam_1.FootballTeam('Talleres', technicalDirector1, footballPlayers, massagist1);
