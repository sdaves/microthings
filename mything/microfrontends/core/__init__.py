# __pragma__ ('skip')
import typing
# __pragma__ ('noskip')

class IFrontend:
    def render(self, props: dict):
        pass

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

class IComponent:
    def mount(self):
        pass
    
class WebComponent(IComponent):
    def mount(self, tag: str, attributes: [], instance):
        def mounter(html, element, mountPoint, style, instance, attributes):
            attrs = dict()
            for item in attributes:
                attrs[item] = element.getAttribute(item)
            custom = instance.render(attrs)
            provider = html.h(html.ProppyProvider, {}, [custom])
            html.render(provider, mountPoint)    
            root = element.attachShadow({ 'mode': 'open' })
            style.setAttribute('rel','stylesheet')
            style.setAttribute('href','js/pure-min.css')
            style.setAttribute('type','text/css')
            root.appendChild(style)
            root.appendChild(mountPoint)

        # __pragma__ ('js', '{}', 'class cls extends HTMLElement{connectedCallback(){mounter(window.CustomHtml, this, window.document.createElement("span"),window.document.createElement("link"),instance,attributes);}};window.customElements.define(tag, cls, attributes);')
