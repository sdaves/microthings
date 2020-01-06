import json

class Todos:
    def __init__(self, app, bottle):
        super().__init__()
        self._app = app
        self._bottle = bottle
        self._setup()
        
    def get_list(self):
        query = self._bottle.request.query
        return json.dumps(dict(data=[item+'='+query[item] for item in query]))
    
    def get_single(self, name):
        return json.dumps(dict(data=[name]))
    
    def _setup(self):
        route = self._app.route
        route('/todos')(self.get_list)
        route('/todos/<name>')(self.get_single)

if __name__ == '__main__':
    import dependencies, bottle
    class Container(dependencies.Injector):
        todos = Todos
        app = bottle.Bottle()
        bottle = bottle
    todos = Container.todos # create the todos object for route setup
    Container.app.run()
