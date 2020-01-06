# microthings

Microservices and Microfrontends with 100% Pure Python and Domain Driven Design. Serverless Bottle.py for your stateless processes and a Preact client UI packaged as WebComponents using transcrypt.
https://microthings.netlify.com/

## Badges

Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/03fcd31b-aad4-4cbb-82d0-f50e5b1b0574/deploy-status)](https://app.netlify.com/sites/mything/deploys)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sdaves/mything)

## Simple Microfrontend (Client)

```python
from mything.microfrontends.core import IFrontend, define

@define
class HelloFrontend(IFrontend):    
    def __init__(self, html):
        super().__init__(html, 'mything-hello', ['name'], lambda x: self.mount(x))

    def render(self, props={'name':'Guest'}):
        return self._html.h('span', {}, 'Hello {0}!'.format(props['name']))
```

Transcrypt compiles this to `hello.js` and it can be included as a js module in the browser or nodejs.

## Simple Microservice (Front Controller)

```python
class Hello:
    def __init__(self, app):
        super().__init__()
        app.route('/hello')(self.hello)
        
    def hello(self):
        return 'Hello!'

if __name__ == '__main__':
    import bottle
    app = bottle.Bottle()
    Hello(app)
    app.run()
```

This microservice depends on only 1 external file to run: [bottle.py](scripts/bottle.py).
You can copy that file too when deploying, or just `pip install bottle` to install the latest.

## Layered Architecture

![Layered](docs/api/layered-architecture.jpg)

- Infrastructure layer
  - Client
    - Preact UI packaged as WebComponents using transcrypt
    - Mobile and Web Offline access using service workers
    - Runs on user devices
    - Calls remote REST stateless processes
    - Contains dependencies on specific infrastructure or packages
  - Front controller ( [process in 12 factor app](https://microthings.netlify.com/concepts/12factor/ch7.xhtml) )
    - Bottle.py stateless processes as wsgi microservices
    - NARWAL REST with JWT secured auth
    - Runs on servers / serverless
    - Implements application service interfaces with IoC container
    - Creates api instance from IoC container and calls api services
    - Calls remote REST stateless processes
    - Contains dependencies on specific infrastructure or packages
- Application layer
  - Emit IO with application service interfaces
  - Accepts builtin datatypes to api services
  - Creates model types / serializes / calls domain services
  - Decouples domain from infrastructure layer
  - Contains zero dependencies on specific infrastructure or packages
  - Zero Domain Business Logic
  - Mostly I/O Services
  - Use Case Backing Services
  - [API](mything/api.py)
- Domain layer
  - All Ubiquitus Language 
  - Accepts only domain model types to domain services
  - Emit IO with repository interfaces
  - Some I/O Services and Some Pure
  - Use Case Business Logic
  - Contains zero dependencies on specific infrastructure or packages
  - [Service](mything/domain.py)
  - [Repository](mything/domain.py)
- Model layer
  - No IO, pure Entities and Value Objects
  - Contains zero dependencies on specific infrastructure or packages
  - [Model](mything/model.py)

## Setup Requirements

- Install git `https://git-scm.com/downloads`
- Install Python 3.6 or greater with python3-venv `https://www.python.org/downloads/`

## Setup on Linux

    apt install -y git python3 python3-venv
    
## Setup on Mac

    brew install python3 git
    
## Setup on Windows10

    choco install python3 git

## Setup development tools (using bash on all platforms)

    git clone https://github.com/sdaves/microthings
    cd microthings
    python3 -m venv venv
    source venv/bin/activate
    pip install py-make
    pymake setup # or make setup

## Build

    source venv/bin/activate
    pymake # or make

## Test

    source venv/bin/activate
    pymake test # or make test

## Help

    source venv/bin/activate
    pymake help # or make help
