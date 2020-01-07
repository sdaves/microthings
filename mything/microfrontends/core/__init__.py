# __pragma__ ('skip')
import typing
# __pragma__ ('noskip')

def define(fn):
    # __pragma__ ('js', '{}', 'setTimeout(()=>fn(window.CustomHtml).define(),1)')
    return fn

class IHtml:
    def h(*args):
        pass
    
    def compose(*args):
        pass
    
    def withProps(*args):
        pass
    
    def withState(*args):
        pass 
    
    def attach(*args):
        pass
    
    def render(*args):
        pass 
    
class IFrontend:
    def __init__(self, html: IHtml, tag: str, attributes: [], mount: typing.Callable):
        super().__init__()
        self._html = html
        self._tag = tag
        self._attributes = attributes
        self._mount = mount        
        
    def define(self):
        print('define', self._tag)
        # __pragma__ ('js', '{}', 'class cls extends HTMLElement{connectedCallback(){self._mount(this, window.document.createElement("span"));}};window.customElements.define(self._tag, cls, self._attributes);')
        
    def config(self):
        return self._html.compose(self._html.withProps({ 'foo': 'foo value' }))
    
    def mount(self, element, mountPoint):
        attrs = dict()
        for item in self._attributes:
            attrs[item] = element.getAttribute(item)
        custom = self.render(attrs)
        provider = self._html.h(self._html.ProppyProvider, {}, [custom])
        self._html.render(provider, mountPoint)    
        element.attachShadow({ 'mode': 'open' }).appendChild(mountPoint)
        
    def render(self, props):
        return self._html.h('span', {}, 'render not implemented')    
