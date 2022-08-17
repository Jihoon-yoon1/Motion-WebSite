var first = new mojs.Shape({
    shpae:'circle',
    left:0, top:0,
    radius:{0:100},
    fill:'none',
    stroke:'blue',
    strokeWidth:{20:0},
});
var seconds = [];
var color = ['deeppink', 'cyan', 'magenta', 'violet',
            'red', 'green']
for(var i=0; i<7; i++){
    var second = new mojs.Shape({
        shpae:'circle',
        parent:first.el,
        radius:{
            0: 'rand(30, 80)'
        },
        fill:'none',
        stroke:color[i%color.length],
        strokeWidth:{
            20:0
        },
        x:'rand(-100, 100)',
        y:'rand(-100, 100)',
        duration:'rand(200, 600)',
        delay:'rand(300, 100)'
    });
    seconds.push(second);
}

document.addEventListener('click', function(e){
    first.tune({x:e.pageX, y:e.pageY}).replay();
    second.replay();
    
    for(var i=0; i<seconds.length; i++){
        seconds[i].generate().replay();
    }
})