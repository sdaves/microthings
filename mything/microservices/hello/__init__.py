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
