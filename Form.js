class Form{

    constructor(){

    }

    display(){

        var title = createElement('h2');
        title.html("Birthday Card");
        title.position(width/2,40);

        var input = createInput("Name");
        input.position(width/2,200);

        var button = createButton('Create');
        button.position(width/2,240);

        button.mousePressed(function(){

            input.hide();
            button.hide();
            
            var name = input.value();

            var greeting1 = createElement('h3');
            greeting1.html("Happy Birthday "+ name);
            greeting1.position(width/9,140)

            var greeting = createElement('h3');
            greeting.html("I wish your every day to be filled with lots of love, laughter, happiness and the warmth of sunshine. May your coming year surprise you with the happiness of smiles, the feeling of love and so on. I hope you will find plenty of sweet memories to cherish forever. Happy birthday.");

            greeting.position(width/17,200);

        })

    }

}