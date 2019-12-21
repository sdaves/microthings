import mything.api as api
import mything.domain as d
import mything.model as m
import itertools
import dependencies

class Container(dependencies.Injector):
    account = api.ConsoleAccount
    payment = api.FreePayment
    mailer = api.ConsoleMailer

def iter_bills():
    a: d.IAccount = Container.account
    vit, eit = itertools.tee(a.iter_bills())
    vals = [r for r in vit if not isinstance(r, Exception)]
    assert len(vals) == 2

def test_iter_bills(benchmark):
    benchmark(iter_bills)

def test_mail_insufficent_payment():
    assert Container.account.mail_insufficent_payment('msg') == None
