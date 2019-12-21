'''
Domain Services (domain)

 - All Ubiquitus Language
 - Some I/O Services and Some Pure
 - Use Case Business Logic
'''


import mything.model as m


class IMailer:
    def send(self, msg: str) -> m.Res[None]:
        pass


class IPayment:
    def charge(self, amount: float) -> m.Res[None]:
        pass


class IBill:
    def __init__(self, amount: float, payment: IPayment):
        pass

    def pay(self) -> m.Res[None]:
        pass


class IAccount:
    def __init__(self, mailer: IMailer, payment: IPayment):
        pass

    def iter_bills(self) -> m.Iterator[m.Res[IBill]]:
        pass

    def pay_all_bills(self) -> m.Res[None]:
        pass
