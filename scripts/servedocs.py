#!/usr/bin/env python3
import webbrowser
webbrowser.open('http://0.0.0.0:8000')

import os
os.chdir(os.path.abspath(os.path.dirname(__file__)))
os.chdir('..')
os.chdir('docs')
os.chdir('api')
os.system('python3 -m http.server')
