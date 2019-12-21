from splinter import Browser
import pytest


@pytest.fixture(scope='session')
def browser():
    """Override splinter webdriver name."""
    return Browser('chrome', incognito=True, headless=True)
