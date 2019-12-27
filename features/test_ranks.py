import pytest

@pytest.mark.skip(reason="no way of currently testing this")
def test_some_browser_stuff():
    from splinter import Browser
    browser = Browser('zope.testbrowser')

    url = "https://duckduckgo.com/?q=99*99"
    browser.visit(url)

    assert browser.is_text_present('9801'), 'no answer found'
