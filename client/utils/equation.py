def getSign(number):
  if number < 0:
    return "-"
  return "+"

def getCoefficient(number):
  if number == 1:
    return ""
  elif number == -1:
    return "-"

  return str(number)

def formatPolynomial(a, b, c):
  a_number = getCoefficient(a)
  b_sign = getSign(b)
  b_number = getCoefficient(abs(b))
  c_sign = getSign(c)
  c_number = str(abs(c))

  print("%sx^2 %s %sx %s %s" % (a_number, b_sign, b_number, c_sign, c_number))

formatPolynomial(3, 2, 1)
formatPolynomial(5, 1, 3)
formatPolynomial(-1, 8, 7)
formatPolynomial(1, -1, -5)
formatPolynomial(-7, 2, -4)