#!/usr/bin/env python

from info import __doc__

from CVtypes import *
from opencv import *

__all__ = filter(lambda s:not s.startswith('_'),dir())

from numpy.testing import NumpyTest
test = NumpyTest().test
