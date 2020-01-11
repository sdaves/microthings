from mything.microfrontends.core import IHtml, IComponent, IFrontend

class HelloFrontend(IFrontend):    
    def __init__(self, html: IHtml, component: IComponent):
        self._html = html
        component.mount('mything-hello', ['name'], self)

    def render(self, props={'name':'Guest'}):
        return self._html.h('span', {}, 'Hello {0}!'.format(props['name']))
