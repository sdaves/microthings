# The MIT License (MIT) - Single File Copied
#
# Copyright (c) 2014 Steve Milner
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to
# deal in the Software without restriction, including without limitation the
# rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
# sell copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
# IN THE SOFTWARE.
"""
Feature support.
"""


def getabsfile(func):
    name = func.__name__
    # __pragma__ ('skip')
    import inspect

    name = inspect.getabsfile(func)
    # __pragma__ ('noskip')
    return name


class Feature(object):
    """
    The feature manager.

    Usage
    =====

    Backends
    --------
    First thing to do is to choose a backend to use.

    - EnvBackend() - Environment variable based 
    - Django Database: db_django
    - Google Datastore: google_cloud_datastore
    - JSON File: jsonfile
    - Local Memory (testing): localmemory
    - Memcache: memcached
    - MongoDB: db_mongodb
    - Redis Key/Value: redis_backend
    - SQL Database: db_sqlalchemy
    - Togglz File: togglzfile

    Crating the feature instance
    ----------------------------
    When creating a feature instance one must pass a backend and an optional logger to use.

    .. code-block:: python

       from feature import Feature
       from flagon.backends.jsonfile import JSONFileBackend
       # Make a backend
       backend = JSONFileBackend('example/config.json')
       # Make the feature instance
       feature = Feature(backend)


    Using the feature instance
    --------------------------
    Once a feature instance has been made it then can be used to tag callables as features. To do this one uses the feature instance as a decorator.

    .. code-block:: python

       @feature('a feature')
       def say_something(data):
           print(data)

    Now that the function ``say_something`` has been tagged with the feature ``a feature`` it will only execute if ``a feature`` is set active.

    .. note::

       When features are not active they will raise a NameError unless there is a default set.

    .. note::

       When a feature is unknown it will raise an flagon.errors.UnknownFeatureError


    Defaults
    ~~~~~~~~
    Feature instance can also define defaults. Defaults are callables that will call **instead** of the original callable if the feature is off.

    .. code-block:: python
       import feature
       def yell(data):
           print(data.upper())

       @feature('this feature is off', default=yell)
       def say_something(data):
           print(data)

       @feature('this feature is off', default=feature.skip)
       def say_something_else(data):
           print(data)
    """

    def __init__(self, backend, logger):
        """
        Creates the feature manager.

        :param backend: the backend to use for storing feature states.
        :type backend: flagon.backends.Backend
        :param logger: the logger like object to use for logging.
        :type logger: logging.Logger
        :rtype: Feature
        """
        self.backend = backend
        self.logger = logger
        self.logger.debug(
            'The feature decorator for flagon has been created with %s' % (backend.__class__.__name__)
        )

    def __call__(self, name, default=None):
        """
        What acts as a decorator.

        :param name: the name of the feature.
        :type name: str
        :param default: the default callable to fall back to.
        :type default: callable or None
        :rtype: callable
        """
        if not self.backend or not self.backend.exists(name):
            self.logger.error('An unknown feature was requested: %s' % name)
            raise NotImplementedError('Unknown feature: %s' % name)

        def deco(func):
            def wrapper(*args, **kwargs):

                if self.backend.is_active(name):
                    self.logger.debug(
                        '%s func=%s:%s(*%s, **%s)' % (name, getabsfile(func), func.__name__, args, kwargs)
                    )
                    return func(*args, **kwargs)
                if default:
                    self.logger.warn('Disabled featured %s was requested.' ' Using default.' % name)
                    if self.logger.level == 'DEBUG':
                        self.logger.debug(
                            '%s default=%s:%s(*%s, **%s)'
                            % (name, getabsfile(default), default.__name__, args, kwargs)
                        )
                    return default(*args, **kwargs)
                else:
                    self.logger.warn('Disabled featured %s was requested' % (name))
                raise NameError("name '%s' is not enabled" % name)

            val = wrapper
            # __pragma__ ('skip')
            from functools import wraps

            val = wraps(func)(wrapper)
            # __pragma__ ('noskip')
            return val

        return deco


def skip(self, *args, **kwargs):
    pass


class Logger:
    def debug(*args):
        print(*args)

    def error(*args):
        print(*args)

    def warn(*args):
        print(*args)

    def level(self):
        return 'DEBUG'


class EnvBackend:
    '''
    Environment variable based backend
    '''
    def exists(self, name):
        return True

    def is_active(self, name):
        active = True
        # __pragma__ ('skip')
        import os

        val = os.getenv('MYTHING_FEATURES', '').strip()
        active = val == '' or name in val.split(',')
        # __pragma__ ('noskip')
        return active


def create(backend=EnvBackend(), logger=Logger()):
    return Feature(backend, logger)
