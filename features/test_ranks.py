import pytest

def test_some_browser_stuff(browser):
    """Test using real browser."""
    url = "https://www.duckduckgo.com"
    browser.visit(url)

    q = browser.find_by_id('search_form_input_homepage')

    q.type( 'splinter - python acceptance testing for web applications')
    # Find and click the 'search' button
    button = browser.find_by_id('search_button_homepage')
    # Interact with elements
    button.click()
    assert browser.is_text_present('cobrateam/splinter'), "splinter.cobrateam.info wasn't found... We need to"
    ' improve our SEO techniques'
