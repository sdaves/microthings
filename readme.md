# microthings

Microfrontends and Microservices with 100% Pure Python and Domain Driven Design . Flask for your processes with SPA HTML5 static js interfaces using generated ES6 modules. 

https://microthings.netlify.com/

## Badges

Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/03fcd31b-aad4-4cbb-82d0-f50e5b1b0574/deploy-status)](https://app.netlify.com/sites/mything/deploys)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sdaves/mything)

# Layered Architecture

![Layered](docs/api/layered-architecture.jpg)

- Infrastructure layer
  - Client
    - HTML5 Static SPA generated microfrontend
    - Mobile and Web Offline access using service workers
    - Runs on user devices
    - Implements application service interfaces with IoC container
    - Creates api instance from IoC container and calls api services
    - Calls remote REST flask processes
    - Contains dependencies on specific infrastructure or packages
  - Front controller ( [process in 12 factor app](https://microthings.netlify.com/concepts/12factor/ch7.xhtml) )
    - Flask process as a wsgi microservice
    - NARWAL REST processes with JWT secured auth
    - Runs on servers / serverless
    - Implements application service interfaces with IoC container
    - Creates api instance from IoC container and calls api services
    - Calls remote REST flask processes
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
- Domain layel
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

## Requirements

- Install git `https://git-scm.com/downloads`
- Install Python 3.6 or greater and python3-venv `https://www.python.org/downloads/`

## Setup on Linux

    apt install -y git python3 python3-venv
    
## Setup on Mac

    brew install python3 git
    
## Setup on Windows10

    choco install python3 git

## Setup development tools (all platforms)

    git clone https://github.com/sdaves/mything
    cd mything
    python3 -m venv venv
    . venv/bin/activate
    
    # with system make
    make setup 
    
    # or
    
    # without system make
    python3 -m pip install py-make
    python3 -m pymake setup

## Build

    # with system make
    make 
    
    # or
    
    # without system make
    python3 -m pymake

## Test

    # with system make
    make test
    
    # or
    
    # without system make
    python3 -m pymake test

## Help

    # with system make
    make help
    
    # or
    
    # without system make
    python3 -m pymake help
