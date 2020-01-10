import json

class Todos:
    def __init__(self, app, bottle):
        self._bottle = bottle
        app.route('/todos')(self.get_list)
        app.route('/todos/<name>')(self.get_single)
        
    def get_list(self):
        query = self._bottle.request.query
        return json.dumps(dict(data=[item+'='+query[item] for item in query]))
    
    def get_single(self, name):
        return json.dumps(dict(data=[name]))

if __name__ == '__main__':
    import dependencies, bottle
    class Container(dependencies.Injector):
        todos = Todos
        app = bottle.Bottle()
        bottle = bottle
    todos = Container.todos # create the todos object for route setup
    Container.app.run()
