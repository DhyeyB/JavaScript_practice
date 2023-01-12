var fibonacci_series = (n) => {
  if (n == 0) {
    var loop = 0;
    document.getElementById("output").innerHTML = loop.toString().replaceAll(",", "<br />");
    return loop;
  }
  else if (n == 1) {
    var loop = [0, 1];
    document.getElementById("output").innerHTML = loop.toString().replaceAll(",", "<br />");
    return loop;
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    console.log("s", s);
    document.getElementById("output").innerHTML = s.toString().replaceAll(",", "<br />");
    return s;
  }
};
