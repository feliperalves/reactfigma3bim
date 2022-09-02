export interface ICard {
  dados: {
    id: number,
    nome: string,
    data: string,
    Título: string,
    Notícia: string,
    topico: {
      id: number,
      item: string
    }[]
  }
}
