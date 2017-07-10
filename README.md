# web-accessibility-annotation

## Development Using a Local Webserver

Instead of directly viewing index.html on the local file system, you need a local webserver.

### Getting Python

If you do not already have a Python 3 installation, get that:

https://www.python.org/

Such as version 3.6.1 For Windows:

https://www.python.org/ftp/python/3.6.1/python-3.6.1-amd64.exe

### Starting the Webserver

If you installed Python in `c:\Python36\`, then from the directory containing `index.html`, run:

`start c:\Python36\python.exe -m http.server 8000`

The `start` command will open a new window instead of using your using command line session.

### Accessing the Webserver

Navigate Chrome to:

`http://localhost:8000`
