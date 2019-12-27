import { h, html, Component, render } from "./standalone.module.js";

function Header({ name }) { return html`<h1>${name} List</h1>` }

function Footer(props) { return html`<footer ...${props} />` }

function Input({inputKeyDown=()=>null, inputRef={}}) {
  return html`
    <input type='text' placeholder='Enter todo ...'  onKeyDown=${inputKeyDown} ref=${inputRef}/>
  `
}

function TodoList({todos=[]}) {
    return html`
<ul>
${todos.map(todo => h('li', null, todo))}
</ul>
`
}

function TodosForm({page='Home', inputKeyDown=()=>null, todos=[], addTodo=()=>null}) {
   return html`
      <div class="app">
        <${Header} name="ToDo's (${page})" />
        <${Input} ref=${el => this.input = el.base} inputKeyDown=${inputKeyDown}></>
        <${TodoList} todos=${todos}></>
        <button class="pure-button pure-button-primary" onClick=${addTodo}>Add Todo</button>
        <${Footer}>footer content here</>
      </div>
    `;
}

export class App extends Component {
  inputKeyDown(e) {
    if(e.keyCode === 13) {
      this.addTodo()
    }
  }

  addTodo() {
    const { todos = [] } = this.state;
    const nextTodo = this.todoForm ? this.todoForm.input.value : ''
    this.todoForm.input.value = ''
    this.todoForm.input.focus()
    this.setState({ todos: (nextTodo ? todos.concat(nextTodo) : todos) });
  }

  render({ page }, { todos = [] }) {
    page = page || 'Home';
    return html`
      <${TodosForm} ref=${el => this.todoForm = el} addTodo=${()=>this.addTodo()}  inputKeyDown=${e=>this.inputKeyDown(e)} todos=${todos}  page=${page} ></>
    `
  }
}

export function register(define) {
    class cls extends HTMLElement {
      connectedCallback() {
        const mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
       render(h(App, {page:this.getAttribute("page")}), mountPoint);
      }
    }
    customElements.define('mything-hello', cls, ["page"]);
}

register(window.customElements);
