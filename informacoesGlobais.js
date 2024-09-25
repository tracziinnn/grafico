const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)
    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) *100)
    const porcentagemConectada = ((pessoasConectadas/pessoasMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Jhin lidera a lista com uma taxa de vitória notável de 29.4%, seguido por Kai'Sa e Ezreal, que apresentam 22.7% e 18.5%, respectivamente. Os outros campeões, como Jinx e Lee Sin, também apresentam taxas competitivas, todas acima de 15%. Esses dados refletem o desempenho atual dos campeões no jogo, indicando quais personagens estão se destacando nas partidas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()

