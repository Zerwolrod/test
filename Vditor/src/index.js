import Vditor from 'vditor'
import "vditor/src/assets/less/index.less"

const text_ss = await import('../../documents/short-simple.md');
const text_sc = await import('../../documents/short-complex.md');
const text_ms = await import('../../documents/medium-simple.md');
const text_mc = await import('../../documents/medium-complex.md');
const text_ls = await import('../../documents/long-simple.md');
const text_lc = await import('../../documents/long-complex.md');

const editor = new Vditor('markdown-container',
    {
        mode: "sv",
        minHeight: 700,
        cache: {
            enable: false
        },
        preview: {
            delay:0
        }
    }
)
window.init_editor = ()=>{
    // editor.insertValue('');
}

window.display = (index)=>{
    var start = new Date().getTime()
    document.getElementById('cost_time').innerText = `计算中`;
// call your function
    switch(index) {
    case(0):editor.insertValue(text_ss.default);break;
    case(1):editor.insertValue(text_sc.default);break;
    case(2):editor.insertValue(text_ms.default);break;
    case(3):editor.insertValue(text_mc.default);break;
    case(4):editor.insertValue(text_ls.default);break;
    case(5):editor.insertValue(text_lc.default);break;
    }
    var end = new Date().getTime()
    console.log('用时', `${end - start}ms`)
    document.getElementById('cost_time').innerText = `${end - start}ms`;
}
window.edit = ()=>{
    // editor.moveCursorToStart();
    editor.insertValue(editor.getValue());
}

window.onload = ()=>{
    console.log('ok');
}
// display_short_simple();
// console.log('hello');
init_editor();