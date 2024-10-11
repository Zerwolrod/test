import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const text_ss = await import('../../documents/short-simple.md');
const text_sc = await import('../../documents/short-complex.md');
const text_ms = await import('../../documents/medium-simple.md');
const text_mc = await import('../../documents/medium-complex.md');
const text_ls = await import('../../documents/long-simple.md');
const text_lc = await import('../../documents/long-complex.md');

const editor = new Editor({
    el: document.querySelector('#markdown-container')
  });
window.init_editor = ()=>{
    editor.setMarkdown('');
}

window.display = (index)=>{
    var start = new Date().getTime()
    document.getElementById('cost_time').innerText = `计算中`;
// call your function
    switch(index) {
    case(0):editor.setMarkdown(text_ss.default);break;
    case(1):editor.setMarkdown(text_sc.default);break;
    case(2):editor.setMarkdown(text_ms.default);break;
    case(3):editor.setMarkdown(text_mc.default);break;
    case(4):editor.setMarkdown(text_ls.default);break;
    case(5):editor.setMarkdown(text_lc.default);break;
    }
    var end = new Date().getTime()
    console.log('用时', `${end - start}ms`)
    document.getElementById('cost_time').innerText = `${end - start}ms`;
}
window.edit = ()=>{
    editor.moveCursorToStart();
    editor.insertText(editor.getMarkdown());
}

window.onload = ()=>{
    console.log('ok');
}
// display_short_simple();
// console.log('hello');
init_editor();