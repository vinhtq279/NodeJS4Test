var emitter = require('events').EventEmitter

function LoopProcessor(num){
    e = new emitter()
    
    /**
    for (var i = 1; i <= num; i++){
        setTimeout(() => {
            e.emit('BeforeProcessor', i);
            console.log('Processing number: ' + i);
            e.emit('AfterProcessor', i);
        }, 2000);    
    }
     */
    /**
    setTimeout(() => {
        for (var i = 1; i <= num; i++){
            e.emit('BeforeProcessor', i);
            console.log('Processing number: ' + i);
            e.emit('AfterProcessor', i);
        }
    }, 2000);
     */
    for (var i = 1; i <= num; i++){
        e.emit('BeforeProcessor', i);
        console.log('Processing number: ' + i);
        e.emit('AfterProcessor', i);
    }
    return e;
}

var lp = LoopProcessor(3);
lp.on('BeforeProcessor', (data)=>{
    console.log('About to start the process ' + data)
});
lp.on('AfterProcessor', (data)=>{
    console.log('Completed the process ' + data)
});