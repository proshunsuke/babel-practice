/**
 * Created by pro on 15/05/31.
 */
var util = require('util');
var Character = function(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
};

Character.prototype.damage = function() {
    this.health_ = this.health_ - 10;
};

Character.prototype.getHealth = function() {
    return this.health_;
};

Character.prototype.toString = function() {
    return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
};

var Player = function(x, y, name) {
    Character.call(this, x, y);
    this.name = name;
};

util.inherits(Player, Character);

Player.prototype.move = function(dx, dy){
    this.x += dx;
    this.y += dy;
};

Player.prototype.toString = function() {
    return "name: " + this.name + " " + Player.super_.prototype.toString.call(this);
};

