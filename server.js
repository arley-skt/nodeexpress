//import http from "http";
import app from "./src/app.js";

const PORT = 3001;

// const rotas = {
//   "/": "Curso de Express API",
//   "/livros": "Entrei na rota livros",
//   "/autores": "Entrei na rota autores"
// };


app.listen(PORT, () => {
  if(1==1){
    console.log("servidor escutando! é verdadeiro true");
  }else
  {
    console.log("servidor escutando! é falso true");
  }
  
});
