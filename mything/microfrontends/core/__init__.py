# __pragma__ ('skip')
import typing
# __pragma__ ('noskip')

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


def webcomponent(tag: str, attributes: [], customMount=None):
    def mountWithStyle(html, element, mountPoint, style, instance, attributes):
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

    mount = customMount or mountWithStyle
    
    def wrap(fn):
        # __pragma__ ('js', '{}', 'class cls extends HTMLElement{connectedCallback(){mount(window.CustomHtml, this, window.document.createElement("span"),window.document.createElement("link"),fn(window.CustomHtml),attributes);}};window.customElements.define(tag, cls, attributes);')
        return fn
    
    return wrap
