function demonstrateEventLoop(){
    console.log("1.Начало(синхронный код)");
    setTimeout(()=>{
        console.log("4.setTimeout(макрозадача)");
    }, 0);
    Promise.resolve().then(()=>{
        console.log("3.Promise(микрозадача)");
    });
    console.log("2.Конец синхронного кода");
}
demonstrateEventLoop();