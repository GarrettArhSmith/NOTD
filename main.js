var notd;
var expression;
var result;

function finalizeNOTD() {
  document.getElementById('numberPicking').style.display = "none";
  document.getElementById('notd').innerHTML = notd.toString();
  document.getElementById('expression').style.display = "inline-block";
}

function numberGeneration(max) {
  notd = Math.floor(Math.random() * 101);
  finalizeNOTD();
}

function submit() {
  var input = document.getElementById('input');
  if (input.value.length > 0) {
    notd = input.value;
    finalizeNOTD();
  }
}

function submitExpression() {
  var expression = document.getElementById('expressionArea').value;
  var ul = document.getElementById('answers');
  var li = document.createElement('li');
  if (math.evaluate(expression) == notd) {
    result = "True. Can you think of another?";
    li.innerHTML = expression + " = " + notd;
    ul.appendChild(li);
  }
  else {
    result = "Not yet. Why not?";
    li.innerHTML = expression + " ≠ " + notd;
    ul.appendChild(li);
  }
  document.getElementById('result').innerHTML = result;
}
