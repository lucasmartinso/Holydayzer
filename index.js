import express from "express"; 
import cors from 'cors'; 

const app = express();  

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "16/06/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
]; 

app.get("/holidays", (request, response) => {
      response.send(holidays); 
});  

app.get("/is-today-holiday", (request,response) => {  
    const hoje = new Date().toLocaleDateString();  
    const feriado = holidays.find(day => day.date === hoje);   
    if(feriado.date === hoje) { 
        response.send(`Sim, hoje é ${feriado.name}`); 
        console.log(feriado.name);
    } else { 
        response.send("Não, hoje não é feriado");
    }
    
});

app.listen(4000);