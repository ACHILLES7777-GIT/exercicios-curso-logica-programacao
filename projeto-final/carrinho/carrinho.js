// Função para carregar os itens do carrinho da memória (localStorage)
function loadCartItems() {
    // Recupera o carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');

    cartItemsDiv.innerHTML = ''; // Limpa a área de exibição antes de adicionar os itens

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    // Exibe os itens do carrinho
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Preço: R$${item.price}</p>
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
}
// splice remove um item da lista
const lista66 = [1,2,3,4];


lista66.splice(1,1)


const lista7 = [1,2,3];
lista7.forEach