import Cherry from "cherry-markdown";
import 'cherry-markdown/dist/cherry-markdown.css';

const text_ss = await import('../../documents/short-simple.md');
const text_sc = await import('../../documents/short-complex.md');
const text_ms = await import('../../documents/medium-simple.md');
const text_mc = await import('../../documents/medium-complex.md');
const text_ls = await import('../../documents/long-simple.md');
const text_lc = await import('../../documents/long-complex.md');

var cherryInstance = new Cherry({
    id: 'markdown-container',
    // value: '#test'
});
window.init_cherry = ()=>{
    cherryInstance.setMarkdown('');
}

window.display = (index)=>{
    var start = new Date().getTime()
    document.getElementById('cost_time').innerText = `计算中`;
// call your function
    switch(index) {
    case(0):cherryInstance.setMarkdown(text_ss.default);break;
    case(1):cherryInstance.setMarkdown(text_sc.default);break;
    case(2):cherryInstance.setMarkdown(text_ms.default);break;
    case(3):cherryInstance.setMarkdown(text_mc.default);break;
    case(4):cherryInstance.setMarkdown(text_ls.default);break;
    case(5):cherryInstance.setMarkdown(text_lc.default);break;
    }
    var end = new Date().getTime()
    console.log('用时', `${end - start}ms`)
    document.getElementById('cost_time').innerText = `${end - start}ms`;
}

window.onload = ()=>{
    console.log('ok');
}
// display_short_simple();
// console.log('hello');
init_cherry();