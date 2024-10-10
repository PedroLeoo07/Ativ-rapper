import { Router } from "express"

const rappersRoutes = Router()


let rappers = [
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
rappersRoutes.get("/", (req, res) => {
    return res.status(201).send(rappers)
}) 


// Rota para cadastrar um novo rapper
rappersRoutes.post("/", (req, res) => {
    const {
        nome, idade, ativSus, descFisica } = req.body

    if(!nome || !idade || !ativSus || !descFisica){
        return res.status(404).send({
            message: "O rapper não está entre os culpados",
        })
    }
    if(!ativSus != "sim" && ativSus != "não"){
        return res.status(404).send({
            message: "Digite sim ou não",
        })
    }

    if ((Number.isInteger(idade)) == false  ) {
        return res.status(400).send({
          message: "coloque um numero inteiro para idade!!",
        })
      }

    const novoRapper = {
        id:  Number(Math.floor (Math.random() *99) + 1),
        nome,
        idade,
        ativSus,
        descFisica
    }
    rappers.push(novoRapper)
    return res.status(201).send({
        message: "Rapper cadastrado", novoRapper,
    })
})

// Rota para buscar um elemento específico do array rapper
rappersRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    const rapper = rappers.find((rapper) => rapper.id == id)

    if (!rapper) {
        return res.status(404).send({
            message: "Rapper não encontrado"
        })
    }
    return res.status(200).send(rapper)
})

// Rota para editar um rapper suspeito
rappersRoutes.put("/:id", (req, res) => {
    const { id } = req.params
    const { nome, idade, ativSus, descFisica} = req.body
  
    // Busca um suspeito pelo id no array de suspeitos
    const rapper = rappers.find((rapper) => rapper.id == id)
  
    if (!nome || !idade || !ativSus ) {
      return res.status(400).json({
        message: "O campo nome, idade e atividade suspeita são obrigatórios!",
      });
    }
  //Validação se a idade do rapper é inteira
    if ((Number.isInteger(idade)) == false  ) {
      return res.status(400).send({
        message: "coloque um numero inteiro para idade!!",
      })
    }
    rapper.nome = nome
    rapper.idade = idade
    rapper.ativSus = ativSus
    rapper.descFisica = descFisica
  
    return res.status(200).send({
      message: "rapper atualizado com sucesso!", rapper
    })
  })

// Rota para deletar um rapper
rappersRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const rapper = rappers.find((rapper) => rapper.id === Number(id))

    if (!rapper) {
        return res.status(404).json({ message: "Rapper não encontrado" })
    }

    rappers = rappers.filter((rapper) => rapper.id != id)

    return res.status(200).send({ message: "Rapper removido!", rappers })
})

export default rappersRoutes