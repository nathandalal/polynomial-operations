def getSign(number):
  if number < 0:
    return "-"

  return ""

def getCoefficient(number, firstCoefficient = False):
  if number == 1:
    return ""
  elif number == -1:
    return "-"

  return str(number)

def 