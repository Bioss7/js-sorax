// Класс для работы с двухвекторными векторами
let Vec2 = function(x,y) {
    this.x = x;
    this.y = y;
};

// метод для сложения векторов
Vec2.prototype.add = function(vec){
    this.x += vec.x;
    this.y += vec.y;
    return this; // вернули объект
};

Vec2.prototype.multiScalar = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
}

let world = {
    gravity: new Vec2(0, 1),
    airResistance: .9, 
    wind: new Vec2(10, 1),
    control: new Vec2(-3, -5)
};

let object = {
    position: new Vec2(10, 20),
    speed: new Vec2(1, 3),
    update: function(){
        this.speed
            .add(world.gravity)
            .add(world.wind)
            .add(world.control)
            .multiScalar(world.airResistance);

        return this.position.add(this.speed);
    }
};

console.log(object.update());
console.log(object.update());