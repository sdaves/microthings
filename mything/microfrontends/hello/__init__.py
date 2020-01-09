from mything.microfrontends.core import IHtml, webcomponent

@webcomponent('mything-hello', ['name'])
class HelloFrontend:    
    def __init__(self, html: IHtml):
        self._html = html
        
    def render(self, props={'name':'Guest'}):
        return self._html.h('span', {}, 'Hello {0}!'.format(props['name']))
