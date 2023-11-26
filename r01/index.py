import numpy

def handler(event, context):
  print(event)
  return numpy.__version__
