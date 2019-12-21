'''
Application Services (api)

 - Zero Domain Business Logic
 - Mostly I/O Services
 - Use Case Backing Services 
'''

import itertools
import mything.model as m
import mything.domain as d

class ConsoleMailer(d.IMailer):
    def send(self, msg: str) -> m.Res[None]:
        print(msg)
        return None


class FreePayment(d.IPayment):
    def __init__(self):
        self._charged = 0.0

    @m.feature('charge', default=m.skip)
    def charge(self, amount: float) -> m.Res[None]:
        '''
        Charge ammount to account.

        >>> p = FreePayment()
        >>> p.charge(1.0)
        >>> p.charge(2.2)
        >>> assert isinstance(p.charge('l'), Exception)
        >>> assert p._charged == 3.2
        '''
        try:
            self._charged += amount
            return None
        except Exception as e:
            return e


class Bill(d.IBill):
    def __init__(self, amount: float, payment: d.IPayment):
        self._amount = amount
        self._payment = payment

    def pay(self) -> m.Res[None]:
        '''
        Pay bill using payment.

        >>> b = Bill(10.0, None)
        >>> assert isinstance(b.pay(), Exception)
        >>> p = FreePayment()
        >>> b = Bill(10.0, p)
        >>> b.pay()
        >>> assert p._charged == 10.0
        '''
        try:
            return self._payment.charge(self._amount)
        except Exception as e:
            return e


class ConsoleAccount(d.IAccount):
    def __init__(self, mailer: d.IMailer, payment: d.IPayment):
        self._mailer = mailer
        self._payment = payment

    def iter_bills(self) -> m.Iterator[m.Res[d.IBill]]:
        '''
        Get Iterater of bills with either Bill or Exception type results.

        >>> a = ConsoleAccount(None, None)
        >>> bills = a.iter_bills()
        >>> b = next(bills)
        >>> assert isinstance(b.pay(), Exception)

        >>> p = FreePayment()
        >>> a = ConsoleAccount(None, p)
        >>> bills = a.iter_bills()
        >>> b = next(bills)
        >>> b.pay()
        >>> assert p._charged == b._amount
        '''
        try:
            for amount in [9.9, 8.8]:
                yield Bill(amount, self._payment)
        except Exception as e:
            yield e

    def pay_all_bills(self) -> m.Res[None]:
        '''
        Pay all bills using payment.

        >>> a = ConsoleAccount(None, None)
        >>> assert isinstance(a.pay_all_bills(), Exception)

        >>> p = FreePayment()
        >>> a = ConsoleAccount(None, p)
        >>> a.pay_all_bills()
        '''
        bills, errors = itertools.tee(self.iter_bills())
        for b in bills:
            if not isinstance(b, Exception):
                try:
                    return b.pay()
                except Exception as e:
                    self.mail_insufficent_payment(f"* insufficent: {b}")
                    return e
            else:
                print(f"* ERROR: {b}")
        return None

    def mail_insufficent_payment(self, msg: str) -> m.Res[None]:
        return self._mailer.send(msg)
