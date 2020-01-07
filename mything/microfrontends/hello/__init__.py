from mything.microfrontends.core import IFrontend, define

@define
class HelloFrontend(IFrontend):    
    def __init__(self, html):
        super().__init__(html, 'mything-hello', ['name'], self.mount)
        
    def render(self, props={'name':'Guest'}):
        return self._html.h('span', {}, 'Hello {0}!'.format(props['name']))
