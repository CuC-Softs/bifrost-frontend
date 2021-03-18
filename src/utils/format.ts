// essa parada aqui serve pra fazer diversas formatações de preço, transformando números simples em
// strings com símbolos monetários, casas decimais de centavos, etc

// são passadas algumas opções para definir a localização, o tipo (moeda) e a moeda

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
