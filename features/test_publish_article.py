from urllib.parse import urljoin
from pytest_bdd import scenario, given, when, then
import pytest


# define simple flask app
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return '''
        <html>
        <body>
        Hello, World! 
        <form action="search">
        <input name="q"/>
        <input type="submit"/>
        </form>
        </body>
        </html>
    '''

@app.route('/search')
def hello_world_name():
    return 'Search page!'

@pytest.fixture
def web():
    # initiate splinter flask client
    from splinter import Browser
    return Browser('flask', app=app)

class Author(object):
    user = ()

@pytest.fixture
def login():
    """Test article."""
    return dict()


class Article(object):
    id = 1


@pytest.fixture
def article():
    """Test article."""
    return Article()


@pytest.fixture
def author():
    """Test article."""
    return Author()

    
@scenario('publish_article.feature', 'Publishing the article')
def test_publish():
    pass


@given("I'm an author user")
def author_user(login, author):
    login['user'] = author.user


def create_test_article(author):
    pass


@given('I have an article')
def have_article(author):
    return create_test_article(author=author)


@when('I go to the article page')
def go_to_article(article, web):
    web.visit('/')
    #browser.visit(urljoin(browser.url, '/manage/articles/{0}/'.format(article.id)))


@when('I press the publish button')
def publish_article(web):
    web.fill('q', '88*88')
    #web.find_by_css('input[type="submit"]').first.click()


@then('I should not see the error message')
def no_error_message(web):
    #browser.find_by_css('.message.error').first
    pass


@then('the article should be published')
def article_is_published(article):
    assert article.id == 1
