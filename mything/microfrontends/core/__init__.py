# __pragma__ ('skip')
import typing
# __pragma__ ('noskip')

class IFrontend:
    def view(self, props: dict):
        pass

class IHtml:
    def h(self, name: str, props: dict, children: typing.List):
        pass
    
    def render(self, instance: IFrontend, mountPoint):
        pass

    def compose(*args):
        pass
    
    def withProps(*args):
        pass
    
    def withState(*args):
        pass 
    
    def attach(*args):
        pass

class IComponent:
    def mount(self, tag: str, attributes: typing.List, instance: IFrontend):
        pass
    
class PureCssWebComponent(IComponent):
    def mount(self, tag: str, attributes: typing.List, instance: IFrontend):
        def mounter(html, element, mountPoint, style, instance, attributes, Provider):
            attrs = dict()
            for item in attributes:
                attrs[item] = element.getAttribute(item)
            custom = instance.view(attrs)
            provider = html.h(Provider, {}, [custom])
            html.render(provider, mountPoint)    
            root = element.attachShadow({ 'mode': 'open' })
            style.setAttribute('rel','stylesheet')
            style.setAttribute('href','js/pure-min.css')
            style.setAttribute('type','text/css')
            root.appendChild(style)
            root.appendChild(mountPoint)
            
        def cb(html, me, create):
            getProvider = lambda: html.Component
            # __pragma__ ('js', '{}', 'class Provider extends html.Component {public getChildContext() {const { children, ...context } = this.props;return context;} public render({ children }) {return (children && children[0]) || null;}};getProvider=()=>Provider;')
            mounter(html, me, create("span"), create("link"), instance, attributes, getProvider())
            
        # __pragma__ ('js', '{}', 'class cls extends HTMLElement{connectedCallback(){cb(window.CustomHtml, this, x => document.createElement(x))}}')
        # __pragma__ ('js', '{}', 'window.customElements.define(tag, cls, attributes);')
