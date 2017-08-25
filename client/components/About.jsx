import React from 'react'

const About = () => (
	<div className="content container">
    <div className="has-text-centered">
      <h2 className="title">This website uses lots of code to format numbers.</h2>
      <h5 className="subtitle">Let's show how that works.</h5>
    </div>

    <div className="content">
      <h3>The Basic Solution</h3>
      <pre style={{whiteSpace: "pre-line"}}><code class="python">
def formatPolynomial(a, b, c):<br/>
&nbsp;&nbsp;print (str(a) + "x^2" + " + " + str(b) + "x" + " + " + str(c))
      </code></pre>

      <h6>This is a function written in a programming language called <b>Python</b>.</h6>
      <h6>We have defined a function called <code>formatPolynomial</code>.</h6>
      <h6>This function takes three numbers, <code>a</code>, <code>b</code>, and <code>c</code>, as inputs.</h6>

      <h6>The function prints out a <code>string</code>, or a list of characters, that prints out a polynomial.</h6>
      <h6>The quotes indicate strings, so we convert the numbers <code>a</code>, <code>b</code>, and <code>c</code> to strings and add strings together.</h6>
      <h6>In the end we can produce results that look a little something like this!</h6>

      <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Function Use</th>
          <th>Output</th>
        </tr>
      </thead>
        <tr>
          <td><code>formatPolynomial(3, 2, 1)</code></td>
          <td><code>3x^2 + 2x + 1</code></td>
        </tr>
        <tr>
          <td><code>formatPolynomial(5, 1, 3)</code></td>
          <td><code>5x^2 + 1x + 3</code></td>
        </tr>
        <tr>
          <td><code>formatPolynomial(-1, 8, 7)</code></td>
          <td><code>-1x^2 + 8x + 7</code></td>
        </tr>
        <tr>
          <td><code>formatPolynomial(1, -1, -5)</code></td>
          <td><code>1x^2 + -1x + -5</code></td>
        </tr>
        <tr>
          <td><code>formatPolynomial(-7, 2, -4)</code></td>
          <td><code>-7x^2 + 2x + -4</code></td>
        </tr>
      </table>
    </div>

    <hr/>

    <div className="content">
      <h3>The Advanced Solution</h3>
      <div className="columns">
        <div className="column">
          <pre style={{whiteSpace: "pre-line"}}><code class="python">
            def getSign(number):<br/>
            &nbsp;&nbsp;if number > 0:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return "-"<br/>
            &nbsp;&nbsp;return "+"<br/>
            <br/>
            def getCoefficient(number):<br/>
            &nbsp;&nbsp;if number == 1:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return ""<br/>
            &nbsp;&nbsp;elif number == -1:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return "-"<br/>
            <br/>
            &nbsp;&nbsp;return str(number)<br/>
            <br/>
            def formatPolynomial(a, b, c):<br/>
            &nbsp;&nbsp;a_num = getCoefficient(a)<br/>
            &nbsp;&nbsp;b_sign = getSign(b)<br/>
            &nbsp;&nbsp;b_num = getCoefficient(abs(b))<br/>
            &nbsp;&nbsp;c_sign = getSign(c)<br/>
            &nbsp;&nbsp;c_num = str(abs(c))<br/>
            <br/>
            &nbsp;&nbsp;print("%sx^2 %s %sx %s %s" % (a_num, b_sign, b_num, c_sign, c_num))
          </code></pre>
        </div>

        <div className="column">
          <h6>In our original solution, we had a few problems we wanted to address.</h6>
          <ul>
            <li>All numbers were connected by "+" signs, even if numbers were negative.</li>
            <li>Coefficients of the number "1" still had signs in front of them.</li>
          </ul>

          <h6>We approach this problem by making separate functions, so we can reuse them.</h6>
          <h6>First, we'll make a function that determines the sign of a number, <code>getSign</code>.</h6>
          <ul>
            <li>We see that if the number is above zero (positive), we return a "+" sign.</li>
            <li>In the negative case, we return a "-" sign.</li>
          </ul>

          <h6>Then, we'll make a function that removes the 1 from a coefficient, <code>getCoefficient</code>.</h6>
          <ul>
            <li>If numbers are <code>1</code> or <code>-1</code>, we return nothing or a negative sign respectively.</li>
            <li>In all other cases, we simply return a string version of the number itself.</li>
          </ul>

          <h6>Finally, we use these functions to combine strings.</h6>
          <ul>
            <li>We want the full coefficient for <code>a</code>, so we use our <code>getCoefficient</code> function.</li>
            <li>
              In <code>b</code>'s case, we want only the absolute value coefficient, 
              so we call Python's <code>abs</code> function before we call our <code>getCoefficient</code> function.
            </li>
            <li>For the <code>c</code> case, we want the sign and then simply just the string form of the absolute value of the number.</li>
          </ul>
        </div>
      </div>

      <h6>Here are some results of our work!</h6>

      <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Function Use</th>
          <th>Output</th>
        </tr>
      </thead>
        <tr>
          <td><code>formatPolynomial(3, 2, 1)</code></td>
          <td><code>3x^2 + 2x + 1</code></td>
        </tr>
        <tr>
          <td><code>formatPolynomial(5, 1, 3)</code></td>
          <td><code>5x^2 + x + 3</code></td>
        </tr>
        <tr>
          <td><code>formatPolynomial(-1, 8, 7)</code></td>
          <td><code>-x^2 + 8x + 7</code></td>
        </tr>
        <tr>
          <td><code>formatPolynomial(1, -1, -5)</code></td>
          <td><code>x^2 - x - 5</code></td>
        </tr>
        <tr>
          <td><code>formatPolynomial(-7, 2, -4)</code></td>
          <td><code>-7x^2 + 2x - 4</code></td>
        </tr>
      </table>
    </div>

    <hr/>
    <div className="content">
      <h3>Food For Thought</h3>
      <h6>How about if one of the coefficients is missing?</h6>
      <h6>How would you extend this solution to work for a polynomial of any size?</h6>
    </div>

    <ul className="footer has-text-centered" style={{listStyleType: "none", padding: 20}}>
  		<li>Idea and initial implementation by Sarina Lim.</li>
      <li>Translated to React and taken over by Nathan Dalal.</li>
      <li>Powered by <i className="fa fa-envira" style={{marginTop: "8px", fontSize: "10px"}}></i>MongoDB!</li>
	 </ul>
  </div>
)

export default About