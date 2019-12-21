'''
Domain Model (model)

 - 100% SAFE, No I/O, Immutable, Pure
 - Mostly Entity and Value Objects
 - Core Domain Business Logic
'''


# __pragma__ ('skip')
import typing

Iterator = typing.Iterator
T = typing.TypeVar('T')
Res = typing.Union[T, Exception]
# __pragma__ ('noskip')

import mything.feature

skip = mything.feature.skip
feature = mything.feature.create()
