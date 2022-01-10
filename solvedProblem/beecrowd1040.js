let n = readline(),
  inputArr = n.split(" ").map((x) => +x),
  weightArr = [2, 3, 4, 1],
  weightTotal = 0,
  inputArrMulti = 1,
  inputArrPluse = [],
  resultArr = 0;
for (let i = 0; i < weightArr.length; i++) {
  weightTotal += weightArr[i];
  inputArrMulti = inputArr[i] * weightArr[i];
  inputArrPluse.push(inputArrMulti);
  resultArr += inputArrPluse[i];
}
let av = resultArr / weightTotal;
print("Media: " + av.toFixed(1));
if (7 <= av) {
  return print("Aluno aprovado.");
} else if (5 <= av && av < 7) {
  print("Aluno em exame.");
  let reExam = parseFloat(readline()),
    finalAV = (reExam + av) / 2;
  print("Nota do exame: " + reExam.toFixed(1));
  if (5 <= finalAV) {
    print("Aluno aprovado.");
  } else {
    print("Aluno reprovado.");
  }
  print("Media final: " + finalAV.toFixed(1));
} else {
  print("Aluno reprovado.");
}
