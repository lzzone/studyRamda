var R = require("ramda");

var arr = ["one.js","two.js"];
// R.map( i => { console.log(i);i() } ),
//
//
function test(cb){
    cb();
}
R.map(
    R.compose(
        test,
        require,
        i => { return `./file/${i}` }
    )
)(arr)
