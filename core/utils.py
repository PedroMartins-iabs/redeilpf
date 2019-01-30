
def remove_ponto_and_traco(variavel):
    variavel_no_ponto = variavel.replace(".", "")
    variavel_no_traco = variavel_no_ponto.replace("-", "")

    variavel = variavel_no_traco
    return variavel
