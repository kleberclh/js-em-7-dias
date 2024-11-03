/*
1 -Criando o corpo do projeto em HTML
2 - Colocando um ID nos dois Inputs > num-one e num-two
3 - Criando os cheacks com as IDS > BOX1, BOX2, BOX3, BOX4
4 - Criando um botão com onclick="outcome()" outcome() é a função que vamos criar
5 - Inicia no JS criando uma function com o noem outcome
6 - Criando as 4 variaveis 
6.1 -   Let num1 = Number(document.getElementById("num-one").value);
        let num2 = Number(document.getElementById("num-two").value);

7 - As lets precisa pegar o a função (document.getElementById("num-one").value)
e passar o primeiro ID e depos fazer com a segunda variavel e passando o segundo ID

8 - Usando o  
 if (document.getElementById("box1").checked) total = num1 + num2;
  else if (document.getElementById("box2").checked) total = num1 - num2;
  else if (document.getElementById("box3").checked) total = num1 * num2;
  else total = num1 / num2;
9- No final com um h1 com a id resultado colocar o comando para aparecer o resultado no
html 
  document.getElementById("resultArea").innerHTML =
    "Resultado:" + String(total);
*/
