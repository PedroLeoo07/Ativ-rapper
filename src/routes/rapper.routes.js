import { Router } from "express"

const rapperRoutes = Router()


let rapper = [
    {
        id: Number(Math.floor (Math.random() *99) + 1),
        nome: "Eminem",
        idade: 51,
        ativSus: "Não",
        descFisica: "Cabelo curto com o tom meio escuro, 1.68 de altura, cor dos olhos são azuis tom de pele clara",
        
        nome: "Ice cube",
        idade: 55,
        ativSus: "Não",
        descFisica: "cabelo preto, 1.73 de altura, cor dos olhos são castanhos escuros, tom de pele escura",
        
        nome: "Snoop Dogg",
        idade: 52,
        ativSus: "Sim",
        descFisica: "cabelo preto, 1.83 de altura, cor dos olhos são castanhos escuros, tom de pele escura"
    }
]




// Rota para buscar todos os elementos do array rapper
rapperRoutes.get("/", (req, res) => {
    return res.status(201).send(rapper)
}) 


// Rota para cadastrar um novo rapper
rapperRoutes.post("/", (req, res) => {
    const {
        nome,
        idade,
        ativSus,
        descFisica
    } = req.body

    if(!nome || !idade || !ativSus || !descFisica){
        return res.status(404).send({
            message: "O suspeito não está entre os culpados",
        })
    }

    //Validação se ele é um suspeito
    if(ativSus != "sim" && ativSus != "não"){
        return res.status(404).send({
            message: "Digite sim ou não",
        })
    }

    const novoRapper = {
        id:  Number(Math.floor (Math.random() *99) + 1),
        nome,
        idade,
        ativSus,
        descFisica
    }
    rapper.push(novoRapper)
    return res.status(201).send({
        message: "Rapper cadastrado", novoRapper
    })
})

// Rota para buscar um elemento específico do array rapper
rapperRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    console.log(id)

    const filme = filme.find((movie) => movie.id === Number(id))

    console.log(filme)

    if (!filme) {
        return res.status(404).send({
            message: "Rapper não encontrado"
        })
    }
    return res.status(200).send(filme)
})

// Rota para editar um rapper suspeito
rapperRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    const filme = rapper.find((movie) => movie.id === Number(id))

    if (!filme) {
        return res.status(404).send({ message: "Planeta não encontrado" })
    }

    const { nome, temperatura, emCartaz } = req.body

    filme.nome = nome
    filme.temperatura = temperatura
    filme.emCartaz = emCartaz

    return res.status(200).send({ message: "Planeta atualizado", filme })
}
)

// Rota para deletar um Suspeito
rapperRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const filme = guloseimas.find((doce) => doce.id === Number(id))

    if (!filme) {
        return res.status(404).send({ message: "Planeta não encontrado" })
    }

    rapper = rapper.filter((movie) => movie.id === Number(id))

    return res.status(200).send({ message: "Planeta deletado!", filme })
})

export default rapperRoutes