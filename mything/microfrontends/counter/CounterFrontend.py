from mything.microfrontends.core import IHtml, IComponent, IFrontend

class CounterFrontend(IFrontend):    
    def __init__(self, html: IHtml, component: IComponent):
        self._html = html
        component.mount('mything-counter', ['page'], self)
        
    def config(self):
        return self._html.compose(
            self._html.withProps({'page': 'Home'}),
            self._html.withState('counter', 'setCounter', 0)
        )

    def view(self, props={'page':'Home', 'counter':0, 'setCounter':lambda x: None}):
        root = self._html.h('div', {}, [
            props['page'], 
            props['counter'], 
            self._html.h('button', {'class':'pure-button pure-button-primary','onClick': lambda: props['setCounter'](props['counter']+1)}, '+1')
        ])
        return self._html.attach(self.config())(root)()
